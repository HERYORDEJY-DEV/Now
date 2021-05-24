import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { defColor, pryColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

const icon_location = {
  back: require('../assets/icons/back.png'),
  menu: require('../assets/icons/menu.png'),
  setting: require('../assets/icons/setting.png'),
  search: require('../assets/icons/search.png'),
  plus: require('../assets/icons/plus.png'),
};

export default class NavBar extends Component {
  renderLeftIcon(icon_source, onPress) {
    return (
      <TouchableOpacity style={styles.icon_container} onPress={onPress}>
        <Image style={styles.icon} source={icon_source} />
      </TouchableOpacity>
    );
  }

  renderRightIcon(icon_source, onPress) {
    return (
      <TouchableOpacity style={styles.icon_container} onPress={onPress}>
        <Image style={styles.icon} source={icon_source} />
      </TouchableOpacity>
    );
  }

  render() {
    const {
      renderLeft,
      renderRight,
      bodyText,
      leftIconName,
      rightIconName,
      leftIconFunction,
      rightIconFunction,
    } = this.props;
    return (
      <View style={styles.container}>
        {this.renderLeftIcon(icon_location[leftIconName], leftIconFunction)}
        <View style={styles.body_text_container}>
          <Image
            style={styles.logo_icon}
            source={require('../assets/icons/N.png')}
          />
        </View>

        {this.renderRightIcon(icon_location[rightIconName], rightIconFunction)}
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

  icon: { resizeMode: 'contain', width: RFValue(20), height: RFValue(20) },

  body_text_container: {
    // flex: 1,
  },

  logo_icon: {
    width: RFValue(22),
    height: RFValue(22),
  },
});
