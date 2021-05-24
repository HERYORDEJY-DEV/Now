import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSizing } from '../utils/dimension';
import { defColor, pryColor, secColor } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

// import { AuthContext } from '../components/context';

export default function DrawerContent({ ...props }) {
  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  // const navigation = useNavigation();

  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      // source={require('../assets/images/main-bg.png')}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[pryColor, secColor]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: defColor + 30,
          }}
        />
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              {/* News */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/news.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>NEWS</Text>}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              {/* Channels */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/channels.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>CHANNELS</Text>}
                onPress={() => {
                  props.navigation.navigate('Channels');
                }}
              />
              {/* Bookmarks */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/bookmark.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>BOOKMARKS</Text>}
                onPress={() => {
                  props.navigation.navigate('Bookmarks');
                }}
              />
              {/* Overview */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                // pressOpacity={0.8}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/overview.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>OVERVIEW</Text>}
                onPress={() => {
                  props.navigation.navigate('Overview');
                }}
              />
              {/* Calendar */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/calendar.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>CALENDAR</Text>}
                onPress={() => {
                  props.navigation.navigate('Calendar');
                }}
              />
              {/* Timeline */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/timeline.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>TIMELINE</Text>}
                onPress={() => {
                  props.navigation.navigate('Timeline');
                }}
              />
              {/* Profile */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/profile.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>PROFILE</Text>}
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
              {/* Widget */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/widgets.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>WIDGETS</Text>}
                onPress={() => {
                  props.navigation.navigate('Widgets');
                }}
              />
              {/* Settings */}
              <DrawerItem
                activeBackgroundColor={pryColor}
                pressColor={pryColor}
                style={{ paddingBottom: RFValue(5) }}
                icon={({ color, size }) => (
                  <Image
                    style={styles.drawer_icon}
                    source={require('../assets/icons/setting.png')}
                  />
                )}
                label={() => <Text style={styles.drawer_label}>SETTINGS</Text>}
                onPress={() => {
                  props.navigation.navigate('Settings');
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <View style={styles.bottom_drawer}>
            <TouchableOpacity
              style={styles.bottom_drawer_left}
              onPress={() => console.warn('You are logged out')}
            >
              <Text style={styles.logout}>LOG OUT</Text>
              <Text style={styles.user_name}>Oyebode Yusuf</Text>
            </TouchableOpacity>
            <Thumbnail source={require('../assets/images/me.jpg')} />
          </View>
        </Drawer.Section>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  drawer_icon: {
    width: RFValue(25),
    height: RFValue(25),
    resizeMode: 'contain',
  },
  drawer_label: {
    fontSize: RFValue(fontSizing(26)),
    color: defColor,
    fontFamily: 'Montserrat-Bold',
  },
  bottom_drawer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(20),
  },
  bottom_drawer_left: {},
  logout: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(26)),
    color: defColor,
    marginBottom: RFValue(10),
  },
  user_name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(fontSizing(22)),
    color: defColor,
  },
  // ==================
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: RFValue(20),
  },
  row: {
    marginTop: RFValue(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: RFValue(15),
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: RFValue(3),
  },
  drawerSection: {
    marginTop: RFValue(15),
  },
  bottomDrawerSection: {
    // marginBottom: RFValue(15),
    borderTopColor: '#f4f4f4',
    borderTopWidth: RFValue(1),``
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(15),
  },
});
