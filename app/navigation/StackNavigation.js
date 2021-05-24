import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import PostContent from '../screens/stack/PostContent';
import Channel from '../screens/stack/Channel';
import Feedback from '../screens/stack/Feedback';
import Comments from '../screens/stack/Comments';

const StackNavigator = createStackNavigator();

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator headerMode={false}>
      <StackNavigator.Screen name={'Home'} component={DrawerNavigation} />
      <StackNavigator.Screen name={'PostContent'} component={PostContent} />
      <StackNavigator.Screen name={'Comments'} component={Comments} />
      <StackNavigator.Screen name={'Channel'} component={Channel} />
      <StackNavigator.Screen name={'Feedback'} component={Feedback} />
    </StackNavigator.Navigator>
  );
}
