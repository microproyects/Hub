
import { Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Create() {
    const insets = useSafeAreaInsets();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'BGU  📚', value: 'BGU' },
        { label: 'Informática  👩‍💻', value: 'Informatica' },
        { label: 'Mecanica  🔬', value: 'Mecanica' }

    ]);
    const [openTwo, setOpenTwo] = useState(false);
    const [valueTwo, setValueTwo] = useState(null);
    const [itemsTwo, setItemsTwo] = useState([
        { label: '1ro  📚', value: 'primero' },
        { label: '2do  👩‍💻', value: 'segundo' },
        { label: '3ro  🔬', value: 'tercero' }

    ]);
    const spacingHeight = open ? 150 : 20;
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View style={{ backgroundColor: "#1F1C1F", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ 
                    color: 'white', 
                    fontSize: 24, 
                    marginTop: '50%', 
                    }}>
                        Crear Sala Privada
                    
                    </Text>
                <View style={{ width: '80%', margin: 'auto' }}><TextInput style={{
                    height: 40,
                    backgroundColor: "white",
                    width: "100%",
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 9,
                    marginTop: 8,
                    marginBottom: 15,
                    paddingHorizontal: 10,
                }} placeholder='Nombre de la sala' ></TextInput></View>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}

                    placeholder='Selecciona la especialidad'
                    containerStyle={{ width: '80%', marginBottom: spacingHeight }}
                    style={{
                        backgroundColor: 'rgb(127, 26, 26)',
                        borderColor: 'rgba(230, 0, 255, 0.52)',
                        borderWidth: 3,
                        borderRadius: 10,
                    }}
                    dropDownContainerStyle={{
                        backgroundColor: '#2a2a2a',
                        borderColor: 'rgb(180, 7, 7)',
                        borderWidth: 1,
                    }}
                    textStyle={{
                        color: 'white',
                        fontSize: 15,
                    }}
                    listMode='SCROLLVIEW'
                    onOpen={() => setOpenTwo(false)}
                />



                <DropDownPicker
                    open={openTwo}
                    value={valueTwo}
                    items={itemsTwo}
                    setOpen={setOpenTwo}
                    setValue={setValueTwo}
                    setItems={setItemsTwo}

                    placeholder='Selecciona el curso'
                    containerStyle={{ width: '80%' }}
                    style={{
                        backgroundColor: 'rgb(127, 26, 26)',
                        borderColor: 'rgba(230, 0, 255, 0.52)',
                        borderWidth: 3,
                        borderRadius: 10,
                    }}
                    dropDownContainerStyle={{
                        backgroundColor: '#2a2a2a',
                        borderColor: 'rgb(180, 7, 7)',
                        borderWidth: 1,
                    }}
                    textStyle={{
                        color: 'white',
                        fontSize: 15,
                    }}
                    listMode='SCROLLVIEW'
                    onOpen={() => setOpen(false)}
                />

                <View style={{ height: 800 }}></View>
            </View>

        </View>
    )

}

