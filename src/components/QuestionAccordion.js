import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"

import Title from "../components/Title"

const QuestionAccordion = () => {
  const data = useStaticQuery(graphql`
    {
      strapiAboutUs {
        AboutUsQuestions {
          question
          question_answer
          id
        }
      }
    }
  `)
  const { AboutUsQuestions } = data.strapiAboutUs
  console.log(AboutUsQuestions)
  return (
    <>
      <Title title="frequently asked questions" />
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
