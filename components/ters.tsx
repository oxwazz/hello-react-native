import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AccessibilityActionExample = () => {
  const [count, setCount] = useState(0);

  // Custom actions that will be announced by screen readers
  const customActions = [
    { name: "increment", label: "Increase counter" },
    { name: "decrement", label: "Decrease counter" },
    { name: "reset", label: "Reset counter" },
  ];

  const handleAccessibilityAction = (event: any) => {
    switch (event.nativeEvent.actionName) {
      case "increment":
        setCount((prev) => prev + 1);
        break;
      case "decrement":
        setCount((prev) => prev - 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <View
        accessible={true}
        accessibilityLabel={`Counter value is ${count}`}
        accessibilityRole="adjustable"
        accessibilityActions={customActions}
        onAccessibilityAction={handleAccessibilityAction}
        style={styles.counterContainer}
      >
        <Text style={styles.counterText}>Count: {count}</Text>

        <TouchableOpacity
          onPress={() => setCount((prev) => prev + 1)}
          accessibilityLabel="Increment button"
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCount((prev) => prev - 1)}
          accessibilityLabel="Decrement button"
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCount(0)}
          accessibilityLabel="Reset button"
          style={styles.resetButton}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  counterContainer: {},
  counterText: {},
  button: {},
  resetButton: {},
  buttonText: {},
});

export default AccessibilityActionExample;
