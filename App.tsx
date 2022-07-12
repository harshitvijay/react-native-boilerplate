/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CounterApp from './src/Screen/CounterApp/CounerApp';
import HelloWorld from './src/Screen/HelloWorld/HelloWorld';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={CounterApp}
          options={{title: 'Counter App'}}
        />
        <Stack.Screen
          name="Hello"
          component={HelloWorld}
          options={{title: 'Hello'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
