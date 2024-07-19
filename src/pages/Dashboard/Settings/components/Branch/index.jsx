import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/common/Button';
import SaveBranch from './components/SaveBranch';

import {
  Container,
  Title,
  ContentBranch,
  Content,
  Infos,
  Name,
  Text,
  Status,
  Language,
} from './styles';

export default function Branch() {
  const { t } = useTranslation();
  const [showSaveBranch, setShowSaveBranch] = useState(false);

  const handleButtonClick = () => {
    setShowSaveBranch(true);
  };

  return (
    <Container>
      <Title>{t('settings.branch.title')}</Title>
      {showSaveBranch ? (
        <SaveBranch />
      ) : (
        <ContentBranch>
          <Content>
            <Infos>
              <Name>{t('settings.branch.name')}</Name>
              <Text>{t('settings.branch.text')}</Text>
            </Infos>
            <Status>{t('settings.branch.status')}</Status>
            <Language>{t('settings.branch.language')}</Language>
          </Content>
          <Button
            textButton={t('settings.branch.buttonEdit')}
            onClick={handleButtonClick}
            customStyles={{
              width: '79px',
              height: '37px',
              background: `linear-gradient(#12101a, #12101a) padding-box, linear-gradient(to right, #09B250, #09B250, #10467B) border-box`,
              border: '1px solid transparent',
            }}
          />
        </ContentBranch>
      )}
    </Container>
  );
}
