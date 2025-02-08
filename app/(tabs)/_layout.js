
import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarActiveBackgroundColor: 'rgb(180, 7, 7)',
      tabBarShowLabel: true,
      tabBarItemStyle: {
        marginTop: 0,
      },
      tabBarStyle: {
        backgroundColor: '#1E1E1E',
        height: 45,
        paddingBottom: 0,
      },
      tabBarLabelStyle:{
        fontSize: 10,
        margin: 0,
        color: 'white',
        marginBottom: -3,
        paddingTop: -10,
      },
      tabBarIconStyle: {
        flex: 1,
        height: '100%',
        marginTop: 0,
        marginBottom: -6,
      },

    }}>
      <Tabs.Screen name="Home/sectionh" options={{
        title: 'Salas',
        headerShown: false, tabBarIcon: () => <Ionicons name="home-outline" size={23} color="white" />,
      }} />
          <Tabs.Screen name="Home/work" options={{
        title: 'Subir Tarea', headerShown: false,

        tabBarIcon: () => <Ionicons name="add-circle-outline" size={23} color="white" />
      }} />
      <Tabs.Screen name="Home/home"
        options={{
          title: 'Tareas De Sala',
          tabBarIcon: () => <Ionicons name="book-outline" size={23} color="white" />,

          headerShown: false,


        }}

      />
            <Tabs.Screen name="Profile/profile"
        options={{
          title: 'Perfil',
          tabBarIcon: () => <Ionicons name="person-outline" size={23} color="white" />,

          headerShown: false,


        }}

      />



    </Tabs>
  );
}
