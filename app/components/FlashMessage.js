import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { pryColor } from '../utils/colors';

export default class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMessage: false,
    };
  }

  onPress() {
    this.setState({
      flashMessage: true,
    });
    setTimeout(() => this.closeFlashMessage(), 3000);
    // }
  }

  closeFlashMessage() {
    this.setState({ flashMessage: false });
  }

  render() {
    const { show, children } = this.props;

    return (
      <Modal
        visible={show}
        animationType={'fade'}
        // presentationStyle={'pageSheet'}
        transparent={true}
        style={styles.container}
      >
        {show && <View style={styles.flash_message_container}>{children}</View>}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: 50,
    backgroundColor: 'transparent',
    // padding: 8,
  },
  flash_message_container: {
    top: 0,
    height: 50,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: pryColor,
  },
});
