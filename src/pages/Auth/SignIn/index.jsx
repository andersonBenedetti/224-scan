import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form, ButtonBottom, Text } from './styles';

export default function SignIn() {
  const { t } = useTranslation();

  const theme = useTheme();

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
      <LoginForm title={t('signIn.message')} text={t('signIn.text')}>
        <Form onSubmit={handleSubmit}>
          <FormField
            label={t('signIn.email')}
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            required
          />
          <FormField
            label={t('signIn.password')}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            required
          />
          <ButtonBottom href="#">{t('signIn.passwordRecovery')}</ButtonBottom>
          <Button textButton={t('signIn.button')} onClick={handleSubmit} />
        </Form>
        <Text>{t('signIn.or')}</Text>
        <Button
          textButton={t('signIn.buttonRegister')}
          href=""
          customStyles={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.textWhite}`,
          }}
        />
      </LoginForm>
    </>
  );
}
