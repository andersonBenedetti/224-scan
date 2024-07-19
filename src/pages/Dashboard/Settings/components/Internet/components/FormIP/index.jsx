import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';

import { Container, Title, Form, Top, Bottom, SubTitle } from './styles';

export default function DicomServer() {
  const { t } = useTranslation();

  const [ip, setIp] = useState('');
  const [subnet, setSubnet] = useState('');
  const [gateway, setGateway] = useState('');
  const [dns, setDns] = useState('');
  const [alternate, setAlternate] = useState('');

  const handleIpChange = e => {
    setIp(e.target.value);
  };

  const handleSubnetChange = e => {
    setSubnet(e.target.value);
  };

  const handleGatewayChange = e => {
    setGateway(e.target.value);
  };

  const handleDnsChange = e => {
    setDns(e.target.value);
  };

  const handleAlternateChange = e => {
    setAlternate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('IPv6:', ip);
    console.log('Subnet prefix length:', subnet);
    console.log('Gateway:', gateway);
    console.log('Preferred DNS server:', dns);
    console.log('Preferred DNS server', alternate);
  };

  return (
    <Container>
      <Title>{t('settings.internet.titleIPv6')}</Title>
      <Form onSubmit={handleSubmit}>
        <Top>
          <FormField
            label={t('settings.internet.labelIP')}
            type="text"
            value={ip}
            onChange={handleIpChange}
            id="ip"
            required
          />
          <FormField
            label={t('settings.internet.labelSubnet')}
            type="text"
            value={subnet}
            onChange={handleSubnetChange}
            id="subnet"
            required
          />
          <FormField
            label={t('settings.internet.labelGateway')}
            type="text"
            value={gateway}
            onChange={handleGatewayChange}
            id="gateway"
            required
          />
        </Top>
        <Bottom>
          <div>
            <SubTitle>{t('settings.internet.titleDNS')}</SubTitle>
            <FormField
              label={t('settings.internet.labelDNS')}
              type="text"
              value={dns}
              onChange={handleDnsChange}
              id="dns"
              required
            />
          </div>
          <FormField
            label={t('settings.internet.labelAlternate')}
            type="text"
            value={alternate}
            onChange={handleAlternateChange}
            id="alternate"
            required
          />
        </Bottom>
        <Button
          textButton={<span>{t('settings.internet.button')}</span>}
          onClick={handleSubmit}
          customStyles={{
            width: '153px',
            height: '37px',
            background: `linear-gradient(to right, #25a340, #1120ac)`,
          }}
        />
      </Form>
    </Container>
  );
}
