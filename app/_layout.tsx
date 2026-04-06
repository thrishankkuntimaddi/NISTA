import '../global.css';
import { Slot } from 'expo-router';
import { useEffect } from 'react';
import {
    useFonts,
    Newsreader_400Regular,
    Newsreader_400Regular_Italic,
} from '@expo-google-fonts/newsreader';
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Newsreader_400Regular,
        Newsreader_400Regular_Italic,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
    });

    useEffect(() => {
        if (Platform.OS === 'web') {
            return;
        }

        import('../lib/db')
            .then(({ initDatabase }) => initDatabase())
            .catch(console.error);
    }, []);

    // Avoid a blank screen on web if custom font loading is delayed or fails.
    if (Platform.OS !== 'web' && !fontsLoaded) {
        return null;
    }

    return (
        <View className="flex-1 bg-antrika" style={{ flex: 1, backgroundColor: '#121417' }}>
            <StatusBar style="light" />
            <Slot />
        </View>
    );
}
