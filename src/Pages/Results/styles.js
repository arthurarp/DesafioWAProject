import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export const Icon = styled(FontAwesomeIcon).attrs(props => ({
  color: props.color ? props.color : theme.colors.black,
  size: props.size ? props.size : normalize(20),
}))``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${normalize(10)}px;
`;

export const Header = styled.View`
  flex: 0.4;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: center;
  /* background-color: #a1a1; */
`;

export const HeaderText = styled.Text`
  color: ${theme.colors.primary};
  margin-top: ${normalize(20)}px;
  padding: ${normalize(10)}px;
  font-size: ${normalize(25)}px;
  font-weight: bold;
`;

export const DetailsContainer = styled.View`
  flex: 0.3;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${normalize(10)}px;
  /* background-color: #ccc; */
`;

export const DetailsText = styled.Text`
  color: ${props => (props.color ? props.color : theme.colors.primary)};
  margin-top: ${normalize(20)}px;
  font-size: ${normalize(18)}px;
  font-weight: bold;
`;

export const QuestionContainer = styled.View`
  /* flex: 1; */
  height: ${normalize(220)}px;
  width: 100%;
  padding: ${normalize(10)}px;
  margin-bottom: ${normalize(20)}px;
  /* align-items: center; */
  background-color: #dedede;
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
  font-size: ${normalize(16)}px;
  font-weight: bold;
`;

export const ResultText = styled.Text`
  color: ${props => (props.color ? props.color : '#F00')};
  font-size: ${normalize(16)}px;
  font-weight: bold;
  margin-top: ${normalize(20)}px;
`;

export const ButtonsContainer = styled.View`
  flex: 0.3;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${normalize(10)}px;
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
