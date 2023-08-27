import React from "react";
import CurrentWeather from "../screens/CurrentWeathers";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  const { upcoming_weather } = styles;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f8f8ff",
        // tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#87cefa"
        },
        headerStyle: {
          backgroundColor: "#87cefa"
        },
        headerTitleStyle: {
          fontWeight: "500",
          fontSize: 30,
          color: "#f8f8ff"
        }
      }}
    >
      <Tab.Screen
        name={"目前天氣"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={30}
              color={focused ? "#1e90ff" : "#f0f8ff"}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"即將到來天氣"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={30}
              color={focused ? "#1e90ff" : "#f0f8ff"}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"城市"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={30}
              color={focused ? "#1e90ff" : "#f0f8ff"}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
const styles = StyleSheet.create({
  upcoming_weather: {
    padding: 20,
    color: "red"
  }
});
