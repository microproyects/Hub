import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Aside from "./Aside";
import Works from "./Works";
import { List } from "./Icons";


function Landing() {
    const insets = useSafeAreaInsets();
    const [isAsideVisible, setAsideVisible] = useState(false);
    const toggleAside = () => {
        setAsideVisible(prevState => !prevState);
    };
    return (
        <View style={{ backgroundColor: '#1F1C1F', paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <ScrollView>
                <View>
                    <Pressable onPress={toggleAside}>
                        <List />
                    </Pressable>
                </View>
                {isAsideVisible && (
                    <View style={styles.overlay}>
                        <Aside />
                        <Pressable style={styles.overlayBackground} onPress={toggleAside} />
                    </View>
                )}{/*``*/ }
                <View style={styles.sectionhello}>
                    <Text style={{color:'white',marginHorizontal: 12,fontSize:14}}>Bienvenido</Text>
                    <Text style={{color:'rgb(145, 34, 214)',marginHorizontal: 12,fontSize:16,fontWeight: 'bold'}}>Dillan Toaquiza</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Tareas</Text>
                    <Works />
                </View>
            </ScrollView>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.99)', paddingHorizontal: 6, padding: 6, borderRadius: 6, position: 'absolute', bottom: 16, right: 26 }}>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    sectionhello:{
        
    },
    menuIcon: {
        width: 30,
        height: 30,
        margin: 8,
        padding: 4,
        borderRadius: 50,
    },

    section: {
        marginBottom: 24,
    },
    header: {
        fontSize: 32,
        alignSelf: "center",
        fontWeight: "bold",
        marginBottom: 8,
        color: "rgb(255, 255, 255)",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        left: -13,
        right: -10,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.47)',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 16,
    },
    overlayBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
export default Landing;