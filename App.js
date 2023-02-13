import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./screens/HomePage";
import { Page1 } from "./screens/Page1";
import { Page2 } from "./screens/Page2";
import MyCamera from "./screens/myCamera";
import ImgPic from "./screens/ImgPic";
import Movies from './screens/moviesApp';
import MovieDetails from './screens/movieDetails';
import Location from './screens/location';
import BarCode from './screens/barCode';
import Calendar from './screens/calendar';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="Profile" component={Page1} />
        <Stack.Screen name="Edit profile" component={Page2} />
        <Stack.Screen name="My Camera" component={MyCamera} />
        <Stack.Screen name="Photo" component={ImgPic} />
        <Stack.Screen name="My Location" component={Location} />
        <Stack.Screen name="Bar Code" component={BarCode} />
        <Stack.Screen name="Calendar" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});