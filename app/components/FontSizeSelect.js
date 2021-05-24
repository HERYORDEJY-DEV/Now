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

export default class FontSizeSelect extends Component {
  state = {
    fontSize: 0,
  };

  onChangeFontSize(fontSize) {
    this.setState({ ...this.state, fontSize });
    // fontSize = fontSize
  }

  render() {
    return (
      <View>
        <View style={styles.row}>
          <TouchableRipple
            rippleColor={defColor}
            borderless={false}
            onPress={() => {}}
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
            <Image
              source={require('../assets/icons/smaill-a.png')}
              style={[
                styles.action_icon,
                { width: RFValue(15), height: RFValue(15) },
              ]}
            />
          </TouchableRipple>
          <Sliders
            onValueChange={this.onChangeFontSize}
            fontSize={this.state.fontSize}
          />
          <TouchableRipple
            rippleColor={defColor}
            borderless={false}
            onPress={() => {}}
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
            <Image
              source={require('../assets/icons/large-a.png')}
              style={styles.action_icon}
            />
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
