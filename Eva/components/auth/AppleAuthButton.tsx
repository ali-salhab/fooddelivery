import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons name="logo-apple" size={28} color="#fff" />
      <Text style={styles.appleButtonText}>continue with Apple </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appleButtonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 10,
  },
  appleButton: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    gap: 4,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default AppleAuthButton;
