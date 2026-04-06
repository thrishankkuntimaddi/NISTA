import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

export default function LogScreen() {
    return (
        <SafeAreaView className="flex-1 bg-antrika">
            <View className="flex-1 px-5 pt-8">
                <Text
                    className="text-stone text-sm uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'Inter_500Medium' }}
                >
                    Log
                </Text>
                <Text
                    className="text-ash text-3xl italic mt-3"
                    style={{ fontFamily: 'Newsreader_400Regular_Italic' }}
                >
                    Karma log coming soon.
                </Text>
                <Text
                    className="text-stone/80 text-base leading-7 mt-5 max-w-md"
                    style={{ fontFamily: 'Inter_400Regular' }}
                >
                    This tab is wired and ready for the next step: capturing observations across body,
                    mind, and purpose.
                </Text>
            </View>
        </SafeAreaView>
    );
}
