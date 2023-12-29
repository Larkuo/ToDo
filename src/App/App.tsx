import React from 'react';
import {SizeContextProvider} from '../context/SizeContext';
import {NavigationContainer} from '@react-navigation/native';
import { AppNavigator } from '../navigation/AppNavigator';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <SizeContextProvider>
        <AppNavigator />
      </SizeContextProvider>
    </NavigationContainer>
  );
}

export default App;