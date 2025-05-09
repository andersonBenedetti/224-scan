import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LogOutIcon } from '@/components/icons/LogOutIcon';
import { Branch } from './components/Branch';
import { DicomServer } from './components/DicomServer';
import { Internet } from './components/Internet';

import { Container, Menu, Options, Option, Button, Content } from './styles';

export const Settings = () => {
  const { t } = useTranslation();

  const options = [
    {
      title: t('settings.menu.branch'),
      content: () => <Branch />,
    },
    {
      title: t('settings.menu.dicomServer'),
      content: () => <DicomServer />,
    },
    {
      title: t('settings.menu.internet'),
      content: () => <Internet />,
    },
  ];

  const [activeOption, setActiveOption] = useState(options[0].title);

  const handleOptionClick = title => {
    setActiveOption(title);
  };

  return (
    <Container>
      <Menu>
        <Options>
          {options.map(option => (
            <Option
              key={option.title}
              className={activeOption === option.title ? 'active' : ''}
              onClick={() => handleOptionClick(option.title)}>
              {option.title}
            </Option>
          ))}
        </Options>
        <Button href="#">
          <LogOutIcon />
          Log out
        </Button>
      </Menu>
      <Content>
        {options.map(option =>
          activeOption === option.title ? (
            <option.content key={option.title} />
          ) : null
        )}
      </Content>
    </Container>
  );
};
