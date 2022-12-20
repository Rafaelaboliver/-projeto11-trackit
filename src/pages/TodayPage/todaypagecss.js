import styled from "styled-components";

export const MainContainer = styled.div `
width: 375px;
height: 100em;
display: flex;
flex-direction: column;
margin: auto;
background-color: #e5e5e5;
`

export const HeaderToday = styled.div`
width: 375px;
display: flex;
flex-direction: column;
h1{
    font-family: Lexend Deca;
    font-size: 23px;
    color: #126ba5;
    margin-left: 17px;
    margin-top: 28px ;
}
h3{
    font-family: Lexend Deca;
    font-size: 18px;
    color: #666;
    margin-left: 17px;
    margin-top: 5px;
}
`
export const Loading = styled.div`
margin: 0 auto;
width: 800px;
height: 800px;
`

export const BoxToday = styled.div`
width: 340px;
height: 95px;
align-items: center;
justify-content: space-between;
padding: 0px 20px 0px;
background-color: #fff;
border-radius: 5px;
display: flex;
flex-direction: row;
margin: 28px auto 0px;
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
h1{
    font-size: 20px;
    color: #666;
    margin-bottom: 7px;
    font-family: Lexend Deca;
}
p{
    font-size: 13px;
    color: #666;
    font-family: Lexend Deca;
}
`
export const Current = styled.span`
color: ${({habit}) => (habit.done === true? '#8fc549' : '#666')};
`
export const Record = styled.span`
color: ${({habit}) => (habit.done === true? '#8fc549' : '#666')};
`


export const IconBox = styled.div`
width: 69px;
height: 69px;
border-radius: 5px;
button{
    border-radius: 5px;
    border-style: none;
    background-color: ${({habit}) => habit.done === true? '#8fc549' : '#ebebeb'};
}
ion-icon{
    display: flex;
    color: #fff;
    font-size: 70px;
    margin: auto;
}

`
