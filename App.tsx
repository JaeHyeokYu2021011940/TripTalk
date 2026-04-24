import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/screens/Home';
import Import from './src/screens/Import';
import Schedule from './src/screens/Schedule';
import Notification from './src/screens/Notification';
import ScheduleDetail from './src/screens/Schedule_Detail';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
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
        return <Home onNavigate={setCurrentScreen} />;
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
