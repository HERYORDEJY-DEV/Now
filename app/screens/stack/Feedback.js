import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Content, Thumbnail } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import { fontSizing, _screenWidth } from '../../utils/dimension';
import {
  defColor,
  headerBgColor,
  headerSubtextColor,
  inputBg,
  pryColor,
  secColor,
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import PostItem_2 from '../../components/PostItem_2';
import ProfileStats from '../../components/ProfileStats';
import Inputs, { TextInputs } from '../../components/Inputs';
import Switcher from '../../components/Switcher';
import Customize from '../../components/Customize';

export default function Feedback({ navigation }) {
  // render for Header
  function renderHeader() {
    return (
      <>
        <Header></Header>
      </>
    );
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <NavBar
        leftIconName={'menu'}
        rightIconName={'search'}
        leftIconFunction={() => navigation.toggleDrawer()}
      />
      <ImageBackground
        blurRadius={5}
        source={require('../../assets/images/main-bg.png')}
        style={styles.image_background}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={[pryColor + '90', secColor + '90']}
          style={{ flex: 1, width: '100%', height: '100%' }}
        >
          <Content
            style={styles.content}
            bounces={false}
            bouncesZoom={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.wrapper}>
              <View style={styles.header_container}>
                <TouchableOpacity
                  style={[styles.action_button, { elevation: 20 }]}
                >
                  <Image
                    source={require('../../assets/icons/phone.png')}
                    style={styles.action_icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.action_button,
                    { backgroundColor: defColor, elevation: 20 },
                  ]}
                >
                  <Image
                    source={require('../../assets/icons/email.png')}
                    style={[styles.action_icon, { tintColor: pryColor }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.action_button, { elevation: 20 }]}
                >
                  <Image
                    source={require('../../assets/icons/location.png')}
                    style={styles.action_icon}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{ marginVertical: RFValue(20), marginTop: RFValue(30) }}
              >
                <Text style={styles.header_content_button_text}>
                  SEND FEEDBACK
                </Text>
                <Text style={styles.header_content_button_subtext}>
                  Your feedback is very important to us
                </Text>
              </View>
              <Inputs type={'username'} placeholder={'Username'} />
              <Inputs type={'email'} placeholder={'Email'} />
              <TextInputs />
            </View>
          </Content>
        </LinearGradient>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  image_background: { flex: 1 },
  wrapper: { padding: RFValue(20) },
  header_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  category: {},
  category_header: {
    color: pryColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    padding: RFValue(20),
    paddingBottom: RFValue(10),
  },
  action_button: {
    backgroundColor: inputBg,
    borderRadius: RFValue(100),
    padding: RFValue(15),
  },
  action_icon: {
    width: RFValue(25),
    height: RFValue(25),
    tintColor: defColor,
    resizeMode: 'contain',
  },
  header_content_button_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: RFValue(5),
  },
  header_content_button_subtext: {
    color: headerSubtextColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
