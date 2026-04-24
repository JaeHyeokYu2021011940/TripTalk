import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Colors } from "../theme/colors";
import { Icons } from "../assets";

// LocaleConfig 설정
LocaleConfig.locales['ko'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘'
};
LocaleConfig.defaultLocale = 'ko';

const HomeCalendar = () => {
  return (
    <Calendar
      theme={{
        backgroundColor: 'transparent',
        calendarBackground: 'transparent',
        textSectionTitleColor: Colors.text.primary,
        textSectionTitleDisabledColor: Colors.text.inactive,
        selectedDayBackgroundColor: Colors.primary,
        selectedDayTextColor: Colors.background.white,
        todayTextColor: Colors.text.primary,
        dayTextColor: Colors.text.primary,
        textDisabledColor: Colors.text.inactive,
        dotColor: Colors.primary,
        selectedDotColor: Colors.background.white,
        arrowColor: Colors.text.primary,
        disabledArrowColor: Colors.text.inactive,
        monthTextColor: Colors.text.primary,
        indicatorColor: Colors.primary,
        textDayFontFamily: 'Roboto-Regular',
        textMonthFontFamily: 'Roboto-Bold',
        textDayHeaderFontFamily: 'Roboto-Regular',
        textDayFontSize: 14,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 14,
      }}
      monthFormat={'yyyy년 M월'}
      showSixWeeks={true}
      renderArrow={(direction: 'left' | 'right') => (
        <View style={styles.arrowContainer}>
          <Image
            style={styles.arrowIcon}
            resizeMode="contain"
            source={direction === 'left' ? Icons.BackL : Icons.BackR}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10, // 터치 영역 확보
  },
  arrowIcon: {
    height: 20,
    width: 20,
  }
});

export default HomeCalendar;