import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <Image style={styles.imagem} source={require('./myicon.jpg')} />
            <TextInput placeholder = "Usuario"style={styles.input}/>
            <TouchableOpacity style = {styles.button}>
            <Text style={styles.welcome}>Jogue Agora</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      display: 'flex' ,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    backgroundColor: '#fff',
  },
    input:{
	height:80,
	width: "50%",
        textAlign: 'center',
	fontSize:18,
	marginTop: 0,
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#8899AA',
        width: "60%",
        height: "07%"
    },
    welcome:{
      fontSize: 30
    },

    imagem:{
      borderWidth: 2,
        borderColor: "black",
      marginTop: 0,
      width:"20%",
        height:"15%"
    },
});
