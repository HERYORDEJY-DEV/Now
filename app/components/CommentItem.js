import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, secColor } from '../utils/colors';
import { _screenWidth, fontSizing } from '../utils/dimension';
import moment from 'moment';
import { TouchableRipple } from 'react-native-paper';
import LineHorizontal from './LineHorizontal';
import { Thumbnail } from 'native-base';

export default class CommentItem extends Component {
  render() {
    const { time, source, channel, navigation } = this.props;
    return (
      <TouchableRipple
        borderless={true}
        rippleColor={defColor}
        // onPress={() => {
        //   navigation.navigate('PostContent');
        // }}
      >
        <View>
          <View style={styles.body}>
            <Thumbnail
              // large={true}
              source={require('../assets/images/home-hero.png')}
              // style={styles.image}
            />
            <View style={styles.wrapper}>
              <View style={styles.header_wrapper}>
                <Text style={styles.name}>Elonk R. Musk</Text>
                <View style={styles.left_content}>
                  <View style={styles.content}>
                    <Image
                      source={require('../assets/icons/time.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.icon_text}>
                      {moment(time).format('MMM d, hh:mm')}
                    </Text>
                  </View>
                  <View style={[styles.content, { marginLeft: RFValue(12) }]}>
                    <Image
                      source={require('../assets/icons/like.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.icon_text}>
                      {13}
                      {/* {source} */}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.comment}>
                Such a massive change in such a short time is extremely unusual.
              </Text>
              <View style={styles.container}></View>
            </View>
          </View>
          <LineHorizontal />
        </View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: RFValue(10),
    paddingHorizontal: RFValue(10),
  },
  image: {
    aspectRatio: 2 / 2,
    // flex: 1,
    // resizeMode: 'cover',
    // width: '100%',
    height: RFValue(90),
  },
  wrapper: {
    backgroundColor: defColor,
    // paddingHorizontal: RFValue(20),
    paddingLeft: RFValue(10),
    // borderBottomColor: secColor,
    // borderBottomWidth: RFValue(0.5),
    flex: 1,
  },
  header_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right_content: {
    borderBottomColor: secColor,
    borderBottomWidth: RFValue(2),
    flex: 0,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    tintColor: secColor,
    width: RFValue(15),
    height: RFValue(15),
    marginRight: RFValue(5),
    resizeMode: 'contain',
  },
  icon_text: {
    color: secColor,
    fontSize: RFValue(fontSizing(20)),
    fontFamily: 'Montserrat-Regular',
  },
  name: {
    color: secColor,
    fontSize: RFValue(fontSizing(26)),
    fontFamily: 'Montserrat-Bold',
    flex: 0,
  },
  comment: {
    color: secColor,
    fontSize: RFValue(fontSizing(24)),
    fontFamily: 'Montserrat-Regular',
    paddingTop: RFValue(10),
    flex: 0,
  },
});
