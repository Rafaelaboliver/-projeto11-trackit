import styled from "styled-components";

export const HabitsContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
max-width: 375px;
height: 100em;
background-color: #e5e5e5;
img{
    width: 180px;
    height: 180px;
    margin: 68px auto 0px;
}
`
export const NewHabit = styled.div`
max-width: 375px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0px 20px 0px;
align-items: center;
margin-top: 30px;
text-align: center;
h2{
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 22px;
    color: #126ba5;
}
button{
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52b6ff;
    border-style: none;
    color: #fff;
    font-size: 27px;
    align-items: center;
    padding: 0px 0px 8px;
    font-family: Lexend Deca;
}
`
export const HabitBox = styled.div`
width: 340px;
height: 180px;
border-radius: 5px;
margin: 22px auto 0px;
background-color: #fff;
input{
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: #fff;
    font-family: Lexend Deca;
    border: 1px solid #d4d4d4;
    margin: 18px 18px 0px;
    ::placeholder{
        color: #dbdbdb;
        font-family: Lexend Deca;
        font-size: 20px;
    }
}
`
export const WeekdaysButton = styled.div`
width: 303px;
margin: 10px auto 0px;
height: 30px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
button{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #d4d4d4;
    font-family: Lexend Deca;
    font-size: 20px;
    color: #dbdbdb;
}
.selected{
    background-color: #cfcfcf;
    border: 1px solid #cfcfcf;
    color: #fff;
}
`
export const Loading = styled.div`
margin: 0 auto;
width: 800px;
height: 800px;
`

export const EndButtons = styled.div`
width: 303px;
height: 35px;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 30px auto 0px;
`

export const CancelButton = styled.button`
width: 84px;
height: 35px;
background-color: #fff;
border-radius: 5px;
border-style: none;
align-items: center;
justify-content: center;
color: #52b6ff;
font-family: Lexend Deca;
font-weight: 400;
font-size: 16px;

`
export const SaveButton = styled.button`
width: 84px;
height: 35px;
background-color: #52b6ff;
border-radius: 5px;
border-style: none;
align-items: center;
justify-content: center;
margin-left: 15px;
color: #fff;
font-family: Lexend Deca;
font-weight: 400;
font-size: 16px;

`
export const NoHabitMessage = styled.div`
width: 338px;
height: 75px;
margin: 29px auto 0px;
p{
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
;
}
`

export const ToDoHabits = styled.div`
width: 340px;
height: 105px;
background-color: #fff;
border-radius: 5px;
margin: 22px auto 0px;
border-style: none;
display: flex;
flex-direction: column;
h1{
    font-family: Lexend Deca;
    font-size: 20px;
    color: #666;
    margin-left: 25px;
    margin-top: 13px;
}
`

export const HabitListHeader = styled.div`
padding-right: 10px;
width: 340px;
color: #666;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const ConfirmationBox = styled.div `
width: 250px;
height: 100px;
display: flex;
border-radius: 5px;
border-style: none;
flex-direction: column;
margin: 200px auto 0px;
background-color: #fff;
h1{
    margin: 10px auto 10px;
    font-family: Lexend Deca;
    font-size: 18px;
    color: #666;
}
`
export const YNButtons = styled.div `
display: flex;
flex-direction: row;
margin: auto;
`
export const MainContainer = styled.div `
width: 375px;
height: 100em;
display: flex;
flex-direction: column;
margin: auto;
background-color: #e5e5e5;
`