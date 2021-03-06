import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { FormSubscribe, EmailInput, SubmitInput, SuccessModal } from "./style"

const BlogSubscribeButton = () => {
  const [result, setResult] = useState("")
  const [email, setEmail] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(({ msg, result }) => {
        setResult(result)
        if (result !== "success") {
          throw msg
        }
        setSuccessMsg(msg)
      })
      .then(() => {
        setTimeout(() => cleanInput(), 3000)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  const cleanInput = () => {
    setEmail("")
    setSuccessMsg("")
  }

  return (
    <>
      {result === "success" ? <SuccessModal>{successMsg}</SuccessModal> : null}

      <FormSubscribe onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={handleEmail}
        />
        <SubmitInput type="submit" value="Subscribe" />
      </FormSubscribe>
    </>
  )
}

export default BlogSubscribeButton
