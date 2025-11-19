import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons name="logo-google" size={32} color="white" />
      <Text style={styles.googleButtonText}>continue with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButtonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 10,
  },
  googleButton: {
    backgroundColor: "#4285f4",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    gap: 10,
  },
});

export default GoogleAuthButton;
