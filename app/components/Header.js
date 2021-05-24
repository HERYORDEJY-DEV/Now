import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { headerBgColor, pryColor, secColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenWidth } from '../utils/dimension';
import LineHorizontal from './LineHorizontal';

export default class Header extends Component {
  render() {
    const { children, containerStyles } = this.props;
    return (
      <>
        <View style={[styles.container, containerStyles]}>
          {/* <View style={styles.overlay} /> */}
          {children}
        </View>
        <LineHorizontal />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: RFValue(20),
    paddingVertical: RFValue(10),
    backgroundColor: '#ec5e2f',
    // backgroundColor: pryColor,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: headerBgColor,
  },
});
