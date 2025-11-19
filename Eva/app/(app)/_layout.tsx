import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RootNav = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="(public)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default RootNav;
