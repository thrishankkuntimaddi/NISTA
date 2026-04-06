import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

export default function ReflectScreen() {
    return (
        <SafeAreaView className="flex-1 bg-antrika">
            <View className="flex-1 px-5 pt-8">
                <Text
                    className="text-stone text-sm uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'Inter_500Medium' }}
                >
                    Reflect
                </Text>
                <Text
                    className="text-ash text-3xl italic mt-3"
                    style={{ fontFamily: 'Newsreader_400Regular_Italic' }}
                >
                    Evening reflection coming soon.
                </Text>
                <Text
                    className="text-stone/80 text-base leading-7 mt-5 max-w-md"
                    style={{ fontFamily: 'Inter_400Regular' }}
                >
                    The route is now connected so the tab bar works cleanly while the full reflection
                    experience is still being built.
                </Text>
            </View>
        </SafeAreaView>
    );
}
