import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { defColor, pryColor, terColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

const icon_location = {
  back: require('../assets/icons/back.png'),
  menu: require('../assets/icons/menu.png'),
  setting: require('../assets/icons/setting.png'),
  search: require('../assets/icons/search.png'),
};

// Back button
function RenderBackIcon({ onPress, active }) {
  return (
    <TouchableOpacity
      // disabled={!active}
      style={styles.icon_container}
      onPress={onPress}
    >
      <Image
        style={[
          styles.icon,
          // { tintColor: active === true ? defColor : terColor },
        ]}
        source={require('../assets/icons/back.png')}
      />
    </TouchableOpacity>
  );
}

// Comment button
function RenderCommentIcon({ onPress, active }) {
  return (
    <TouchableOpacity
      disabled={!active}
      style={styles.icon_container}
      onPress={onPress}
    >
      <Image
        style={[
          styles.icon,
          { tintColor: active === true ? defColor : terColor },
        ]}
        source={require('../assets/icons/comment.png')}
      />
    </TouchableOpacity>
  );
}

// Customize button
function RenderCustomizeIcon({ onPress, active }) {
  return (
    <TouchableOpacity
      disabled={!active}
      style={styles.icon_container}
      onPress={onPress}
    >
      <Image
        style={[
          styles.icon,
          { tintColor: active === true ? defColor : terColor },
        ]}
        source={require('../assets/icons/large-a.png')}
      />
    </TouchableOpacity>
  );
}

// Bookmark button
function RenderBookmarkIcon({ onPress, active }) {
  return (
    <TouchableOpacity
      disabled={!active}
      style={styles.icon_container}
      onPress={onPress}
    >
      <Image
        style={[
          styles.icon,
          { tintColor: active === true ? defColor : terColor },
        ]}
        source={require('../assets/icons/bookmark.png')}
      />
    </TouchableOpacity>
  );
}

// Share button
function RenderShareIcon({ onPress, active }) {
  return (
    <TouchableOpacity
      disabled={!active}
      style={styles.icon_container}
      onPress={onPress}
    >
      <Image
        style={[
          styles.icon,
          { tintColor: active === true ? defColor : terColor },
        ]}
        source={require('../assets/icons/share.png')}
      />
    </TouchableOpacity>
  );
}

export default class NavBar_2 extends Component {
  render() {
    const {
      navigation,
      backIconFunction,
      commentIconFunction,
      customizeIconFunction,
      bookmarkIconFunction,
      shareIconFunction,
      active,
      postContent,
    } = this.props;
    return (
      <View style={styles.container}>
        <RenderBackIcon onPress={() => navigation.goBack()} />
        <RenderCommentIcon
          onPress={() => navigation.navigate('Comments')}
          active={active === 'Comments' || postContent}
        />
        <RenderCustomizeIcon
          onPress={() => customizeIconFunction()}
          active={active === 'Customize' || postContent}
        />
        <RenderBookmarkIcon
          onPress={() => bookmarkIconFunction()}
          active={active === 'Bookmark' || postContent}
        />
        <RenderShareIcon
          onPress={() => navigation.goBack()}
          active={active === 'Share' || postContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: RFValue(30),
    paddingBottom: RFValue(10),
    paddingHorizontal: RFValue(10),
    backgroundColor: pryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 300000,
  },

  icon_container: {
    padding: RFValue(10),
  },

  icon: {
    width: RFValue(20),
    height: RFValue(20),
    resizeMode: 'contain',
  },

  body_text_container: {
    // flex: 1,
  },

  logo_icon: {
    width: RFValue(22),
    height: RFValue(22),
    resizeMode: 'contain',
  },
});
