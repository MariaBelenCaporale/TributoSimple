import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { Feather } from "@expo/vector-icons";
import { Pressable } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#db314a",
        tabBarInactiveTintColor: "green",
        headerShown: true,
        headerTitle: '¡Hola María Belen!',
        headerTitleStyle: {
          color: '#F0F0F3',
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 20,
        },
        headerStyle: {
          backgroundColor: '#0047AF',
          height: 120,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },

        headerRight: () => (
          <Pressable>
            <Feather name="bell" size={24} color="white" style={{ marginRight: 20 }} />
          </Pressable>
        ),
        headerLeft: () => (
          <Pressable>
            <Feather name="align-left" size={24} color="white" style={{ marginLeft: 20 }} />
          </Pressable>
        ),
        
        tabBarStyle: {
          backgroundColor: '#0047AF',

        },
      }}>


      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: { display: 'none' },
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
