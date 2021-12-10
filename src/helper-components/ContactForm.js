import React from "react"
import { ValidationError } from "@formspree/react"

import Title from "./Title"

export default function ContactForm({ title, submit, handleSubmit }) {
  if (submit.succeeded) {
    return (
      <div className="success-msg">
        <h3>Thanks for your submission!</h3>
      </div>
    )
  }

  return (
    <div className="contact-form-container">
      <Title title={title} />
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="Email..." />
        <ValidationError prefix="Email" field="email" errors={submit.errors} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Message..." />
        <ValidationError
          prefix="Message"
          field="message"
          errors={submit.errors}
        />

        <button type="submit" disabled={submit.submitting}>
          Submit
        </button>
        <ValidationError className="validator" errors={submit.errors} />
      </form>
    </div>
  )
}
