//import { useRouter } from "expo-router";
import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Profile() {
    const insets = useSafeAreaInsets();
    const done = useState([
        {label: 10, value: 0}
    ]);
    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>

            <View style={{ backgroundColor: '#262626' }}>
                <ScrollView>
                    <View>
                        <Text style={{color: 'white',}}>Bienvenido Dillan Toaquiza</Text>
                    <Image
                        source={require("../assets/profile.png")}
                        style={{
                            width: 50,
                            height: 50,
                            margin: 45,
                        }}
                    />
                    <Text style={{color: 'white',}}>Tareas Hechas {done.value}</Text>
                    <Text style={{color: 'white',}}>Perteneces a la Sala de : </Text>
                    <Text style={{color: 'white',}}>Te uniste el :</Text>
                    <Text style={{color: 'white',}}>Bienvenido Dillan Toaquiza</Text>
                    </View>
                    <View style={styles.empty}></View>
                </ScrollView>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    empty: {
        height: 700,
    }

});
