import React from 'react';
import {SizeContextProvider} from '../context/SizeContext';
import { LoginContainer } from '../views';

function App(): JSX.Element {

  return (
    <SizeContextProvider>
      <LoginContainer />
    </SizeContextProvider>
  );
}

export default App;