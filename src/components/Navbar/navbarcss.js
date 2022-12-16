import styled from "styled-components";

export const Header = styled.div`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
justify-content: space-between;
background-color: #126ba5;
position: sticky;
top: 0;
padding: 0px 20px 0px;
flex-direction: row;
align-items: center;
max-width: 375px;
display: flex;
margin: 0 auto;
height: 70px;
p{
    font-family: Playball;
    font-weight: 400;
    font-size: 39px;
    color: #fff;
}

img{
   width: 51px;
   height: 51px;
   border-radius: 30px;
}
`