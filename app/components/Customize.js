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
import { fontSizing } from '../utils/dimension';
import Sliders from './Sliders';
import ThemeSelect from './ThemeSelect';
import FontFaceSelect from './FontFaceSelect';
import FontSizeSelect from './FontSizeSelect';

export default class Customize extends Component {
  state = {
    fontFace: 'serif',
    theme: 'light',
    fontSize: 0,
  };

  onChangeTheme(theme) {
    this.setState({ ...this.state, theme });
  }
  onChangeFontFace(fontFace) {
    this.setState({ ...this.state, fontFace });
  }
  onChangeFontSize(fontSize) {
    this.setState({ ...this.state, fontSize });
    // fontSize = fontSize
  }

  render() {
    const { toggle } = this.props;
    return (
      <View style={styles.container}>
        <ThemeSelect />
        <FontFaceSelect />
        <FontSizeSelect />
        <TouchableRipple
          borderless={true}
          rippleColor={defColor}
          onPress={toggle}
          style={styles.close_container}
        >
          <Text style={styles.close_text}>Close</Text>
        </TouchableRipple>
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
  close_container: {
    backgroundColor: terColor,
    padding: RFValue(20),
    alignItems: 'center',
  },
  close_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(26)),
  },
});
