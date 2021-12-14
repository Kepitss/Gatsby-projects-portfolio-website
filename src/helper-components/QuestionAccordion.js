import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"

import Title from "./Title"

const QuestionAccordion = ({ title, AboutUsQuestions }) => {
  return (
    <>
      <Title title={title} />
      <Accordion allowZeroExpanded>
        {AboutUsQuestions.map(item => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.question_answer}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default QuestionAccordion
