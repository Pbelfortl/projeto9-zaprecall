import { useState } from "react"
import styled from "styled-components"
import logo from "./assets/img/logo.png"
import QuestionCard from "./QuestionCard.js"


export default function RecallScreen() {

    const [questions, setQuestions] = useState()
    

    return (

        <QuestionsBox>
            <Logo>
                <img src={logo}></img>
                ZapRecall
            </Logo>
            <QuestionCard />
            <BottomBox>
                <RedButton></RedButton>
                <OrangeButton></OrangeButton>
                <GreenButton></GreenButton>
            </BottomBox>
        </QuestionsBox>
        
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

const QuestionsBox = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 637px;
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
`
const RedButton = styled.button`
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#FF3030;
    border:none;
    margin:5px;
`
const OrangeButton = styled.button`
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#FF922E;
    border:none;
    margin:5px;
`
const GreenButton = styled.button`
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#2FBE34;
    border:none;
    margin:5px;
`