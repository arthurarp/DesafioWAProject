import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  flex: 0.2;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: center;
  /* background-color: #a1a1; */
`;

export const HeaderText = styled.Text`
  color: ${theme.colors.primary};
  margin-top: ${normalize(20)}px;
  font-size: ${normalize(25)}px;
  font-weight: bold;
`;

export const DetailsContainer = styled.View`
  flex: 0.3;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: #ccc; */
`;

export const DetailsText = styled.Text`
  color: ${theme.colors.primary};
  margin-top: ${normalize(20)}px;
  font-size: ${normalize(18)}px;
  font-weight: bold;
`;

export const QuestionContainer = styled.View`
  /* flex: 1; */
  height: ${normalize(250)}px;
  width: 100%;
  padding: ${normalize(10)}px;
  margin-bottom: ${normalize(20)}px;
  /* align-items: center; */
  background-color: #ccc;
  border-radius: ${normalize(7)}px;
`;

export const QuestionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(18)}px;
  font-weight: bold;
  margin-bottom: ${normalize(20)}px;
  text-align: justify;
`;

export const AnswerText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${normalize(14)}px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  flex: 0.3;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: #ccc; */
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 70%;
  height: ${normalize(50)}px;
  justify-content: center;
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
