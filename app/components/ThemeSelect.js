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

export default class ThemeSelect extends Component {
  state = {
    theme: 'light',
  };

  onChangeTheme(theme) {
    this.setState({ ...this.state, theme });
  }

  render() {
    return (
      <>
        <View style={styles.row}>
          <TouchableRipple
            rippleColor={defColor}
            borderless={true}
            onPress={() => this.onChangeTheme('light')}
            style={[
              styles.action_button,
              {
                elevation: this.state.theme === 'light' ? 20 : 0,
                backgroundColor: defColor,
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
          >
            <Image
              source={require('../assets/icons/light-sun.png')}
              style={[styles.action_icon, { tintColor: pryColor }]}
            />
          </TouchableRipple>
          <Image
            source={require('../assets/icons/line-v.png')}
            style={{ tintColor: secColor, height: RFValue(50) }}
          />
          <TouchableRipple
            rippleColor={defColor}
            borderless={true}
            onPress={() => this.onChangeTheme('dark')}
            style={[
              styles.action_button,
              {
                elevation: this.state.theme === 'dark' ? 20 : 0,
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
          >
            <Image
              source={require('../assets/icons/dark-moon.png')}
              style={[styles.action_icon]}
            />
          </TouchableRipple>
        </View>
        <Image
          source={require('../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
      </>
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
