import { StyleSheet, View, ActivityIndicator} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import React from "react";

export default function HomeScreen() {
  return (
      <SafeAreaProvider>
          <SafeAreaView>
              <View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator />
                  <ActivityIndicator animating={true} />
                  <ActivityIndicator animating={false} />
                  <ActivityIndicator animating={false} hidesWhenStopped={false} />
                  <ActivityIndicator size="large" color="#00ff00" />
                  <ActivityIndicator size={10} />
              </View>
          </SafeAreaView>
      </SafeAreaProvider>
  );
}

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
