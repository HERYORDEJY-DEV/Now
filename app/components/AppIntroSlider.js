import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSizing } from '../utils/dimension';
import { defColor } from '../utils/colors';

// slides = [...]

export default class AppSlider extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name='md-arrow-round-forward'
          color='rgba(255, 255, 255, .9)'
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion name='md-checkmark' color='rgba(255, 255, 255, .9)' size={24} />
      </View>
    );
  };

  renderNextButton(params) {
    return (
      <Pressable
        style={styles.next_container}
        onPress={() => console.warn('object')}
      >
        <Text style={styles.next_text}>{'Skip'}</Text>
      </Pressable>
    );
  }

  render() {
    const {
      data,
      renderItem,
      onSlideChange,
      renderPagination,
      renderNextButton,
    } = this.props;

    return (
      <>
        <AppIntroSlider
          contentContainerStyle={styles.container}
          data={data}
          renderItem={renderItem}
          onSlideChange={(index) => onSlideChange(index)}
          renderPagination={renderPagination}
          renderNextButton={renderNextButton}
          // renderDoneButton={this._renderDoneButton}
          // renderNextButton={this._renderNextButton}
        />
        {/* {renderNextButton()} */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  // container: { justifyContent: 'center' },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  next_container: {
    padding: RFValue(20),
    marginTop: RFValue(20),
  },
  next_text: {
    textAlign: 'right',
    color: defColor,
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(22)),
  },
  //[...]
});
