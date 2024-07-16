import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LoginForm from '@/components/common/LoginForm';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form, Selects, ButtonBottom } from './styles';

export default function SignUp() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [timezone, setTimezone] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleRegionChange = e => {
    setRegion(e.target.value);
  };

  const handleTimezoneChange = e => {
    setTimezone(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Region:', region);
    console.log('Timezone:', timezone);
    console.log('Password:', password);
  };

  const regionOptions = [
    { value: '', label: t('signUp.region') },
    { value: 'br', label: 'BR' },
    { value: 'us', label: 'US' },
    { value: 'si', label: 'SI' },
    { value: 'ch', label: 'CH' },
    { value: 'uk', label: 'UK' },
  ];

  const timezoneOptions = [
    { value: '', label: t('signUp.timezone') },
    { value: 'br', label: 'BR' },
    { value: 'us', label: 'US' },
    { value: 'si', label: 'SI' },
    { value: 'ch', label: 'CH' },
    { value: 'uk', label: 'UK' },
  ];

  return (
    <LoginForm title={t('signUp.message')} text={t('signUp.text')}>
      <Form onSubmit={handleSubmit}>
        <FormField
          label={t('signUp.name')}
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          required
        />
        <FormField
          label={t('signUp.email')}
          type="email"
          value={email}
          onChange={handleEmailChange}
          id="email"
          required
        />
        <Selects>
          <FormField
            label={t('signUp.region')}
            type="select"
            value={region}
            onChange={handleRegionChange}
            id="region"
            required
            options={regionOptions}
          />
          <FormField
            label={t('signUp.timezone')}
            type="select"
            value={timezone}
            onChange={handleTimezoneChange}
            id="timezone"
            required
            options={timezoneOptions}
          />
        </Selects>
        <FormField
          label={t('signUp.password')}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          id="password"
          required
        />
        <Button textButton={t('signUp.button')} onClick={handleSubmit} />
        <ButtonBottom onClick={handleSubmit}>{t('signUp.back')}</ButtonBottom>
      </Form>
    </LoginForm>
  );
}
