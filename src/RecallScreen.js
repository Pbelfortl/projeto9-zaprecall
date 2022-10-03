import { useState } from "react"
import styled from "styled-components"
import logo from "./assets/img/logo.png"
import QuestionBox from "./QuestionBox.js"
import questionsAnswers from "./questionsAnswers"


export default function RecallScreen() {

    const [concluded, setConcluded] = useState(0)
    
    return (

        <Container>
            <Logo>
                <img src={logo} alt=''></img>
                ZapRecall
            </Logo>
            <QuestionBox concluded={concluded} setConcluded={setConcluded} />
            <BottomBox>
                {concluded}/{questionsAnswers.length} Concluídos
            </BottomBox>
        </Container>
        
    )
}

const Logo = styled.div`
    font-family: 'Righteous';
    font-size:36px;
    color: white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;

    img{
        width:52px;
        height:60px;
        margin-right:20px;
   }
`

const Container = styled.div`
    box-sizing: border-box;
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    display:flex;
    justify-content:space-between;
    padding-top: 30px;
    align-items:center;
`
const BottomBox= styled.div`
    height:111px;
    width: 373px;
    background-color:white;
    border: solid 1px #FB6B6B;
    justify-content:center;
    display:flex;
    align-items:center;
    font-family: 'Recursive', cursive;
    font-size: 18px;
`
