import * as React from "react";
import { Colors } from "../theme/colors";
import {Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import TopBar from "../components/TopBar";
import BottomTabBar from "../components/BottomTabBar";
const ProfileImg1 = { uri: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" }; // School trip placeholder
const ProfileImg2 = { uri: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop" }; // Seoul trip placeholder


const Notification = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {
  	
  	return (
      <View style={styles.notification}>
            <TopBar title="알림" hasBorder>
        				<View style={styles.tabContainer}>
          					<View style={[styles.tabButton, styles.activeTab]}>
            						<Text style={[styles.tabText, styles.activeTabText]}>전체</Text>
          					</View>
          					<View style={styles.tabButton}>
            						<Text style={styles.tabText}>안읽음</Text>
          					</View>
        				</View>
            </TopBar>
      			<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        				<View style={styles.content}>
          					<View style={styles.button}>
            						<Image style={styles.profileImgIcon} resizeMode="cover" source={ProfileImg1} />
            						<View style={styles.frame}>
              							<View style={styles.frame2}>
                								<Text style={[styles.text, styles.textTypo5]}>청주대학교 여행</Text>
                								<Text style={[styles.text2, styles.textTypo5]}>03. 09</Text>
              							</View>
              							<Text style={[styles.text2, styles.textTypo5]}>여행 D-Day 1</Text>
            						</View>
            						<View style={styles.frame3}>
              							<View style={[styles.button2, styles.iconFlexBox]}>
                								<View style={[styles.icon, styles.iconFlexBox]} />
              							</View>
            						</View>
          					</View>
          					<View style={styles.button}>
            						<Image style={styles.profileImgIcon} resizeMode="cover" source={ProfileImg2} />
            						<View style={styles.frame}>
              							<View style={styles.frame2}>
                								<Text style={[styles.text, styles.textTypo5]}>서울 여행</Text>
                								<Text style={[styles.text2, styles.textTypo5]}>03. 05</Text>
              							</View>
              							<Text style={[styles.text2, styles.textTypo5]}>새로운 일정을 생성했습니다.</Text>
            						</View>
            						<View style={styles.frame3}>
              							<View style={[styles.button2, styles.iconFlexBox]}>
                								<View style={[styles.icon, styles.iconFlexBox]} />
              							</View>
            						</View>
          					</View>
        				</View>
      			</ScrollView>
            <BottomTabBar activeTab="Notification" onNavigate={onNavigate} />
    		</View>);
};

const styles = StyleSheet.create({
  	textTypo5: {
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		lineHeight: 20,
    		overflow: "hidden"
  	},
  	iconFlexBox: {
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	tabbarBorder: {
    		borderColor: Colors.border.default,
    		backgroundColor: Colors.background.white,
    		position: "absolute",
    		width: "100%",
    		left: 0,
    		borderStyle: "solid",
    		overflow: "hidden"
  	},
  	textTypo1: {
    		textAlign: "center",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	textTypo: {
    		color: Colors.primary,
    		textAlign: "center",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		letterSpacing: -0.4
  	},
  	buttonFlexBox: {
    		height: 35,
    		paddingTop: 10,
    		overflow: "hidden",
    		flex: 1,
    		alignItems: "center"
  	},
  	notification: {
    		flex: 1,
    		backgroundColor: Colors.background.primary,
    		alignItems: "center",
    		width: "100%"
  	},
  	scrollView: {
    		width: "100%",
    		flex: 1
  	},
  	scrollContent: {
    		paddingBottom: 100,
    		flexGrow: 1
  	},
  	content: {
    		paddingHorizontal: 16,
    		paddingVertical: 12,
    		gap: 10,
    		zIndex: 0,
    		overflow: "hidden",
    		flex: 1,
    		alignSelf: "stretch"
  	},
  	button: {
    		paddingHorizontal: 0,
    		paddingVertical: 6,
    		gap: 12,
    		flexDirection: "row",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	profileImgIcon: {
    		width: 52,
    		borderRadius: 90,
    		height: 52
  	},
  	frame: {
    		overflow: "hidden",
    		flex: 1
  	},
  	frame2: {
    		gap: 8,
    		height: 20,
    		flexDirection: "row",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	text: {
    		color: Colors.text.primary,
    		fontSize: 14,
    		flex: 1
  	},
  	text2: {
    		fontSize: 12,
    		color: Colors.text.secondary
  	},
  	frame3: {
    		justifyContent: "flex-end",
    		display: "none",
    		height: 52,
    		flexDirection: "row",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	button2: {
    		height: 40,
    		width: 40
  	},
  	icon: {
    		height: 16,
    		width: "100%"
  	},
  	tabbar: {
    		height: 90,
    		bottom: 0,
    		borderTopWidth: 1,
    		justifyContent: "space-between",
    		paddingBottom: 20,
    		gap: 0,
    		zIndex: 1,
    		flexDirection: "row",
    		width: "100%",
    		left: 0,
    		position: "absolute",
    		backgroundColor: Colors.background.white
  	},
  	button5: {
    		gap: 4,
    		paddingTop: 10,
    		overflow: "hidden",
    		flex: 1,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	icon3: {
    		width: 20
  	},
  	icon4: {
    		width: 20,
    		height: 20
  	},
  	text6: {
    		color: Colors.text.inactive,
    		letterSpacing: -0.4,
    		textAlign: "center",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		fontSize: 10,
    		width: 37
  	},
  	icon9: {
    		alignSelf: "stretch"
  	},
  	text9: {
    		fontSize: 10,
    		width: 37
  	},
  	header: {
    		height: 113,
    		backgroundColor: Colors.background.white,
    		width: "100%",
    		paddingTop: 40,
    		paddingHorizontal: 14,
    		gap: 14,
    		borderBottomWidth: 1,
    		borderColor: Colors.border.default,
    		borderStyle: "solid"
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
  	},
  	tabContainer: {
    		height: 35,
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	tabButton: {
    		height: 35,
    		paddingBottom: 6,
    		justifyContent: "center",
    		alignItems: "center",
    		flex: 1
  	},
  	activeTab: {
    		borderColor: Colors.primary,
    		borderBottomWidth: 2,
    		borderStyle: "solid"
  	},
  	tabText: {
    		fontSize: 14,
    		letterSpacing: -0.4,
    		textAlign: "center",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		color: Colors.text.secondary
  	},
  	activeTabText: {
    		color: Colors.primary
  	}
});

export default Notification;
