import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
export default function Work() {
    const [image, setImage] = useState([]);
    const insets = useSafeAreaInsets();

    // Estado del dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
        { label: 'Matemáticas  📐', value: 'Matematicas' },
        { label: 'Programación  👩‍💻', value: 'Programacion' },
        { label: 'Historia  📜', value: 'Historia' },
        { label: 'Soporte Técnico  🎨', value: 'Soporte' },
        { label: 'Ofimatica  📚', value: 'Ofimatica' },
        { label: 'Diseño Web  👩‍💻', value: 'Diseño' },
        { label: 'Lengua y Literatura  📚', value: 'Lengua' },
        { label: 'Química  📜', value: 'Quimica' },
        { label: 'Sistemas Operativos  👩‍💻', value: 'Sistemas' },
        { label: 'Física  📐', value: 'Fisica' },
        { label: 'FOL  📚', value: 'Fol' },
        { label: 'Biologia  🔬', value: 'Biologia' },
        { label: 'Ingles  🗽', value: 'Ingles' },
        { label: 'Educación Física  ⚽', value: 'Educacion' },
        { label: 'Emprendimiento  📈', value: 'Emprendimiento' },
    ]);
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('Se necesitan permisos para acceder a la galería');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaType,
            allowsEditing: false,
            allowsMultipleSelection: true,
            quality: 1,
            selectionLimit: 4,
        });

        if (!result.canceled) {
            // Guardamos todas las URIs de las imágenes seleccionadas
            const newImages = result.assets.map(asset => asset.uri);
            setImage(newImages);
        }
    };
    return (
        <View style={{ backgroundColor: '#1F1C1F', paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 32, marginBottom: 20 }}>¡Subir Tarea!</Text>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                // Placeholder
                placeholder="Selecciona la materia!"

                // Estilos
                containerStyle={{ width: 280 }}
                style={{
                    backgroundColor: 'rgb(52, 52, 52)', // Fondo oscuro
                    borderColor: 'rgb(180, 7, 7)', // Borde verde
                    borderWidth: 2,
                    borderRadius: 10,
                }}
                dropDownContainerStyle={{
                    backgroundColor: '#2a2a2a', // Fondo de las opciones
                    borderColor: 'rgb(180, 7, 7)',
                    borderWidth: 1,
                }}
                textStyle={{
                    color: 'white', // Color del texto
                    fontSize: 17,
                }}
                selectedItemContainerStyle={{
                    backgroundColor: 'rgba(180, 7, 7, 0.54)', // Color de fondo de las opciones seleccionadas
                }}
                // Estilos para la flecha
                arrowIconStyle={{
                    tintColor: 'rgb(255, 255, 255)'  // Color de la flecha
                }}
                tickIconStyle={{
                    tintColor: 'white'  // Color del tick
                }}

                selectedItemLabelStyle={{
                    fontWeight: 'bold', // Negrita para los seleccionados
                    color: 'white',
                }}
                listMode="SCROLLVIEW" // Se puede cambiar a MODAL o FLATLIST
            />

            {/* Mostrar materias seleccionadas */}
            <Text style={{ color: 'white', marginTop: 20 }}>
                Materia elegida: {value}
            </Text>
            <View>
                <Text style={{ color: 'white', }}>Subir Imagen</Text>
            </View>
            <View style={styles.imageSection}>
    <Text style={styles.imageTitle}>Subir Imagen</Text>

    <TouchableOpacity
        style={styles.uploadButton}
        onPress={pickImage}
    >
        {image.length === 0 ? (
            <>
                <Ionicons name="cloud-upload-outline" size={40} color="white" />
                <Text style={styles.uploadText}>Elige hasta 4 imágenes</Text>
            </>
        ) : (
            <View style={styles.imagesContainer}>
                {image.map((uri, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image
                            source={{ uri }}
                            style={styles.image}
                        />
                        <TouchableOpacity
                            style={styles.removeImageButton}
                            onPress={() => {
                                const newImages = image.filter((_, i) => i !== index);
                                setImage(newImages);
                            }}
                        >
                            <Ionicons name="close-circle" size={24} color="rgb(180, 7, 7)" />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        )}
    </TouchableOpacity>

    {image.length > 0 && (
        <TouchableOpacity
            style={styles.removeButton}
            onPress={() => setImage([])}
        >
            <Text style={styles.removeText}>Eliminar todas las imágenes</Text>
        </TouchableOpacity>
    )}
</View>
        </View>
    );
}
const styles = StyleSheet.create({
    imageSection: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    imageTitle: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
    },
    uploadButton: {
        width: 380,
        height: 300,
        backgroundColor: 'rgb(52, 52, 52)',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgb(180, 7, 7)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    uploadText: {
        color: 'white',
        marginTop: 10,
    },

    removeButton: {
        marginTop: 10,
        padding: 8,
        backgroundColor: 'rgba(180, 7, 7, 0.54)',
        borderRadius: 5,
    },
    removeText: {
        color: 'white',
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 5,
        width: '100%',
        height: '100%',
    },
    imageWrapper: {
        width: '48%',
        height: '48%',
        margin: '1%',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        resizeMode: 'cover',
    },
    removeImageButton: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'white',
        borderRadius: 12,
    },
});