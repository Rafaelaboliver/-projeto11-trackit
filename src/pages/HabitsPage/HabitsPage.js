import { HabitsContainer, NewHabit, HabitBox, WeekdaysButton, EndButtons, CancelButton, SaveButton, NoHabitMessage } from './habitspagecss';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar';
import { weekdays } from '../../constants/weekdays'
import { useState } from 'react';

export default function HabitsPage() {

    const [habit, setHabit] = useState('');
    const [displayBox, setDisplayBox] = useState(true);
    const [initialMessage, setInitialMessage] = useState(false);

    function createNewHabit () {
        setInitialMessage(true);
    }

    return (
        <>
            <Navbar />
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

                                    <button key={d.id}>{d.display}</button>

                                ))}
                            </WeekdaysButton>

                            <EndButtons>
                                <CancelButton onClick={() => setDisplayBox(true)}>Cancelar</CancelButton>
                                <SaveButton type='submit'>Salvar</SaveButton>
                            </EndButtons>
                        </HabitBox>
                    </form>
                ) : null}


                {!initialMessage ? (
                    <NoHabitMessage>
                    <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                </NoHabitMessage>
                ) : null}
                

                <Menu />
            </HabitsContainer>


        </>
    )


}
