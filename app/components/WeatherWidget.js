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
  widgetYellowColor,
} from '../utils/colors';
import { _screenWidth, fontSizing } from '../utils/dimension';
import moment from 'moment';
import { TouchableRipple } from 'react-native-paper';
import LineHorizontal from './LineHorizontal';

export default class WeatherWidget extends Component {
  render() {
    const { time, source, channel } = this.props;
    return (
      <>
        <View style={styles.weather_container}>
          <ImageBackground
            style={styles.weather_graph}
            source={require('../assets/images/Graph-Wether.png')}
          >
            {/*  Top Section */}
            <View style={styles.weather_top_section}>
              <View style={styles.weather_top_section_left}>
                <Image
                  source={require('../assets/icons/cloud.png')}
                  style={styles.cloud_icon}
                />
                <Text style={styles.cloud_condition}>Mostly Clouded</Text>
                <Text style={styles.cloud_location}>Ilorin</Text>
              </View>
              <View style={styles.weather_top_section_right}>
                <Text style={styles.weather_value_big}>76</Text>
                <Text style={styles.weather_unit}>o</Text>
              </View>
            </View>
            {/* Bottom Section */}
            <View style={styles.weather_bottom_section}>
              {/* weather times  */}
              <TouchableRipple
                rippleColor={defColor}
                borderless={true}
                onPress={() => {}}
              >
                <View style={styles.small_weather_container}>
                  <Text style={styles.weather_value_small}>28</Text>
                  <Text style={styles.weather_time}>12 AM</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                rippleColor={defColor}
                borderless={true}
                onPress={() => {}}
              >
                <View style={styles.small_weather_container}>
                  <Text style={styles.weather_value_small}>74</Text>
                  <Text style={styles.weather_time}>4 AM</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                rippleColor={defColor}
                borderless={true}
                onPress={() => {}}
              >
                <View style={styles.small_weather_container}>
                  <Text style={styles.weather_value_small}>70</Text>
                  <Text style={styles.weather_time}>8 AM</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                rippleColor={defColor}
                borderless={true}
                onPress={() => {}}
              >
                <View style={styles.small_weather_container}>
                  <Text style={styles.weather_value_small}>74</Text>
                  <Text style={styles.weather_time}>12 PM</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                rippleColor={defColor}
                borderless={true}
                onPress={() => {}}
              >
                <View style={styles.small_weather_container}>
                  <Text style={styles.weather_value_small}>43</Text>
                  <Text style={styles.weather_time}>4 PM</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple
                rippleColor={defColor}
                borderless={true}
                onPress={() => {}}
              >
                <View style={styles.small_weather_container}>
                  <Text style={styles.weather_value_small}>66</Text>
                  <Text style={styles.weather_time}>8 PM</Text>
                </View>
              </TouchableRipple>
            </View>
          </ImageBackground>
        </View>
        <LineHorizontal />
      </>
    );
  }
}

const styles = StyleSheet.create({
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
