import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DEFAULT_SCREEN_OPTIONS} from './HeaderStyles';
import MainStackNavigator from './MainStackNavigator';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        ...DEFAULT_SCREEN_OPTIONS,
        drawerStyle: {
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          overlayColor: 'transparent',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        // name={i18n.t('Home')}
        name={'fieldApplication'}
        component={MainStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
