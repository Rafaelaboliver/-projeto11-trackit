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
                            {`Sequência atual: ${h.currentSequence}`}
                        </p>
                        <p>
                            {`Seu recorde: ${h.highestSequence}`}
                        </p>
                    </TextContainer>

                    <IconBox>
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </IconBox>

                </BoxToday>
            ))}

            <Menu />
        </MainContainer>
    );
}
