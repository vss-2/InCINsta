import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, Image } from 'react-native';

export default class TelaPerfil extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.mainPostContainer}>
          <Text style={styles.textWhite}> Perfil</Text>
        </View>
        <Image style={styles.imagem} source={require('./myicon.jpg')} />
        <Text style={styles.username}>Teixero</Text>
        
        
          <Text style={styles.dataTitle}>Curso:</Text>
          <Text style={styles.data}>CC/EC/SI</Text>
///////////
          <Text style={styles.dataTitle}>Período:</Text>
          <Text style={styles.data}>5!</Text>
//////////////          
          <Text style={styles.dataTitle}>Score:</Text>
          <Text style={styles.data}>8000+</Text>
/////////////          
          <Text style={styles.dataTitle}>Rank:</Text>
          <Text style={styles.data}>Trivalus</Text>        
/////////////
        
        
        <View style={styles.lastPostContainer}>
          <TouchableOpacity onPress = { () => this.props.navigation.navigate("Tela2")}>
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
  
  lastPostContainer:{//ultima caixa, possuindo cor vermelha.
    margin:40,
    padding:5,
    justifyContent: "center",
    backgroundColor:'#FF0000',
    borderRadius:10,
  },
  
  textWhite:{
    fontSize:35,
    textAlign:'center',
    color:'white',
  },
  
  imagem:{
        borderWidth: 1,
        borderColor: "black",
        marginTop: 20,
        marginLeft: 20,
        width:"20%",
        height:"15%"
    },
  username:{
      fontSize:40,
  },
  dataTitle:{
    fontSize:20
  },
  data:{
    fontsize:15,
    marginLeft:16,
  }

});
