import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
} from "react-native";
import { useRouter } from "expo-router"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OPACITY_PRESSED = 0.5;

export default function Main() {
    const insets = useSafeAreaInsets();
    const router = useRouter(); 

    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View style={styles.centerContent}>
            <Image source={require('../assets/section2.png')} style={{alignSelf: 'center', width: 200, height: 200 }} />
                <Pressable
                    style={({ pressed }) => [
                        styles.containerJoin,
                        pressed ? styles.pressed : null
                    ]}
                    onPress={() => router.push('/Home/home')} 
                >
                    <Text style={styles.title}>Unirse a Sala Privada</Text>
                </Pressable>
                <Image source={require('../assets/section.png')} style={{alignSelf: 'center' ,width: 200, height: 200 }} />
                <Pressable
                    style={({ pressed }) => [
                        styles.containerCreate,
                        pressed ? styles.pressed : null
                    ]}
                    onPress={() => router.push('../../page/create')}
                >
                    <Text style={styles.title}>Crear Sala Privada</Text>
                </Pressable>

                <View style={styles.emptySpace} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerContent: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: "#1F1C1F",
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
        height: 207,
    },
    pressed: {
        opacity: OPACITY_PRESSED,
    },
});