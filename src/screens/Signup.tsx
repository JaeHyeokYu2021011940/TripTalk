import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

const Signup = ({ onNavigate }: any) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  const allAgreed = termsAgreed && privacyAgreed && marketingAgreed;

  const handleToggleAll = () => {
    const newValue = !allAgreed;
    setTermsAgreed(newValue);
    setPrivacyAgreed(newValue);
    setMarketingAgreed(newValue);
  };

  const getCheckboxIcon = (checked: boolean) => {
    return checked
      ? require("../assets/icons/ChoiceOn_Icon.png")
      : require("../assets/icons/ChoiceOff_Icon.png");
  };

  return (
    <KeyboardAvoidingView
      style={[styles.signup, styles.signupFlexBox]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.headerSection, styles.formSpaceBlock]}>
          <Text style={[styles.text, styles.textTypo1]}>회원가입</Text>
          <Text style={[styles.text2, styles.textClr]}>새로운 계정을 만들어보세요</Text>
        </View>
        <View style={[styles.form, styles.formSpaceBlock]}>
          <View style={styles.emailInput}>
            <Text style={[styles.text3, styles.textLayout]}>이메일</Text>
            <View style={styles.container}>
              <View style={[styles.input, styles.inputBorder]}>
                <View style={styles.icon}>
                  <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Email_Icon.png")} />
                </View>
                <View style={[styles.container2, styles.signupFlexBox]}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="example@email.com"
                    placeholderTextColor="#7a7a7a"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.emailInput}>
            <Text style={[styles.text3, styles.textLayout]}>이름</Text>
            <View style={styles.container}>
              <View style={[styles.input, styles.inputBorder]}>
                <View style={styles.icon}>
                  <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Profile_Icon.png")} />
                </View>
                <View style={[styles.container2, styles.signupFlexBox]}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="홍길동"
                    placeholderTextColor="#7a7a7a"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.emailInput}>
            <Text style={[styles.text3, styles.textLayout]}>전화번호</Text>
            <View style={styles.container}>
              <View style={[styles.input, styles.inputBorder]}>
                <View style={styles.icon}>
                  <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Phone_Icon.png")} />
                </View>
                <View style={[styles.container2, styles.signupFlexBox]}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="010-1234-5678"
                    placeholderTextColor="#7a7a7a"
                    value={phone}
                    onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ''))}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.emailInput}>
            <Text style={[styles.text3, styles.textLayout]}>비밀번호</Text>
            <View style={styles.container}>
              <View style={[styles.input, styles.inputBorder]}>
                <View style={styles.icon}>
                  <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Password_Icon.png")} />
                </View>
                <View style={[styles.container2, styles.signupFlexBox]}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="8자 이상 입력해주세요"
                    placeholderTextColor="#7a7a7a"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                  />
                </View>
                <TouchableOpacity
                  style={[styles.button, styles.inputFlexBox]}
                  activeOpacity={0.7}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <View style={styles.icon13}>
                    <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Eye_Icon.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.emailInput}>
            <Text style={[styles.text3, styles.textLayout]}>비밀번호 확인</Text>
            <View style={styles.container}>
              <View style={[styles.input, styles.inputBorder]}>
                <View style={styles.icon}>
                  <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Password_Icon.png")} />
                </View>
                <View style={[styles.container2, styles.signupFlexBox]}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder="비밀번호를 다시 입력해주세요"
                    placeholderTextColor="#7a7a7a"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                  />
                </View>
                <TouchableOpacity
                  style={[styles.button, styles.inputFlexBox]}
                  activeOpacity={0.7}
                  onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                >
                  <View style={styles.icon13}>
                    <Image style={styles.icon6} resizeMode="cover" source={require("../assets/icons/Eye_Icon.png")} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.termsAgreementContainer, styles.button3Layout]}>
            <TouchableOpacity style={styles.selectAll} activeOpacity={0.7} onPress={handleToggleAll}>
              <Image source={getCheckboxIcon(allAgreed)} style={styles.input6} />
              <View style={styles.labelmargin}>
                <Text style={[styles.text12, styles.textTypo]}>전체 동의</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.horizontalDivider} />
            <View style={styles.individualItems}>
              <TouchableOpacity style={styles.selectAll} activeOpacity={0.7} onPress={() => setTermsAgreed(!termsAgreed)}>
                <Image source={getCheckboxIcon(termsAgreed)} style={styles.input6} />
                <View style={styles.labelmargin}>
                  <Text style={[styles.text13, styles.textLayout]}>
                    <Text style={styles.text14}>{`이용약관 동의 `}</Text>
                    <Text style={styles.text15}>*</Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectAll} activeOpacity={0.7} onPress={() => setPrivacyAgreed(!privacyAgreed)}>
                <Image source={getCheckboxIcon(privacyAgreed)} style={styles.input6} />
                <View style={styles.labelmargin}>
                  <Text style={[styles.text13, styles.textLayout]}>
                    <Text style={styles.text14}>{`개인정보 처리방침 동의 `}</Text>
                    <Text style={styles.text15}>*</Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectAll} activeOpacity={0.7} onPress={() => setMarketingAgreed(!marketingAgreed)}>
                <Image source={getCheckboxIcon(marketingAgreed)} style={styles.input6} />
                <View style={styles.labelmargin}>
                  <Text style={[styles.text19, styles.textLayout]}>마케팅 정보 수신 동의 (선택)</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={[styles.button3, styles.button3Layout]} activeOpacity={0.7}>
            <Text style={[styles.text20, styles.textTypo1]}>회원가입</Text>
          </TouchableOpacity>
          <View style={styles.loginLink}>
            <Text style={[styles.text21, styles.textLayout]}>{`이미 계정이 있으신가요? `}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => onNavigate && onNavigate("Login")}>
              <Text style={[styles.text22, styles.textLayout]}>로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40
  },
  textInputStyle: {
    fontSize: 16,
    color: "#191919",
    flex: 1,
    padding: 0,
    fontFamily: "Roboto-Regular"
  },
  signupFlexBox: {
    flex: 1,
    overflow: "hidden"
  },
  formSpaceBlock: {
    paddingHorizontal: 24,
    alignSelf: "stretch"
  },
  textTypo1: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },
  textClr: {
    color: "#7a7a7a",
    fontFamily: "Roboto-Regular"
  },
  textLayout: {
    lineHeight: 20,
    fontSize: 14
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
    backgroundColor: "#fff"
  },
  iconLayout: {
    borderRadius: 2,
    position: "absolute"
  },
  inputFlexBox: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  button3Layout: {
    borderRadius: 16,
    alignSelf: "stretch"
  },
  textTypo: {
    lineHeight: 24,
    fontSize: 16,
    textAlign: "left"
  },
  signup: {
    overflow: "hidden",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%"
  },
  headerSection: {
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: "left",
    color: "#191919"
  },
  text2: {
    lineHeight: 24,
    fontSize: 16,
    textAlign: "left"
  },
  form: {
    paddingBottom: 24,
    gap: 24
  },
  emailInput: {
    gap: 8,
    alignSelf: "stretch"
  },
  text3: {
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    color: "#191919",
    alignSelf: "stretch"
  },
  container: {
    alignSelf: "stretch"
  },
  input: {
    borderRadius: 12,
    paddingLeft: 16,
    gap: 16,
    justifyContent: "center",
    flexDirection: "row",
    height: 56,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch"
  },
  icon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  container2: {
    overflow: "hidden",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  icon5: {
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  icon6: {
    width: 20,
    height: 20
  },
  button: {
    width: 56,
    justifyContent: "center"
  },
  icon13: {
    maxWidth: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%"
  },
  termsAgreementContainer: {
    backgroundColor: "#f8fafc",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
    gap: 16
  },
  selectAll: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  input6: {
    width: 20,
    height: 20
  },
  labelmargin: {
    paddingLeft: 12
  },
  text12: {
    fontFamily: "Roboto-Regular",
    color: "#191919"
  },
  horizontalDivider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    alignSelf: "stretch"
  },
  individualItems: {
    gap: 12,
    alignSelf: "stretch"
  },
  text13: {
    textAlign: "left"
  },
  text14: {
    fontFamily: "Roboto-Regular",
    color: "#191919"
  },
  text15: {
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#ef4444"
  },
  text19: {
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    color: "#191919"
  },
  button3: {
    boxShadow: "0px 4px 14px rgba(46, 128, 255, 0.39)",
    elevation: 14,
    backgroundColor: "#3c83f6",
    paddingHorizontal: 0,
    paddingVertical: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  text20: {
    fontSize: 18,
    lineHeight: 28,
    color: "#fff",
    textAlign: "center"
  },
  loginLink: {
    paddingTop: 8,
    gap: 4,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch"
  },
  text21: {
    textAlign: "center",
    color: "#7a7a7a",
    fontFamily: "Roboto-Regular"
  },
  text22: {
    color: "#3c83f6",
    textAlign: "center",
    fontFamily: "Roboto-Regular"
  }
});

export default Signup;
