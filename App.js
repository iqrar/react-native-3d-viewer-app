import React from "react";
import {
  Button,
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import Landing from "./components/LandingScreen";
import Welcome from "./components/Welcome";
import List from "./components/ListScreen";

const RootStack = createStackNavigator(
  {
     Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
    Landing: {
      screen: Landing,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
   initialRouteName: "Welcome"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}
