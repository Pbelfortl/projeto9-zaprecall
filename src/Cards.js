import styled from "styled-components"
import seta from "./assets/img/seta_play.png"
import setaTurn from "./assets/img/seta_virar.png"
import iconeCerto from "./assets/img/icone_certo.png"
import iconeQuase from "./assets/img/icone_quase.png"
import iconeErro from "./assets/img/icone_erro.png"
import { useState } from "react"

export default function Cards ({question, answer, number, concluded, setConcluded}) {

    const [cardInfo, setCardInfo] = useState(number)
    const [image, setImage] = useState(seta)
    const [color, setColor] = useState("#333333")

    return (
        <Card onClick={()=> turnCard()} cardInfo={cardInfo} number={number} answer={answer} color={color} data-identifier="flashcard">
            {cardInfo}
            <ImgBox onClick={()=> showAnswer()} data-identifier="flashcard-turn-btn"><img src={image} alt={''}/></ImgBox>
            <ButtonBox cardInfo={cardInfo} answer={answer}>
                <RedButton onClick={()=>missed()} data-identifier="forgot-btn">Não lembrei!</RedButton>
                <OrangeButton onClick={()=>almost()} data-identifier="almost-forgot-btn">Quase não lembrei</OrangeButton>
                <GreenButton onClick={()=>zapped()} data-identifier="zap-btn">Zap!</GreenButton>
            </ButtonBox>
        </Card>
    )

    function turnCard () {
        if(cardInfo===number && image===seta){
            setCardInfo(question)
            setImage(setaTurn)
        }
    }

    function showAnswer () {
        if(image===setaTurn){
            setCardInfo(answer)
            setImage()
        }
    }

    function zapped () {
        if(image!==iconeCerto){
            setCardInfo(number)
            setImage(iconeCerto)
            setColor("#2FBE34")
            setConcluded(concluded+1)            
        }
    }

    function almost () {
        if(image!==iconeQuase){
            setCardInfo(number)
            setImage(iconeQuase)
            setColor("#FF922E")
            setConcluded(concluded+1)
        }
    }

    function missed () {
        if(image!==iconeErro){
            setCardInfo(number)
            setImage(iconeErro)
            setColor("#FF3030")
            setConcluded(concluded+1)
        }
    }

}

const ImgBox = styled.div `
    width:25px;
`

const Card = styled.div`
    box-sizing: border-box;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    background-color:${props=>(props.cardInfo!==props.number)?'#FFFFD4':'white'};
    color:${props => props.color};
    display:flex;
    width:300px;
    min-height:${props=>(props.cardInfo!==props.number)?'130px':'65px'};
    margin: 20px;
    border-radius:5px;
    align-items:center;
    flex-direction:${props=>(props.cardInfo===props.answer)?'column':'flex'};
    justify-content:${props=>(props.cardInfo===props.answer)?'space-around':'space-between'};
    padding:15px;
    font-family: 'Recursive', cursive;
    font-weight:700;
    font-size:16px;
    text-decoration: ${props => (props.color !== "#333333") ? 'line-through': 'none'} ;
    &:hover {
        cursor: pointer;
    }
    img {
        width:25px
    }
`
const ButtonBox = styled.div`
    display:${props => (props.cardInfo===props.answer)?'flex':'none'};
    box-sizing: border-box;
    width:300;
    justify-content:space-between;
    
`
const RedButton = styled.button`
    color:white;
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#FF3030;
    border:none;
    font-family: 'Recursive', cursive;
    margin-left: 5px;
    margin-right:5px;
    &:hover {
        cursor: pointer;
    }
`
const OrangeButton = styled.button`
    color:white;
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#FF922E;
    border:none;
    font-family: 'Recursive', cursive;
    margin-left: 5px;
    margin-right:5px;
    &:hover {
        cursor: pointer;
    }
`
const GreenButton = styled.button`
    color:white;
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#2FBE34;
    border:none;
    font-family: 'Recursive', cursive;
    margin-left: 5px;
    margin-right:5px;
    &:hover {
        cursor: pointer;
    }
`