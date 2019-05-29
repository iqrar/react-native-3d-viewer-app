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

export default class List extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
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
      ),
      title: "Available Viewers",
      headerStyle: {
        backgroundColor: "#ffc04f"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22
      }
    };
  };

  onSubmit = item => {
    this.props.navigation.navigate("Landing", {
      item: item
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstView}>
          <TouchableOpacity onPress={() => this.onSubmit("house")}>
            <Image style={styles.image} source={require("../assets/1.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSubmit("car")}>
            <Image style={styles.image} source={require("../assets/2.jpg")} />
          </TouchableOpacity>
        </View>

        <View style={styles.secondView}>
          <TouchableOpacity onPress={() => this.onSubmit("houseB")}>
            <Image style={styles.image} source={require("../assets/3.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSubmit("robot")}>
            <Image style={styles.image} source={require("../assets/4.jpg")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  firstView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  secondView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 290,
    margin: 5
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  }
});
