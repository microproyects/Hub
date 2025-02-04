
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Book, Calendar, Left, Pencil } from "./Icons";
export default function Aside() {
    return (
        <View style={styles.aside}>
            <View style={styles.profiles}>
                <Image
                    source={require("../../assets/profile.png")}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.welcomeText}>Bienvenido</Text>
                    <Text style={styles.profileText}>Dillan Toaquiza</Text>
                </View>
            </View>
            <View style={{ marginTop: 16 }}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(141, 34, 247, 0.1)' : 'white',
                        },
                        styles.sectionItem,
                    ]}
                >

                    <Text style={{ fontSize: 17 }}><Pencil />   Personalizar</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(141, 34, 247, 0.1)' : 'white',
                        },
                        styles.sectionItem,
                    ]}
                >
                    <Text style={{ fontSize: 17 }}><Book />    Mis tareas</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(141, 34, 247, 0.1)' : 'white',
                        },
                        styles.sectionItem,
                    ]}
                >
                    <Text style={{ fontSize: 17 }}><Calendar />   Tareas de hoy</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(141, 34, 247, 0.1)' : 'white',
                        },
                        styles.sectionItem,
                    ]}
                >
                    <Text style={{ fontSize: 17 }}><Left />   Cerrar sesión</Text>
                </Pressable>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    welcomeText: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 18,
    },
    profileText: {
        marginLeft: 8,
        fontWeight: "bold",
        color: "rgb(141, 34, 247)",
        fontSize: 12,
    },
    aside: {
        borderRadius: 20,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "rgb(255, 255, 255)",
        marginBottom: 8,
        height: "100%",
        width: "65%",
        padding: 8,
    },

    sectionHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
    },
    sectionItem: {
        flexDirection: "column",
        marginVertical: 16,
        width: "100%",
    },
    profiles: {
        flexDirection: "row",
        alignItems: "center",
    },
});

