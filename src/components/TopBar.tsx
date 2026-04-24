import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../theme/colors";

interface TopBarProps {
  title: string;
  hasBorder?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ title, hasBorder = false, transparent = false, children }) => {
  return (
    <View style={[
      styles.header, 
      !children && styles.headerSmall,
      hasBorder && styles.withBorder,
      transparent && styles.transparentBg
    ]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.background.white,
    width: "100%",
    paddingTop: 40,
    paddingHorizontal: 14,
    gap: 14,
  },
  headerSmall: {
    height: 72,
    justifyContent: "flex-start",
    gap: 0,
  },
  withBorder: {
    borderBottomWidth: 1,
    borderColor: Colors.border.default,
    borderStyle: "solid"
  },
  transparentBg: {
    backgroundColor: "transparent"
  },
  titleContainer: {
    height: 24,
    flexDirection: "row",
    alignItems: "center"
  },
  titleText: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.text.primary,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    textAlign: "left",
    includeFontPadding: false
  }
});

export default TopBar;
