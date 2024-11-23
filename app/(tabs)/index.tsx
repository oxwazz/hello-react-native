import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import AccessibilityActionExample from "@/components/ters";

export default function HomeScreen() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>{"<ActivityIndicator>"}</Text>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator animating={true} />
          <ActivityIndicator animating={false} />
          <ActivityIndicator animating={false} hidesWhenStopped={false} />
          <ActivityIndicator size="large" color="#00ff00" />
          <ActivityIndicator size={10} />
        </View>

        <Text>{"<Button>"}</Text>
        <View>
          <Button
            title="Simple Button"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
          <Button
            title="accessibilityLabel"
            onPress={() => Alert.alert("Simple Button pressed")}
            accessibilityLabel="Learn more about this purple button"
          />
          {/*<Button*/}
          {/*  title="accessibilityLanguage"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  accessibilityLanguage*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  title="accessibilityActions"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  accessibilityActions={[*/}
          {/*    { name: "increment", label: "Increase counter" },*/}
          {/*    { name: "decrement", label: "Decrease counter" },*/}
          {/*    { name: "reset", label: "Reset counter" },*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  title="onAccessibilityAction"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  onAccessibilityAction={(event: any) => {*/}
          {/*    switch (event.nativeEvent.actionName) {*/}
          {/*      case "increment":*/}
          {/*        Alert.alert("Simple Button pressed");*/}
          {/*        break;*/}
          {/*      case "decrement":*/}
          {/*        Alert.alert("Simple Button pressed");*/}
          {/*        break;*/}
          {/*      case "reset":*/}
          {/*        Alert.alert("Simple Button pressed");*/}
          {/*        break;*/}
          {/*    }*/}
          {/*  }}*/}
          {/*/>*/}
          <Button
            title="color"
            onPress={() => Alert.alert("Simple Button pressed")}
            color="#000000"
          />
          <Button
            title="disabled"
            onPress={() => Alert.alert("Simple Button pressed")}
            disabled
          />
          <Button
            title="hasTVPreferredFocus"
            onPress={() => Alert.alert("Simple Button pressed")}
            hasTVPreferredFocus={true}
          />
          {/*<Button*/}
          {/*  ref={ref1}*/}
          {/*  title="nextFocusDown"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  nextFocusDown={ref2.current}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  ref={ref2}*/}
          {/*  title="nextFocusForward"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  nextFocusForward={ref3.current}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  ref={ref3}*/}
          {/*  title="nextFocusLeft"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  nextFocusLeft={ref4.current}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  ref={ref4}*/}
          {/*  title="nextFocusRight"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  nextFocusRight={ref5.current}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  ref={ref5}*/}
          {/*  title="nextFocusUp"*/}
          {/*  onPress={() => Alert.alert("Simple Button pressed")}*/}
          {/*  nextFocusUp={ref4.current}*/}
          {/*/>*/}
          <Button
            title="testID"
            onPress={() => Alert.alert("Simple Button pressed")}
            testID="test-id-button-oxwazz"
          />
          <Button
            title="touchSoundDisabled"
            onPress={() => Alert.alert("Simple Button pressed")}
            touchSoundDisabled={true}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
