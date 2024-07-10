import { useState } from 'react';
import Translator from '@/components/i18n/Translator';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form, ButtonBottom } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <LoginForm
        title={<Translator path="signIn.message" />}
        text={<Translator path="signIn.text" />}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={<Translator path="signIn.email" />}
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            required
          />
          <FormField
            label={<Translator path="signIn.password" />}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            required
          />
          <Button
            textButton={<Translator path="signIn.button" />}
            onClick={handleSubmit}
          />
          <ButtonBottom href="#">
            <Translator path="signIn.passwordRecovery" />
          </ButtonBottom>
        </Form>
      </LoginForm>
    </>
  );
}
