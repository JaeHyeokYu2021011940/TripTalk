import * as React from "react";
import { Colors } from "../theme/colors";
import {Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import TopBar from "../components/TopBar";
import BottomTabBar from "../components/BottomTabBar";
import { Icons, Images } from "../assets";

const Schedule = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {
  	
  	return (
    		<View style={styles.schedule}>
            <TopBar title="일정" hasBorder>
        				<View style={styles.tabContainer}>
          					<View style={[styles.tabButton, styles.activeTab]}>
            						<Text style={[styles.tabText, styles.activeTabText]}>전체</Text>
          					</View>
          					<View style={styles.tabButton}>
            						<Text style={styles.tabText}>진행 중</Text>
          					</View>
          					<View style={styles.tabButton}>
            						<Text style={styles.tabText}>예정된 여행</Text>
          					</View>
          					<View style={styles.tabButton}>
            						<Text style={styles.tabText}>지난 여행</Text>
          					</View>
        				</View>
            </TopBar>
      			<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        				<View style={styles.content}>
          					<View style={styles.button}>
            						<View style={styles.frame}>
              							<Image style={[styles.imageIcon, styles.frame2Position]} resizeMode="cover" source={Images.Thumb1} />
              							<View style={[styles.frame2, styles.frame2Position]}>
                								<View style={[styles.frame3, styles.frame3FlexBox]}>
                  									<Text style={[styles.text, styles.textTypo5]}>여행 중</Text>
                								</View>
              							</View>
            						</View>
            						<View style={styles.frame4}>
              							<View style={[styles.frame5, styles.frame5FlexBox]}>
                								<View style={styles.frame6}>
                  									<Text style={[styles.text2, styles.textTypo5]}>경복궁 여행</Text>
                  									<Text style={[styles.text3, styles.textClr]}>2026.05.01 - 2026.05.03 (2박 3일)</Text>
                								</View>
                								<View style={styles.button2}>
                  									<View style={[styles.icon, styles.iconLayout]}>
                    										<Image style={styles.iconLayout} resizeMode="cover" source={Icons.Kebab} />
                  									</View>
                								</View>
              							</View>
              							<View style={[styles.frame7, styles.frameFlexBox]}>
                								<TouchableOpacity style={styles.button3} onPress={() => onNavigate('ScheduleDetail')}>
                  									<Text style={[styles.text4, styles.textTypo4]}>일정 보기</Text>
                								</TouchableOpacity>
              							</View>
              							<View style={[styles.button4, styles.frame3FlexBox]}>
                								<Text style={[styles.text5, styles.textTypo3]}>일정 더보기</Text>
              							</View>
            						</View>
          					</View>
          					<View style={styles.button}>
            						<View style={styles.frame}>
              							<Image style={[styles.imageIcon, styles.frame2Position]} resizeMode="cover" source={Images.Thumb2} />
              							<View style={[styles.frame2, styles.frame2Position]}>
                								<View style={[styles.frame10, styles.frameLayout]}>
                  									<Text style={[styles.text, styles.textTypo5]}>D-9</Text>
                								</View>
              							</View>
            						</View>
            						<View style={styles.frame4}>
              							<View style={[styles.frame5, styles.frame5FlexBox]}>
                								<View style={styles.frame6}>
                  									<Text style={[styles.text2, styles.textTypo5]}>제주도 푸른 밤 여행</Text>
                  									<Text style={[styles.text3, styles.textClr]}>2026.05.10 - 2026.05.15 (4박 6일)</Text>
                								</View>
                								<View style={styles.button2}>
                  									<View style={[styles.icon, styles.iconLayout]}>
                    										<Image style={styles.iconLayout} resizeMode="cover" source={Icons.Kebab} />
                  									</View>
                								</View>
              							</View>
              							<View style={[styles.frame7, styles.frameFlexBox]}>
                								<TouchableOpacity style={styles.button3} onPress={() => onNavigate('ScheduleDetail')}>
                  									<Text style={[styles.text4, styles.textTypo4]}>일정 보기</Text>
                								</TouchableOpacity>
              							</View>
              							<View style={[styles.button4, styles.frame3FlexBox]}>
                								<Text style={[styles.text5, styles.textTypo3]}>일정 더보기</Text>
              							</View>
            						</View>
          					</View>
          					<View style={styles.button}>
            						<View style={styles.frame}>
              							<Image style={[styles.imageIcon, styles.frame2Position]} resizeMode="cover" source={Images.Thumb3} />
              							<View style={[styles.frame2, styles.frame2Position]}>
                								<View style={[styles.frame10, styles.frameLayout]}>
                  									<Text style={[styles.text, styles.textTypo5]}>D-21</Text>
                								</View>
              							</View>
            						</View>
            						<View style={styles.frame4}>
              							<View style={[styles.frame5, styles.frame5FlexBox]}>
                								<View style={styles.frame6}>
                  									<Text style={[styles.text2, styles.textTypo5]}>전주 식도락 야미</Text>
                  									<Text style={[styles.text3, styles.textClr]}>2026.05.22 - 2026.05.23 (1박 2일)</Text>
                								</View>
                								<View style={styles.button2}>
                  									<View style={[styles.icon, styles.iconLayout]}>
                    										<Image style={styles.iconLayout} resizeMode="cover" source={Icons.Kebab} />
                  									</View>
                								</View>
              							</View>
              							<View style={[styles.frame7, styles.frameFlexBox]}>
                								<TouchableOpacity style={styles.button3} onPress={() => onNavigate('ScheduleDetail')}>
                  									<Text style={[styles.text4, styles.textTypo4]}>일정 보기</Text>
                								</TouchableOpacity>
              							</View>
              							<View style={[styles.button4, styles.frame3FlexBox]}>
                								<Text style={[styles.text5, styles.textTypo3]}>일정 더보기</Text>
              							</View>
            						</View>
          					</View>
        				</View>
      			</ScrollView>
            <BottomTabBar activeTab="Schedule" onNavigate={onNavigate} />
    		</View>);
};

const styles = StyleSheet.create({
  	frame2Position: {
    		left: 0,
    		top: 0
  	},
  	frame3FlexBox: {
    		backgroundColor: Colors.primary,
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	textTypo5: {
    		textAlign: "left",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	frame5FlexBox: {
    		gap: 0,
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	textClr: {
    		color: Colors.text.secondary,
    		fontSize: 14
  	},
  	iconLayout: {
    		height: 16,
    		width: 16
  	},
  	frameFlexBox: {
    		flexDirection: "row",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	textTypo4: {
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		textAlign: "left"
  	},
  	textTypo3: {
    		textAlign: "center",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	frameLayout: {
    		height: 24,
    		width: 64,
    		borderRadius: 12,
    		overflow: "hidden"
  	},
  	tabbarClr: {
    		width: "100%",
    		left: 0,
    		backgroundColor: Colors.background.white,
    		position: "absolute",
    		borderColor: Colors.border.default,
    		borderStyle: "solid",
    		overflow: "hidden"
  	},
  	textTypo: {
    		letterSpacing: -0.4,
    		textAlign: "center",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	buttonFlexBox: {
    		height: 35,
    		paddingTop: 10,
    		overflow: "hidden",
    		alignItems: "center",
    		flex: 1
  	},
  	schedule: {
    		width: "100%",
    		alignItems: "center",
    		flex: 1,
    		backgroundColor: Colors.background.primary
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
    		gap: 16,
    		zIndex: 0,
    		overflow: "hidden",
    		alignSelf: "stretch"
  	},
  	button: {
    		borderWidth: 1,
    		borderColor: Colors.border.default,
    		borderRadius: 12,
    		borderStyle: "solid",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		backgroundColor: Colors.background.primary
  	},
  	frame: {
    		height: 140,
    		overflow: "hidden",
    		alignSelf: "stretch"
  	},
  	imageIcon: {
    		right: 0,
    		maxWidth: "100%",
    		maxHeight: "100%",
    		bottom: 0,
    		position: "absolute",
    		top: 0,
    		overflow: "hidden"
  	},
  	frame2: {
    		width: 326,
    		padding: 12,
    		position: "absolute",
    		top: 0,
    		overflow: "hidden",
    		height: 140
  	},
  	frame3: {
    		justifyContent: "center",
    		height: 24,
    		width: 64,
    		borderRadius: 12,
    		overflow: "hidden"
  	},
  	text: {
    		fontSize: 12,
    		color: Colors.background.white
  	},
  	frame4: {
    		padding: 16,
    		gap: 6,
    		backgroundColor: Colors.background.white,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	frame5: {
    		alignSelf: "stretch"
  	},
  	frame6: {
    		flex: 1
  	},
  	text2: {
    		fontSize: 18,
    		lineHeight: 23,
    		color: Colors.text.primaryDark,
    		alignSelf: "stretch"
  	},
  	text3: {
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		textAlign: "left",
    		alignSelf: "stretch"
  	},
  	button2: {
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	icon: {
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	frame7: {
    		justifyContent: "flex-end"
  	},
  	button3: {
    		height: 32,
    		width: 90,
    		borderRadius: 6,
    		backgroundColor: Colors.surface.lightBlue,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	text4: {
    		color: Colors.primary,
    		fontSize: 14
  	},
  	button4: {
    		width: 294,
    		height: 40,
    		borderRadius: 8,
    		display: "none",
    		justifyContent: "center"
  	},
  	text5: {
    		fontSize: 14,
    		color: Colors.background.white,
    		alignSelf: "stretch"
  	},
  	frame10: {
    		backgroundColor: Colors.text.primary,
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	tabbar: {
    		height: 90,
    		bottom: 0,
    		borderTopWidth: 1,
    		paddingBottom: 20,
    		zIndex: 1,
    		gap: 0,
    		justifyContent: "space-between",
    		flexDirection: "row",
    		width: "100%",
    		left: 0,
    		position: "absolute",
    		backgroundColor: Colors.background.white
  	},
  	button13: {
    		gap: 4,
    		paddingTop: 10,
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center",
    		flex: 1
  	},
  	icon7: {
    		width: 20,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	icon8: {
    		height: 20,
    		width: 20
  	},
  	text14: {
    		color: Colors.text.inactive,
    		fontSize: 10,
    		width: 37,
    		letterSpacing: -0.4
  	},
  	icon11: {
    		justifyContent: "center",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	text16: {
    		fontSize: 10,
    		width: 37,
    		letterSpacing: -0.4,
    		color: Colors.primary
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

export default Schedule;
