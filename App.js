import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>서울</Text>
      </View>
      <View style={styles.weatherCon}>
        <View style={styles.day}>
          <Text style={styles.regDate}>9월 11일, 목, 14:20</Text>
          <Text style={styles.desc}>맑음</Text>
        </View>
        <View style={styles.tempCon}>
          <Text style={styles.temp}>24º</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
  },
  cityCon: {
    flex: 0.3,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  weatherCon: {
    flex: 1,
  },
  day: {
    flex: 0.2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    
  },
  regDate: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20,
    overflow: "hidden",
  },
  desc: {
    flex: 1.5,
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",

  },
  tempCon: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    textAlign: "center",
    fontSize: 120,
  },
});
