import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
import NavBar from '../../components/NavBar';
import NavBar_2 from '../../components/NavBar_2';
import Header from '../../components/Header';
import { fontSizing, _screenWidth } from '../../utils/dimension';
import {
  defColor,
  headerBgColor,
  pryColor,
  secColor,
  terColor,
} from '../../utils/colors';
import PostInfo from '../../components/PostInfo';
import PostItem from '../../components/PostItem';
import { feeds_ } from '../../api/feeds';
import VideoPlayer from '../../components/VideoPlayer';
import VideoPlayers from '../../components/VideoPlayers';
import RelatedPostCarousel from '../../components/RelatedPostCarousel';
import LineHorizontal from '../../components/LineHorizontal';
import RelatedPost from '../../components/RelatedPost';
import { post_carousel } from '../../api/carousel';
import NextPost from '../../components/NextPost';
import BottomSheets from '../../components/BootomSheet';
import FlashMessage from '../../components/FlashMessage';
import HeaderScrollView from '../../components/HeaderScrolView';

export default function PostContent({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  // toggle customize
  function toggleCustomize() {
    setIsVisible(!isVisible);
  }

  // Show bookmark success message
  const [bookmarkSuccess, setBookmarkSuccess] = useState(false);
  function showBookmarkMessage() {
    setBookmarkSuccess(true);
    setTimeout(() => {
      setBookmarkSuccess(false);
    }, 3000);
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
          source={require('../../assets/images/story-hero.png')}
          style={styles.header_container}
        >
          {/* <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: headerBgColor,
            }}
          /> */}
          <View style={styles.header_content}>
            <Text style={styles.header_content_title}>
              Astronauts would land on Red Planet by 2039
            </Text>
          </View>
        </ImageBackground>
        <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
        <View
          style={{
            backgroundColor: defColor,
            paddingVertical: RFValue(10),
            padding: RFValue(20),
          }}
        >
          <PostInfo
            postContent={true}
            source={'CNN'}
            time={moment(1613307789000).fromNow()}
            channel={'TECHNOLOGY'}
          />
        </View>
        <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
      </>
    );
  }

  // render for Header
  function renderFixedHeader() {
    return (
      <>
        {/* <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        /> */}

        <View
          style={[
            styles.header_content,
            { position: 'relative', paddingVertical: RFValue(10) },
          ]}
        >
          <Text
            style={[
              styles.header_content_title,
              { color: secColor, fontSize: RFValue(fontSizing(28)) },
            ]}
          >
            Astronauts would land on Red Planet by 2039
          </Text>
        </View>

        <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
        <View
          style={{
            backgroundColor: defColor,
            padding: RFValue(20),
            paddingVertical: RFValue(10),
          }}
        >
          <PostInfo
            postContent={true}
            source={'CNN'}
            time={moment(1613307789000).fromNow()}
            channel={'FASHION'}
          />
        </View>
        <Image
          source={require('../../assets/icons/line-h.png')}
          style={{ tintColor: secColor, width: _screenWidth }}
        />
      </>
    );
  }

  function renderParagraph(paragraph) {
    return (
      <View style={styles.paragraph_container}>
        <Text style={styles.paragraph_text}>{paragraph}</Text>
      </View>
    );
  }

  function renderQuote() {
    return (
      <View style={styles.quote_container}>
        <View
          style={{
            // ...StyleSheet.absoluteFillObject,
            borderLeftWidth: RFValue(2),
            borderLeftColor: pryColor,
            paddingLeft: RFValue(20),
          }}
        >
          <Text style={styles.quote_text}>
            “Over the span of the satellite record, Arctic sea ice has been
            declining significantly, while sea ice in the Antarctic has
            increased very slightly”
          </Text>
          <Text style={styles.quote_name}> - Yusuf</Text>
        </View>
      </View>
    );
  }

  function renderVideo() {
    return (
      <View style={styles.video_container}>
        <View
          style={{
            // ...StyleSheet.absoluteFillObject,
            borderLeftWidth: RFValue(2),
            borderLeftColor: pryColor,
            paddingLeft: RFValue(20),
          }}
        >
          <Text style={styles.quote_text}>
            “Over the span of the satellite record, Arctic sea ice has been
            declining significantly, while sea ice in the Antarctic has
            increased very slightly”
          </Text>
          <Text style={styles.quote_name}> - Yusuf</Text>
        </View>
      </View>
    );
  }

  function bookmark() {}

  return (
    <Container>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <NavBar_2
        navigation={navigation}
        postContent={true}
        customizeIconFunction={toggleCustomize}
        bookmarkIconFunction={showBookmarkMessage}
      />
      {/* <Content
        contentContainerStyle={styles.content}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
      > */}
      {/* {renderHeader()} */}
      <HeaderScrollView
        maxHeight={_screenWidth > 450 ? 280 : 260}
        // maxHeight={_screenWidth > 450 ? 275 : 270}
        minHeight={_screenWidth > 450 ? 116 : 110}
        // minHeight={_screenWidth > 450 ? 175 : 166}
        renderForeground={renderHeader}
        renderFixedForeground={renderFixedHeader}
      >
        {renderParagraph(
          'According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.',
        )}
        {renderQuote()}
        {renderParagraph(
          'So what does this new record for the lowest level of winter ice actually mean?',
        )}
        {renderParagraph(
          'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.',
        )}
        {/* <VideoPlayer />
        <VideoPlayers /> */}
        {renderParagraph(
          'For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists haveobserved a clear pattern of decline, decade-by-decade.',
        )}
        {renderParagraph(
          'So at some point this century the summers are on course to be clear of ice, opening up new shipping lanes, making it easier to access the region’s oil and gas and possibly also altering the path of the jet stream that drives our weather. So the matter of when all this might happen is the subject of intense research.',
        )}

        {/* Related Posts */}
        <RelatedPost data={post_carousel} navigation={navigation} />
        {/* Next Story */}
        <NextPost navigation={navigation} />
      </HeaderScrollView>
      {/* </Content> */}
      <FlashMessage show={bookmarkSuccess}>
        <View style={styles.flash_message_container}>
          <Icon
            type={'MaterialCommunityIcons'}
            name={'check'}
            style={styles.flash_message_icon}
            // source={require('../../assets/icons/check.png')}
          />
          <Text style={styles.flash_message_text}>Story added to Bookmark</Text>
        </View>
      </FlashMessage>

      <BottomSheets isVisible={isVisible} toggle={toggleCustomize} />
    </Container>
  );
}

const styles = StyleSheet.create({
  flash_message_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flash_message_icon: {
    color: defColor,
    paddingHorizontal: RFValue(5),
  },
  flash_message_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(26)),
    paddingHorizontal: RFValue(5),
  },
  container: {},
  content: {},
  header_container: {
    width: '100%',
    height: _screenWidth > 450 ? _screenWidth * 0.5 : _screenWidth * 0.6,
  },
  header_content: { position: 'absolute', bottom: 0, padding: RFValue(20) },
  header_content_title: {
    color: defColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
  },
  paragraph_container: { padding: RFValue(20), paddingVertical: RFValue(10) },
  paragraph_text: {
    fontSize: RFValue(fontSizing(28)),
    color: secColor,
    lineHeight: RFValue(27),
  },
  quote_container: {
    padding: RFValue(20),
    paddingVertical: RFValue(10),
  },
  quote_text: { fontSize: RFValue(fontSizing(28)), color: pryColor },
  quote_name: {
    fontSize: RFValue(fontSizing(22)),
    color: pryColor,
    fontFamily: 'Montserrat-Bold',
    marginTop: RFValue(10),
  },
  carousel_container: {
    marginTop: RFValue(20),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
