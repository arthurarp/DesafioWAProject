import React from 'react';
import {Alert} from 'react-native';
import {CloseButton, Icon} from './styles';

const HeaderLeftButton = ({navigation}) => {
  const handleClose = () => {
    navigation.goBack();
  };
  const createTwoButtonAlert = () =>
    Alert.alert('Warning!', 'Leave game?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: handleClose},
      ,
    ]);
  return (
    <CloseButton onPress={createTwoButtonAlert}>
      <Icon name="times" size={20} color="#fff" />
    </CloseButton>
  );
};

export default HeaderLeftButton;
