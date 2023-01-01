import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import Questions from "./Questions";
import { Link } from "react-router-native";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/logo1.png")} style={styles.img} />
        <Text style={styles.welcome}>It's Time For Quizz</Text>
        <Text style={styles.paragraph}>
          Answer the Questions and Improve your IQ Level . An attempt consist of
          10 Questions . Result will be displayed at the end .
        </Text>
        <Link to={`Questions`} style={styles.button} underlayColor="#f0f4f7">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="md-play" size={32} color="white" />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              Start Quizz
            </Text>
          </View>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 185,
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "white",
    padding: 10,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 10,
  },

  paragraph: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
    marginTop: 10,
    lineHeight: 25,
  },
});
