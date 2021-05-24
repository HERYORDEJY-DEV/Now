import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { Input, Textarea } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  pryColor,
  defColor,
  inputBg,
  secColor,
  terColor,
} from '../utils/colors';
import { TouchableRipple } from 'react-native-paper';
import LineHorizontal from './LineHorizontal';

export default class Inputs extends Component {
  render() {
    const { type, ...props } = this.props;

    const input_image_source = {
      username: require('../assets/icons/username.png'),
      email: require('../assets/icons/email.png'),
      password: require('../assets/icons/password.png'),
    };
    return (
      <View style={styles.container}>
        <Image
          source={input_image_source[`${type}`]}
          style={styles.input_icon}
        />
        <Input
          {...props}
          multiline={false}
          style={styles.input_style}
          secureTextEntry={type === 'password'}
          placeholderTextColor={defColor}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
        />
      </View>
    );
  }
}

export class TextInputs extends Component {
  render() {
    const { type, ...props } = this.props;

    const input_image_source = {
      username: require('../assets/icons/username.png'),
      email: require('../assets/icons/email.png'),
      password: require('../assets/icons/password.png'),
    };
    return (
      <View style={styles.container2}>
        <Textarea
          {...props}
          multiline={true}
          style={styles.input_style2}
          placeholder={'Write message here...'}
          placeholderTextColor={defColor}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
        />
        <TouchableRipple
          borderless={true}
          rippleColor={defColor}
          onPress={() => {}}
          style={{
            padding: RFValue(10),
            paddingRight: RFValue(0),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={require('../assets/icons/submit.png')}
            // source={input_image_source[`${type}`]}
            style={styles.input_icon}
          />
        </TouchableRipple>
      </View>
    );
  }
}

export class CommentInputs extends Component {
  render() {
    const { type, ...props } = this.props;

    const input_image_source = {
      username: require('../assets/icons/username.png'),
      email: require('../assets/icons/email.png'),
      password: require('../assets/icons/password.png'),
    };
    return (
      <>
        <LineHorizontal />
        <View style={styles.container3}>
          <TouchableRipple
            borderless={true}
            rippleColor={defColor}
            style={{
              padding: RFValue(10),
              paddingRight: RFValue(0),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../assets/icons/attachment.png')}
              // source={input_image_source[`${type}`]}
              style={styles.input_icon3}
            />
          </TouchableRipple>
          <Textarea
            {...props}
            multiline={true}
            style={styles.input_style3}
            placeholder={'Write message here...'}
            placeholderTextColor={terColor}
            keyboardType={type === 'email' ? 'email-address' : 'default'}
          />
          <TouchableRipple
            borderless={true}
            rippleColor={defColor}
            onPress={() => {}}
            style={{
              padding: RFValue(10),
              paddingRight: RFValue(0),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../assets/icons/submit.png')}
              // source={input_image_source[`${type}`]}
              style={styles.input_icon3}
            />
          </TouchableRipple>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: inputBg,
    borderRadius: RFValue(100),
    padding: RFValue(20),
    paddingVertical: RFValue(5),
    marginVertical: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
  },
  input_icon: {
    width: RFValue(20),
    height: RFValue(20),
    tintColor: defColor,
    resizeMode: 'contain',
    marginRight: RFValue(10),
  },
  input_icon3: {
    width: RFValue(20),
    height: RFValue(20),
    tintColor: terColor,
    resizeMode: 'contain',
    marginRight: RFValue(10),
  },
  input: {},
  input_style: { color: defColor },
  container2: {
    backgroundColor: defColor + 10,
    // borderRadius: RFValue(100),
    padding: RFValue(10),
    paddingVertical: RFValue(5),
    marginVertical: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input_style2: { color: defColor, height: RFValue(200), flex: 1 },
  container3: {
    backgroundColor: defColor + 10,
    // borderRadius: RFValue(100),
    padding: RFValue(10),
    // paddingVertical: RFValue(15),
    // marginVertical: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    height: RFValue(60),
  },
  input_style3: { color: secColor, flex: 1, alignSelf: 'baseline' },
});
