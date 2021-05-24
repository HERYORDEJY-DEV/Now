import React, { Component, PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, secColor } from '../utils/colors';
import { fontSizing, _screenWidth } from '../utils/dimension';
import moment from 'moment';
import { TouchableRipple } from 'react-native-paper';
import LineHorizontal from './LineHorizontal';

export default class PostItem extends PureComponent {
  render() {
    const { title = ' ', time, source, channel, navigation } = this.props;
    return (
      <>
        <TouchableRipple
          borderless={true}
          rippleColor={defColor}
          onPress={() => {
            navigation.navigate('PostContent');
          }}
        >
          <View style={styles.wrapper}>
            <Text style={styles.header_content_title}>{title}</Text>
            <View style={styles.container}>
              <View style={styles.left_content}>
                <View style={[styles.content, { marginRight: RFValue(12) }]}>
                  <Image
                    source={require('../assets/icons/source.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.icon_text}> {source}</Text>
                </View>
                <View style={styles.content}>
                  <Image
                    source={require('../assets/icons/time.png')}
                    style={styles.icon}
                  />
                  <Text style={styles.icon_text}>{moment(time).fromNow()}</Text>
                </View>
              </View>
              <View style={styles.right_content}>
                <Text
                  style={[
                    styles.icon_text,
                    { paddingBottom: RFValue(5), textTransform: 'uppercase' },
                  ]}
                >
                  {channel}
                </Text>
              </View>
            </View>
          </View>
        </TouchableRipple>
        <LineHorizontal />
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: defColor,
    padding: RFValue(20),
    // borderBottomColor: secColor,
    // borderBottomWidth: RFValue(0.5),
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
  header_content_title: {
    color: secColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    marginBottom: RFValue(15),
  },
});
