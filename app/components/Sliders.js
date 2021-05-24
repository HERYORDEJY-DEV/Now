import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import { Icon } from 'native-base';
import { TouchableRipple } from 'react-native-paper';
import { Slider } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  secColor,
  pryColor,
  defColor,
  inputBg,
  terColor,
  headerBgColor,
} from '../utils/colors';
import { fontSizing } from '../utils/dimension';

export default class Sliders extends Component {
  state = {
    value: 0,
  };

  onValueChange(value) {
    this.setState({ value });
    // console.warn(value);
  }

  render() {
    const { fontSize } = this.props;
    return (
      <View
        style={{ flex: 10, alignItems: 'stretch', justifyContent: 'center' }}
      >
        <Slider
          value={this.state.value}
          // onSlidingComplete(value)
          // onValueChange={(value) => console.warn(value)}
          onSlidingComplete={(value) => this.onValueChange(value)}
          // onSlidingStart={() => onValueChange(0)}
          maximumValue={100}
          minimumValue={0}
          step={1}
          minimumTrackTintColor={defColor}
          trackStyle={{ height: RFValue(2), backgroundColor: terColor }}
          thumbStyle={{
            height: RFValue(20),
            width: RFValue(20),
            backgroundColor: defColor,
          }}
          // thumbProps={{
          //   children: (
          //     <Image source={require('../assets/icons/slider-circle.png')} />
          //   ),
          // }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: headerBgColor },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(20),
  },
  serif: { fontFamily: 'Montserrat-Bold', fontSize: RFValue(fontSizing(26)) },
  sans_serif: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(26)),
  },
  action_button: {
    backgroundColor: inputBg,
    borderRadius: RFValue(100),
    padding: RFValue(15),
  },
  action_icon: {
    width: RFValue(25),
    height: RFValue(25),
    tintColor: defColor,
    resizeMode: 'contain',
  },
});
