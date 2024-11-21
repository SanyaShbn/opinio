import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { styles } from "./style";
import { icons } from "../icons";

function TabBarButton(props) {
  const { isFocused, label, routeName, color, style } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.1]);
    const top = interpolate(scale.value, [0, 1], [0, 4]);

    return {
      // styles
      
      
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      ...styles.tabbarItem,
      opacity,
    };
  });

  return (
    <Pressable {...props} style={styles.tabBarItemWrapper} >
      <Animated.View style={[animatedIconStyle]}>
        <View style={styles.iconContainer} >
         {icons[routeName]}
        </View>
            <Text style={styles.tabbarItem}>
        {label}
      </Text>
            
      </Animated.View>

      
    </Pressable>
  );
}

export default TabBarButton;
