import React, { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from '../utils/helpers';
import "./Contact.css"


export default function Contact() {
  const [state, handleSubmit] = useForm("xdobqyap");

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;


  function refresh() {
    window.location.reload();
  }


  if (state.succeeded) {
    return (
      <div  class='contactmain'>
        <p>Thanks for reaching out!</p>
        <button class='submitbtn' onClick={refresh}>Go back to Contact Form</button>
      </div>
    );
  }


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div class='contactmain'>
      <div class="contactbody">
        <h1>Contact Me</h1>
        <hr />
        <form class="contact-form" onSubmit={handleSubmit}>
          <div class="name-form">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} required />
          </div>

          <div class="email-form">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div class="message-form">
            <label htmlFor="message">Message: </label>
            <textarea type="message" name="message" defaultValue={message} onBlur={handleChange} required />
          </div>

          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}

          <div class="btn-container">
            <button class="submitbtn" type="submit">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
}



