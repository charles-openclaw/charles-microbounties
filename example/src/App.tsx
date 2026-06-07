import React from 'react';
import { NitroTimerView } from '../src';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <NitroTimerView
      textColor="#32a852"
      style={styles.box}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});

export default App;