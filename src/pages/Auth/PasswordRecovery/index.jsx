import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form } from './styles';

export default function PasswordRecovery() {
  const { t } = useTranslation();

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
        title={t('passwordRecovery.message')}
        text={t('passwordRecovery.text')}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={t('passwordRecovery.email')}
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            required
          />
          <Button
            textButton={t('passwordRecovery.button')}
            onClick={handleSubmit}
          />
        </Form>
      </LoginForm>
    </>
  );
}
