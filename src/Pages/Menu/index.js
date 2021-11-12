import React from 'react';
import {
  Container,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
} from './styles';

const Menu = ({navigation}) => {
  return (
    <Container>
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
