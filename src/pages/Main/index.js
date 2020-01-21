import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CoinIcon from '~/assets/coin.png';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

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
  let offset = 0;
  // new animate value tem a api a 60fps e pode ser mudada varias vezes sem perca de performance, direfente se fizesse um state normal
  const translateY = new Animated.Value(0);

  // capta a posicao do "item" e repassa para a translateY acima
  // useNativeDriver, força a usar a api nativa!
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChange(event) {
    // se o estado anterior ao evento era ativo
    if (event.nativeEvent.oldState === State.ACTIVE) {
      // varial que guarda a informacao se o menu esta aberto ou nao
      let opened = false;
      const {translationY} = event.nativeEvent;
      // guarda na variavel offset o "quanto" foi arrastado o objeto
      offset += translationY;

      // caso tenha arrastado 100px ou mais para baixo faca o scroll sozinho
      if (translationY >= 100) {
        // seta menu como aberto
        opened = true;
      } else {
        // agora quando arrastar pra cima
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      // seta um tempo de animacao
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        // ao finalizar a animacao
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
