import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import { Container, Content } from 'native-base';
import {
  defColor,
  headerBgColor,
  pryColor,
  terColor,
  secColor,
} from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Inputs from '../../components/Inputs';
import AppSlider from '../../components/AppIntroSlider';
import { TouchableRipple } from 'react-native-paper';
import { fontSizing } from '../../utils/dimension';
import { slides_ } from '../../api/slides';

export default function Walkthrough() {
  const [slideState, setSlideState] = useState({ index: 0 });

  function renderItem({ item }) {
    return (
      <View style={styles.slide_container}>
        {/* <Text style={styles.slide_title}>{item.title}</Text> */}
        <Image source={item.image} style={styles.slide_image} />
        <Text style={styles.slide_text}>{item.text}</Text>
      </View>
    );
  }

  function renderPagination(slide) {
    return (
      <View style={styles.pagination_container}>
        {slide.map((s, index) => (
          <View
            style={[
              styles.pagination_item,
              {
                borderBottomColor:
                  index === slideState.index ? defColor : terColor,
              },
            ]}
            key={index.toString()}
          >
            <Text
              style={{ color: 'transparent', paddingHorizontal: RFValue(20) }}
            >
              YUSUF
            </Text>
          </View>
        ))}
      </View>
    );
  }

  function renderNextButton(params) {
    return (
      <Pressable
        style={styles.next_container}
        onPress={() => console.warn('object')}
      >
        <Text style={styles.next_text}>
          {slideState.index + 1 === slides_.length ? 'Start' : 'Skip'}
        </Text>
      </Pressable>
    );
  }

  function onSlideChange(index) {
    setSlideState({ ...slideState, index });
  }

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />

      <Content
        scrollEnabled={false}
        style={styles.content}
        contentContainerStyle={{
          justifyContent: 'space-between',
          // alignItems: 'center',
          flex: 1,
        }}
      >
        {/* <View style={{ flex: 1 }}> */}
        <View style={[styles.logo_container, { flex: 1 }]}>
          <Text style={styles.header_content_button_text}>
            {slideState.index + 1} of {slides_.length}
          </Text>
        </View>
        <View
          style={{ padding: RFValue(20), flex: 4, marginBottom: RFValue(20) }}
        >
          <AppSlider
            renderPagination={() => renderPagination(slides_)}
            onSlideChange={onSlideChange}
            renderItem={renderItem}
            data={slides_}
            renderNextButton={renderNextButton}
            // onDone={this._onDone}
          />
        </View>
        {/* </View> */}
      </Content>
      {renderNextButton()}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: pryColor },
  content: {
    paddingTop: RFValue(70),
    flex: 1,
  },
  logo_container: { alignItems: 'center' },
  logo: { width: RFValue(100), height: RFValue(100), resizeMode: 'contain' },
  header_content_button_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(40)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginTop: RFValue(20),
  },
  slide_container: {
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFValue(30),
  },
  slide_image: {
    tintColor: defColor,
    resizeMode: 'contain',
    width: RFValue(200),
    height: RFValue(200),
  },
  slide_text: {
    color: defColor,
    fontSize: RFValue(fontSizing(28)),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginTop: RFValue(20),
  },
  pagination_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(20),
    // backgroundColor: 'red',
  },
  pagination_item: {
    borderBottomColor: defColor,
    borderBottomWidth: RFValue(1),
  },
  next_container: {
    padding: RFValue(20),
  },
  next_text: {
    textAlign: 'right',
    color: defColor,
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(22)),
  },
});
