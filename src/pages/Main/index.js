import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CoinIcon from '~/assets/coin.png';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  Nuconta,
  TitleNuconta,
  IconCoin,
  CardContent,
  CardFooter,
  Title,
  Description,
  Anotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Nuconta>
              <IconCoin source={CoinIcon} style={{tintColor: '#999'}} />
              <TitleNuconta>NuConta</TitleNuconta>
            </Nuconta>
            <Icon name="visibility-off" size={28} color="#999" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 500.542,75</Description>
          </CardContent>
          <CardFooter>
            <Anotation>
              Transferência de R$ 20,00 recebida de Marlon hoje às 06:00h.
            </Anotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
