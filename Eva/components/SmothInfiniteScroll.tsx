import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useAnimatedReaction,
  useAnimatedRef,
  useSharedValue,
  scrollTo,
} from "react-native-reanimated";
import { useRef } from "react";
import { StyleSheet } from "react-native";
const iconDataSet = {
  set1: [
    { emoji: "🍕", color: "#ffe5cc" },
    { emoji: "🍄‍🟫", color: "#e6f7ff" },
    { emoji: "🍔", color: "#fff0f5" },
    { emoji: "🍟", color: "#d9ecff" },
    { emoji: "🌭", color: "#fff5e6" },
  ],
  set2: [
    { emoji: "🍣", color: "#e6ffe6" },
    { emoji: "🍤", color: "#fff0f5" },
    { emoji: "🍙", color: "#ffffe6" },
    { emoji: "🍚", color: "#f0f0f0" },
    { emoji: "🍛", color: "#ffe6f2" },
  ],
  set3: [
    { emoji: "🍩", color: "#fff0f5" },
    { emoji: "🍪", color: "#ffffe6" },
    { emoji: "🍰", color: "#ffe6f2" },
    { emoji: "🎂", color: "#fff0f5" },
    { emoji: "🍮", color: "#ffe6f2" },
  ],
};
const ITEM_HEIGHT = 200;
const SCROLL_SPEED = 50; // pixels per second

const FRAME_RATE = 16; // Approx. 60 frames per second
interface SmoothInfiniteScrollProps {
  scrollDirection?: "up" | "down";
  iconSet: "set1" | "set2" | "set3";
}
function SmothInfiniteScroll({
  scrollDirection = "up",
  iconSet = "set1",
}: SmoothInfiniteScrollProps) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const scrollY = useSharedValue(0);

  const iconData = iconDataSet[iconSet];
  const items = [...iconData, ...iconData, ...iconData]; // Duplicate for seamless scroll
  const totalcontentHeight = items.length * ITEM_HEIGHT; // 10 for margin
  useEffect(() => {
    if (scrollDirection === "up") {
      scrollY.value = totalcontentHeight;
    } else {
      scrollY.value = 0;
    }
    const interval = setInterval(() => {
      const incremant =
        (SCROLL_SPEED / FRAME_RATE) * (scrollDirection === "up" ? -1 : 1);
      scrollY.value += incremant;
    }, 1000 / FRAME_RATE);
    return () => clearInterval(interval);
  }, [scrollDirection]);

  useAnimatedReaction(
    () => scrollY.value,
    (value) => {
      if (scrollDirection === "down") {
        if (value >= totalcontentHeight) {
          scrollY.value = 0;
          scrollTo(scrollRef, 0, 0, false);
        } else {
          scrollTo(scrollRef, 0, value, false);
        }
      } else {
        if (value <= 0) {
          scrollY.value = totalcontentHeight;
          scrollTo(scrollRef, 0, 0, false);
        } else {
          scrollTo(scrollRef, 0, value, false);
        }
      }
    }
  );
  return (
    <Animated.ScrollView
      ref={scrollRef}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      {items.map((item, index) => (
        <View
          key={index}
          style={[styles.iconContainer, { backgroundColor: item.color }]}
        >
          <Text style={{ fontSize: 48 }}>{item.emoji}</Text>
        </View>
      ))}
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    gap: 10,
  },
  iconContainer: {
    height: ITEM_HEIGHT,
    alignItems: "center",
    width: 160,
    borderRadius: 12,
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    elevation: 4,
    marginHorizontal: 10,
    shadowColor: "#000",

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    overflow: "hidden",
  },
  itemContainer: {
    width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    alignItems: "center",
  },
});

export default SmothInfiniteScroll;
