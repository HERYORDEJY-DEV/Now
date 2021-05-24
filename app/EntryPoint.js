import React, { createContext } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import AppNavigation from './navigation';
import { GlobalHooksProvider } from '@devhammed/use-global-hook';
import contextStoreHooks from './context';
import PostContent from './screens/stack/PostContent';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Walkthrough from './screens/auth/Walkthrough';
import Feedback from './screens/stack/Feedback';

let customFonts = {
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
};

export default class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
    this._drawer = React.createRef();
    this.state = {
      fontLoaded: false,
      customTextProps: {
        style: {
          fontFamily: 'Montserrat-Regular',
        },
      },
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    await setCustomText(this.state.customTextProps);
    await setCustomTextInput(this.state.customTextProps);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // console.disableYellowBox = true;
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <GlobalHooksProvider hooks={contextStoreHooks}>
          <AppNavigation />
          {/* <SignIn /> */}
        </GlobalHooksProvider>
      );
      // return <Feedback />;
    } else {
      return <AppLoading />;
    }
  }
}
