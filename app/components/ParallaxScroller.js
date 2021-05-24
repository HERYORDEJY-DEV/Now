import React, { Component } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import Header from './Header';
import { defColor, headerSubtextColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSizing } from '../utils/dimension';

// Parallax Header
function ParallaxHeader({ children, animatedValue }) {
  return (
    <Header>
      <Text style={styles.header_content_button_text}>OVERVIEW</Text>
      <Text style={styles.header_content_button_subtext}>
        What you are reading the most
      </Text>
    </Header>
  );
}

// Parallax Foreground
function ParallaxForeground({ children, animatedValue }) {
  return { children };
}

// Parallax Background
function ParallaxBackground({ children, animatedValue }) {
  return { children };
}

// Inside of a component's render() method:
export default class ParallaxScroller extends Component {
  render() {
    const { children, renderHeader } = this.props;

    return (
      <ParallaxScroll
        renderHeader={({ animatedValue }) => (
          <ParallaxHeader animatedValue={animatedValue} />
        )}
        headerHeight={50}
        isHeaderFixed={false}
        parallaxHeight={250}
        // renderParallaxBackground={({ animatedValue }) => (
        //   <ParallaxBackground animatedValue={animatedValue} />
        // )}
        // renderParallaxForeground={({ animatedValue }) => (
        //   <ParallaxForeground animatedValue={animatedValue} />
        // )}
        parallaxBackgroundScrollSpeed={5}
        parallaxForegroundScrollSpeed={2.5}
      >
        {children}
      </ParallaxScroll>
    );
  }
}

const styles = StyleSheet.create({
  header_content_button_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: RFValue(5),
  },
  header_content_button_subtext: {
    color: headerSubtextColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
