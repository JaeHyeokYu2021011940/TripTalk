import * as React from "react";
import { Colors } from "../theme/colors";
import {Image, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import TopBar from "../components/TopBar";
import BottomTabBar from "../components/BottomTabBar";
import { Images } from "../assets";
import HomeCalendar from "../components/HomeCalendar";

const Home = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {
  	
  	return (
    		<View style={styles.home}>
            <TopBar title="TalkTrip" transparent />
      			<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        				<View style={[styles.content, styles.frame2SpaceBlock]}>
        				<View style={[styles.frame, styles.frameBorder1]}>
          					<Image style={styles.imageIcon} resizeMode="cover" source={Images.Thumb2} />
          					<View style={[styles.frame2, styles.frameFlexBox2]}>
            						<View style={[styles.frame3, styles.frameFlexBox2]}>
              							<Text style={styles.text}>현재 여행 중</Text>
              							<Text style={styles.text2}>제주도 푸른 밤 여행</Text>
              							<Text style={[styles.text3, styles.textTypo3]}>{`제주도 서귀포시 • 7.15 - 7.22 `}</Text>
            						</View>
            						<View style={styles.button}>
              							<Text style={[styles.text4, styles.textTypo3]}>전체 일정 보기</Text>
            						</View>
          					</View>
        				</View>
        				<View style={[styles.frame4, styles.frameFlexBox1]}>
          					<Text style={styles.text5}>나의 일정</Text>
        				</View>
        				<View style={[styles.frame5, styles.frameBorder1]}>
          <HomeCalendar />
        </View>
      </View>
    </ScrollView>
            <BottomTabBar activeTab="Home" onNavigate={onNavigate} />
    		</View>);
};

const styles = StyleSheet.create({
  	frame2SpaceBlock: {
    		paddingVertical: 12,
    		paddingHorizontal: 16
  	},
  	frameBorder1: {
    		borderWidth: 1,
    		borderRadius: 12,
    		borderColor: Colors.border.default,
    		borderStyle: "solid",
    		backgroundColor: Colors.background.white,
    		alignSelf: "stretch"
  	},
  	frameFlexBox2: {
    		gap: 4,
    		overflow: "hidden",
    		alignSelf: "stretch"
  	},
  	textTypo3: {
    		fontSize: 14,
    		textAlign: "left",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		textTransform: "uppercase",
    		lineHeight: 16
  	},
  	frameFlexBox1: {
    		flexDirection: "row",
    		alignSelf: "stretch"
  	},
  	frame6FlexBox: {
    		justifyContent: "space-between",
    		flexDirection: "row"
  	},
  	textTypo2: {
    		textAlign: "center",
    		color: Colors.text.primary,
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	frameBorder: {
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center",
    		flex: 1
  	},
  	textTypo1: {
    		fontFamily: "Roboto-Regular",
    		fontSize: 10,
    		textAlign: "center",
    		alignSelf: "stretch"
  	},
  	frameFlexBox: {
    		height: 12,
    		backgroundColor: Colors.primary,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	tabbarPosition: {
    		left: 0,
    		position: "absolute",
    		width: "100%",
    		overflow: "hidden"
  	},
  	textTypo: {
    		width: 37,
    		fontSize: 10,
    		textAlign: "center",
    		letterSpacing: -0.4,
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	home: {
    		backgroundColor: Colors.background.primary,
    		alignItems: "center",
    		flex: 1,
    		width: "100%"
  	},
  	scrollView: {
    		width: "100%",
    		flex: 1
  	},
  	contentContainer: {
    		paddingBottom: 90,
    		flexGrow: 1
  	},
  	content: {
    		gap: 10,
    		zIndex: 0,
    		width: "100%",
    		flex: 1
  	},
  	frame: {
    		shadowColor: "rgba(0, 0, 0, 0.1)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 10,
    		shadowOpacity: 1,
    		elevation: 10,
    		borderRadius: 20,
    		backgroundColor: Colors.background.white,
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	imageIcon: {
    		height: 167,
    		maxWidth: "100%",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		width: "100%"
  	},
  	frame2: {
    		justifyContent: "center",
    		paddingVertical: 12,
    		paddingHorizontal: 16,
    		alignItems: "center"
  	},
  	frame3: {
    		paddingBottom: 8
  	},
  	text: {
    		fontSize: 12,
    		textAlign: "left",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		textTransform: "uppercase",
    		lineHeight: 16,
    		color: Colors.primary
  	},
  	text2: {
    		color: Colors.text.primary,
    		fontSize: 22,
    		textAlign: "left",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		lineHeight: 28
  	},
  	text3: {
    		color: Colors.text.secondary
  	},
  	button: {
    		height: 40,
    		borderRadius: 8,
    		backgroundColor: Colors.primary,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	text4: {
    		letterSpacing: 0.6,
    		color: Colors.background.white
  	},
  	frame4: {
    		alignItems: "flex-start",
    		marginTop: 8
  	},
  	text5: {
    		letterSpacing: -0.4,
    		color: Colors.text.primary,
    		fontSize: 18,
    		textAlign: "left",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	frame5: {
    		padding: 16,
    		gap: 16,
    		borderRadius: 20,
    		backgroundColor: Colors.background.white,
    		shadowColor: "rgba(0, 0, 0, 0.05)",
    		shadowOffset: {
      			width: 0,
      			height: 2
    		},
    		shadowRadius: 6,
    		shadowOpacity: 1,
    		elevation: 5,
    		
  	},
  	frame6: {
    		height: 30,
    		gap: 20,
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	button2: {
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	icon: {
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center",
    		width: "100%"
  	},
  	icon2: {
    		height: 20,
    		width: 20
  	},
  	text6: {
    		fontSize: 18,
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700"
  	},
  	icon3: {
    		transform: [
      			{
        				rotate: "180deg"
      			}
    		],
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center",
    		width: "100%"
  	},
  	icon4: {
    		transform: [
      			{
        				rotate: "-180deg"
      			}
    		],
    		height: 20,
    		width: 20
  	},
  	frame7: {
    		alignSelf: "stretch"
  	},
  	frameParent: {
    		height: 20,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center",
    		borderBottomWidth: 1,
    		borderColor: Colors.border.light
  	},
  	frame8: {
    		justifyContent: "center"
  	},
  	text7: {
    		color: Colors.text.error
  	},
  	text8: {
    		color: Colors.text.primary
  	},
  	text13: {
    		color: Colors.text.saturday
  	},
  	frameGroup: {
    		height: 44,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	frame15: {
    		paddingHorizontal: 0,
    		paddingVertical: 4
  	},
  	frame25: {
    		borderTopLeftRadius: 4,
    		borderBottomLeftRadius: 4
  	},
  	frame29: {
    		borderTopRightRadius: 4,
    		borderBottomRightRadius: 4
  	},
  	text45: {
    		color: Colors.text.secondary
  	},
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
    		width: "100%"
  	},
  	button4: {
    		paddingTop: 10,
    		alignItems: "center",
    		flex: 1
  	},
  	icon5: {
    		justifyContent: "center",
    		overflow: "hidden",
    		alignSelf: "stretch",
    		alignItems: "center"
  	},
  	text49: {
    		color: Colors.primary,
    		width: 37
  	},
  	icon7: {
    		width: 20,
    		justifyContent: "center",
    		overflow: "hidden",
    		alignItems: "center"
  	},
  	text50: {
    		color: Colors.text.inactive
  	},
  	header: {
    		height: 72,
    		width: "100%",
    		paddingTop: 40,
    		paddingHorizontal: 14,
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	titleContainer: {
    		flexDirection: "row",
    		alignItems: "center"
  	},
  	titleText: {
    		fontSize: 20,
    		letterSpacing: 1,
    		color: Colors.text.primary,
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		textAlign: "left"
  	},
  	frameBorderBottom: {
    		borderBottomWidth: 1,
    		borderColor: Colors.border.light
  	}
});

export default Home;
