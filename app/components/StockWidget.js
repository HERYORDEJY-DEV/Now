import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  defColor,
  secColor,
  gainColor,
  lossColor,
  pryColor,
  terColor,
} from '../utils/colors';
import { _screenWidth, fontSizing } from '../utils/dimension';
import moment from 'moment';
import { TouchableRipple } from 'react-native-paper';
import { _currency } from '../utils/textFormatter';

export default class StockWidget extends Component {
  render() {
    const { id, name, rate, value, status } = this.props;
    return (
      <TouchableRipple
        borderless={true}
        rippleColor={defColor}
        // onPress={() => {}}
        style={styles.weather_container}
      >
        <ImageBackground
          style={styles.weather_graph}
          source={
            status === 'gain'
              ? require('../assets/images/Graph-Stock-1.png')
              : require('../assets/images/Graph-Stock-2.png')
          }
        >
          {/*  Top Section */}
          <View>
            <View style={styles.weather_top_section}>
              <View style={styles.weather_top_section_left}>
                <Text style={styles.cloud_condition}>{name}</Text>
              </View>
              <View style={styles.weather_top_section_right}>
                <Image
                  source={require('../assets/icons/rings.png')}
                  style={styles.cloud_icon}
                />
              </View>
            </View>
            <Text
              style={[
                styles.stock_rate,
                { color: status === 'gain' ? gainColor : lossColor },
              ]}
            >
              {status === 'gain' ? '+' : '-'}
              {rate}%
            </Text>
            <Text style={styles.stock_value}>{_currency(value)}</Text>
          </View>
          {/* Bottom Section */}
          <View style={styles.weather_bottom_section}>
            {/* weather times  */}
            <View style={{ flex: 1 }} />
            <TouchableRipple
              borderless={true}
              rippleColor={pryColor}
              style={styles.ripple_button}
              onPress={() => {}}
            >
              <Text style={styles.ripple_button_text}>Details</Text>
            </TouchableRipple>
            <View style={{ flex: 1 }} />
          </View>
        </ImageBackground>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  weather_container: {
    backgroundColor: defColor,
    // width: _screenWidth / 1,
    height: _screenWidth * 0.8,
    flex: 1,
    borderWidth: RFValue(0.5),
    borderColor: pryColor,
    margin: RFValue(5),
  },
  weather_graph: {
    // width: _screenWidth / 1,
    height: _screenWidth * 0.8,
    // flex: 1,
    // flexDirection: 'column',
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
    tintColor: terColor,
    width: RFValue(20),
    height: RFValue(20),
    resizeMode: 'contain',
  },
  cloud_condition: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(26)),
    color: secColor,
    textTransform: 'uppercase',
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
  stock_rate: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(40)),
    color: gainColor,
    paddingHorizontal: RFValue(20),
  },
  stock_value: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(30)),
    color: '#cacaca',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(5),
  },
  ripple_button: {
    backgroundColor: defColor,
    padding: RFValue(20),
    paddingVertical: RFValue(15),
    marginVertical: RFValue(10),
    borderRadius: RFValue(100),
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: RFValue(110),
    borderWidth: RFValue(2),
    borderColor: terColor,
  },
  ripple_button_text: {
    color: pryColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
  },
});
