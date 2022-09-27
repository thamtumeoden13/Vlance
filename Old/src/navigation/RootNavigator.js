import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {printLogs} from '../utils/logUtils';
import {useDispatch, useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

function RootNavigator() {
  const dispatch = useDispatch();
  const language = useSelector(state => state?.user?.appLanguage);
  // const isLogin = useSelector(state => state?.user?.isLoggedIn);
  const isLogin = true;

  // useEffect(() => {
  //   setI18nConfig(language);
  // }, [language]);

  const routeNameRef = useRef();
  const navigationRef = useRef();

  const onNavigationReady = () => {
    __DEV__
      ? (routeNameRef.current = navigationRef.current.getCurrentRoute?.()?.name)
      : {};
  };

  const onStateChange = async state => {
    if (__DEV__) {
      const previousRouteName = routeNameRef.current;
      const {name, params} = navigationRef.current.getCurrentRoute?.() || {};

      if (previousRouteName !== name) {
        printLogs({
          NAVIGATION: {
            PREVIOUS_SCREEN: previousRouteName,
            CURRENT_SCREEN: name,
            PARAMS: params,
            ROUTES: state,
          },
        });
      }
      routeNameRef.current = name;
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationReady}
      onStateChange={onStateChange}>
      {isLogin ? <DrawerNavigator /> : <AuthNavigator />}
      {/*<MainStackNavigator />*/}
    </NavigationContainer>
  );
}

export default RootNavigator;
