import { HabitsContainer, NewHabit, HabitBox, WeekdaysButton, EndButtons, CancelButton, SaveButton, NoHabitMessage, ToDoHabits, HabitListHeader, Loading, ConfirmationBox, YNButtons, MainContainer } from './habitspagecss';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import { weekdays } from '../../constants/weekdays'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { UserInfoContext } from '../../contexts/UserInfoContext'
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';



export default function HabitsPage() {

    const [habit, setHabit] = useState('');
    const [selection, setSelection] = useState([]);
    const [displayBox, setDisplayBox] = useState(true);
    const [initialMessage, setInitialMessage] = useState([]);
    const [habitList, setHabitList] = useState(undefined);
    const [deleteBox, setDeleteBox] = useState(true);
    const [container, setContainer] = useState(false);
    const [idSaved, setIdSaved] = useState('');
    const [getListHabit, setGetListHabit] = useState([]);
    const navigate = useNavigate();

    const { token } = useContext(UserInfoContext);


    console.log('TOKEN:', token);

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
            setInitialMessage(res.data);
            setHabitList(res.data);
            setGetListHabit(res.data);
            navigate('/habitos');
        });
        promise.catch((err) => {
            console.log('ERRO AO RECEBER A LISTA', err.response);
            const errMessage = (err.response.status);
            console.log('erro', errMessage);

            if (errMessage === 422) {
                (alert('Sess??o expirada, fa??a login novamente'));
                navigate('/');
            };
        });



    }, []);


    if (habitList === undefined) {
        return <Loading> <img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    }


    function createNewHabit(e) {

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
            setSelection([]);
            setHabit('');
            const success = (res.status)

            if (success === 201) {
                alert('H??bito criado!')
            }

        });
        promise.catch((err) => console.log('POST catch', err));

        setDisplayBox(true);

    };

    function selectingDays(days) {
        const newSelection = [...selection, days.id]
        //se n??o incluir o dia, adicionar:
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
                const success = (res.status)

                console.log('detetado', res)

                if (success === 204) {
                    alert('H??bito deletado com sucesso!');
                    navigate('/habitos');
                }

            });
            promise.catch((err) => {
                alert('Erro ao deletar h??bito, tente novamente!');
                navigate('/habitos');
            });

            setContainer(false);
            setDeleteBox(true);
        }
    }




    return (
        <MainContainer>
            <Navbar />
            {container === false ? (

                <HabitsContainer>
                    <NewHabit>
                        <h2>Meus h??bitos</h2>
                        <button
                            onClick={() => setDisplayBox(false)}
                            data-tes='habit-create-btn'
                        >
                            +
                        </button>
                    </NewHabit>

                    {!displayBox ? (
                        <form onSubmit={createNewHabit}>
                            <HabitBox data-tes='habit-create-container'>
                                <input
                                    id='habit'
                                    type='text'
                                    value={habit}
                                    onChange={e => setHabit(e.target.value)}
                                    placeholder='nome do h??bito'
                                    data-tes='habit-name-input'
                                    required
                                />


                                <WeekdaysButton>
                                    {weekdays.map(d => (

                                        <button
                                            key={d.id}
                                            type='button'
                                            onClick={() => selectingDays(d)}
                                            className={selection.includes(d.id) ? 'selected' : ''}
                                            data-tes='habit-day'
                                        >
                                            {d.display}
                                        </button>

                                    ))}
                                </WeekdaysButton>

                                <EndButtons>
                                    <CancelButton
                                        onClick={() => setDisplayBox(true)}
                                        data-tes='email-input'
                                    >
                                        Cancelar
                                    </CancelButton>

                                    <SaveButton
                                        type='submit'
                                        data-tes='habit-create-save-btn'
                                    >
                                        Salvar
                                    </SaveButton>
                                </EndButtons>
                            </HabitBox>
                        </form>
                    ) : null}


                    {initialMessage.length === 0 ? (
                        <NoHabitMessage>
                            <p>
                                Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!
                            </p>
                        </NoHabitMessage>
                    ) : (null)}


                    {getListHabit.map(h => (
                        <ToDoHabits data-tes='habit-container'>

                            <HabitListHeader key={h.id} data-tes='habit-name'>
                                <h1>{h.name}</h1>

                                <ion-icon 
                                name="trash-outline" 
                                onClick={() => confirmationMessage(h.id)}
                                data-tes='habit-delete-btn'
                                ></ion-icon>
                            </HabitListHeader>


                            <WeekdaysButton>
                                {weekdays.map(d => (

                                    <button
                                        key={d.id}
                                        disabled
                                        className={h.days.includes(d.id) ? 'selected' : ''}
                                        data-tes='habit-day'
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
                    <h1>Deseja excluir esse h??bito?</h1>

                    <YNButtons>
                        <CancelButton onClick={(text) => handleDelete('cancel')}>N??o</CancelButton>
                        <SaveButton onClick={(text) => handleDelete('confirm')}>Sim</SaveButton>
                    </YNButtons>
                </ConfirmationBox>
            ) : (null)}

        </MainContainer>
    )


}
