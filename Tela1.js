import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import TelaPerfil from './TelaPerfil';

export default class Tela1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : null};
    }
    handleInput = (input) => {
        this.setState({"name": input})
    }
    render() {
        console.log(this.state.name);
        return (
            <View style={styles.container}>
                <Image style={styles.imagem} source={require('./myicon.jpeg')} />
                <TextInput onChangeText={this.handleInput} placeholder = "Usuario" style={styles.input}/>
                <TouchableOpacity style = {styles.button}
                                  onPress = { () => this.props.navigation.navigate("Tela2", {
                                    usuario:this.state.name
                                  })}
                >
                    <Text style={styles.welcome}>
                        Inicializar
                    </Text>
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
        width:"50%",
        height:"20%"
    },
});
