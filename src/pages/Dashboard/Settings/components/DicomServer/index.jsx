import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Form } from './styles';

export default function DicomServer() {
  const { t } = useTranslation();

  const [pasteHere, setPasteHere] = useState('');

  const handlePasteHereChange = e => {
    setPasteHere(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Paste Here:', pasteHere);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label={t('settings.dicomServer.label')}
        type="textarea"
        value={pasteHere}
        onChange={handlePasteHereChange}
        id="pasteHere"
        required
      />
      <Button
        textButton={<span>{t('settings.dicomServer.button')}</span>}
        onClick={handleSubmit}
        customStyles={{
          width: '81px',
          height: '37px',
          background: `linear-gradient(to right, #25a340, #1120ac)`,
        }}
      />
    </Form>
  );
}
