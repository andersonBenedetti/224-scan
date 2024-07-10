import { useState } from 'react';
import Translator from '@/components/i18n/Translator';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form } from './styles';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Confirm Password:', confirmPassword);
    console.log('Password:', password);
  };

  return (
    <>
      <LoginForm
        title={<Translator path="resetPassword.message" />}
        text={<Translator path="resetPassword.text" />}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={<Translator path="resetPassword.password" />}
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="confirmPassword"
            required
          />
          <FormField
            label={<Translator path="resetPassword.confirmPassword" />}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            required
          />
          <Button
            textButton={<Translator path="resetPassword.button" />}
            onClick={handleSubmit}
          />
        </Form>
      </LoginForm>
    </>
  );
}
