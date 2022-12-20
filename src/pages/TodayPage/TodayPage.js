import Menu from "../../components/Menu/Menu";
import dayjs from "dayjs";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { MainContainer, HeaderToday, Loading, TextContainer, BoxToday, IconBox } from './todaypagecss';
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";

export default function TodayPage() {

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { token } = useContext(UserInfoContext);
    const [toDoList, setToDoList] = useState(undefined);
    const [isDone, setIsDone] = useState('');
    const [selection, setSelection] = useState([]);

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config, body);
        promise.then((res) => {
            console.log('SUCESSO AO RECEBER', res.data)
            setToDoList(res.data)
        });
        promise.catch((err) => {
            console.log('ERRO AO RECEBER A LISTA', err.response)
        });
    }, []);




    if (toDoList === undefined) {
        return <Loading> <img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    }

    function selectHabitDone(h) {
        console.log('h', h)
        const newSelection = [...selection, h.id];

        //se não incluir o dia, adicionar:
        if (!selection.includes(h.id)) {
            setSelection(newSelection);
        };

        if (selection.includes(h.id)) {
            setSelection(selection.filter((selec) => selec !== h.id));
        };

    };

    console.log('selction', selection)

    function handleFinished(h) {
        console.log('handleFinished', h);

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log('handleFinished SUCESS', res)
        });
        promise.catch((err) => console.log('handleFinished ERR', err));
    };

    function handleIncomplete(h) {
        console.log('handleIncomplete', h);

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log('handleFinished', res)
        });
        promise.catch((err) => console.log('handleFinished err', err));
    };


    return (
        <MainContainer>
            <Navbar />

            <HeaderToday>
                <h1>
                    {`${daysOfWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`}
                </h1>

                <h3>Nenhum hábito concluído ainda</h3>
            </HeaderToday>


            {toDoList.map(h => (
                <BoxToday>
                    <TextContainer>
                        <h1>{h.name}</h1>
                        <p>
                            {`Sequência atual: ${h.currentSequence} dias`}
                        </p>
                        <p>
                            {`Seu recorde: ${h.highestSequence} dias`}
                        </p>
                    </TextContainer>

                    <IconBox>
                        <button 
                        onClick={() => selectHabitDone(h)}
                        className={selection.includes(h.id) ? 'done' : ''}
                        >
                            <ion-icon name="checkmark-outline" ></ion-icon>
                        </button>
                        
                    </IconBox>

                </BoxToday>
            ))}

            <Menu />
        </MainContainer>
    );
}
