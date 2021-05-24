import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
} from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import { fontSizing, _screenWidth } from '../../utils/dimension';
import { defColor, pryColor, secColor } from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChannelThumb from '../../components/ChannelThumb';
import { channels_ } from '../../api/channels';

export default function Channels({ navigation }) {
  // render for Header
  function renderHeader() {
    return (
      <Header containerStyles={{ paddingHorizontal: RFValue(10) }}>
        <View style={styles.header_content}>
          <TouchableOpacity style={styles.header_content_button}>
            <Text style={styles.header_content_button_text}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_content_button}>
            <Text style={styles.header_content_button_text}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.header_content_button}>
            <Text style={styles.header_content_button_text}>Explore</Text>
          </TouchableOpacity>
        </View>
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
      <View style={{ backgroundColor: pryColor }}>
        <Text
          style={[
            styles.header_content_button_text,
            { fontSize: RFValue(fontSizing(40)), marginBottom: RFValue(5) },
          ]}
        >
          CHANNELS
        </Text>
      </View>
      {/* <View contentContainerStyle={styles.content}> */}
      {/* <Header children={renderHeader()} /> */}
      <FlatList
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // numColumns={_screenWidth > 450 ? 3 : 2}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={renderHeader}
        // stickyHeaderIndices={[0]}
        data={channels_}
        renderItem={({ item, index }) => (
          <ChannelThumb navigation={navigation} {...item} />
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
  contentContainerStyle: { width: _screenWidth },
  header_container: {},
  header_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_content_button: {
    padding: RFValue(10),
    borderRadius: RFValue(100),
    borderWidth: RFValue(1),
    borderColor: defColor,
    width: RFValue(100),
  },
  header_content_button_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(22)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
