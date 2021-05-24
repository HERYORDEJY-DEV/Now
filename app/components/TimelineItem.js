import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, pryColor, secColor, terColor } from '../utils/colors';
import { fontSizing, _screenWidth } from '../utils/dimension';
import moment from 'moment';

export default class PostItem extends Component {
  renderBookmarked(type, time, text, subtext) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.left_content}>
          <Image
            source={require('../assets/icons/bookmark.png')}
            style={styles.left_icon}
          />
        </View>
        <View style={styles.right_content}>
          <View style={styles.content_header}>
            <Text style={styles.content_title}>{type}</Text>
            <View style={styles.content_time_wrapper}>
              <Image
                source={require('../assets/icons/time.png')}
                style={styles.icon}
              />
              <Text style={styles.icon_text}>
                {moment(time).format('hh:mm a')}
              </Text>
            </View>
          </View>
          <View style={styles.content_body}>
            <Text style={styles.content_body_text}>{text}</Text>
            {subtext && (
              <Text style={styles.content_body_subtext}>{subtext}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
  renderCommented(type, time, text, subtext) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.left_content}>
          <Image
            source={require('../assets/icons/comment.png')}
            style={styles.left_icon}
          />
        </View>
        <View style={styles.right_content}>
          <View style={styles.content_header}>
            <Text style={styles.content_title}>{type}</Text>
            <View style={styles.content_time_wrapper}>
              <Image
                source={require('../assets/icons/time.png')}
                style={styles.icon}
              />
              <Text style={styles.icon_text}>
                {moment(time).format('hh:mm a')}
              </Text>
            </View>
          </View>
          <View style={styles.content_body}>
            <Text style={styles.content_body_text}>{text}</Text>
            {subtext && (
              <Text style={styles.content_body_subtext}>{subtext}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
  renderFollowed(type, time, text, subtext) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.left_content}>
          <Image
            source={require('../assets/icons/check.png')}
            style={styles.left_icon}
          />
        </View>
        <View style={styles.right_content}>
          <View style={styles.content_header}>
            <Text style={styles.content_title}>{type}</Text>
            <View style={styles.content_time_wrapper}>
              <Image
                source={require('../assets/icons/time.png')}
                style={styles.icon}
              />
              <Text style={styles.icon_text}>
                {moment(time).format('hh:mm a')}
              </Text>
            </View>
          </View>
          <View style={styles.content_body}>
            <Text
              style={[
                styles.content_body_text,
                { textTransform: 'capitalize' },
              ]}
            >
              {text}
            </Text>
            {subtext && (
              <Text style={styles.content_body_subtext}>{subtext}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
  renderShared(type, time, text, subtext) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.left_content}>
          <Image
            source={require('../assets/icons/share.png')}
            style={styles.left_icon}
          />
        </View>
        <View style={styles.right_content}>
          <View style={styles.content_header}>
            <Text style={styles.content_title}>{type}</Text>
            <View style={styles.content_time_wrapper}>
              <Image
                source={require('../assets/icons/time.png')}
                style={styles.icon}
              />
              <Text style={styles.icon_text}>
                {moment(time).format('hh:mm a')}
              </Text>
            </View>
          </View>
          <View style={styles.content_body}>
            <Text style={styles.content_body_text}>{text}</Text>
            {subtext && (
              <Text style={styles.content_body_subtext}>{subtext}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
  render() {
    const { type, channel, source, time, text, subtext } = this.props;
    return (
      <>
        {type === 'bookmarked' &&
          this.renderBookmarked(type, time, text, subtext)}
        {type === 'commented' &&
          this.renderCommented(type, time, text, subtext)}
        {type === 'followed' && this.renderFollowed(type, time, text, subtext)}
        {type === 'shared' && this.renderShared(type, time, text, subtext)}
        <Image
          source={require('../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: defColor,
    padding: RFValue(20),
    paddingVertical: RFValue(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // borderBottomColor: secColor,
    // borderBottomWidth: RFValue(0.5),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  left_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  right_content: { flex: 1 },
  content_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content_time_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left_icon: {
    tintColor: terColor,
    width: RFValue(30),
    height: RFValue(30),
    marginRight: RFValue(20),
    resizeMode: 'contain',
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
  content_title: {
    color: pryColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    marginBottom: RFValue(15),
    textTransform: 'uppercase',
  },
  content_body_text: {
    color: secColor,
    fontSize: RFValue(fontSizing(26)),
    fontFamily: 'Montserrat-Bold',
  },
  content_body_subtext: {
    color: terColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    marginVertical: RFValue(10),
  },
});
