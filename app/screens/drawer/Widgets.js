import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import { fontSizing, _screenWidth } from '../../utils/dimension';
import {
  defColor,
  headerBgColor,
  headerSubtextColor,
  pryColor,
  secColor,
  widgetYellowColor,
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChannelThumb from '../../components/ChannelThumb';
import { channels_ } from '../../api/channels';
import OverviewItem from '../../components/OverviewItem';
import { overview_ } from '../../api/overview';
import { TouchableRipple } from 'react-native-paper';
import StockWidget from '../../components/StockWidget';
import WeatherWidget from '../../components/WeatherWidget';
import { stock_ } from '../../api/widgets';

export default function Widgets({ navigation }) {
  function renderStockWidgets() {
    return (
      <FlatList
        style={{ paddingBottom: RFValue(20) }}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        // horizontal={true}
        // contentContainerStyle={styles.content_container}
        // ListHeaderComponent={renderHeader}
        // stickyHeaderIndices={[0]}
        data={stock_}
        renderItem={({ item, index }) => <StockWidget {...item} />}
        keyExtractor={(item, index) => item.id}
      />
    );
  }

  // render for Header
  function renderHeader() {
    return (
      <>
        <Header>
          <Text style={styles.header_content_button_text}>WIDGETS</Text>
        </Header>

        {/* {renderStockWidgets()} */}
      </>
    );
  }

  // render for Footer
  function renderFooter() {
    return <View></View>;
  }

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <NavBar
        leftIconName={'menu'}
        rightIconName={'plus'}
        leftIconFunction={() => navigation.toggleDrawer()}
      />
      {renderHeader()}
      {/* <Content contentContainerStyle={styles.content}> */}

      {/* ==================================================================== */}
      <FlatList
        style={{ flex: 1, paddingBottom: RFValue(20) }}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // contentContainerStyle={styles.content_container}
        ListHeaderComponent={<WeatherWidget />}
        // stickyHeaderIndices={[0]}
        // ListFooterComponent={renderFooter}
        data={stock_}
        // data={stock_}
        // renderItem={({ item, index }) => renderHeader()}
        renderItem={({ item, index }) => <StockWidget {...item} />}
        keyExtractor={(item, index) => item.id}
      />
      {/* </Content> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: defColor },
  content: { paddingBottom: RFValue(20) },
  content_container: { flex: 1, paddingBottom: RFValue(20) },
  header_container: {},
  header_content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(20),
    paddingVertical: RFValue(20),
    backgroundColor: pryColor,
  },
  header_content_button_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    // marginBottom: RFValue(5),
  },
  header_content_button_subtext: {
    color: headerSubtextColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  weather_container: {
    backgroundColor: widgetYellowColor,
    width: '100%',
    height: _screenWidth * 0.8,
    flex: 1,
  },
  weather_graph: {
    width: '100%',
    height: _screenWidth * 0.8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  weather_top_section: {
    padding: RFValue(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weather_bottom_section: {
    padding: RFValue(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weather_top_section_left: {},
  weather_top_section_right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cloud_icon: {
    tintColor: defColor,
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: 'contain',
  },
  cloud_condition: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(26)),
    color: defColor,
  },
  cloud_location: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(26)),
    color: defColor,
  },
  weather_value_big: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(100)),
    color: defColor,
  },
  weather_unit: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(40)),
    color: defColor,
  },
  weather_value_small: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(40)),
    color: defColor,
  },
  weather_time: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(18)),
    color: defColor,
  },
  small_weather_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
