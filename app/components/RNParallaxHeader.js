import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {
  pryColor,
  defColor,
  secColor,
  headerBgColor,
  headerSubtextColor,
} from '../utils/colors';
import NavBar from './NavBar';
import Header from './Header';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSizing } from '../utils/dimension';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const renderNavBar = () => (
  // <View style={styles.navContainer}>
  //   <View style={styles.statusBar} />
  //   <View style={styles.navBar}>
  //     <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
  //       <Text style={{ color: 'white' }}>About</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
  //       <Text style={{ color: 'white' }}>Me</Text>
  //     </TouchableOpacity>
  //   </View>
  // </View>
  <NavBar />
);

// const renderContent = () => {
//   return (
//     <View style={styles.body}>
//       {Array.from(Array(30).keys()).map((i) => (
//         <View
//           key={i}
//           style={{
//             padding: 15,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <Text>Item {i + 1}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

const title = () => {
  return (
    <Header>
      <Text style={styles.header_content_button_text}>OVERVIEW</Text>
      <Text style={styles.header_content_button_subtext}>
        What you are reading the most
      </Text>
    </Header>
  );
};

export default function RNParallaxHeader({ children, renderContent }) {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ReactNativeParallaxHeader
        // headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={100}
        // extraScrollHeight={20}
        statusBarColor={null}
        navbarColor={pryColor}
        alwaysShowNavBar={false}
        alwaysShowTitle={false}
        titleStyle={styles.titleStyle}
        title={title()}
        // backgroundImage={require('../assets/images/story-hero.png')}
        // backgroundImageScale={1.2}
        // renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        backgroundColor={'#ec5e2f'}
        headerTitleStyle={{ padding: 0, margin: 0 }}
        // scrollViewProps={{
        //   onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
        //   onScrollEndDrag: () => console.log('onScrollEndDrag'),
        // }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
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
