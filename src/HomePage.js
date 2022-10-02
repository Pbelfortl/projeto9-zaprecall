import logo from "./assets/img/logo.png"
import styled from "styled-components"

let mostrar = 'none'
export default function Start() {

    return (

        <HomeScreen>
            <img src={logo} alt="Logo" />
            ZapRecall
            <button onClick={() => changeShow()}>Iniciar Recall!</button>
        </HomeScreen>
    )

    function changeShow () {
        mostrar = 'none'
        console.log(mostrar)
    }
}

const HomeScreen = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    display: ${mostrar};
    flex-direction: column;
    justify-content:center;
    align-items: center;
    font-family: 'Righteous';
    font-size: 36px;
    color:white;
    position: absolute;

    button {
        width: 246px;
        height: 56px;
        background-color: white;
        color: #FB6B6B;
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        margin: 30px;
        font-size:18px;
        font-weight:400;
        color:#D70900;
        cursor:pointer;
        font-family: 'Recursive', cursive;
        border:none;
    }

    img {
        display: flex;
        align-items: center;
        margin: 30px;
    }
`;
