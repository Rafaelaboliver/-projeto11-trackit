import { BoxToday, TextContainer, IconBox, Current, Record } from '../../pages/TodayPage/todaypagecss'
import { useState, useContext, useEffect } from 'react'
import { UserInfoContext } from "../../contexts/UserInfoContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BoxHabitToday({ habit, setGetListToday }) {


    const [selected, setSelected] = useState(habit.done);
    const { token } = useContext(UserInfoContext);
    const { navigate } = useNavigate();
    const [habitsClicked, setHabitsClicked] = ([]);

    console.log('TOKEN:', token);


    function handleClicked(id) {

        console.log('RECEIVING ID:', habit.done)
        if (habit.done === true) {
            console.log('habito unchecked', habit);
            handleIncomplete(id);

        } else {
            console.log('habito check', habit);
            handleFinished(id)
        }
    };

    function handleFinished(id) {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log('handleFinished SUCCESS', res);
            setSelected(!selected);

            //navigate('/today');
        });
        promise.catch((err) => console.log('handleFinished ERR', err));
    };

    function handleIncomplete(id) {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log('handleIncomplete SUCCESS', res);
            setSelected(!selected);
            //navigate('/today');
        });
        promise.catch((err) => console.log('handleIncomplete ERR', err));
    };


    return (
        <BoxToday
            key={habit.id}
            data-tes='today-habit-container'
        >

            <TextContainer>
                <h1 data-tes='today-habit-name'>{habit.name}</h1>
                <p data-tes='today-habit-sequence'>Sequência atual: <Current habit={habit}>{habit.currentSequence} dias</Current></p>
                <p data-tes='today-habit-record'>Seu recorde: <Record habit={habit}>{habit.highestSequence} dias</Record></p>
            </TextContainer>

            <IconBox habit={habit}>
                <button
                    habit={habit}
                    onClick={() => handleClicked(habit.id)}
                    data-tes='today-habit-check-btn'
                >
                    <ion-icon name="checkmark-outline" ></ion-icon>
                </button>

            </IconBox>

        </BoxToday>

    )
}