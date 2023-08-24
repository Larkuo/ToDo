import React from 'react';
import WindowDimensions from '../helpers/Dimensions';
import {Dimensions} from 'react-native';

interface SizeContextType {
  width: number;
  height: number;
}

export const SizeContext = React.createContext<SizeContextType>({
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
});

export const SizeContextProvider = (props: {children: React.ReactNode}) => {
  const size = WindowDimensions();

  return (
    <SizeContext.Provider value={size}>{props.children}</SizeContext.Provider>
  );
};
