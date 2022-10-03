import styled from "styled-components"
import questionAnswers from "./questionsAnswers"
import Cards from "./Cards"

export default function QuestionBox ({concluded, setConcluded}) {

    return (
        <CardBox>
            {questionAnswers.map((Q,I) => 
                (<Cards 
                    key={I}
                    concluded={concluded}
                    setConcluded={setConcluded}
                    question={Q.question}
                    answer={Q.answer}
                    number={Q.number}
                ></Cards>))}
        </CardBox>
    )

}


const CardBox = styled.div`
    height:425px;
    overflow-y:scroll;

`