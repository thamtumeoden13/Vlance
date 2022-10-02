import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExampleContainer, UserContainer, HomeContainer } from "@/containers";
import { StartupContainer } from "@/containers";

// const Tab = createBottomTabNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from "./CustomDrawerContent";
import MainStackNavigator from "./MainStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          overlayColor: 'transparent',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        // name={i18n.t('Home')}
        name={'drawer'}
        component={MainStackNavigator}
        options={{
          // headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
