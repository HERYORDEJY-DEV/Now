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
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChannelThumb from '../../components/ChannelThumb';
import { channels_ } from '../../api/channels';
import OverviewItem from '../../components/OverviewItem';
import { overview_ } from '../../api/overview';
import TimelineItem from '../../components/TimelineItem';
import { timeline_ } from '../../api/timeline';

export default function Timeline({ navigation }) {
  // render for Header
  function renderHeader() {
    return (
      <Header>
        <Text style={styles.header_content_button_text}>Monday</Text>
        <Text style={styles.header_content_button_subtext}>
          February 15, 2019
        </Text>
      </Header>
    );
  }

  return (
    <Container style={styles.container}>
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
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        // ListHeaderComponent={renderHeader}
        data={timeline_}
        renderItem={({ item, index }) => (
          <TimelineItem navigation={navigation} {...item} />
        )}
        keyExtractor={(item, index) => item.id}
      />
      {/* </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: defColor },
  content: { paddingBottom: RFValue(20) },
  header_container: {},
  header_content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(20),
    paddingVertical: RFValue(20),
    backgroundColor: pryColor,
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
