import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EntryScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-antrika">
            <View className="flex-1 items-center justify-between px-10">
                {/* Spacer */}
                <View className="h-12" />

                {/* Main Content */}
                <View className="flex-1 items-center justify-center">
                    <Text
                        className="text-ash text-[28px] md:text-[32px] font-light leading-snug italic tracking-tight text-center max-w-xs"
                        style={{ fontFamily: 'Newsreader_400Regular_Italic' }}
                    >
                        Before the mentor speaks, you must.
                    </Text>
                </View>

                {/* Footer */}
                <View className="h-40 w-full items-center justify-center">
                    <Pressable
                        onPress={() => router.push('/(tabs)/today')}
                        className="active:opacity-80"
                    >
                        <Text
                            className="text-forest text-[13px] tracking-[0.15em] uppercase font-medium opacity-60"
                            style={{ fontFamily: 'Inter_500Medium' }}
                        >
                            Continue
                        </Text>
                    </Pressable>
                    <View className="h-8 mt-4" />
                </View>
            </View>
        </SafeAreaView>
    );
}
