import React from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      ></Stack.Screen>
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
