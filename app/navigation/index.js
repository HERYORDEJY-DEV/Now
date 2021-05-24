import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import StackNavigation from './StackNavigation';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

export default function AppNavigation() {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={DarkTheme}>
        <StackNavigation />
        {/* <DrawerNavigation /> */}
      </NavigationContainer>
    </PaperProvider>
  );
}
