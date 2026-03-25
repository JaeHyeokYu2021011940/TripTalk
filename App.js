import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  NativeModules,
} from 'react-native';

export default function App() {
  const [kakaoText, setKakaoText] = useState('');

  useEffect(() => {
    // 공유로 넘어온 텍스트 받기
    if (NativeModules.IntentModule) {
      NativeModules.IntentModule.getSharedText(text => {
        if (text) setKakaoText(text);
      });
    }
  }, []);

  const pickFile = () => {
    if (NativeModules.IntentModule) {
      NativeModules.IntentModule.openFilePicker(text => {
        if (text) setKakaoText(text);
        else Alert.alert('오류', '파일을 읽을 수 없어요.');
      });
    }
  };
  const sendToServer = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/kakao/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kakao_text: kakaoText,
        }),
      });

      const data = await response.json();

      console.log('서버 응답:', data);
      Alert.alert('성공', '서버로 텍스트를 보냈어요.');
    } catch (error) {
      console.error('에러 발생:', error);
      Alert.alert('오류', '서버 전송에 실패했어요.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>여행 타임라인</Text>

      <TouchableOpacity style={styles.fileButton} onPress={pickFile}>
        <Text style={styles.fileButtonText}>📂 txt 파일 선택</Text>
      </TouchableOpacity>

      <Text style={styles.label}>카카오톡 대화 내용</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="파일 선택 또는 직접 붙여넣기 하세요"
        value={kakaoText}
        onChangeText={setKakaoText}
        textAlignVertical="top"
      />

      <TouchableOpacity
        style={[styles.button, !kakaoText && styles.buttonDisabled]}
        disabled={!kakaoText}
        onPress={sendToServer}
      >
        <Text style={styles.buttonText}>여행 동선 분석하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 10,
  },
  fileButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FEE500',
    borderStyle: 'dashed',
    marginBottom: 16,
  },
  fileButtonText: {
    fontSize: 15,
    color: '#555',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
