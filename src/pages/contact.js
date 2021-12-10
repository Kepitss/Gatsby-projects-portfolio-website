import React from "react"
import { useForm } from "@formspree/react"

import ContactForm from "../helper-components/ContactForm"

const Contact = () => {
  const [submit, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM)
  return (
    <>
      <ContactForm
        title="contact us"
        submit={submit}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Contact
