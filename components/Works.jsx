
import React from 'react';
// import { useRouter } from "expo-router";
import { View, Pressable, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import PropTypes from 'prop-types';
export default function Works() {
    //const router = useRouter();
    const materiasTecnicas = [
        { title: 'Programación', action: () => alert('Programación') },
        { title: 'Soporte Técnico', action: () => alert('Soporte Técnico') },
        { title: 'Sistemas Operativos', action: () => alert('Sistemas Operativos') },
        { title: 'Diseño Web', action: () => alert('Diseño Web') },
        { title: 'Ofimatica', action: () => alert('Ofimatica') },
        { title: 'FOL', action: () => alert('FOL') },
    ];
    const Divider = ({ title }) => ( //title is missing in props validation solucionado con IA XDXD
        <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{title}</Text>
            <View style={styles.dividerLine} />
        </View>
    );
    Divider.propTypes = {
        title: PropTypes.string.isRequired,
    };
    const materiasPrimarias = [
        { title: 'Matematica', action: () => alert('Matematica')},
        { title: 'Lengua', action: () => alert('Lengua')},
        { title: 'Historia', action: () => alert('Historia') },

        { title: 'Ingles', action: () => alert('Ingles') },
        { title: 'Quimica', action: () => alert('Quimica') },
        { title: 'Educa', action: () => alert('Educa') },
    ];
    return (
        <View style={styles.all}>
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{ backgroundColor: '#2B282B', height: 100, width: 170, padding: 15, flexDirection: 'row', borderRadius: 15, }}>
                        <View style={{ height: '100%', width: 3, backgroundColor: 'green', borderRadius: 2, }}>

                        </View>
                        <View style={{ padding: 3 }}><Text style={{ color: 'white', fontSize: 15, padding: 5 }}>Tareas Completadas: 10</Text></View>

                    </View>
                    <View style={{ backgroundColor: '#2B282B', height: 100, width: 170, flexDirection: 'row', padding: 15, borderRadius: 15, }}>
                        <View style={{ height: '100%', width: 3, backgroundColor: 'red', borderRadius: 2, }}>

                        </View>
                        <View style={{ padding: 9 }}><Text style={{ color: 'white', fontSize: 15, padding: 5 }}>Tareas Faltantes: 5</Text></View>

                    </View>
                </View>
                <Divider title="Materias Técnicas" />
                <View style={styles.gridContainer}>
                    {materiasTecnicas.map((item, index) =>
                        <View key={index} style={styles.gridItem}>
                            <Pressable onPress={item.action}>
                                <Text style={styles.text}>{item.title}</Text>
                            </Pressable>
                        </View>
                    )}
                </View>

                <Divider title="Materias Primarias" />
                <View style={styles.gridContainer}>
                    {materiasPrimarias.map((item, index) =>
                        <View key={index} style={styles.gridItem}>
                            <Pressable onPress={item.action}>
                                <Text style={styles.text}>{item.title}</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
                <View style={{ height: 70 }}></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    all: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#1F1C1F'
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gridItem: {
        width: (width - 30) / 2,
        height: 50,
        backgroundColor: 'rgb(33, 51, 85)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        margin: 10,
        fontFamily: 'sans-serif',
        paddingHorizontal: 10,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgb(191, 0, 255)',
    },
    dividerText: {
        color: 'rgba(254, 0, 233, 0.96)',
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

