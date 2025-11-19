import React from "react";
import { Fonts } from "@/constants/theme";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
export default function Index() {
  const openWebBrowser = (url: string) => {
    // Implement web browser opening logic here
    Linking.openURL(url);
    console.log("Open Web Browser", url);
  };
  return (
    <View style={style.container}>
      <View style={style.infiniteScrollContainer}></View>
      <View style={style.contentContainer}>
        <Image
          source={require("@/assets/wolt-logo.png")}
          style={style.brandLogo}
        ></Image>
        <Animated.Text entering={FadeInDown} style={style.tagLine}>
          Almost every thing deliverd !
        </Animated.Text>
        {/* login button */}
        <View style={style.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={style.otherButton}>
              <Text style={style.otherButtonText}>Other Options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInDown.delay(400)}
          style={style.privacyContainer}
        >
          <Text
            style={style.privacyText}
            onPress={() => openWebBrowser("https://eva.com/terms")}
          >
            By continuing, you agree to Eva's Terms of Service and Privacy
            Policy. You can change your preferences at any time in the app
            settings.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  privacyContainer: {
    width: "80%",
    marginTop: "auto",
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 12,
  },
  privacyText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 18,
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    gap: 10,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonContainer: {
    gap: 12,
    width: "90%",
  },
  tagLine: {
    fontSize: 25,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 36,
  },
  brandLogo: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // backgroundColor: "#ffff33",
    alignItems: "center",
  },
  infiniteScrollContainer: {
    flex: 0.8,
    // backgroundColor: "#ff0066",
  },
});
