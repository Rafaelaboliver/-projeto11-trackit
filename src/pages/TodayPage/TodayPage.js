import Menu from "../../components/Menu/Menu";
import dayjs from "dayjs";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { MainContainer, HeaderToday, Loading } from './todaypagecss';
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { useNavigate } from 'react-router-dom';
import BoxHabitToday from "../../components/BoxHabitToday.js/BoxHabitToday";



export default function TodayPage() {

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { token, toDoList, setToDoList, percentage } = useContext(UserInfoContext);
    const [totalDone, setTotalDone] = useState(0);
    const [getListToday, setGetListToday]= useState([]);
    const navigate = useNavigate();

    console.log('TOKEN:', token);


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
            setGetListToday(res.data);

        });

        promise.catch((err) => {
            console.log('ERRO AO RECEBER A LISTA', err.response);
            const errMessage = (err.response.status)

            if (errMessage === 422) {
                (alert('Sessão expirada, faça login novamente'));
                navigate('/');
            };
        });
    }, []);


    if (getListToday === undefined) {
        return <Loading> <img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    };

    return (
        <MainContainer>
            <Navbar />

            <HeaderToday>

                <h1 data-tes='today'>
                    {`${daysOfWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`}
                </h1>

                {!percentage > 0 ? (
                    <h3 data-tes='today-counter'>Nenhum hábito concluído ainda</h3>
                ) : (
                    <h3 data-tes='today-counter'>`${percentage}% dos hábitos concluídos`</h3>
                )}

            </HeaderToday>


            {getListToday.map(habit => (
                <BoxHabitToday
                    key={habit.id}
                    habit={habit}
                    setGetListToday={setGetListToday}

                />
            ))}

            <Menu />
        </MainContainer>
    );
}
