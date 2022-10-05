import styled from "styled-components"
import questionAnswers from "./questionsAnswers"
import Cards from "./Cards"

export default function QuestionBox ({concluded, setConcluded, checkImg, setCheckImg}) {

    return (
        <CardBox>
            {questionAnswers.map((Q,I) => 
                (<Cards 
                    index={I}
                    concluded={concluded}
                    setConcluded={setConcluded}
                    question={Q.question}
                    answer={Q.answer}
                    number={Q.number}
                    checkImg={checkImg}
                    setCheckImg={setCheckImg}
                ></Cards>))}
        </CardBox>
    )

}


const CardBox = styled.div`
    height:425px;
    overflow-y:scroll;

`