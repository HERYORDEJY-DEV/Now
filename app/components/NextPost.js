import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { post_carousel } from '../api/carousel';
import { defColor, pryColor, secColor, terColor } from '../utils/colors';
import { fontSizing } from '../utils/dimension';
import LineHorizontal from './LineHorizontal';
import RelatedPostCarousel from './RelatedPostCarousel';

export default class NextPost extends Component {
  // _renderItem = ({ item, index }) => {
  //   return (

  //   );
  // };

  render() {
    const { image, title, source, navigation } = this.props;
    return (
      <View style={styles.carousel_container}>
        <LineHorizontal />
        <Text
          style={{
            fontSize: RFValue(fontSizing(18)),
            fontFamily: 'Montserrat-Bold',
            color: terColor,
            textAlign: 'center',
            paddingTop: RFValue(20),
            textTransform: 'uppercase',
            marginBottom: RFValue(10),
          }}
        >
          Next Story
        </Text>
        <TouchableRipple
          style={styles.ripple_button}
          onPress={() => {
            navigation.navigate('PostContent');
          }}
          borderless={true}
          rippleColor={terColor}
        >
          <>
            <Text style={styles.title}>
              New battery for smartphones can be charged in a minute
            </Text>
            <View style={styles.source_container}>
              <Image
                source={require('../assets/icons/source.png')}
                style={styles.source_icon}
              />
              <Text style={styles.source}>CNN</Text>
            </View>
            <View style={styles.arrow_container}>
              <Image
                source={require('../assets/icons/forward.png')}
                style={styles.icon}
              />
              <Image
                source={require('../assets/icons/forward.png')}
                style={styles.icon}
              />
            </View>
          </>
        </TouchableRipple>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: RFValue(300),
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: defColor,
    padding: RFValue(10),
  },
  ripple_button: { alignItems: 'center', padding: RFValue(20) },
  title: {
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    color: secColor,
    paddingBottom: RFValue(5),
    textAlign: 'center',
  },
  icon: {
    tintColor: pryColor,
    resizeMode: 'contain',
    width: RFValue(20),
    height: RFValue(20),
  },

  source_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: RFValue(10),
  },

  source: {
    fontSize: RFValue(fontSizing(20)),
    fontFamily: 'Montserrat-Bold',
    color: terColor,
    padding: RFValue(5),
  },
  source_icon: {
    tintColor: secColor,
    resizeMode: 'contain',
    width: RFValue(10),
    height: RFValue(10),
    padding: RFValue(5),
  },
  arrow_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
