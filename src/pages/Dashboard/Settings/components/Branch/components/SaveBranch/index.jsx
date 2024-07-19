import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form, ContainerInputs, ContainerButtons } from './styles';

export default function SaveBranch() {
  const { t } = useTranslation();

  const theme = useTheme();

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  const handleLanguageChange = e => {
    setLanguage(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Status:', status);
    console.log('Language:', language);
    console.log('Description:', description);
  };

  const statusOptions = [
    { value: 'ativa', label: t('settings.branch.status') },
    { value: 'inativa', label: t('settings.branch.statusTwo') },
  ];

  const languageOptions = [
    { value: 'portugues', label: t('settings.branch.language') },
    { value: 'ingles', label: t('settings.branch.languageTwo') },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerInputs>
        <FormField
          label={t('settings.branch.inputName')}
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          required
        />
        <FormField
          type="select"
          value={status}
          onChange={handleStatusChange}
          id="status"
          required
          options={statusOptions}
        />
        <FormField
          type="select"
          value={language}
          onChange={handleLanguageChange}
          id="language"
          required
          options={languageOptions}
        />
      </ContainerInputs>
      <FormField
        label={t('settings.branch.inputDescription')}
        type="textarea"
        value={description}
        onChange={handleDescriptionChange}
        id="description"
        required
      />
      <ContainerButtons>
        <Button
          textButton={t('settings.branch.buttonCancel')}
          href="#"
          customStyles={{
            width: '100px',
            height: '37px',
          }}
        />
        <Button
          textButton={t('settings.branch.buttonSave')}
          onClick={handleSubmit}
          customStyles={{
            width: '153px',
            height: '37px',
            background: `linear-gradient(#12101a, #12101a) padding-box, linear-gradient(to right, #09B250, #09B250, #10467B) border-box`,
            border: '1px solid transparent',
          }}
        />
      </ContainerButtons>
    </Form>
  );
}
