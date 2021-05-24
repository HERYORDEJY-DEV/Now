import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, secColor, terColor } from '../utils/colors';
import { fontSizing } from '../utils/dimension';

export default class NextPostItem extends Component {
  // _renderItem = ({ item, index }) => {
  //   return (

  //   );
  // };

  render() {
    const { image, title, source, navigation } = this.props;
    return (
      <TouchableRipple
        rippleColor={defColor}
        style={styles.container}
        onPress={() => {
          navigation.navigate('PostContent');
        }}
        borderless={true}
      >
        <>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.source}>{source}</Text>
        </>
      </TouchableRipple>
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
