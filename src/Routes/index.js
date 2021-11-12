import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Questions from '../Pages/Questions';
import Results from '../Pages/Results';
import HeaderLeftButton from '../components/HeaderLeftButton';
import Theme from '../Theme';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: Theme.colors.primary},
            headerTitleStyle: {color: Theme.colors.white},
            headerLeft: () => <HeaderLeftButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
