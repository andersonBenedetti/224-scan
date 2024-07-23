import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginForm } from '@/components/common/LoginForm';
import { FormField } from '@/components/common/FormField';
import { Button } from '@/components/common/Button';

import { Form } from './styles';

export const ResetPassword = () => {
  const { t } = useTranslation();

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
        title={t('resetPassword.message')}
        text={t('resetPassword.text')}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={t('resetPassword.password')}
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="confirmPassword"
            required
          />
          <FormField
            label={t('resetPassword.confirmPassword')}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            required
          />
          <Button
            textButton={t('resetPassword.button')}
            onClick={handleSubmit}
          />
        </Form>
      </LoginForm>
    </>
  );
};
