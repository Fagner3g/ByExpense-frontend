import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}
