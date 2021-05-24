import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, headerBgColor, pryColor } from '../utils/colors';
import { fontSizing, _screenWidth, _windowWidth } from '../utils/dimension';
import LineHorizontal from './LineHorizontal';

export default class ChannelThumb extends Component {
  render() {
    const { name, image, navigation } = this.props;
    return (
      <>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Channel');
          }}
        >
          <ImageBackground
            source={image}
            style={styles.image_bg}
            imageStyle={styles.image_style}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: headerBgColor,
              }}
            />
            <Text style={styles.text}>{name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: _screenWidth / 2,
    // padding: RFValue(10),
    borderRadius: RFValue(10),
  },
  image_bg: {
    padding: RFValue(20),
    height: RFValue(200),
    width: _screenWidth / 2,
    borderRadius: RFValue(10),

    // width: _screenWidth > 450 ? _screenWidth / 3 : _screenWidth / 2,
  },
  image_style: { resizeMode: 'cover' },
  text: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: defColor,
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(22)),
    textTransform: 'uppercase',
    margin: RFValue(10),
    borderBottomColor: defColor,
    borderBottomWidth: RFValue(2),
  },
});
