import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${normalize(10)}px;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: center;
  margin-top: ${normalize(10)}px;
`;

export const DescriptionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(25)}px;
  font-weight: bold;
`;

export const SubDescriptionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(18)}px;
  margin-top: ${normalize(10)}px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${normalize(20)}px;
  align-items: center;
  justify-content: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 70%;
  height: ${normalize(50)}px;
  justify-content: center;
  margin-top: ${normalize(20)}px;
  border-radius: ${normalize(7)}px;
  align-items: center;
  background-color: ${props =>
    props.color ? props.color : theme.colors.primary};
`;

export const ConfirmButtonTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${normalize(18)}px;
  font-weight: bold;
  align-self: center;
`;
