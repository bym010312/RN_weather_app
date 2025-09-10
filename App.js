import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>결과 : {number} </Text>
      <View style={{ flexDirection: "row", gap: 10}}>
        <Button title="+" onPress={() => setNumber(number + 1)}/>
        <Button title="-" onPress={() => setNumber(number - 1)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
