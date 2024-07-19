import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Container, Title, Form, Top } from './styles';

export default function FormProxy() {
  const { t } = useTranslation();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = e => {
    setUser(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User name:', user);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Title>{t('settings.internet.titleProxy')}</Title>
      <Form onSubmit={handleSubmit}>
        <Top>
          <FormField
            label={t('settings.internet.labelUser')}
            type="text"
            value={user}
            onChange={handleUserChange}
            id="user"
            required
          />
          <FormField
            label={t('settings.internet.labelPassword')}
            type="text"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            required
          />
        </Top>
        <Button
          textButton={t('settings.internet.button')}
          onClick={handleSubmit}
          customStyles={{
            width: '153px',
            height: '37px',
            background: `linear-gradient(#12101a, #12101a) padding-box, linear-gradient(to right, #09B250, #09B250, #10467B) border-box`,
            border: '1px solid transparent',
          }}
        />
      </Form>
    </Container>
  );
}
