import * as React from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';



export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <View >
      <Text style = {styles.header}>Blocados</Text>
      </View>
      <View>
      <Text style = {styles.enunciado}> Qual alternativa não é uma estrutura de repetição?
</Text>
</View>
        <ScrollView contentContainerStyle = {styles.repoList}>
          <Button title="Alternativa A" color="#4f4a4a"/>
          <Text style={styles.repoP1}>For </Text>
          <Button title="Alternativa B" color="#4f4a4a"/>
          <Text style={styles.repoP1}>While </Text>
          <Button title="Alternativa C" color="#4f4a4a"/>
          <Text style={styles.repoP1}>Do-While </Text>
          <Button title="Alternativa D" color="#4f4a4a"/>
          <TouchableOpacity style = {styles.button}
                onPress = { () => this.props.navigation.navigate("TelaPerg")}>
                    <Text style={styles.repoP1}>
                        Switch
                    </Text>
            </TouchableOpacity>
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
  repoP1 :{
    padding: 20,
    backgroundColor: '#FFFFFF',
    height: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
    paddingTop: 5,
    textAlign: 'center',
    backgroundColor: '#2289A9',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
