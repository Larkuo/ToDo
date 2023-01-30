import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import ListContainer from '../views/List/ListContainer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <ListContainer />
  );
}

export default App;
