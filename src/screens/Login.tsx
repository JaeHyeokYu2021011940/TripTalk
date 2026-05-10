import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from "react-native";

const Login = ({ onNavigate }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.login}>
      <View style={styles.brandHeader}>
        <Text style={styles.talktrip}>TalkTrip</Text>
        <View style={[styles.frame, styles.frameSpaceBlock1]}>
          <Text style={[styles.text, styles.textTypo2]}>환영합니다!</Text>
          <Text style={[styles.text2, styles.textTypo1]}>로그인하여 여행을 시작하세요.</Text>
        </View>
      </View>
      <View style={[styles.loginForm, styles.frameSpaceBlock1]}>
        <View style={styles.frame2}>
          <Text style={[styles.text3, styles.textTypo1]}>이메일</Text>
          <View style={[styles.input, styles.inputBorder]}>
            <View style={styles.text4}>
              <TextInput
                style={[styles.exampleemailcom, styles.text7Typo, { padding: 0, color: "#191919" }]}
                placeholder="example@email.com"
                placeholderTextColor="#7a7a7a"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
          </View>
        </View>
        <View style={styles.frame2}>
          <Text style={[styles.text3, styles.textTypo1]}>비밀번호</Text>
          <View style={styles.input2}>
            <View style={[styles.text6, styles.text6FlexBox]}>
              <View style={styles.container}>
                <TextInput
                  style={[styles.text7, styles.text7Typo, { padding: 0, color: "#191919" }]}
                  placeholder="비밀번호를 입력하세요"
                  placeholderTextColor="#7a7a7a"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={[styles.icon, styles.iconLayout]}
                  activeOpacity={0.7}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Image style={styles.iconLayout} resizeMode="cover" source={require("../assets/icons/Eye_Icon.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameSpaceBlock}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={[styles.text8, styles.textTypo1]}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.frame5, styles.frameSpaceBlock]}>
          <Text style={[styles.text9, styles.textTypo]}>계정이 없으신가요?</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => onNavigate && onNavigate('Signup')}>
            <Text style={[styles.text10, styles.textTypo]}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.loginForm2}>
        <View style={styles.frame6}>
          <View style={styles.horizontalDivider} />
          <View style={styles.frameSpaceBlock1}>
            <Text style={[styles.text11, styles.textTypo2]}>또는 소셜 계정으로 로그인</Text>
          </View>
          <View style={styles.horizontalDivider} />
        </View>
        <View style={styles.frame7}>
          <TouchableOpacity style={[styles.button3, styles.buttonFlexBox]} activeOpacity={0.7}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Image style={styles.iconLayout} resizeMode="cover" source={require("../assets/icons/Kakao_Icon.png")} />
            </View>
            <Text style={[styles.text12, styles.textTypo1]}>카카오톡으로 시작하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button4, styles.buttonFlexBox]} activeOpacity={0.7}>
            <View style={[styles.icon, styles.iconLayout]}>
              <Image style={styles.iconLayout} resizeMode="cover" source={require("../assets/icons/Google_Icon.png")} />
            </View>
            <Text style={[styles.text12, styles.textTypo1]}>구글로 시작하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frame8}>
          <TouchableOpacity
            style={styles.button5}
            activeOpacity={0.7}
            onPress={() => onNavigate && onNavigate('Home')}
          >
            <Text style={[styles.text9, styles.textTypo]}>비회원으로 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock1: {
    paddingVertical: 0,
    paddingHorizontal: 16
  },
  textTypo2: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500"
  },
  textTypo1: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    fontWeight: "500"
  },
  inputBorder: {
    paddingTop: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    alignSelf: "stretch",
    overflow: "hidden"
  },
  text7Typo: {
    fontSize: 14,
    flex: 1,
    textAlign: "left",
    color: "#7a7a7a"
  },
  text6FlexBox: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  iconLayout: {
    width: 20,
    height: 20
  },
  frameSpaceBlock: {
    paddingTop: 8,
    alignSelf: "stretch"
  },
  textTypo: {
    lineHeight: 16,
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Roboto-Medium",
    fontWeight: "500"
  },
  buttonFlexBox: {
    height: 56,
    gap: 12,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    flexDirection: "row",
    borderRadius: 8,
    paddingVertical: 0,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center"
  },
  login: {
    width: "100%",
    height: 780,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    overflow: "hidden"
  },
  brandHeader: {
    paddingTop: 64,
    paddingBottom: 32,
    gap: 32,
    alignSelf: "stretch",
    alignItems: "center"
  },
  talktrip: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    color: "#191919"
  },
  frame: {
    height: 60,
    gap: 8,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    letterSpacing: -0.6,
    lineHeight: 32,
    textAlign: "center",
    color: "#191919"
  },
  text2: {
    color: "#7a7a7a",
    textAlign: "center"
  },
  loginForm: {
    gap: 16,
    alignSelf: "stretch",
    alignItems: "center"
  },
  frame2: {
    gap: 8,
    alignSelf: "stretch"
  },
  text3: {
    textAlign: "left",
    color: "#191919",
    alignSelf: "stretch"
  },
  input: {
    paddingBottom: 16
  },
  text4: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden"
  },
  exampleemailcom: {
    fontFamily: "Inter-Regular",
    flex: 1,
    textAlign: "left",
    color: "#7a7a7a"
  },
  input2: {
    alignSelf: "stretch"
  },
  text6: {
    paddingBottom: 14,
    paddingTop: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    alignSelf: "stretch",
    overflow: "hidden"
  },
  container: {
    paddingBottom: 2,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden"
  },
  text7: {
    flex: 1,
    textAlign: "left",
    color: "#7a7a7a",
    fontFamily: "Roboto-Medium",
    fontWeight: "500"
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  button: {
    backgroundColor: "#3c83f6",
    paddingHorizontal: 0,
    paddingVertical: 16,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center"
  },
  text8: {
    color: "#fff",
    textAlign: "center"
  },
  frame5: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center"
  },
  text9: {
    color: "#7a7a7a"
  },
  text10: {
    color: "#3c83f6"
  },
  loginForm2: {
    paddingTop: 32,
    gap: 24,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    alignItems: "center"
  },
  frame6: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center"
  },
  horizontalDivider: {
    height: 1,
    borderTopWidth: 1,
    flex: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid"
  },
  text11: {
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 12,
    textTransform: "uppercase",
    textAlign: "left",
    color: "#7a7a7a"
  },
  frame7: {
    gap: 12,
    alignSelf: "stretch",
    overflow: "hidden"
  },
  button3: {
    backgroundColor: "#fee500"
  },
  text12: {
    textAlign: "center",
    color: "#191919"
  },
  button4: {
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 56,
    borderColor: "#e0e0e0",
    borderStyle: "solid"
  },
  frame8: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  button5: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center"
  }
});

export default Login;