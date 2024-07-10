import { useState } from 'react';
import Translator from '@/components/i18n/Translator';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form } from './styles';

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <>
      <LoginForm
        title={<Translator path="passwordRecovery.message" />}
        text={<Translator path="passwordRecovery.text" />}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={<Translator path="passwordRecovery.email" />}
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            required
          />
          <Button
            textButton={<Translator path="passwordRecovery.button" />}
            onClick={handleSubmit}
          />
        </Form>
      </LoginForm>
    </>
  );
}
