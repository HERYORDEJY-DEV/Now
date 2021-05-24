import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Image, Switch } from 'react-native';
import { Input } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { pryColor, defColor, terColor, secColor } from '../utils/colors';
import { fontSizing } from '../utils/dimension';
import LineHorizontal from './LineHorizontal';

export default class Switcher extends Component {
  constructor() {
    super();
    this.state = {
      isEnabled: false,
    };
  }

  toggleSwitch(value, label) {
    this.setState({ isEnabled: value, label: value });
  }

  render() {
    const { label, horizontal = true } = this.props;

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <Switch
            thumbColor={this.state.isEnabled ? pryColor : terColor}
            trackColor={{ false: terColor, true: '#ccc' }}
            onValueChange={(value) => this.toggleSwitch(value, label)}
            value={this.state.isEnabled}
            style={styles.switch}
          />
        </View>
        <LineHorizontal />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defColor,
    borderRadius: RFValue(100),
    padding: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switch: {},
  label: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(22)),
    textTransform: 'capitalize',
    color: secColor,
  },
});
