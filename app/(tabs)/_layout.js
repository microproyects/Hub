
import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'blue',tabBarActiveBackgroundColor: 'blue', 
      tabBarStyle: { backgroundColor: 'black' }, 
      tabBarLabelStyle: { color: 'white', fontWeight: 'bold', fontSize: 12 } 
      
      }}>
      <Tabs.Screen name="Home/home" 
      options={{ title: 'Home', 
        tabBarIcon: () => <Ionicons name="home-outline" size={24} color="white"/>,
        
        headerShown: false,

        
      }}

      />

      <Tabs.Screen name="Home/work" options={{
        title: '', headerShown: false,

        tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={34} color={color} />
      }} />
      <Tabs.Screen name="Home/sectionh" options={{ 
        title: 'Settings', 
        headerShown: false,tabBarIcon: () => null, }} />
    </Tabs>
  );
}
