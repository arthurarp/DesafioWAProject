import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: #000;
  font-size: ${normalize(20)}px;
`;
