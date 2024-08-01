import { useState, useEffect, useRef  } from 'react';

import { Container, Nav, Item, Text, Content } from './styles';

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const activeItemRef = useRef(null);


  const handleTabClick = title => {
    setActiveTab(title);
  };

  useEffect(() => {
    if (activeItemRef.current) {
      const rect = activeItemRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width - 4,
        left: rect.left + 2
      });
    }
  }, [activeTab]);

  return (
    <Container>
      <Nav>
        {tabs.map(tab => (
          <Item
            key={tab.title}
            className={activeTab === tab.title ? 'active' : ''}
            onClick={() => handleTabClick(tab.title)}
            ref={activeTab === tab.title ? activeItemRef : null}
          >
            <Text>{tab.title}</Text>
          </Item>
        ))}
      </Nav>
      <Content
        $overlay={dimensions}
      >
        {tabs.map(tab =>
          activeTab === tab.title ? <tab.content key={tab.title} /> : null
        )}
      </Content>
    </Container>
  );
};
