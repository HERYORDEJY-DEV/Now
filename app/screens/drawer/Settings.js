import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Content, Icon, Thumbnail } from 'native-base';
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
import Inputs from '../../components/Inputs';
import Switcher from '../../components/Switcher';
import Customize from '../../components/Customize';
import { TouchableRipple } from 'react-native-paper';

export default function Settings({ navigation }) {
  // render for Header
  function renderHeader() {
    return (
      <>
        <Header>
          <View style={styles.header_container}>
            <TouchableOpacity style={[styles.action_button, { elevation: 20 }]}>
              <Image
                source={require('../../assets/icons/upload.png')}
                style={styles.action_icon}
              />
            </TouchableOpacity>
            <View>
              <Thumbnail
                source={require('../../assets/images/me.jpg')}
                large={true}
                style={{
                  width: RFValue(100),
                  height: RFValue(100),
                  borderRadius: RFValue(100),
                }}
              />
              <Pressable
                style={styles.edit_icon_container}
                onPress={() => {}}
                // borderless={true}
                // rippleColor={defColor}
              >
                <Icon name={'edit'} type={'Feather'} style={styles.edit_icon} />
              </Pressable>
            </View>
            <TouchableOpacity style={[styles.action_button, { elevation: 20 }]}>
              <Image
                source={require('../../assets/icons/sync.png')}
                style={styles.action_icon}
              />
            </TouchableOpacity>
          </View>
          <Inputs type={'username'} placeholder={'Username'} />
          <Inputs type={'email'} placeholder={'Email'} />
          <Inputs type={'password'} placeholder={'Password'} />
        </Header>
      </>
    );
  }

  function renderLinkText(text, onPress) {
    return (
      <TouchableRipple onPress={onPress} style={styles.link_text_container}>
        <Text style={styles.link_text}>{text}</Text>
      </TouchableRipple>
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
        rightIconName={'setting'}
        leftIconFunction={() => navigation.toggleDrawer()}
      />
      <Content
        contentContainerStyle={styles.content}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
      >
        {renderHeader()}
        <View style={styles.category}>
          <Text style={styles.category_header}>CHANGE THEME</Text>
          <Switcher label={'dark theme'} />
        </View>

        <View style={styles.category}>
          <Text style={styles.category_header}>EMAIL NOTIFICATIONS</Text>
          <Switcher label={'sunday'} />
          <Switcher label={'monday'} />
          <Switcher label={'tuesday'} />
          <Switcher label={'wednesday'} />
          <Switcher label={'thursday'} />
          <Switcher label={'friday'} />
          <Switcher label={'saturday'} />
        </View>
        {renderLinkText('Feedback', () => {
          navigation.navigate('Feedback');
        })}
        {renderLinkText('Questions & Answers', () => {})}
        {renderLinkText('More', () => {})}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: RFValue(20) },
  content: { paddingBottom: RFValue(20) },
  header_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    padding: RFValue(10),
  },
  action_icon: {
    width: RFValue(25),
    height: RFValue(25),
    tintColor: defColor,
    resizeMode: 'contain',
  },
  edit_icon_container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: RFValue(5),
    backgroundColor: pryColor,
    borderRadius: RFValue(20),
  },
  edit_icon: {
    width: RFValue(25),
    height: RFValue(25),
    color: defColor,
    // resizeMode: 'contain',
  },
  link_text_container: {
    padding: RFValue(20),
  },
  link_text: {
    color: pryColor,
    fontSize: RFValue(fontSizing(26)),
  },
});
