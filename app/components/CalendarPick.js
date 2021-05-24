import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {
  defColor,
  headerBgColor,
  pryColor,
  secColor,
  terColor,
} from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
import { calendarDateHoc } from '../hoc/calendarDateHoc';
import { _screenWidth } from '../utils/dimension';

class CalendarPick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    // this.props.onDateChange(date);
    this.setState({
      selectedStartDate: date,
    });
    // this.props._setCalendarDate(date);
    console.log(this.state.selectedStartDate);
  }

  render() {
    const { date, calendarDate, _setCalendarDate } = this.props;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : date;

    return (
      <>
        <View style={styles.container}>
          <CalendarPicker
            onDateChange={this.onDateChange}
            // onDateChange={(date) => this.onDateChange(date)}
            maxDate={moment()}
            // scrollable={true}
            horizontal={true}
            dayShape={'square'}
            previousComponent={
              <Image
                source={require('../assets/icons/arrow-left.png')}
                style={styles.arrow}
              />
            }
            nextComponent={
              <Image
                source={require('../assets/icons/arrow-right.png')}
                style={styles.arrow}
              />
            }
            headerWrapperStyle={{
              backgroundColor: pryColor,
              marginBottom: 0,
              paddingBottom: RFValue(10),
              color: defColor,
              display: 'none',
            }}
            dayLabelsWrapper={{
              backgroundColor: defColor,
              margin: 0,
              padding: 0,
              borderWidth: 0,
              color: defColor,
            }}
            monthYearHeaderWrapperStyle={{
              margin: 0,
              padding: 0,
            }}
            todayBackgroundColor={'#bebebe'}
            selectedDayColor={pryColor}
            selectedDayTextColor={defColor}
            scaleFactor={375}
            textStyle={{
              fontFamily: 'Montserrat-Bold',
              color: secColor,
            }}
          />
        </View>
        <Image
          source={require('../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
      </>
    );
  }
}

export default calendarDateHoc(CalendarPick);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defColor,
    margin: 0,
    padding: 0,
  },
  date: { textAlign: 'center', fontFamily: 'Montserrat-Bold' },
  month: {},
  year: {},
  arrow: {
    tintColor: defColor,
    width: RFValue(20),
    height: RFValue(20),
    resizeMode: 'contain',
  },
});
