import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;
  const weatherCondition = weather[0].main;

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message
  } = styles;

  return (
    <SafeAreaView
      style={[
        wrapper
        // { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="#e6e6fa"
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`體感溫度: ${feels_like}°`}</Text>
        <RowText
          messageOne={`最高: ${temp_max}° `}
          messageTwo={`最低: ${temp_min}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        // messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#add8e6"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temperature: {
    color: "white",
    fontSize: 48,
    fontStyle: "italic"
  },
  feels: {
    fontSize: 25,
    color: "white"
  },
  hiLow: {
    color: "white",
    marginTop: 5,
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 30,
    color: "#4682b4"
  },
  message: {
    fontSize: 25,
    color: "#4682b4"
  }
});
export default CurrentWeather;
