import Translator from '@/components/i18n/Translator';

import LoginForm from '@/components/common/LoginForm';
import Button from '@/components/common/Button';

export default function AccessLogin({ title, text }) {
  return (
    <>
      <LoginForm
        title={<Translator path="accessLogin.message" />}
        text={<Translator path="accessLogin.text" />}>
        <Button
          textButton={<Translator path="accessLogin.button" />}
          href="#"
        />
      </LoginForm>
    </>
  );
}
