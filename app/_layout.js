import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function Layout() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" backgroundColor="#000"/>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="(tabs)" options={{headerShown: false}} />
            </Stack>
        </View>
    );
}   