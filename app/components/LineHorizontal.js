import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { secColor } from '../utils/colors';

export default class LineHorizontal extends Component {
  render() {
    const { imageStyles } = this.props;
    return (
      <Image
        source={require('../assets/icons/line-h.png')}
        style={[styles.image, imageStyles]}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: { tintColor: secColor, width: '100%' },
});
