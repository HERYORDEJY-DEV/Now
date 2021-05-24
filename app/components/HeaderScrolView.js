import React, { Component } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Header from './Header';
import { defColor, headerSubtextColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSizing } from '../utils/dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HeaderScrollView extends Component {
  render() {
    const {
      maxHeight,
      minHeight,
      children,
      renderForeground,
      renderFixedForeground,
    } = this.props;
    return (
      <ImageHeaderScrollView
        minOverlayOpacity={0}
        maxOverlayOpacity={0}
        maxHeight={RFValue(maxHeight)}
        minHeight={RFValue(minHeight)}
        // headerImage={require('../assets/images/story-hero.png')}
        renderForeground={renderForeground}
        renderFixedForeground={renderFixedForeground}
        fadeOutForeground={false}
      >
        <View style={{}}>
          {/* <TriggeringView onHide={() => console.log('text hidden')}>
            <Text>Scroll Me!</Text>
          </TriggeringView> */}
        </View>
        {children}
      </ImageHeaderScrollView>
    );
  }
}
