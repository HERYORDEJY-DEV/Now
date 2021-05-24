import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, pryColor, secColor } from '../utils/colors';
import { fontSizing, _screenWidth } from '../utils/dimension';
import LineHorizontal from './LineHorizontal';

export default class ProfileStats extends Component {
  render() {
    return (
      <>
        <View style={styles.header_content}>
          <TouchableOpacity style={styles.header_content_button}>
            <Text style={styles.header_content_button_text}>27</Text>
            <Text style={styles.header_content_button_subtext}>Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_content_button}>
            <Text style={styles.header_content_button_text}>37</Text>
            <Text style={styles.header_content_button_subtext}>Channels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_content_button}>
            <Text style={styles.header_content_button_text}>47</Text>
            <Text style={styles.header_content_button_subtext}>Bookmarks</Text>
          </TouchableOpacity>
        </View>
        <LineHorizontal />
      </>
    );
  }
}

const styles = StyleSheet.create({
  header_container: {},
  header_content: {
    backgroundColor: defColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(20),
  },
  header_content_button: {
    paddingVertical: RFValue(10),
    // width: RFValue(90),
  },
  header_content_button_text: {
    color: pryColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  header_content_button_subtext: {
    color: secColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
