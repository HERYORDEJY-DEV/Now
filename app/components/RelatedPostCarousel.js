import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { post_carousel } from '../api/carousel';
import { _screenWidth } from '../utils/dimension';
import RelatedPostItem from './RelatedPostItem';
import { defColor, pryColor, secColor, terColor } from '../utils/colors';

export default class RelatedPostCarousel extends Component {
  state = {
    entries: post_carousel,
    // activeSlide: Math.floor(post_carousel.length / 2),
    activeSlide: 0,
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        style={{ margin: 0, padding: 0 }}
        dotColor={pryColor}
        inactiveDotColor={terColor}
        // tappableDots={true}
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: defColor }}
        dotStyle={{
          width: RFValue(10),
          height: RFValue(10),
          borderRadius: RFValue(5),
          marginHorizontal: RFValue(10),
          backgroundColor: pryColor,
        }}
        inactiveDotStyle={{
          width: RFValue(5),
          height: RFValue(5),
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    const { data, navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <Carousel
          // containerStyle={{ backgroundColor: 'red' }}
          // containerCustomStyle={{}}
          // contentContainerCustomStyle={{ backgroundColor: 'green' }}
          // onScroll={(value) => console.log(value.activeIndex)}
          loop={true}
          layout={'default'}
          layoutCardOffset={30}
          ref={(c) => {
            this._carousel = c;
          }}
          data={data}
          renderItem={({ item }) => (
            <RelatedPostItem navigation={navigation} {...item} />
          )}
          sliderWidth={_screenWidth}
          itemWidth={RFValue(250)}
        />
        {/* {this.pagination} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
