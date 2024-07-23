import { useTranslation } from 'react-i18next';

import { LogoUser } from './components/LogoUser';
import {
  ProgressCircle,
  Progress,
  ProgressDetails,
} from '@/components/common/ProgressCircle';

import { Container, User, Title, Infos } from './styles';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <User>
        <LogoUser />
        <Title>{t('header.title')}</Title>
      </User>
      <Infos>
        <ProgressCircle progressPercentage={90}>
          <Progress>90%</Progress>
          <ProgressDetails>{t('header.status')}</ProgressDetails>
        </ProgressCircle>
        <ProgressCircle progressPercentage={80}>
          <Progress>80%</Progress>
          <ProgressDetails>{t('header.status')}</ProgressDetails>
        </ProgressCircle>
      </Infos>
    </Container>
  );
};
