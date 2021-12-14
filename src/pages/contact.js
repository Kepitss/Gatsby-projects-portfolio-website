import React from "react"
import { useForm } from "@formspree/react"

import ContactForm from "../helper-components/ContactForm"
import Seo from "../helper-components/Seo"

const Contact = () => {
  const [submit, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM)
  return (
    <>
      <Seo title="Contact" />
      <ContactForm
        title="contact us"
        submit={submit}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Contact
