import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css' // Import the CSS file

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_60fgdvi',
        'template_5z2uvjf',
        form.current,
        'U31Vbx_X8kr_9Drpz',
      )
      .then(
        result => {
          console.log('SUCCESS!', result.text)
          alert('Message sent successfully!')
        },
        error => {
          console.log('FAILED...', error.text)
          alert('Failed to send message. Please try again later.')
        },
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  )
}

export default Contact
