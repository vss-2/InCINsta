import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ranking extends React.Component {
    render() {
        return (
            <View style={styles.container}>


                <View style={styles.mainPostContainer}>
                    <Text style={styles.textWhite}> Blocados</Text>
                    <Text style={styles.posTextWhite}> A project made by TLK Team.</Text>
                </View>

                
                <View style={styles.rankingContainer}>
                    <Text style={styles.rankingTitle}>
                        Ranking
                    </Text>
                </View>

                <View style={styles.rankingListContainer}>
                    <Text style={styles.rankingList}>
                        1. Rei Leão
                    </Text>
                </View>

                <View style={styles.lastPostContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Tela2")}
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
        flex: 1,
        backgroundColor: "white",
    },
    mainPostContainer: {//caixa principal, com nome do programa.
        margin: 0,
        padding: 20,
        backgroundColor: '#2289A9',
        borderRadius: 0,
    },
    postContainer: {//caixas do programa.
        margin: 40,
        padding: 5,
        justifyContent: "center",
        backgroundColor: '#F0E68C',
        borderRadius: 10,
    },
    rankingContainer: {
        marginTop: 20,
        marginBottom: 10,
        padding: 20,
        justifyContent: "center",
        backgroundColor: '#ffce01',
        borderRadius: 10,
    },
    rankingListContainer: {
        margin: 5,
        width: 175,
        flexDirection: "column",
        justifyContent: "center",
        left: "25%",
        backgroundColor: '#ffce01',
        borderRadius: 10,
    },
    lastPostContainer: {//ultima caixa, possuindo cor vermelha.
        margin: 40,
        padding: 5,
        justifyContent: "center",
        backgroundColor: '#FF0000',
        borderRadius: 10,
    },
    text: {//ambos os text são as letras grandes do menu.
        fontSize: 35,
        fontWeight: '900',
        textAlign: 'center',
        color: 'black',
        margin: 0,
    },
    rankingTitle: {
        fontSize: 40,
        fontWeight: '900',
        textAlign: 'center',
        color: 'black',
        margin: 0,
    },
    rankingList: {
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
    },
    textWhite: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
    },
    posText: {//ambos os posText são as letras pequenas no menu.
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
    },
    posTextWhite: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
    },

});
