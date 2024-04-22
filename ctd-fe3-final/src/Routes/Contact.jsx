import React from 'react'
import Form from '../Components/Form'
import '../styles/contact.css';
import { useContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContextGlobal();
  return (
    <div className='contact'>
      <h2>¿Quieres saber más?</h2>
      <p>Envianos tus preguntas y nos pondremos en contacto contigo</p>
      <Form state={state}/>
    </div>
  )
}

export default Contact