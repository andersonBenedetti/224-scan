import { useState } from 'react';

import { Container, Nav, Item, Text, Content } from './styles';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  const handleTabClick = title => {
    setActiveTab(title);
  };

  return (
    <Container>
      <Nav>
        {tabs.map(tab => (
          <Item
            key={tab.title}
            className={activeTab === tab.title ? 'active' : ''}
            onClick={() => handleTabClick(tab.title)}>
            <Text>{tab.title}</Text>
          </Item>
        ))}
      </Nav>
      <Content>
        {tabs.map(tab =>
          activeTab === tab.title ? <tab.content key={tab.title} /> : null
        )}
      </Content>
    </Container>
  );
}
