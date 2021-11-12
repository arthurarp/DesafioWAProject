import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export const Icon = styled(FontAwesomeIcon).attrs((props) => ({
  color: props.color ? props.color : theme.colors.black,
  size: props.size ? props.size : normalize(20),
}))``;

export const Container = styled.View`
  flex: 1;
  padding: ${normalize(10)}px;
  justify-content: center;
`;

export const Header = styled.View`
  flex: 0.4;
  width: 100%;
  padding: ${normalize(10)}px;
  align-items: flex-start;
  margin-top: ${normalize(10)}px;
`;

export const QuestionText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(18)}px;
  font-weight: bold;
  margin-top: ${normalize(10)}px;
  text-align: justify;
`;

export const DetailsContainer = styled.View`
  flex: 0.3;
  padding: ${normalize(10)}px;
  justify-content: flex-start;
  flex-direction: row;
`;

export const InformationContainer = styled.View`
  flex: 1;
  padding: ${normalize(10)}px;
  justify-content: flex-start;
`;

export const ScoreContainer = styled.View`
  flex: 0.2;
  padding: ${normalize(10)}px;
  justify-content: flex-start;
  /* background-color: #FF0; */
  border-radius: ${normalize(7)}px;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.primary};
`;

export const ScoreText = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${normalize(25)}px;
  font-weight: bold;
  margin-top: ${normalize(10)}px;
`;

export const InformationItem = styled.View`
  flex: 1;
  padding: ${normalize(5)}px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const ItemText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${normalize(14)}px;
  margin-left: ${normalize(10)}px;
`;

export const AnswerContainer = styled.View`
  flex: 1;
  padding: ${normalize(10)}px;
  width: 100%;
  justify-content: flex-start;
`;

export const AnswerButton = styled.TouchableOpacity`
  height: 20%;
  width: 100%;
  margin-bottom: ${normalize(20)}px;
  justify-content: center;
  align-items: flex-start;
  border-width: ${props => (props.selected ? 3 : 1)}px;
  border-radius: ${normalize(7)}px;
  padding: ${normalize(10)}px;
  border-color: ${props => (props.selected ? theme.colors.primary : '#000')};
`;

export const AnswerText = styled.Text`
  color: ${theme.colors.black};
  font-size: ${normalize(15)}px;
`;

export const ButtonsContainer = styled.View`
  flex: 0.3;
  width: 100%;
  align-items: center;
  justify-content: center;
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
