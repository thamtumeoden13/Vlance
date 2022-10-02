import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MAIN_SCREENS } from '@/constants';
import { ExampleContainer, UserContainer, HomeContainer, AdditionalContractContainer } from "@/containers";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_SCREENS.MAIN}
      screenOptions={{
        // ...DEFAULT_SCREEN_OPTIONS,
        headerShown: false,
      }}>
      <Stack.Screen
        name={MAIN_SCREENS.MAIN}
        component={HomeContainer}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={MAIN_SCREENS.SURVEY_PERFORMING}
        component={AdditionalContractContainer}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
