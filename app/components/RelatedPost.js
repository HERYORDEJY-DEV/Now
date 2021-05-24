import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { post_carousel } from '../api/carousel';
import { defColor, secColor, terColor } from '../utils/colors';
import { fontSizing } from '../utils/dimension';
import LineHorizontal from './LineHorizontal';
import RelatedPostCarousel from './RelatedPostCarousel';

export default class RelatedPost extends Component {
  // _renderItem = ({ item, index }) => {
  //   return (

  //   );
  // };

  render() {
    const { image, title, source, data, navigation } = this.props;
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
          }}
        >
          Related Stories
        </Text>
        <RelatedPostCarousel data={data} navigation={navigation} />
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
  image: {
    width: RFValue(300),
    height: RFValue(200),
    resizeMode: 'cover',
  },
  title: {
    fontSize: RFValue(fontSizing(26)),
    fontFamily: 'Montserrat-Bold',
    color: secColor,
    padding: RFValue(20),
    paddingBottom: RFValue(10),
    textAlign: 'center',
  },
  source: {
    fontSize: RFValue(fontSizing(20)),
    fontFamily: 'Montserrat-Bold',
    color: terColor,
  },
});
