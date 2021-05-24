import React, { useState } from 'react';
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
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import { fontSizing, _screenWidth } from '../../utils/dimension';
import {
  defColor,
  headerBgColor,
  pryColor,
  secColor,
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Channel({ navigation }) {
  // following state
  const [isFollowing, setIsFollowing] = useState(false);

  // toggle following
  function toggleFollowing() {
    setIsFollowing(!isFollowing);
  }

  // render for Header
  function renderHeader() {
    return (
      <>
        {/* <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        /> */}
        <ImageBackground
          source={require('../../assets/images/science-hero.png')}
          style={styles.header_container}
        >
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: headerBgColor,
            }}
          />
          <View style={styles.header_content}>
            <Text style={styles.header_content_title}>SCIENCE CHANNEL</Text>
            <View
              style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <View style={{ flex: 1 }} />
              <TouchableRipple
                borderless={true}
                rippleColor={pryColor}
                style={styles.ripple_button}
                onPress={toggleFollowing}
              >
                <Text style={styles.ripple_button_text}>
                  {isFollowing ? 'Following' : 'Follow'}
                </Text>
              </TouchableRipple>
              <View style={{ flex: 1 }} />
            </View>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressable_text}>234K Followers</Text>
            </Pressable>
          </View>
        </ImageBackground>
        <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
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
      {/* <View contentContainerStyle={styles.content}> */}
      {/* <Header children={renderHeader()} /> */}
      <FlatList
        contentContainerStyle={styles.content}
        ListHeaderComponent={renderHeader}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        data={feeds_}
        renderItem={({ item, index }) => (
          <PostItem navigation={navigation} {...item} />
        )}
        keyExtractor={(item, index) => item.id}
      />

      {/* </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: RFValue(20) },
  content: { paddingBottom: RFValue(20) },
  header_container: {
    width: '100%',
    height: _screenWidth * 0.7,
    // alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  header_content: {
    padding: RFValue(20),
    justifyContent: 'center',
    // flex: 1,
    alignItems: 'center',
  },
  header_content_title: {
    color: defColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    padding: RFValue(20),
  },
  ripple_button: {
    backgroundColor: defColor,
    padding: RFValue(20),
    paddingVertical: RFValue(15),
    marginVertical: RFValue(30),
    borderRadius: RFValue(100),
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: RFValue(110),
  },
  ripple_button_text: {
    color: pryColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
  },
  pressable: {
    padding: RFValue(20),
    paddingVertical: RFValue(15),
    borderRadius: RFValue(100),
    alignItems: 'center',
    // flex: 1,
  },
  pressable_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
  },
});
