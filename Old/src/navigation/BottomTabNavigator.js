import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MAIN_SCREENS} from '../constants/screens';
import {Tab1, Tab2, Tab3} from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={MAIN_SCREENS.MY_TAB}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === MAIN_SCREENS.TAB1) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === MAIN_SCREENS.TAB2) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === MAIN_SCREENS.TAB3) {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: {fontSize: 10},
        style: {
          padding: 10,
          height: 70,
        },
      }}>
      <Tab.Screen name={MAIN_SCREENS.TAB1} component={Tab1} />
      <Tab.Screen name={MAIN_SCREENS.TAB2} component={Tab2} />
      <Tab.Screen name={MAIN_SCREENS.TAB3} component={Tab3} />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 16,
//   },
// });
