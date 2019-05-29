import React from "react";
import { CheckBox } from "react-native-elements";
import { WebView } from "react-native";
import House from "./html/house.html";
import Car from "./html/car.html";
import HouseColor from "./html/housecolor.html";
import Robot from "./html/robot.html";

import {
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  View,
  Image,
  Text
} from "react-native";

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = { date: "" };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backArrow}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const itemAr = JSON.stringify(item);
    var webView;

    if (item.toString() === "robot") {
      webView = (
        <WebView
          style={styles.webContainer}
          originWhitelist={["*"]}
          source={Robot}
        />
      );
    }

    if (item.toString() === "house") {
      webView = (
        <WebView
          style={styles.webContainer}
          originWhitelist={["*"]}
          source={House}
        />
      );
    }

    if (item.toString() === "houseB") {
      webView = (
        <WebView
          style={styles.webContainer}
          originWhitelist={["*"]}
          source={HouseColor}
        />
      );
    }

    if (item.toString() === "car") {
      webView = (
        <WebView
          style={styles.webContainer}
          originWhitelist={["*"]}
          source={Car}
        />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} barStyle="light-content" />

        {webView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webContainer: {
    width: "100%"
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  }
});
