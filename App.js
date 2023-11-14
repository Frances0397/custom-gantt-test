import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';
import { Card } from 'react-native-elements';
//import { Calendar, LocaleConfig } from 'react-native-calendars';

import SimpleGantt from './components/SimpleGantt';
import TouchableRect from './components/TouchableRect';

export default function App() {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <SimpleGantt />
      </Card>
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
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden'
  }
});
