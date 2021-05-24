import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import Customize from './Customize';

export default class BottomSheets extends Component {
  state = {
    isVisible: true,
  };
  render() {
    const { isVisible, toggle } = this.props;
    return (
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'transparent' }}
        animationType={'slide'}
        onRequestClose={() => toggle()}
        transparent={true}
      >
        <Customize toggle={toggle} />
      </BottomSheet>
    );
  }
}
