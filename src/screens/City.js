import React from "react";
import moment from "moment";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from "react-native";
import IconText from "../components/IconText";
const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;

  const {
    container,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/taipei101.jpg")}
        style={image}
      >
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"#f0fff0"}
            bodyText={`居住人口: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    opacity: 0.9
  },
  cityName: {
    marginTop: 30,
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "#f0fff0"
  },
  riseSetText: { fontSize: 20, color: "white" },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 40
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default City;
