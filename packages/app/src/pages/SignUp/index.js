import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo-ema-soft4.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
