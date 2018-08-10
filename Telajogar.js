import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';

export default class Telajogar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex,
    };
  }
  
  onSelectButton(index) {
    this.setState({
      activeIndex: index
    });
  }
  
  isActive(index) {
    return index === this.state.activeIndex;
  }
  render() {
    return (

      <View style={styles.container}>

      
      <View style={styles.mainPostContainer}>
        <Text style={styles.textWhite}> Blocados</Text>
        <Text style={styles.posTextWhite}> A project made by TLK Team.</Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.text}>Jogar Casual </Text>
        <Text style={styles.posText}>Jogue para se desafiar</Text>
      </View>
      

      <View style={styles.postContainer}>
        <Text style={styles.text}>Jogar Versus </Text>
        <Text style={styles.posText}>Jogue desafiando seus amigos</Text>
      </View>

      <View style={styles.lastPostContainer}>
      <TouchableOpacity
          onPress = { () => this.props.navigation.navigate("Tela2")}
          >
          <Text style={styles.textWhite}>Voltar </Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {//caixa principal, abrangendo o todo.
   flex:1,
   backgroundColor:"white",
  },
  mainPostContainer:{//caixa principal, com nome do programa.
    margin:0,
    padding:20,
    backgroundColor:'#2289A9',
    borderRadius:0,
  },
  postContainer: {//caixas do programa.
    margin:40,
    padding:5,
    justifyContent: "center",
    backgroundColor:'#F0E68C',
    borderRadius:10,
  },
  lastPostContainer:{//ultima caixa, possuindo cor vermelha.
    margin:40,
    padding:5,
    justifyContent: "center",
    backgroundColor:'#FF0000',
    borderRadius:10,
  },
  text: {//ambos os text são as letras grandes do menu.
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
    color:'black',
    margin: 0,
  },
  textWhite:{
    fontSize:35,
    textAlign:'center',
    color:'white',
  },
  posText:{//ambos os posText são as letras pequenas no menu.
    fontSize:12,
    textAlign:'center',
    color:'black',
  },
  posTextWhite:{
    fontSize:12,
    textAlign:'center',
    color:'white',
  },
});
