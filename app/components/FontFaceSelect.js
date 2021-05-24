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
  headerSubtextColor,
} from '../utils/colors';
import { fontSizing, _screenWidth } from '../utils/dimension';
import Sliders from './Sliders';

export default class FontFaceSelect extends Component {
  state = {
    fontFace: 'serif',
  };

  onChangeFontFace(fontFace) {
    this.setState({ ...this.state, fontFace });
  }

  render() {
    return (
      <View>
        <View style={styles.row}>
          <TouchableRipple
            rippleColor={defColor}
            borderless={false}
            onPress={() => this.onChangeFontFace('serif')}
            style={[
              styles.action_button,
              {
                elevation: 500,
                backgroundColor: 'tranparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
          >
            <Text
              style={[
                styles.serif,
                {
                  color:
                    this.state.fontFace === 'serif'
                      ? defColor
                      : headerSubtextColor,
                },
              ]}
            >
              SERIF
            </Text>
          </TouchableRipple>
          <Image
            source={require('../assets/icons/line-v.png')}
            style={{ tintColor: secColor, height: RFValue(50) }}
          />
          <TouchableRipple
            rippleColor={defColor}
            borderless={false}
            onPress={() => this.onChangeFontFace('sans-serif')}
            style={[
              styles.action_button,
              {
                elevation: 500,
                backgroundColor: 'tranparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
          >
            <Text
              style={[
                styles.sans_serif,
                {
                  color:
                    this.state.fontFace === 'sans-serif'
                      ? defColor
                      : headerSubtextColor,
                },
              ]}
            >
              SANS SERIF
            </Text>
          </TouchableRipple>
        </View>
        <Image
          source={require('../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: pryColor },
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
