import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExampleContainer, UserContainer } from "@/Containers";
import { StartupContainer } from "@/Containers";

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={UserContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
