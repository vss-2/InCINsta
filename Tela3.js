import * as React from 'react';
import { Button , Text, View, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <View style = {styles.header}>
      <Text style = {styles.header}>Blocados</Text>
      </View>
      <View style = {styles.enunciado}>
      <Text style = {styles.enunciado}>Joãozinho tem várias maçãs?</Text>
</View>
        <ScrollView contentContainerStyle = {styles.repoList}>
          <Button title="Alternativa A" color="#486328"/>
          <Text style={styles.repo}> Letra A: questão dificílima </Text>
          <Button title="Alternativa B" color="#bc7808"/>
          <Text style={styles.repo1}> Letra B: questão INSAT </Text>
          <Button title="Alternativa C" color="#a03b88"/>
          <Text style={styles.repo2}> Letra C: questão NP-HARD </Text>
          <Button title="Alternativa D" color="#973318"/>
          <Text style={styles.repo3}> Letra D: questão NP-DURONA </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2289A9',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  repo :{
    padding: 20,
    backgroundColor: '#7CAD44',
    height: 80,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
  },
  repo1 :{
    padding: 20,
    backgroundColor: '#F5A31B',
    height: 80,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 5,
  },
  repo2 :{
    padding: 20,
    backgroundColor: '#C663AF',
    height: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  repo3 :{
    padding: 20,
    backgroundColor: '#DA4B23',
    height: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  header :{
    height: 80,
    paddingTop: 5,
    backgroundColor: '#2289A9',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  enunciado :{
    height: 50,
    paddingTop: 1,
    backgroundColor: '#2289A9',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
