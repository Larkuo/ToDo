import React from 'react';
import {Dimensions} from 'react-native';

export default function WindowDimensions() {
  const [size, setSize] = React.useState({width: 0, height: 0});
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      });
    }
    Dimensions.addEventListener('change', updateSize);
    updateSize();
  }, []);
  return size;
}
