import styled from "styled-components"

export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
max-width: 375px;
img{
    width: 180px;
    height: 180px;
    margin: 68px auto 0px;
}
`
export const DataContainer = styled.div`
max-width: 303px;
margin: 32px auto 0px;
display: flex;
flex-direction: column;
input{
    width: 303px;
    height: 45px;
    margin-top: 6px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: #fff;
    font-size: 20px;
    font-family: Lexend Deca;
    ::placeholder{
        color: #dbdbdb;
    }
}
button{
    width: 303px;
    height:45px;
    background-color: #52b6ff;
    margin: 6px auto 0px;
    border-radius: 5px;
    border-style: none;
    color: #fff;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
}
`

export const TextContainer = styled.div`
display: flex;
justify-content: center;

h3{
    font-size: 14px;
    font-family: Lexend Deca;
    font-weight: 400;
    align-items: center;
    margin-top: 25px;
    color: #52b6ff;
}
`