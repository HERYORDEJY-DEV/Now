import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import { Container, Content } from 'native-base';
import {
  defColor,
  headerBgColor,
  pryColor,
  terColor,
} from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Inputs from '../../components/Inputs';
import { TouchableRipple } from 'react-native-paper';
import { fontSizing } from '../../utils/dimension';

export default function SignIn() {
  return (
    <Container style={styles.container}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        style={styles.image_background}
        source={require('../../assets/images/main-bg.png')}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: headerBgColor,
          }}
        />
        <Content
          scrollEnabled={false}
          style={styles.content}
          contentContainerStyle={{
            justifyContent: 'space-between',
            // alignItems: 'center',
            flex: 1,
          }}
        >
          {/* <View style={{ flex: 1 }}> */}
          <View style={[styles.logo_container, { flex: 1 }]}>
            <Image
              source={require('../../assets/icons/Logo.png')}
              style={styles.logo}
            />
          </View>
          <View
            style={{ padding: RFValue(20), flex: 1, marginBottom: RFValue(20) }}
          >
            <Inputs placeholder={'Username'} type={'username'} />
            <Inputs placeholder={'Password'} type={'password'} />
            <TouchableRipple
              borderless={true}
              rippleColor={defColor}
              onPress={() => {
                // navigation.navigate('PostContent');
              }}
              style={styles.start_button}
            >
              <Text style={styles.start_text}>Get Started</Text>
            </TouchableRipple>
            <View style={styles.helper_container}>
              <Pressable style={styles.helper_button}>
                <Text style={styles.helper_text}>Create Account</Text>
              </Pressable>
              <Pressable style={styles.helper_button}>
                <Text style={styles.helper_text}>Need Help?</Text>
              </Pressable>
            </View>
          </View>
          {/* </View> */}
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingTop: RFValue(100),
    flex: 1,
  },
  image_background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  logo_container: { alignItems: 'center' },
  logo: { width: RFValue(150), height: RFValue(150), resizeMode: 'contain' },
  start_button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RFValue(20),
    padding: RFValue(20),
    backgroundColor: pryColor,
    borderRadius: 1000,
  },
  start_text: {
    // padding: RFValue(5),
    color: defColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
  },
  helper_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: RFValue(10),
    paddingBottom: RFValue(30),
  },
  helper_button: {
    // padding: RFValue(5),
  },
  helper_text: {
    // padding: RFValue(5),
    color: defColor,
    fontSize: RFValue(fontSizing(22)),
  },
});
