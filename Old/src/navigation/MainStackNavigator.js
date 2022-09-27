import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DEFAULT_SCREEN_OPTIONS} from './HeaderStyles';
import {
  AdditionalContract,
  AppTheDraftPRice,
  ContractAppendix,
  DocumentInformation,
  Home,
  HomeCoordinates,
  ListOfPapers,
  SpecialInformation,
  SurveyPerforming,
} from '../screens';
import myTabs from './BottomTabNavigator';
import {MAIN_SCREENS} from '../constants/screens';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_SCREENS.MAIN}
      screenOptions={{
        ...DEFAULT_SCREEN_OPTIONS,
        headerShown: false,
      }}>
      {/*<Stack.Screen*/}
      {/*  name={MAIN_SCREENS.SPLASH_SCREEN}*/}
      {/*  component={SplashScreen}*/}
      {/*  options={{*/}
      {/*    headerShown: false,*/}
      {/*  }}*/}
      {/*/>*/}
      <Stack.Screen
        name={MAIN_SCREENS.MAIN}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MAIN_SCREENS.MY_TAB}
        component={myTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.ADDITIONAL_CONTRACT}
        component={AdditionalContract}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.SURVEY_PERFORMING}
        component={SurveyPerforming}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.LIST_OF_PAPERS}
        component={ListOfPapers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.SPECIAL_INFORMATION}
        component={SpecialInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.APP_THE_DRAFT_PRICE}
        component={AppTheDraftPRice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.CONTRACT_APPENDIX}
        component={ContractAppendix}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.DOCUMENT_INFORMATION}
        component={DocumentInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={MAIN_SCREENS.HOME_COORDINATES}
        component={HomeCoordinates}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
