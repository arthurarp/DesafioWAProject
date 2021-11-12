import React, {useContext} from 'react';
import {
  Container,
  Body,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
  DescriptionText,
  SubDescriptionText,
} from './styles';
import NumberOfQuestionsContext from '../../contexts/numberOfQuestions';

const Menu = ({navigation}) => {
  const {numberOfQuestions} = useContext(NumberOfQuestionsContext);
  return (
    <Container>
      <Body>
        <DescriptionText>Get ready to play!</DescriptionText>
        <SubDescriptionText>{numberOfQuestions} questions</SubDescriptionText>
      </Body>
      <ButtonsContainer>
        <ConfirmButton onPress={() => navigation.navigate('Questions')}>
          <ConfirmButtonTitle>Start</ConfirmButtonTitle>
        </ConfirmButton>
        <ConfirmButton
          color="#a1a1a1"
          onPress={() => navigation.navigate('Home')}>
          <ConfirmButtonTitle>Cancel</ConfirmButtonTitle>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Menu;
