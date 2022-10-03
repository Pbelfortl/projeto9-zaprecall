import logo from "./assets/img/logo.png"
import styled from "styled-components"
import { useState } from "react"

export default function Start() {

    let [show, setShow] = useState('flex')

    return (

        <HomeScreen show={show}>
            <img src={logo} alt="Logo" />
            ZapRecall
            <button data-identifier="start-btn" onClick={() => setShow('none')}>Iniciar Recall!</button>
        </HomeScreen>
    )
}

const HomeScreen = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    display: ${props => props.show};
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
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    }

    img {
        display: flex;
        align-items: center;
        margin: 30px;
    }
`;
