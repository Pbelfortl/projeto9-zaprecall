import styled from "styled-components"
import seta from "./assets/img/seta_play.png"
import setaTurn from "./assets/img/seta_virar.png"
import { useState } from "react"

export default function Cards ({question, answer, number}) {

    const [cardInfo, setCardInfo] = useState(number)
    const [image, setImage] = useState(seta)

    return (
        <Card onClick={()=> turnCard()} cardInfo={cardInfo} number={number} answer={answer}>
            {cardInfo}
            <ImgBox onClick={()=> showAnswer()}><img  src={image} /></ImgBox>
            <ButtonBox cardInfo={cardInfo} answer={answer}>
                <RedButton></RedButton>
                <OrangeButton></OrangeButton>
                <GreenButton></GreenButton>
            </ButtonBox>
        </Card>
    )

    function turnCard () {
        if(cardInfo===number){
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

}

const ImgBox = styled.div `
    width:25px;
`

const Card = styled.div`
    box-sizing: border-box;
    background-color:${props=>(props.cardInfo!==props.number)?'#FFFFD4':'white'};
    color:#333333;
    display:flex;
    width:300px;
    height:${props=>(props.cardInfo!==props.number)?'130px':'65px'};
    margin: 20px;
    border-radius:5px;
    align-items:center;
    flex-direction:${props=>(props.cardInfo===props.answer)?'column':'flex'};
    justify-content:${props=>(props.cardInfo===props.answer)?'space-around':'space-between'};
    padding:20px;
    font-family: 'Recursive', cursive;
    font-weight:700;
    font-size:16px;
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
    
`
const RedButton = styled.button`
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#FF3030;
    border:none;
`
const OrangeButton = styled.button`
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#FF922E;
    border:none;
`
const GreenButton = styled.button`
    width:85px;
    height:37px;
    border-radius:5px;
    background-color:#2FBE34;
    border:none;
`