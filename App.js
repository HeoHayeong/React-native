import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
        //  이것들이 브릿지 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} />
        {/* <View style={{ flex: 1, backgroundColor: 'blue'}}/>  이렇게도 가능 */}
      <View style={styles.blueView} />
    </View>
  );
}

              // StyleSheet API
const styles = StyleSheet.create({
  container: {
    flex: 1, // 모든 공간이 사용 가능하도록 한다.

    // flexDirection: 'row',
    // backgroundColor: '#d0bfff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  },

  blueView: {
    flex: 1,
    backgroundColor: 'blue'
  }

  // 노란색이랑 파란색 둘다 1을 가지고 싶어해서 서로 반반 차지함 
  // 만약 노란색이 1 ,  파란색이 2면 파란색이 3/2 차지함
});
