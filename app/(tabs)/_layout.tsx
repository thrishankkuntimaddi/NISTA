import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#121417',
                    borderTopColor: '#9A9A9A20',
                    borderTopWidth: 1,
                },
                tabBarActiveTintColor: '#E6E6E6',
                tabBarInactiveTintColor: '#9A9A9A',
                tabBarLabelStyle: {
                    fontFamily: 'Inter_500Medium',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                },
            }}
        >
            <Tabs.Screen
                name="today"
                options={{
                    title: 'Today',
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color, fontFamily: 'Inter_500Medium', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                            Today
                        </Text>
                    ),
                }}
            />
            <Tabs.Screen
                name="log"
                options={{
                    title: 'Log',
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color, fontFamily: 'Inter_500Medium', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                            Log
                        </Text>
                    ),
                }}
            />
            <Tabs.Screen
                name="reflect"
                options={{
                    title: 'Reflect',
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color, fontFamily: 'Inter_500Medium', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                            Reflect
                        </Text>
                    ),
                }}
            />
        </Tabs>
    );
}
