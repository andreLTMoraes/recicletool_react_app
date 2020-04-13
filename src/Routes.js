import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../src/pages/Login';


const rectoolTheme = {
  dark: false,
  colors: {
    primary: '#1AB394',
    background: '#ededed',
    card: '#1AB394',
    text: '#fff',
  }
};



const initialStack = createStackNavigator();


function Routes() {
  return (
    <NavigationContainer theme={rectoolTheme}>
    <initialStack.Navigator>
            <initialStack.Screen 
              name="login"
              component={Login}
              options={{headerShown: false}}
            />

        </initialStack.Navigator>

    </NavigationContainer>
  );
}

export default Routes;