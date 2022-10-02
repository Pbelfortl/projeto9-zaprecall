import styled from "styled-components"
import questionAnswers from "./questionsAnswers"
import Cards from "./Cards"
import { useState } from "react"

export default function QuestionCard () {

    return (
        <CardBox>
            {questionAnswers.map((Q) => 
                (<Cards 
                    question={Q.question}
                    answer={Q.answer}
                    number={Q.number}
                ></Cards>))}
        </CardBox>
    )

}


const CardBox = styled.div`
    height:375px;
    overflow-y:scroll;

`