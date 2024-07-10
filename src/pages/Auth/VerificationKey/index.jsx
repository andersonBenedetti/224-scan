import { useState } from 'react';
import Translator from '@/components/i18n/Translator';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form, ButtonBottom } from './styles';

export default function VerificationKey() {
  const [code, setCode] = useState('');

  const handleCodeChange = e => {
    setCode(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Code:', code);
  };

  return (
    <>
      <LoginForm
        title={<Translator path="verificationKey.message" />}
        text={<Translator path="verificationKey.text" />}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={<Translator path="verificationKey.code" />}
            type="text"
            value={code}
            onChange={handleCodeChange}
            id="code"
            required
          />
          <Button
            textButton={<Translator path="verificationKey.button" />}
            onClick={handleSubmit}
          />
          <ButtonBottom href="#">
            <Translator path="verificationKey.remand" />
          </ButtonBottom>
        </Form>
      </LoginForm>
    </>
  );
}
