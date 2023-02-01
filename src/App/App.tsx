import React from 'react';
import {
  useColorScheme
} from 'react-native';
import ListContainer from '../views/List/ListContainer';
import OnboardingContainer from '../views/Onboarding/OnboardingContainer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <OnboardingContainer />
  );
}

export default App;