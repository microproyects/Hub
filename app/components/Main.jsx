import { Link } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Pressable,
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
            <Image
                source={require("../../assets/login2.png")}
                style={{
                    width: 300,
                    height: 250,
                    alignSelf: "center",
                    background: "black",
                    margin: 45,
                }}
            />
            <View style={styles.containerform}>
                <Text style={styles.title}>Login</Text>
                <Text style={{ marginBottom: 9 }}>Usuario</Text>
                {/*Una vez acabes vas a abrir esto se llama git bash puedes abrirlo desde la carpeta para subir los cambios tienes 2 opciones subir literalmente todo que es con
                git add . eso sube todo y otra es especificacndo el archivo
                git add Main.jsx y subira los cambios de ese archivo una vez ya hagas eso
                haces un commit git commit -m "Cambie las palabras de ingles por español    " y aca especificas maso lo q cambiaste ahora para subir los cambios pones git push origin 0.2v , siempre 0.2v ¿Por qué? por que es la version 0.2v que sacamos la 0.1v era una mrd xdxd esta es la 0.2v y la que sacaremos luego sera la 1.0v, puedes copiar ese enlace o no pero si lo copias es "mas facil pegas eso en opera  y sera un tipo clon de mi repositorio para ver que cambios has hecho pero para hacer una pull request que significa como una peticion al creador de la aplicacion para que vea mis cambios mis mejoras mis recomendaciones y los accepte y si los accepte eso se incorporara al codigo original de la aplicacion eso se llama pull request, como se hace? vas al directorio de microproyects/hub te diriges a 0.2v" y te aparecera eso del create pull request y ahí le dasy aqui si escribes que cambios has hecho por que no soy mago para divinar xdxdxd osea si puedo ver que cambios hiciste en el codigo pero debes decir por que muy resumido pero debe ser entendible eso ignoralo ya luego lo corrigo pero una vez hagas eso ya estara subido y yo podre ver desde mi página xxd y abajo puedes ver los cambios 
                */ }
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
                        Forgot Password?

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
                <Link href="/about">
                    <Text>Modo invitado</Text>
                </Link>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <Image
                        source={require("../../assets/google.png")}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../assets/face.png")}
                    />
                </View>
            </View>
        </View>
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
        backgroundColor: "#fff",
        width: "100%",
        margin: "auto",
        height: "100%",
        padding: 16,
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
        marginTop: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});
