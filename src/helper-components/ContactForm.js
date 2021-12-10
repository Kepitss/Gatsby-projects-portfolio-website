import React from "react"
import { useForm, ValidationError } from "@formspree/react"

import Title from "./Title"

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM)

  if (state.succeeded) {
    return (
      <div className="success-msg">
        <h3>Thanks for your submission!</h3>
      </div>
    )
  }

  return (
    <div className="contact-form-container">
      <Title title="contact us" />
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="Email..." />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Message..." />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError className="validator" errors={state.errors} />
      </form>
    </div>
  )
}
