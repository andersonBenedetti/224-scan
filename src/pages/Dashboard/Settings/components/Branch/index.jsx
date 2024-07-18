import { useTranslation } from 'react-i18next';

import Button from '@/components/common/Button';

import {
  Container,
  Title,
  Content,
  Infos,
  Name,
  Text,
  Status,
  Language,
} from './styles';

export default function Branch() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('settings.branch.title')}</Title>
      <Content>
        <Infos>
          <Name>{t('settings.branch.name')}</Name>
          <Text>{t('settings.branch.text')}</Text>
        </Infos>
        <Status>{t('settings.branch.status')}</Status>
        <Language>{t('settings.branch.language')}</Language>
      </Content>
      <Button
        textButton={<span>{t('settings.branch.buttonEdit')}</span>}
        href="#"
        customStyles={{
          width: '79px',
          height: '37px',
          background: `linear-gradient(to right, #25a340, #1120ac)`,
        }}
      />
    </Container>
  );
}
