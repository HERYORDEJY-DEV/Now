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
  pryColor,
  secColor,
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import PostItem_2 from '../../components/PostItem_2';
import ProfileStats from '../../components/ProfileStats';
import HeaderScrollView from '../../components/HeaderScrolView';

export default function Profile({ navigation }) {
  // render for Header
  function renderHeader() {
    return (
      <>
        <Header>
          <View style={styles.header_container}>
            <Thumbnail
              source={require('../../assets/images/me.jpg')}
              large={true}
              style={{
                width: RFValue(100),
                height: RFValue(100),
                borderRadius: RFValue(100),
              }}
            />
            <Text style={styles.user_name}>OYEBODE YUSUF</Text>
            <Text style={styles.user_job}>Software Developer</Text>
          </View>
        </Header>
        <ProfileStats />
      </>
    );
  }

  // render for Fixed Header
  function renderFixedHeader() {
    return (
      <>
        <Header>
          <View
            style={[
              styles.header_container,
              { flexDirection: 'row', paddingVertical: RFValue(0) },
            ]}
          >
            <Thumbnail
              source={require('../../assets/images/me.jpg')}
              small={true}
              style={{
                width: RFValue(50),
                height: RFValue(50),
                borderRadius: RFValue(100),
                marginRight: RFValue(10),
              }}
            />
            <View>
              <Text style={styles.user_name}>OYEBODE YUSUF</Text>
              <Text style={styles.user_job}>Software Developer</Text>
            </View>
          </View>
        </Header>
        <ProfileStats />
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
        rightIconName={'setting'}
        leftIconFunction={() => navigation.toggleDrawer()}
      />
      {/* <View contentContainerStyle={styles.content}> */}
      {/* <Header children={renderHeader()} /> */}
      {/* {renderFixedHeader()} */}
      <HeaderScrollView
        maxHeight={_screenWidth > 450 ? 275 : 270}
        minHeight={_screenWidth > 450 ? 175 : 166}
        renderForeground={renderHeader}
        renderFixedForeground={renderFixedHeader}
      >
        {/* <FlatList
          contentContainerStyle={styles.content}
          // ListHeaderComponent={renderHeader}
          bounces={false}
          bouncesZoom={false}
          showsVerticalScrollIndicator={false}
          data={feeds_}
          renderItem={({ item, index }) => (
            <PostItem_2 navigation={navigation} {...item} />
          )}
          keyExtractor={(item, index) => item.id}
        /> */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
          <Text style={{ color: secColor, fontSize: RFValue(fontSizing(62)) }}>
            Yusuf
          </Text>
        </View>
      </HeaderScrollView>
      {/* </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: RFValue(20) },
  content: { paddingBottom: RFValue(20) },
  header_container: { alignItems: 'center' },
  header_content: { position: 'absolute', bottom: 0, padding: RFValue(20) },
  header_content_title: {
    color: defColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    marginBottom: RFValue(15),
  },
  user_name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(40)),
    color: defColor,
    textTransform: 'capitalize',
    marginVertical: RFValue(10),
  },
  user_job: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(22)),
    color: headerSubtextColor,
  },
});
