import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;