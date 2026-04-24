import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Icons } from "../assets";
import { Colors } from "../theme/colors";

export type TabType = 'Home' | 'Import' | 'Schedule' | 'Notification';

interface BottomTabBarProps {
  activeTab: TabType;
  onNavigate: (screen: string) => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onNavigate }) => {
  return (
    <View style={styles.tabbar}>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Home')}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} resizeMode="cover" source={activeTab === 'Home' ? Icons.HomeOn : Icons.HomeOff} />
        </View>
        <Text style={[styles.text, activeTab === 'Home' ? styles.activeText : styles.inactiveText]}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Import')}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} resizeMode="cover" source={activeTab === 'Import' ? Icons.ImportOn : Icons.ImportOff} />
        </View>
        <Text style={[styles.text, activeTab === 'Import' ? styles.activeText : styles.inactiveText]}>가져오기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Schedule')}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} resizeMode="cover" source={activeTab === 'Schedule' ? Icons.ScheduleOn : Icons.ScheduleOff} />
        </View>
        <Text style={[styles.text, activeTab === 'Schedule' ? styles.activeText : styles.inactiveText]}>일정</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Notification')}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} resizeMode="cover" source={activeTab === 'Notification' ? Icons.NotificationOn : Icons.NotificationOff} />
        </View>
        <Text style={[styles.text, activeTab === 'Notification' ? styles.activeText : styles.inactiveText]}>알림</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    height: 90,
    bottom: 0,
    borderTopWidth: 1,
    paddingBottom: 20,
    gap: 0,
    zIndex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: Colors.border.default,
    borderStyle: "solid",
    backgroundColor: Colors.background.white,
    left: 0,
    position: "absolute",
    width: "100%",
    overflow: "hidden"
  },
  button: {
    paddingTop: 10,
    gap: 4,
    alignItems: "center",
    flex: 1,
    overflow: "hidden"
  },
  iconContainer: {
    width: 20,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20
  },
  text: {
    width: 37,
    fontSize: 10,
    textAlign: "center",
    letterSpacing: -0.4,
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },
  activeText: {
    color: Colors.primary
  },
  inactiveText: {
    color: Colors.text.inactive
  }
});

export default BottomTabBar;
