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
  headerSubtextColor,
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';

export default function Bookmarks({ navigation }) {
  // render for Header
  function renderHeader() {
    return (
      <Header>
        <Text style={styles.header_content_button_text}>BOOKMARKS</Text>
        <Text style={styles.header_content_button_subtext}>
          Your bookmarked stories
        </Text>
      </Header>
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
      {renderHeader()}
      {/* <View contentContainerStyle={styles.content}> */}
      {/* <Header children={renderHeader()} /> */}
      <FlatList
        contentContainerStyle={styles.content}
        // ListHeaderComponent={renderHeader}
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
  header_container: { width: '100%', height: _screenWidth * 0.9 },
  header_content: { position: 'absolute', bottom: 0, padding: RFValue(20) },
  header_content_title: {
    color: defColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    marginBottom: RFValue(15),
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
