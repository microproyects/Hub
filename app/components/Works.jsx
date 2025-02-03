import { Link } from 'expo-router';
import React from 'react';
import { View, Pressable, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default function Works ()  {
    return (
        <View style={styles.all}>
            <ScrollView>

                    <View style={styles.container}>
                        <Pressable >
                            <Text style={styles.text}>Matematica</Text>
                        </Pressable>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Lengua')}>
                                <Text style={styles.text}>Lengua</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Programación')}>
                                <Text style={styles.text}>Programación</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Soporte Ténico')}>
                                <Text style={styles.text}>Soporte Ténico</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Ofimatica')}>
                                <Text style={styles.text}>Ofimatica</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Historia')}>
                                <Text style={styles.text}>Historia</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Sistemas Operativos')}>
                                <Text style={styles.text}>Sistemas Operativos</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Diseño Web')}>
                                <Text style={styles.text}>Diseño Web</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('FOL')}>
                                <Text style={styles.text}>FOL</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Ingles')}>
                                <Text style={styles.text}>Ingles</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Quimica')}>
                                <Text style={styles.text}>Quimica</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.container}>
                        <Link asChild href="#">
                            <Pressable onPress={() => alert('Educa')}>
                                <Text style={styles.text}>Educa</Text>
                            </Pressable>
                        </Link>
                    </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 12,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: width - 50,
        height: height / 10,
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        margin: 10,
        borderRadius: 12,
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        margin: 10,
        fontFamily: 'sans-serif',
    },
});

