import React from 'react';
import {
  useColorScheme
} from 'react-native';
import IntroScreen from '../components/introScreen/IntroScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <IntroScreen loader={true}/>
  );
}

export default App;