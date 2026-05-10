import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, NativeModules } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Import from './src/screens/Import';
import Schedule from './src/screens/Schedule';
import Notification from './src/screens/Notification';
import ScheduleDetail from './src/screens/Schedule_Detail';
import Signup from './src/screens/Signup';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentScreen, setCurrentScreen] = useState('Login');

  useEffect(() => {
    if (NativeModules.IntentModule) {
      NativeModules.IntentModule.getSharedText((text: string | null) => {
        if (text) {
          setCurrentScreen('Import');
        }
      });
    }
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'Signup':
        return <Signup onNavigate={setCurrentScreen} />;
      case 'Home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'Import':
        return <Import onNavigate={setCurrentScreen} />;
      case 'Schedule':
        return <Schedule onNavigate={setCurrentScreen} />;
      case 'Notification':
        return <Notification onNavigate={setCurrentScreen} />;
      case 'ScheduleDetail':
        return <ScheduleDetail onNavigate={setCurrentScreen} />;
      default:
        return <Login onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        {renderScreen()}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;