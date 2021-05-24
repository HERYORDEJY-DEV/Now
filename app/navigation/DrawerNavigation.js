import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, StyleSheet } from 'react-native';
import Home from '../screens/drawer/Home';
import { fontSizing, _screenWidth } from '../utils/dimension';
import { defColor } from '../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import DrawerContent from './DrawerContent';
import Channels from '../screens/drawer/Channels';
import Overview from '../screens/drawer/Overview';
import Calendar from '../screens/drawer/Calendar';
import Timeline from '../screens/drawer/Timeline';
import Profile from '../screens/drawer/Profile';
import Settings from '../screens/drawer/Settings';
import Channel from '../screens/stack/Channel';
import Widgets from '../screens/drawer/Widgets';
import Bookmarks from '../screens/drawer/Bookmarks';

const DrawerNavigator = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <DrawerNavigator.Navigator
      initialRouteName={'Home'}
      drawerContent={(props) => <DrawerContent {...props} />}
      statusBarAnimation={'slide'}
      drawerType={'slide'}
      drawerStyle={{
        width: _screenWidth > 450 ? 330 : 300,
        borderRightWidth: RFValue(1),
        borderRightColor: '#eee',
        // paddingHorizontal: RFValue(10),
      }}
      drawerPosition={'left'}
    >
      <DrawerNavigator.Screen name='Home' component={Home} />
      <DrawerNavigator.Screen name='Channels' component={Channels} />
      <DrawerNavigator.Screen name='Bookmarks' component={Bookmarks} />
      <DrawerNavigator.Screen name='Overview' component={Overview} />
      <DrawerNavigator.Screen name='Calendar' component={Calendar} />
      <DrawerNavigator.Screen name='Timeline' component={Timeline} />
      <DrawerNavigator.Screen name='Profile' component={Profile} />
      <DrawerNavigator.Screen name='Widgets' component={Widgets} />
      <DrawerNavigator.Screen name='Settings' component={Settings} />
      <DrawerNavigator.Screen name='Channel' component={Channel} />
    </DrawerNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  drawer_icon: { width: RFValue(20), height: RFValue(20) },
  drawer_label: {
    fontSize: RFValue(fontSizing(26)),
    color: defColor,
    fontFamily: 'Montserrat-Bold',
  },
});
