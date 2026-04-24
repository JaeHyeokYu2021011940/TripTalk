import * as React from "react";
import { Colors } from "../theme/colors";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import TopBar from "../components/TopBar";
import BottomTabBar from "../components/BottomTabBar";
import { Icons } from "../assets";

const Import = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {

	return (
		<View style={styles.import}>
			<TopBar title="가져오기" transparent />
			<View style={styles.content}>
				<View style={[styles.button, styles.iconFlexBox]}>
					<View style={[styles.icon, styles.iconFlexBox]}>
						<Image style={styles.icon2} resizeMode="cover" source={Icons.ImportOn} />
					</View>
					<Text style={[styles.txt, styles.txtTypo]}>.txt 파일 가져오기</Text>
				</View>
				<View style={[styles.frame, styles.frameFlexBox]}>
					<Text style={[styles.txt2, styles.txtTypo]}>.txt 파일을 가져와서 일정을 만들 수 있습니다.</Text>
				</View>
				<View style={styles.frame2}>
					<Text style={[styles.txt3, styles.txt3FlexBox]}>2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교{'\n'}2026년 3월 23일 오후 9:23, 아무개 : 청주대학교</Text>
					<Text style={styles.txt4}>가져온 .txt 파일 내용</Text>
				</View>
				<View style={[styles.button2, styles.iconFlexBox]}>
					<Text style={[styles.text, styles.txtTypo]}>여행 동선 분석하기</Text>
				</View>
			</View>
			<BottomTabBar activeTab="Import" onNavigate={onNavigate} />
		</View>);
};

const styles = StyleSheet.create({
	iconFlexBox: {
		justifyContent: "center",
		overflow: "hidden",
		alignItems: "center"
	},
	txtTypo: {
		textAlign: "center",
		fontFamily: "Roboto-Bold",
		fontWeight: "700"
	},
	frameFlexBox: {
		flexDirection: "row",
		alignSelf: "stretch"
	},
	txt3FlexBox: {
		flex: 1,
		alignSelf: "stretch"
	},
	textTypo: {
		fontSize: 10,
		width: 37,
		textAlign: "center",
		fontFamily: "Roboto-Bold",
		fontWeight: "700",
		letterSpacing: -0.4
	},
	oneUiPosition: {
		left: 0,
		top: 0,
		position: "absolute",
		width: "100%"
	},
	import: {
		width: "100%",
		alignItems: "center",
		backgroundColor: Colors.background.secondary,
		flex: 1
	},
	content: {
		paddingHorizontal: 16,
		paddingTop: 12,
		paddingBottom: 102, // 90(tabbar) + 12(gap)
		zIndex: 0,
		gap: 10,
		overflow: "hidden",
		alignSelf: "stretch",
		alignItems: "stretch",
		flex: 1
	},
	button: {
		height: 42,
		borderStyle: "dashed",
		borderColor: Colors.primary,
		flexDirection: "row",
		alignSelf: "stretch",
		borderWidth: 1,
		backgroundColor: Colors.background.white,
		justifyContent: "center",
		borderRadius: 12,
		gap: 10
	},
	icon: {
		width: 20
	},
	icon2: {
		height: 20,
		width: 20
	},
	txt: {
		color: Colors.primary,
		letterSpacing: -0.4,
		fontSize: 14,
		textAlign: "center",
		fontFamily: "Roboto-Bold",
		fontWeight: "700"
	},
	frame: {
		overflow: "hidden",
		alignItems: "flex-start",
		paddingLeft: 12
	},
	txt2: {
		letterSpacing: -0.2,
		color: Colors.text.secondary,
		opacity: 1,
		fontSize: 12,
		textAlign: "left"
	},
	frame2: {
		flex: 1,
		padding: 12,
		borderColor: Colors.border.default,
		borderStyle: "solid",
		borderWidth: 1,
		backgroundColor: Colors.background.white,
		borderRadius: 12,
		overflow: "hidden",
		alignSelf: "stretch"
	},
	txt3: {
		fontFamily: "Roboto-Regular",
		textAlign: "left",
		fontSize: 12,
		color: Colors.text.primary,
		letterSpacing: -0.4,
		lineHeight: 18
	},
	txt4: {
		fontSize: 12,
		color: Colors.text.secondary,
		textAlign: "left",
		fontFamily: "Roboto-Regular",
		letterSpacing: -0.4,
		marginTop: 10
	},
	button2: {
		height: 50,
		backgroundColor: Colors.primary,
		paddingHorizontal: 32,
		paddingVertical: 2,
		flexDirection: "row",
		alignSelf: "stretch",
		borderRadius: 12,
		justifyContent: "center"
	},
	text: {
		color: Colors.background.white,
		letterSpacing: -0.4,
		fontSize: 14,
		textAlign: "center",
		fontFamily: "Roboto-Bold",
		fontWeight: "700"
	},
	tabbar: {
		height: 90,
		bottom: 0,
		borderTopWidth: 1,
		justifyContent: "space-between",
		paddingBottom: 20,
		gap: 0,
		zIndex: 1,
		position: "absolute",
		width: "100%",
		left: 0,
		borderColor: Colors.border.default,
		borderStyle: "solid",
		flexDirection: "row",
		backgroundColor: Colors.background.white,
		overflow: "hidden"
	},
	button3: {
		paddingTop: 10,
		gap: 4,
		overflow: "hidden",
		alignItems: "center"
	},
	text2: {
		color: Colors.text.inactive
	},
	icon5: {
		alignSelf: "stretch",
		justifyContent: "center"
	},
	text3: {
		color: Colors.primary
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
		lineHeight: 24,
		letterSpacing: 1,
		color: Colors.text.primary,
		fontFamily: "Roboto-Bold",
		fontWeight: "700",
		textAlign: "left",
		includeFontPadding: false
	}
});

export default Import;
