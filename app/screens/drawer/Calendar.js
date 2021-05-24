import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
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
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import CalendarDisplay from '../../components/CalendarDisplay';
import CalendarPick from '../../components/CalendarPick';
import { useGlobalHook } from '@devhammed/use-global-hook';

export default function Calendar({ navigation }) {
  const [date, setDate] = useState(moment());

  function onDateChange(date) {
    setDate(date);
    console.log(date);
  }

  // Calendar Date Global Context store
  const { calendarDate, _setCalendarDate } = useGlobalHook('calendarDateStore');

  // render for Header
  function renderCalendar() {
    return (
      <View
        source={require('../../assets/images/home-hero.png')}
        style={[styles.header_container, { backgroundColor: defColor }]}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: headerBgColor,
          }}
        />
        <View style={[styles.header_content, { backgroundColor: defColor }]}>
          {/* <CalendarDisplay /> */}
          <CalendarPick onDateChange={onDateChange} date={date} />
        </View>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View
        source={require('../../assets/images/home-hero.png')}
        style={styles.header_container}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: headerBgColor,
          }}
        />
        <View style={styles.header_content}>
          <Text style={[styles.year]}>{moment(date).format('YYYY')}</Text>
          <Text style={[styles.month]}>{moment(date).format('MMMM DD')}</Text>
        </View>
      </View>
    );
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
        rightIconName={'search'}
        leftIconFunction={() => navigation.toggleDrawer()}
      />
      {renderHeader()}
      {/* <View contentContainerStyle={styles.content}> */}
      {/* <Header children={renderHeader()} /> */}
      <FlatList
        contentContainerStyle={styles.content}
        ListHeaderComponent={renderCalendar}
        // stickyHeaderIndices={[0]}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        data={feeds_}
        renderItem={({ item, index }) => <PostItem {...item} />}
        keyExtractor={(item, index) => item.id}
      />
      {/* </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: defColor },
  content: { paddingBottom: RFValue(20) },
  header_container: { backgroundColor: pryColor },
  header_content: {},
  header_content_title: {
    color: defColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    marginBottom: RFValue(15),
  },
  header_content_button_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingBottom: RFValue(5),
  },
  month: {
    color: defColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingBottom: RFValue(5),
    textTransform: 'uppercase',
  },
  year: {
    color: headerSubtextColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingBottom: RFValue(5),
  },
});
