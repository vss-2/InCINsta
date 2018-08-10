import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Telajogar from './Telajogar';
import TelaPerfil from './TelaPerfil';

const StackNavigator = createStackNavigator({
    Tela1: Tela1,
    Tela2: Tela2,
    Telajogar: Telajogar,
    TelaPerfil: TelaPerfil,
},{
    headerMode: 'none',
  initialRouteName: 'Tela1',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFF',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
  },
});
