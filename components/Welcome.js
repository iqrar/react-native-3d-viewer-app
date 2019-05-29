import React from "react";
import Video from "react-native-video";
import {
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image
} from "react-native";

export default class Welcome extends React.Component {
  

  constructor() {
    super();
    this.state = { date: new Date(), landingData: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = () => {
    this.props.navigation.navigate("List");
  };

  render() {
    
    return (
      
        <View style={styles.container}>
          <StatusBar hidden={true} barStyle="light-content" />
            <Video
                source={require("../assets/build.mp4")}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
             />

            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.onSubmit}
                style={styles.buttonWrapper}>
                <Text style={styles.button}>{"3d Viewer"}</Text>
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
  },
  backgroundVideo: {
   position: "absolute",
   top: 0,
   left: 0,
   alignItems: "stretch",
   bottom: 0,
   right: 0
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#696969"
  },
  buttonView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 500 
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25,
    padding: 15,
    width:250
  },
  button: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
  }
});
