import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,Text } from "react-native";
import { Home } from "./components/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>

      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.family}>
        <Home />
        </Text>
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,    
    margin: 0,
    padding: 0,
    backgroundColor: "#8B7AF7",

  },
});
//Soy anemiasxdxd