import React, { useState } from 'react';

import history from '../../services/history';
import { Container } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleSubmit(){
    console.log(email);
    console.log(telefone);
    history.push('/dashboard');
  };

  return (
    <Container onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
            type="text"
            placeholder="Seu melhor e-mail"
            onChange={event => setEmail(event.target.value)}
        />

        <label>Telefone</label>
        <input
            type="text"
            placeholder="Seu número do whats app de preferência"
            onChange={event => setTelefone(event.target.value)}
        />

        <button type="submit" >Enviar</button>
    </Container>
  );
}
