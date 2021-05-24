import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { defColor, pryColor, secColor, terColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSizing } from '../utils/dimension';
import { Icon } from 'native-base';

export default class CalendarDisplay extends Component {
  renderDayComponent = ({ date, state }) => {
    return (
      <View>
        <Text
          style={[
            styles.date,
            {
              color: state === 'disabled' ? 'gray' : 'black',
            },
          ]}
        >
          {date.day}
        </Text>
      </View>
    );
  };
  render() {
    return (
      //       <Calendar
      //           theme={'stylesheet.calendar.main': {
      //           week: {
      //           marginTop: 7,
      //           marginBottom: 7,
      //           flexDirection: isRTL ? 'row-reverse' : 'row',
      //           justifyContent: 'space-around'
      //       }
      //       },
      //           'stylesheet.calendar.header': {
      //           header: {
      //           flexDirection: isRTL ? 'row-reverse' : 'row',
      //           justifyContent: 'space-between',
      //           paddingLeft: 10,
      //           paddingRight: 10,
      //           alignItems: 'center',
      //           height: 45
      //       },
      //           week: {
      //           marginTop: 7,
      //           flexDirection: isRTL ? 'row-reverse' : 'row',
      //           justifyContent: 'space-around'
      //       }}
      //
      // // renderArrow={direction => <Icon type="ionicon"
      // //                                 name={direction === 'left'
      // //                                     ? (isRTL ? 'arrow-forward' : 'arrow-back')
      // //                                     : (isRTL ? 'arrow-back' : 'arrow-forward')}
      // // />}
      // />
      <View>
        <Calendar
          dayComponent={this.renderDayComponent}
          // Initially visible month. Default = Date()
          current={'2021-02-15'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(right) => (
            <Image
              source={require('../assets/icons/arrow-right.png')}
              style={styles.arrow}
            />
          )}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={7}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={(addMonth) => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={false}
          // Replace default month and year title with custom one. the function receive a date as parameter.
          // renderHeader={(date) => (
          //   <View>
          //     <Text style={{ color: 'green' }}>`${date}`</Text>
          //   </View>
          // )}
          // month={'August'}
          disabledByDefault={false}
          headerStyle={{ backgroundColor: pryColor, padding: 0, margin: 0 }}
          // Enable horizontal scrolling, default = false
          horizontal={false}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          // Specify style for calendar container element. Default = {}
          style={{
            // borderWidth: 1,
            // borderColor: 'gray',
            // height: 350,
            margin: 0,
            paddingBottom: RFValue(10),
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            // backgroundColor: pryColor,
            calendarBackground: 'transparent',
            textSectionTitleColor: defColor,
            // textSectionTitleDisabledColor: secColor,
            selectedDayBackgroundColor: pryColor,
            selectedDayTextColor: defColor,
            todayTextColor: 'green',
            dayTextColor: 'red',
            textDisabledColor: 'red',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: defColor,
            disabledArrowColor: terColor,
            monthTextColor: pryColor,
            indicatorColor: terColor,
            textDayFontFamily: 'Montserrat-Bold',
            textMonthFontFamily: 'Montserrat-Bold',
            textDayHeaderFontFamily: 'Montserrat-Bold',
            // textDayFontWeight: '300',
            // textMonthFontWeight: 'bold',
            // textDayHeaderFontWeight: '300',
            textDayFontSize: RFValue(fontSizing(22)),
            textMonthFontSize: RFValue(fontSizing(40)),
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  date: { textAlign: 'center', fontFamily: 'Montserrat-Bold' },
  month: {},
  year: {},
  arrow: {
    tintColor: pryColor,
    width: RFValue(20),
    height: RFValue(20),
    resizeMode: 'contain',
  },
});
