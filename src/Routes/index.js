import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Questions from '../Pages/Questions';
import Results from '../Pages/Results';

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
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{headerTitle: props => props.title, headerLeft: () => null}}
        />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
