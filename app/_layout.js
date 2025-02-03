import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function Layout() {
    return (
        <View style={{backgroundColor: '#8A7AF7'}}>
            <StatusBar style="light" />
            <Slot />
        </View>
    );
}