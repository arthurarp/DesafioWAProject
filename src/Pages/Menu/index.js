import React from 'react';
import {
  Container,
  Body,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
  DescriptionText,
} from './styles';

const Menu = ({navigation}) => {
  return (
    <Container>
      <Body>
        <DescriptionText>Get ready to play!</DescriptionText>
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
