import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme';

export const Container = styled.View`
  flex: 1;
  padding: ${normalize(10)}px;
  justify-content: center;
`;

export const Header = styled.View`
  flex: 0.7;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: center;
  margin-top: ${normalize(10)}px;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: center;
  margin-top: ${normalize(10)}px;
`;

export const QuestionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(18)}px;
  font-weight: bold;
  margin-top: ${normalize(10)}px;
`;

export const AnswerContainer = styled.View`
  flex: 1;
  height: 40%;
  padding: ${normalize(10)}px;
  width: 100%;
  margin-top: ${normalize(20)}px;
  /* align-items: center; */
  justify-content: flex-start;
`;

export const AnswerButton = styled.TouchableOpacity`
  height: 20%;
  width: 100%;
  margin-top: ${normalize(20)}px;
  justify-content: center;
  align-items: flex-start;
  border-width: ${props => (props.selected ? 3 : 1)}px;
  border-radius: ${normalize(7)}px;
  padding: ${normalize(10)}px;
  border-color: ${props => (props.selected ? theme.colors.primary : '#000')};
  /* background-color: #000; */
`;

export const AnswerText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${normalize(15)}px;
  /* margin-left: ${normalize(10)}px; */
`;

export const ButtonsContainer = styled.View`
  flex: 0.5;
  width: 100%;
  margin-top: ${normalize(20)}px;
  align-items: center;
  justify-content: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 70%;
  height: ${normalize(60)}px;
  justify-content: center;
  margin-top: ${normalize(20)}px;
  border-radius: ${normalize(7)}px;
  align-items: center;
  background-color: ${props =>
    props.color ? props.color : theme.colors.primary};
`;

export const ConfirmButtonTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${normalize(22)}px;
  font-weight: bold;
  align-self: center;
`;
