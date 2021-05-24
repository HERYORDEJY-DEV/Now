import React, { useState, useEffect } from 'react';
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
import AppLoading from 'expo-app-loading';
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
import getAllNews, { getNews } from '../../api/allNews';
import LineHorizontal from '../../components/LineHorizontal';
import { TouchableRipple } from 'react-native-paper';
import BottomSheets from '../../components/BootomSheet';

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ articles: [], refreshing: false });
  const [loader, setLoader] = useState(false);
  // Change YOUR_API_KEY_HERE to your apiKey

  useEffect(() => {
    fetchNews();
  }, [state.articles]);

  function fetchNews() {
    getNews()
      .then((articles) => {
        setState({ articles, firstNews: articles[0], refreshing: false });
        setIsLoading(false);
      })
      .catch(() => setState({ refreshing: false }));
  }

  function handleRefresh() {
    setState({
      refreshing: true,
    });
    fetchNews();
  }

  const { articles, firstNews } = state;
  // const restNews = articles.map((article, index) => index !== 0);
  // console.log(articles[0].urlToImage);

  // render for Header
  function renderHeader() {
    return (
      <>
        <TouchableRipple
          borderless={true}
          rippleColor={defColor}
          onPress={() => {
            navigation.navigate('PostContent');
          }}
        >
          <ImageBackground
            source={{ uri: `${articles[0].urlToImage}` }}
            style={styles.header_container}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: headerBgColor,
              }}
            />
            <View style={styles.header_content}>
              <Text style={styles.header_content_title}>
                {articles[0].title}
              </Text>
              <PostInfo
                source={articles[0].source.name}
                time={moment(articles[0].time).fromNow()}
                // channel={}
                type
              />
            </View>
          </ImageBackground>
        </TouchableRipple>
        <LineHorizontal />
      </>
    );
  }

  // async function loadData() {
  //   setLoader(true);
  //   const resp = await getData();
  //   setLoader(false);
  // }

  // function onEndReached(page) {
  //   if (next && !loader) {
  //     setPage(page + 1);
  //   }
  // }

  // if (isLoading) {
  //   return <AppLoading />;
  // }

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
        // ListHeaderComponent={renderHeader}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        data={state.articles}
        renderItem={({ item, index }) => (
          <PostItem
            {...item}
            navigation={navigation}
            source={item.source.name}
            time={item.publishedAt}
            title={item.title}
          />
        )}
        // keyExtractor={(item, index) => item.id}
        keyExtractor={(item) => item.url}
        refreshing={state.refreshing}
        onRefresh={handleRefresh}
        // onEndReached={onEndReached}
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
    height: _screenWidth > 450 ? _screenWidth * 0.5 : _screenWidth * 0.6,
  },
  header_content: { position: 'absolute', bottom: 0, padding: RFValue(20) },
  header_content_title: {
    color: defColor,
    fontSize: RFValue(fontSizing(36)),
    fontFamily: 'Montserrat-Bold',
    marginBottom: RFValue(15),
  },
});
