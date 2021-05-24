import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, secColor } from '../utils/colors';
import { fontSizing } from '../utils/dimension';

export default class PostInfo extends Component {
  render() {
    const { time, source, channel, postContent } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left_content}>
          <View style={[styles.content, { marginRight: RFValue(12) }]}>
            <Image
              source={require('../assets/icons/source.png')}
              style={[
                styles.icon,
                { tintColor: postContent ? secColor : defColor },
              ]}
            />
            <Text
              style={[
                styles.icon_text,
                { color: postContent ? secColor : defColor },
              ]}
            >
              {source}
            </Text>
          </View>
          <View style={styles.content}>
            <Image
              source={require('../assets/icons/time.png')}
              style={[
                styles.icon,
                {
                  tintColor: postContent ? secColor : defColor,
                  marginLeft: RFValue(10),
                },
              ]}
            />
            <Text
              style={[
                styles.icon_text,
                { color: postContent ? secColor : defColor },
              ]}
            >
              {time}
            </Text>
          </View>
        </View>
        {channel && (
          <View
            style={[
              styles.right_content,
              { borderBottomColor: postContent ? secColor : defColor },
            ]}
          >
            <Text
              style={[
                styles.icon_text,
                {
                  paddingBottom: RFValue(5),
                  color: postContent ? secColor : defColor,
                },
              ]}
            >
              {channel}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  right_content: { borderBottomColor: defColor, borderBottomWidth: RFValue(2) },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: RFValue(15),
    height: RFValue(15),
    marginRight: RFValue(5),
    resizeMode: 'contain',
  },
  icon_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(20)),
    fontFamily: 'Montserrat-Regular',
  },
});
