import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight(30)}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 380px;
  z-index: 5;
  margin-bottom: 40px;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Nuconta = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconCoin = styled.Image`
  width: 44px;
  height: 44px;
  background: #fff;
`;

export const TitleNuconta = styled.Text`
  padding-left: 10px;
  font-size: 14px;
  color: #999;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Anotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
