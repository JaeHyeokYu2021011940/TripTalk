import * as React from 'react';
import { Colors } from '../theme/colors';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Icons, Images } from '../assets';

const KAKAO_MAP_API_KEY = '92b7c00ffe65406a181c535a6e185db7'; // Replace with actual JS Key

const createMapHtml = (positions: any[]) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body, html, #map {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services"></script>
</head>
<body>
<div id="map"></div>
<script>
	var positions = ${JSON.stringify(positions)};

    var centerLat = positions.length > 0 ? positions[0].lat : 37.5759;
	var centerLng = positions.length > 0 ? positions[0].lng : 126.9768;

	var mapContainer = document.getElementById('map'),
		mapOption = { 
			center: new kakao.maps.LatLng(centerLat, centerLng),
			level: 5
    };

    kakao.maps.load(function() {
        var map = new kakao.maps.Map(mapContainer, mapOption);

        var pinIconBase64 = 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAkBJREFUeAG9mE1u2zAQhd8oQoC0KWDfwLlBsm1cVDdoc4PmBHXWhX9kt+iy6QmS3sA5gR3AKbKLe4LoCF44/gOpKWnDTRCINqlQ/VaGOLKe3gzJoQiORE0uiXBSA4L3BK4wUFmN8AigofrRFYKubuO9BA6QbWD0fVoRAhfqgZFNPDNdSonYVlBgE3T8dVwTIr2zFaEh4k9hmN4dt8c1q/htAdXOQ0uFNfEiZDyov2khrxDtBHHwAx5gTs9uGvvncBWyqgmdDirBCzwSIjgy1YyxRqRA058IDZXCkC+Mo1kXV27wPQogFPNyPy6Pnl/PdESJ+ICCEDu7n7OuG1JDH1EURBHshaSHKAjm9UpsJcRnkT77Z3IS8v/JFKKmUoKCUKlJYCuEEQxRECo1CWyFKNmFCQFTH9ZCCNcoiFTKK2Q+0kC1M1H7DLxOY10fN41XB1lj5lnD1IVviFqmIaOQUM5+rto/P2g3pJhdOwtZbkwcGPsHV1R/e3kblxO4CtH4ckW7IeTi16aYjUJ8uaLWjvNNbixjYMG7zuT+8djgxqaZ8hSrvYZBp8gJIbRqKayEDOp7fWI4p0jfM2js/rGJtd59d+Q8dtkMdUr0Pbbx1ic9TbUzjdQjejaxQswPthXoU5z6EZ0iJpxtDWRuuYjQODmyRjnTMx8/uTuovz6BI7k6tFDMTrLqZblwicV2xzLI5Yjm7bfxYZBS77G/1Se5xZFrStbk7ll/f9kfEvO/t1dvdJpXhBeq7Wmz2n544dcC4C8BYOl4HkW4YQAAAABJRU5ErkJggg==';

        positions.forEach(function(pos) {
            var latlng = new kakao.maps.LatLng(pos.lat, pos.lng);
            
            // Marker content using Pin_Icon image + Number text overlay
            var content = '<div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">' +
                          '  <img src="data:image/png;base64,' + pinIconBase64 + '" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" />' +
                          '  <span style="position: relative; color: white; font-weight: bold; font-size: 13px; transform: translateY(-3px);">' + pos.label + '</span>' +
                          '</div>';

            var customOverlay = new kakao.maps.CustomOverlay({
                position: latlng,
                content: content,
                xAnchor: 0.5,
                yAnchor: 1.0 // Anchor to the bottom tip of the pin
            });
            customOverlay.setMap(map);
        });

        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // Listen for messages from React Native
        window.addEventListener('message', function(event) {
            try {
                var data = JSON.parse(event.data);
                if (data.type === 'MOVE_TO' && data.lat && data.lng) {
                    var moveLatLon = new kakao.maps.LatLng(data.lat, data.lng);
                    map.panTo(moveLatLon);
                }
            } catch (e) {
                console.error('Failed to parse message:', e);
            }
        });

        // For Android WebView
        document.addEventListener('message', function(event) {
            try {
                var data = JSON.parse(event.data);
                if (data.type === 'MOVE_TO' && data.lat && data.lng) {
                    var moveLatLon = new kakao.maps.LatLng(data.lat, data.lng);
                    map.panTo(moveLatLon);
                }
            } catch (e) {
                console.error('Failed to parse message:', e);
            }
        });
    });
</script>
</body>
</html>
`;

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const HEADER_HEIGHT = 113;
const TABBAR_HEIGHT = 90;
const TIMELINE_TITLE_AREA = 110; // Approximate height of "내 일정 타임라인" title + tabs

// Max map height should leave at least the title area of timeline
const MAP_MAX_HEIGHT_LIMIT =
  SCREEN_HEIGHT - HEADER_HEIGHT - TABBAR_HEIGHT - TIMELINE_TITLE_AREA;
const MAP_MIN_HEIGHT_LIMIT = -40; // Allow it to hide completely under the header

const ScheduleDetail = ({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) => {
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
  const [tripPlan, setTripPlan] = React.useState<any>(null);
  const [positions, setPositions] = React.useState<any[]>([]);
  const [selectedDayIndex, setSelectedDayIndex] = React.useState(0);
  const mapHeight = React.useRef(new Animated.Value(270)).current;
  const lastMapHeight = React.useRef(270);
  const webViewRef = React.useRef<WebView>(null);

  React.useEffect(() => {
    fetch('http://10.0.2.2:8000/api/trip-plans/42/')
      .then(res => res.json())
      .then(data => {
        console.log('일정 데이터:', data);

        setTripPlan(data);

        // 지도 마커용: 위도/경도 있는 것만
        const markerPositions = data.days
          .flatMap((day: any) => day.events)
          .map((event: any, index: number) => ({
            label: String(index + 1),
            title: event.place_name,
            lat: event.latitude,
            lng: event.longitude,
            time: event.time,
          }))
          .filter((event: any) => event.lat && event.lng);

        setPositions(markerPositions);
      })
      .catch(error => {
        console.log('일정 조회 실패:', error);
      });
  }, []);
  const moveToLocation = (lat: number, lng: number) => {
    if (webViewRef.current) {
      const message = JSON.stringify({
        type: 'MOVE_TO',
        lat: lat,
        lng: lng,
      });
      webViewRef.current.postMessage(message);
    }
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newHeight = lastMapHeight.current + gestureState.dy;
        if (
          newHeight >= MAP_MIN_HEIGHT_LIMIT &&
          newHeight <= MAP_MAX_HEIGHT_LIMIT
        ) {
          mapHeight.setValue(newHeight);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        lastMapHeight.current += gestureState.dy;
        // Clamp the value to boundaries
        if (lastMapHeight.current < MAP_MIN_HEIGHT_LIMIT)
          lastMapHeight.current = MAP_MIN_HEIGHT_LIMIT;
        if (lastMapHeight.current > MAP_MAX_HEIGHT_LIMIT)
          lastMapHeight.current = MAP_MAX_HEIGHT_LIMIT;
      },
    }),
  ).current;

  const currentDay = tripPlan?.days?.[selectedDayIndex];

  const previousEventCount = (tripPlan?.days || [])
    .slice(0, selectedDayIndex)
    .reduce((sum: number, day: any) => sum + day.events.length, 0);

  const timelineEvents = currentDay?.events || [];
  return (
    <View style={[styles.scheduleDetail, styles.icon17Layout]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button9}
          onPress={() => onNavigate('Schedule')}
        >
          <View style={[styles.icon17, styles.icon17Layout]}>
            <Image
              style={styles.icon18}
              resizeMode="cover"
              source={Icons.BackL}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {tripPlan?.trip_name || '여행 일정'}
          </Text>
          <Text style={styles.yyMmDd}>26. 03. 10 ~ 26. 03. 12</Text>
        </View>
      </View>

      <Animated.View style={[styles.mapContainer, { height: mapHeight }]}>
        <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          source={{ html: createMapHtml(positions) }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          userAgent="Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
          {...({
            onMouseEnter: () =>
              Platform.OS === 'web' && setScrollEnabled(false),
            onMouseLeave: () => Platform.OS === 'web' && setScrollEnabled(true),
          } as any)}
          onTouchStart={() => setScrollEnabled(false)}
          onTouchEnd={() => setScrollEnabled(true)}
        />
      </Animated.View>

      <View style={styles.stickyHeader}>
        <View style={styles.dragHandleContainer} {...panResponder.panHandlers}>
          <View style={styles.button}>
            <View style={styles.frame} />
          </View>
        </View>
        <View style={[styles.frame2, styles.frame2SpaceBlock]}>
          <Text style={[styles.text7, styles.textFlexBox]}>
            내 일정 타임라인
          </Text>
          <View style={styles.frame3}>
            <Text style={[styles.ai, styles.aiClr]}>AI 자동 생성됨</Text>
          </View>
        </View>
        <View style={[styles.frame4, styles.frame4Border]}>
          {(tripPlan?.days || []).map((day: any, index: number) => {
            const isSelected = selectedDayIndex === index;

            return (
              <TouchableOpacity
                key={day.day}
                style={[styles.buttonFlexBox, isSelected && styles.button2]}
                onPress={() => setSelectedDayIndex(index)}
              >
                <Text
                  style={[
                    isSelected ? styles.text8 : styles.text9,
                    styles.textLayout,
                  ]}
                >
                  {day.day}일차
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        scrollEnabled={scrollEnabled}
      >
        <View style={[styles.frame5, styles.frameBg]}>
          <View
            style={[
              styles.verticalDivider,
              {
                height: Math.max(0, (timelineEvents.length - 1) * 90),
              },
            ]}
          />

          {timelineEvents.map((event: any, index: number) => (
            <View
              key={event.id || index}
              style={[styles.frameFlexBox, { zIndex: index + 1 }]}
            >
              <View style={styles.frame7}>
                <Text style={[styles.text11, styles.textTypo]}>
                  {previousEventCount + index + 1}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.frame8}
                onPress={() => {
                  if (event.latitude && event.longitude) {
                    moveToLocation(event.latitude, event.longitude);
                  }
                }}
                activeOpacity={0.7}
              >
                <View style={styles.frame9}>
                  <Text style={[styles.text12, styles.textTypo1]}>
                    {event.time || '시간 미정'}
                  </Text>

                  <Text style={[styles.text13, styles.textTypo]}>
                    {event.place_name}
                  </Text>

                  {event.activity ? (
                    <Text style={[styles.text16, styles.textLayout]}>
                      {event.activity}
                    </Text>
                  ) : null}
                </View>

                <View style={styles.button5}>
                  <View style={[styles.icon7, styles.iconLayout]}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={Icons.Kebab}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}

          <View style={[styles.frame23, styles.frameBorder]}>
            <Text style={[styles.text23, styles.textTypo]}>
              + 장소 추가하기
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabbar}>
        <View style={[styles.button10, styles.frame12Layout]}>
          <Text style={[styles.text25, styles.textTypo]}>일정 확정하기</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon17Layout: {
    width: '100%',
    alignItems: 'center',
  },
  pinIconLayout: {
    height: 34,
    width: 34,
  },
  iconPosition: {
    left: '50%',
    justifyContent: 'center',
  },
  textLayout2: {
    height: 24,
    justifyContent: 'center',
  },
  textTypo3: {
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  frame2SpaceBlock: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  textFlexBox: {
    display: 'flex',
    alignItems: 'center',
  },
  aiClr: {
    color: Colors.primary,
    display: 'flex',
    alignItems: 'center',
  },
  frame4Border: {
    gap: 12,
    borderBottomWidth: 1,
    borderColor: Colors.border.default,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  buttonFlexBox: {
    paddingTop: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: 14,
  },
  frameBg: {
    backgroundColor: Colors.background.white,
    alignSelf: 'stretch',
  },
  frameFlexBox: {
    gap: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  textTypo: {
    lineHeight: 24,
    fontWeight: '500',
    fontSize: 16,
  },
  textTypo1: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
  },
  iconLayout: {
    width: 16,
    height: 16,
  },
  frameBorder: {
    borderWidth: 1,
    backgroundColor: Colors.surface.lightBlue,
    borderStyle: 'solid',
    borderColor: Colors.primary,
  },
  headerLayout: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.background.white,
    position: 'absolute',
    left: 0,
  },
  textTypo4: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    textAlign: 'center',
  },
  frame12Layout: {
    borderRadius: 12,
    flex: 1,
  },
  scrollView: {
    width: '100%',
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    flexGrow: 1,
  },
  scheduleDetail: {
    backgroundColor: Colors.background.primary,
    alignItems: 'center',
    flex: 1,
  },
  mapContainer: {
    width: '100%',
    zIndex: 0,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  stickyHeader: {
    backgroundColor: Colors.background.white,
    width: '100%',
    zIndex: 20,
  },
  dragHandleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.background.white,
  },
  map: {
    flex: 1,
  },
  content: {
    zIndex: 1,
    alignSelf: 'stretch',
  },
  button: {
    height: 4,
    width: 38,
    borderRadius: 10,
    backgroundColor: Colors.text.inactive,
    overflow: 'hidden',
  },
  frame: {
    width: '100%',
    height: '100%',
  },
  frame2: {
    justifyContent: 'space-between',
    gap: 20,
    flexDirection: 'row',
    backgroundColor: Colors.background.white,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text7: {
    height: 28,
    width: 145,
    fontSize: 20,
    lineHeight: 28,
    color: Colors.text.primary,
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  frame3: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: Colors.surface.lightBlue,
  },
  ai: {
    width: 78,
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 12,
    height: 16,
    color: Colors.primary,
  },
  frame4: {
    height: 35,
    paddingHorizontal: 12,
    paddingVertical: 0,
    flexDirection: 'row',
    backgroundColor: Colors.background.white,
    alignSelf: 'stretch',
  },
  button2: {
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.primary,
  },
  text8: {
    textAlign: 'center',
    height: 20,
    color: Colors.primary,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    justifyContent: 'center',
    width: 34,
    lineHeight: 20,
    fontSize: 14,
  },
  text9: {
    color: Colors.text.secondary,
    textAlign: 'center',
    height: 20,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    justifyContent: 'center',
    width: 34,
    lineHeight: 20,
    fontSize: 14,
  },
  frame5: {
    padding: 16,
    gap: 24,
  },
  verticalDivider: {
    width: 2,
    top: 34,
    left: 34,
    backgroundColor: Colors.primary,
    position: 'absolute',
    zIndex: 0,
  },
  frame6: {
    zIndex: 1,
  },
  frame7: {
    height: 36,
    width: 36,
    borderRadius: 9999,
    borderColor: Colors.background.white,
    borderWidth: 4,
    backgroundColor: Colors.primary,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text11: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    color: Colors.background.white,
  },
  frame8: {
    flexDirection: 'row',
    flex: 1,
  },
  frame9: {
    overflow: 'hidden',
    flex: 1,
  },
  text12: {
    color: Colors.text.secondary,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    lineHeight: 16,
    fontSize: 12,
  },
  text13: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    color: Colors.text.primary,
    alignSelf: 'stretch',
  },
  button5: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  icon7: {
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  frame10: {
    zIndex: 2,
  },
  frame12: {
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row',
  },
  frame13: {
    padding: 8,
    overflow: 'hidden',
    flex: 1,
  },
  frame14: {
    gap: 4,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  ai2: {
    width: 42,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    lineHeight: 16,
    fontSize: 12,
    height: 16,
    color: Colors.primary,
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
  text15: {
    color: Colors.text.secondary,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    lineHeight: 16,
    fontSize: 12,
    alignSelf: 'stretch',
  },
  text16: {
    color: Colors.text.secondary,
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    fontWeight: '500',
    alignSelf: 'stretch',
    marginTop: 4,
  },
  frame15: {
    zIndex: 3,
  },
  frame19: {
    zIndex: 4,
  },
  frame23: {
    height: 48,
    borderRadius: 8,
    zIndex: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text23: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'left',
    color: Colors.text.primary,
  },
  header: {
    height: 113,
    backgroundColor: Colors.background.white,
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 14,
    gap: 14,
    borderBottomWidth: 1,
    borderColor: Colors.border.default,
    borderStyle: 'solid',
    flexDirection: 'row',
  },
  button9: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon17: {
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  icon18: {
    width: 20,
    height: 20,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.2,
    textAlign: 'left',
    color: Colors.text.primary,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    paddingVertical: 2,
  },
  yyMmDd: {
    letterSpacing: -0.4,
    textAlign: 'left',
    fontSize: 12,
    lineHeight: 18,
    color: Colors.text.primary,
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    paddingVertical: 2,
  },
  tabbar: {
    height: 90,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.background.white,
  },
  button10: {
    height: 50,
    paddingHorizontal: 0,
    paddingVertical: 13,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  text25: {
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    color: Colors.background.white,
    height: 24,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});

export default ScheduleDetail;
