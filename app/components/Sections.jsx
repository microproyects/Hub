import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <View style={styles.centerContent}>
                <Pressable style={({ pressed }) => [
                    styles.containerJoin,
                    pressed ? styles.pressed : null 
                ]}>
                    <Text style={styles.title}>Unirse a Sala Privada</Text>
                </Pressable>

                <Pressable style={({ pressed }) => [
                    styles.containerCreate,
                    pressed ? styles.pressed : null 
                ]}>
                    <Text style={styles.title}>Crear Sala Privada</Text>
                </Pressable>

                <View style={styles.emptySpace} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly', 
        paddingHorizontal: 20, 
    },
    containerJoin: {
        backgroundColor: "#fff",
        width: "100%", 
        marginVertical: 10, 
        borderRadius: 10,
        padding: 16,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    containerCreate: {
        backgroundColor: "#fff",
        width: "100%", 
        marginVertical: 10, 
        borderRadius: 10,
        padding: 16,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: 'bold', 
    },
    emptySpace: {
        height: 100, 
    },
    pressed: {
        opacity: 0.5, 
    },
});