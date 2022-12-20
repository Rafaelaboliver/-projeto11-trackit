import styled from "styled-components"

export default function DeleteConfirmation({ setDeleteBox, confirmationMessage}) {

    return (
        <>
            <Background />
            <ConfirmationBox>
                <h1>Deseja excluir esse hábito?</h1>

                <YNButtons>
                    <CancelButton onClick={() => setDeleteBox(false)}>Não</CancelButton>
                    <SaveButton onClick={() => confirmationMessage()}>Sim</SaveButton>
                </YNButtons>
            </ConfirmationBox>
        </>

    )

}

const Background = styled.div`
width: 100vw;
height: 100vh;
display: flex;
margin: auto;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
opacity: 0.7;
`
const ConfirmationBox = styled.div`
width: 250px;
height: 100px;
display: flex;
border-radius: 5px;
border-style: none;
flex-direction: column;
margin: auto;
background-color: #fff;
h1{
    margin: 10px auto 10px;
    font-family: Lexend Deca;
    font-size: 18px;
    color: #666;
}
`
const YNButtons = styled.div`
display: flex;
flex-direction: row;
margin: auto;
`
const CancelButton = styled.button`
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
const SaveButton = styled.button`
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