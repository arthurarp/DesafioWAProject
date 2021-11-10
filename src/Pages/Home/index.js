import React from 'react';
import {
  Container,
  Header,
  Body,
  TitleText,
  SubDescriptionText,
  ConfirmButton,
  ConfirmButtonTitle,
} from './styles';

const Home = ({navigation}) => {
  const navigateTo = () => {
    navigation.navigate('Menu');
  };

  return (
    <Container>
      <Header>
        <TitleText>WA Quizz</TitleText>
      </Header>
      <Body>
        <SubDescriptionText>
          Select below the number of questions
        </SubDescriptionText>
        <ConfirmButton onPress={() => navigateTo()}>
          <ConfirmButtonTitle>Confirm</ConfirmButtonTitle>
        </ConfirmButton>
      </Body>
    </Container>
  );
};

export default Home;
