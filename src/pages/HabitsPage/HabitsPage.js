import { HabitsContainer, NewHabit, HabitBox, WeekdaysButton, EndButtons, CancelButton, SaveButton, NoHabitMessage, ToDoHabits, HabitListHeader, Loading, ConfirmationBox, YNButtons, MainContainer } from './habitspagecss';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import { weekdays } from '../../constants/weekdays'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { UserInfoContext } from '../../contexts/UserInfoContext'
import { ThreeDots } from 'react-loader-spinner';

export default function HabitsPage() {

    const [habit, setHabit] = useState('');
    const [selection, setSelection] = useState([]);
    const [displayBox, setDisplayBox] = useState(true);
    const [initialMessage, setInitialMessage] = useState([]);
    const [habitList, setHabitList] = useState(undefined);
    const { token } = useContext(UserInfoContext);
    const [deleteBox, setDeleteBox] = useState(true);
    const [container, setContainer] = useState(false);
    const [animation, setAnimation] = useState('');
    const [idSaved, setIdSaved] = useState('');


    console.log('token:', token)

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config, body);
        promise.then((res) => {
            setInitialMessage(res.data)
            setHabitList(res.data)
        });
        promise.catch((err) => {
            console.log('ERRO AO RECEBER A LISTA', err.response)
        });
    }, []);


    if (habitList === undefined) {
        return <Loading> <img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    }


    function createNewHabit(e) {

        setAnimation(<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />);
        
        e.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const body = { name: habit, days: selection };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log('POST then', res)
            setSelection([])
            setHabit('')
        });
        promise.catch((err) => console.log('POST catch', err));

        setDisplayBox(true);
       
    };

    function selectingDays(days) {
        const newSelection = [...selection, days.id]
        //se não incluir o dia, adicionar:
        if (!selection.includes(days.id)) {
            setSelection(newSelection);
        };

        //se o dia estiver, caso clicado novamente, remover:
        if (selection.includes(days.id)) {
            setSelection(selection.filter((selec) => selec !== days.id));
        };

    };

    function confirmationMessage(id) {

        setContainer(true);
        setDeleteBox(false);
        setIdSaved(id);
    }

    function handleDelete(text) {

        console.log('text:', text);

        if (text === 'cancel') {
            setContainer(false);
            setDeleteBox(true);
        } else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idSaved}`;
            const body = {};
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };


            const promise = axios.delete(URL, config, body);
            promise.then((res) => {
                alert('Hábito deletado com sucesso!')
            });
            promise.catch((err) => {
                alert('Erro ao deletar hábito, tente novamente!')
            });

            setContainer(false);
            setDeleteBox(true);
        }
    }

    function cancelDelete() {
        setContainer(false);
        setDeleteBox(true);
    }


    return (
        <MainContainer>
            <Navbar />
            {container === false ? (

                <HabitsContainer>
                    <NewHabit>
                        <h2>Meus hábitos</h2>
                        <button onClick={() => setDisplayBox(false)}>+</button>
                    </NewHabit>

                    {!displayBox ? (
                        <form onSubmit={createNewHabit}>
                            <HabitBox>
                                <input
                                    id='habit'
                                    type='text'
                                    value={habit}
                                    onChange={e => setHabit(e.target.value)}
                                    placeholder='nome do hábito'
                                    required
                                />


                                <WeekdaysButton>
                                    {weekdays.map(d => (

                                        <button
                                            key={d.id}
                                            type='button'
                                            onClick={() => selectingDays(d)}
                                            className={selection.includes(d.id) ? 'selected' : ''}
                                        >
                                            {d.display}
                                        </button>

                                    ))}
                                </WeekdaysButton>

                                <EndButtons>
                                    <CancelButton onClick={() => setDisplayBox(true)}>Cancelar</CancelButton>
                                    <SaveButton type='submit'>Salvar</SaveButton>
                                </EndButtons>
                            </HabitBox>
                        </form>
                    ) : null}


                    {initialMessage.length === 0 ? (
                        <NoHabitMessage>
                            <p>
                                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                            </p>
                        </NoHabitMessage>
                    ) : (null)}


                    {habitList.map(h => (
                        <ToDoHabits>

                            <HabitListHeader key={h.id}>
                                <h1>{h.name}</h1>
                                <ion-icon name="trash-outline" onClick={() => confirmationMessage(h.id)}></ion-icon>
                            </HabitListHeader>


                            <WeekdaysButton>
                                {weekdays.map(d => (

                                    <button
                                        key={d.id}
                                        disabled
                                        className={h.days.includes(d.id) ? 'selected' : ''}
                                    >
                                        {d.display}
                                    </button>


                                ))}
                            </WeekdaysButton>


                        </ToDoHabits>
                    ))
                    }


                </HabitsContainer>
            ) : (null)}

            < Menu />

            {deleteBox === false ? (
                <ConfirmationBox>
                    <h1>Deseja excluir esse hábito?</h1>

                    <YNButtons>
                        <CancelButton onClick={(text) => handleDelete('cancel')}>Não</CancelButton>
                        <SaveButton onClick={(text) => handleDelete('confirm')}>Sim</SaveButton>
                    </YNButtons>
                </ConfirmationBox>
            ) : (null)}

        </MainContainer>
    )


}
