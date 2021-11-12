import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  Header,
  Body,
  TitleText,
  SubDescriptionText,
  ConfirmButton,
  ConfirmButtonTitle,
  NumberOfQuestionsInput,
} from './styles';
import {getAllKeysFromLocalDatabase} from '../../services/storage';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [existsSavedReport, setExistsSavedReport] = useState(false);
  const isFocused = useIsFocused();
  const navigateTo = route => {
    setSelectedNumber(0);
    navigation.navigate(route);
  };

  const verifyNumber = number => {
    const regex = /^[1-9]\d*$/;
    regex.test(number) ? setIsValidNumber(true) : setIsValidNumber(false);
  };

  const getAllKeys = async () => {
    const keys = await getAllKeysFromLocalDatabase();

    if (keys.includes('@report')) {
      setExistsSavedReport(true);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getAllKeys();
    }
  }, [isFocused]);

  useEffect(() => {
    verifyNumber(selectedNumber);
  }, [selectedNumber]);

  return (
    <Container>
      <Header>
        <TitleText>WA Quizz</TitleText>
      </Header>
      <Body>
        <SubDescriptionText>
          Select below the number of questions
        </SubDescriptionText>
        <NumberOfQuestionsInput
          keyboardType="numeric"
          onChangeText={number => setSelectedNumber(number)}
          value={selectedNumber}
        />
        <ConfirmButton
          color={!isValidNumber ? '#a1a1a1' : null}
          onPress={
            isValidNumber
              ? () => navigateTo('Menu')
              : () =>
                  Alert.alert('Warning!', 'Please type only positive Integer')
          }>
          <ConfirmButtonTitle>Confirm</ConfirmButtonTitle>
        </ConfirmButton>
        {existsSavedReport ? (
          <ConfirmButton onPress={() => navigateTo('Results')}>
            <ConfirmButtonTitle>See saved report</ConfirmButtonTitle>
          </ConfirmButton>
        ) : null}
      </Body>
    </Container>
  );
};

export default Home;
