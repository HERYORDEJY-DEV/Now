import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { defColor, pryColor, secColor } from '../utils/colors';
import * as Progress from 'react-native-progress';
import { fontSizing, _screenWidth } from '../utils/dimension';
import { TouchableRipple } from 'react-native-paper';

export default class OverviewItem extends Component {
  render() {
    const { name, rate } = this.props;
    return (
      <TouchableRipple
        style={styles.container}
        borderless={true}
        rippleColor={defColor}
      >
        <View>
          <View style={styles.wrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rate}>{rate}%</Text>
          </View>
          <Progress.Bar
            progress={rate / 100}
            width={_screenWidth - 40}
            color={defColor}
            unfilledColor={defColor + 50}
            borderRadius={0}
            borderWidth={0}
            height={RFValue(2)}
          />
        </View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: RFValue(20),
    backgroundColor: pryColor,
    marginVertical: RFValue(20),
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },
  name: {
    color: defColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  rate: {
    color: defColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
