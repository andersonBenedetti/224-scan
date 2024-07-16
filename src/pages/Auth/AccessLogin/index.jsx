import { useTranslation } from 'react-i18next';

import LoginForm from '@/components/common/LoginForm';
import Button from '@/components/common/Button';

export default function AccessLogin({ title, text }) {
  const { t } = useTranslation();

  return (
    <>
      <LoginForm title={t('accessLogin.message')} text={t('accessLogin.text')}>
        <Button textButton={t('accessLogin.button')} href="#" />
      </LoginForm>
    </>
  );
}
