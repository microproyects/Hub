import { Link } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Main() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const insets = useSafeAreaInsets();

    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>

            <View style={{ backgroundColor: '#8A7AE7' }}>
                <ScrollView>
                    <Image
                        source={require("../assets/login2.png")}
                        style={{
                            width: 300,
                            height: 250,
                            alignSelf: "center",
                            background: "black",
                            margin: 45,
                        }}
                    />
                    <View style={styles.containerform}>
                        <Text style={styles.title}>Login FORM</Text>
                        <Text style={{ marginBottom: 9 }}>Usuario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Text style={{ marginBottom: 9 }}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <Pressable>
                            <Text
                                style={({ pressed }) => [
                                    {
                                        color: pressed ? 'red' : 'grey'
                                    },
                                    styles.forgotPassword,
                                ]}>
                                No recuerdas tu contraseña?

                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={handleLogin}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'white' : '#FBC21D',
                                },
                                styles.Pressable,
                            ]}>
                            {({ pressed }) => (
                                <Text style={{ color: '#000' }}>{pressed ? 'Subiendo..' : 'Login'}</Text>
                            )}
                        </Pressable>
                        <Text style={{ alignSelf: 'center' }}>Or</Text>
                        <Link href="/Home/sectionh">
                            <Text>Modo invitado</Text>
                        </Link>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <Image
                                source={require("../assets/google.png")}
                                style={{ width: 50, height: 50 }}
                            />
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require("../assets/face.png")}
                            />
                        </View>
                
            </View>
            </ScrollView>
        </View>
        </View >
    );
}

const styles = StyleSheet.create({
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 15,
    },
    Pressable: {
        padding: 12,
        borderRadius: 8,
        width: "100%",
        height: 50,
        alignItems: "center",
        marginBottom: 15,
    },
    containerform: {
        backgroundColor: "rgb(234, 230, 248)",
        width: "100%",
        margin: "auto",
        height: "100%",
        borderWidth: 1.5,
        padding: 16,
        borderColor: '#ACD0C0',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: "center",
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 9,
        marginTop: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});
