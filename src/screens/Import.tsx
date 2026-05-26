import * as React from 'react';
import { useState, useEffect } from 'react';
import { Colors } from '../theme/colors';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  NativeModules,
  Alert,
  ScrollView,
} from 'react-native';

import LottieView from 'lottie-react-native';

import TopBar from '../components/TopBar';
import BottomTabBar from '../components/BottomTabBar';
import { Icons } from '../assets';

const Import = ({
  onNavigate,
  setTripPlanId,
}: {
  onNavigate: (screen: string) => void;
  setTripPlanId: (id: number) => void;
}) => {
  const [kakaoText, setKakaoText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (NativeModules.IntentModule) {
      NativeModules.IntentModule.getSharedText((text: string | null) => {
        if (text) setKakaoText(text);
      });
    }
  }, []);

  const pickFile = () => {
    if (NativeModules.IntentModule) {
      NativeModules.IntentModule.openFilePicker((text: string | null) => {
        if (text) setKakaoText(text);
        else Alert.alert('오류', '파일을 읽을 수 없어요.');
      });
    }
  };

  const analyzeSchedule = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        'http://10.0.2.2:8000/api/chat-files/upload/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            kakao_text: kakaoText,
          }),
        },
      );

      const data = await response.json();
      console.log('서버 응답:', data);
      setTripPlanId(data.trip_plan_id);
      onNavigate('ScheduleDetail');
    } catch (error) {
      console.log('서버 연결 오류:', error);
      Alert.alert('오류', '백엔드 연결 실패');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.import}>
      <TopBar title="가져오기" transparent />

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.button, styles.iconFlexBox]}
          onPress={pickFile}
          disabled={isLoading}
        >
          <View style={[styles.icon, styles.iconFlexBox]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={Icons.ImportOn}
            />
          </View>
          <Text style={[styles.txt, styles.txtTypo]}>.txt 파일 가져오기</Text>
        </TouchableOpacity>

        <View style={[styles.frame, styles.frameFlexBox]}>
          <Text style={[styles.txt2, styles.txtTypo]}>
            .txt 파일을 가져와서 일정을 만들 수 있습니다.
          </Text>
        </View>

        <View style={styles.frame2}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.txt3, styles.txt3FlexBox]}>
              {kakaoText || '가져온 .txt 파일 내용이 여기에 표시됩니다.'}
            </Text>
          </ScrollView>

          {kakaoText ? (
            <Text style={styles.txt4}>가져온 .txt 파일 내용</Text>
          ) : null}
        </View>

        {isLoading && (
          <View style={styles.loadingOverlay}>
            <View style={styles.loadingCard}>
              <LottieView
                source={require('../assets/lottie/plane-loading.json')}
                autoPlay
                loop
                style={styles.lottie}
              />

              <Text style={styles.loadingTitle}>여행 일정을 생성 중이에요</Text>

              <Text style={styles.loadingSubText}>
                대화 내용을 분석하고 있어요
              </Text>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.button2,
            styles.iconFlexBox,
            (!kakaoText || isLoading) && styles.buttonDisabled,
          ]}
          disabled={!kakaoText || isLoading}
          onPress={analyzeSchedule}
        >
          <Text style={[styles.text, styles.txtTypo]}>
            {isLoading ? '분석 중...' : '여행 동선 분석하기'}
          </Text>
        </TouchableOpacity>
      </View>

      <BottomTabBar activeTab="Import" onNavigate={onNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  txtTypo: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  frameFlexBox: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  txt3FlexBox: {
    flex: 1,
    alignSelf: 'stretch',
  },
  import: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.background.secondary,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 102,
    zIndex: 0,
    gap: 10,
    overflow: 'hidden',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flex: 1,
  },
  button: {
    height: 42,
    borderStyle: 'dashed',
    borderColor: Colors.primary,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: Colors.background.white,
    justifyContent: 'center',
    borderRadius: 12,
    gap: 10,
  },
  icon: {
    width: 20,
  },
  icon2: {
    height: 20,
    width: 20,
  },
  txt: {
    color: Colors.primary,
    letterSpacing: -0.4,
    fontSize: 14,
  },
  frame: {
    overflow: 'hidden',
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  txt2: {
    letterSpacing: -0.2,
    color: Colors.text.secondary,
    opacity: 1,
    fontSize: 12,
    textAlign: 'left',
  },
  frame2: {
    flex: 1,
    padding: 12,
    borderColor: Colors.border.default,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: Colors.background.white,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  txt3: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
    fontSize: 12,
    color: Colors.text.primary,
    letterSpacing: -0.4,
    lineHeight: 18,
  },
  txt4: {
    fontSize: 12,
    color: Colors.text.secondary,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    letterSpacing: -0.4,
    marginTop: 10,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
    zIndex: 999,
  },

  loadingCard: {
    width: 280,
    paddingVertical: 30,
    paddingHorizontal: 22,
    backgroundColor: Colors.background.white,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },

  lottie: {
    width: 150,
    height: 150,
  },

  loadingTitle: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    color: Colors.text.primary,
    marginTop: 4,
  },

  loadingSubText: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    color: Colors.text.secondary,
    marginTop: 6,
  },
  button2: {
    height: 50,
    backgroundColor: Colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 2,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 12,
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: Colors.text.secondary,
  },
  text: {
    color: Colors.background.white,
    letterSpacing: -0.4,
    fontSize: 14,
  },
});

export default Import;
