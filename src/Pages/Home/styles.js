import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme/';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  flex: 0.3;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  border-bottom-left-radius: ${normalize(7)}px;
  border-bottom-right-radius: ${normalize(7)}px;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: center;
  margin-top: ${normalize(10)}px;
`;

export const TitleText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${normalize(50)}px;
  font-weight: bold;
`;

export const DescriptionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(25)}px;
  font-weight: bold;
`;

export const SubDescriptionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(15)}px;
  margin-top: ${normalize(40)}px;
  align-self: center;
`;

export const NumberOfQuestionsInput = styled.TextInput`
  width: 20%;
  height: 20%;
  padding: ${normalize(10)}px;
  align-items: flex-start;
  margin-top: ${normalize(10)}px;
  border-width: 1px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 70%;
  height: ${normalize(60)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(7)}px;
  background-color: ${theme.colors.primary};
`;

export const ConfirmButtonTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${normalize(22)}px;
  font-weight: bold;
  align-self: center;
`;
