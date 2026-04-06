import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { storage, getToday } from '../../lib/storage';
import type { TodaySankalpa } from '../../types';

export default function TodayScreen() {
    const [sankalpa, setSankalpa] = useState({
        character: '',
        avoid: '',
        action: '',
    });
    const [date, setDate] = useState('');

    useEffect(() => {
        loadSankalpa();
    }, []);

    const loadSankalpa = async () => {
        const today = getToday();
        const saved = await storage.load<TodaySankalpa>('today_sankalpa');

        // Only load if it's from today
        if (saved && saved.date === today) {
            setSankalpa({
                character: saved.character,
                avoid: saved.avoid,
                action: saved.action,
            });
        }

        // Update date display
        const dateObj = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
        setDate(dateObj.toLocaleDateString('en-US', options));
    };

    const saveSankalpa = async () => {
        const today = getToday();
        await storage.save('today_sankalpa', {
            ...sankalpa,
            date: today,
        });
    };

    const handleSave = () => {
        saveSankalpa();
        // Could navigate or show confirmation here
    };

    return (
        <SafeAreaView className="flex-1 bg-antrika" edges={['top']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                {/* Header */}
                <View className="bg-antrika/90 px-5 py-5">
                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text
                                className="text-stone text-sm uppercase tracking-[0.2em]"
                                style={{ fontFamily: 'Inter_500Medium' }}
                            >
                                {date}
                            </Text>
                            <Text
                                className="text-ash/90 text-lg italic mt-1"
                                style={{ fontFamily: 'Newsreader_400Regular_Italic' }}
                            >
                                Choose consciously
                            </Text>
                        </View>
                    </View>
                </View>

                <ScrollView className="flex-1">
                    <View className="max-w-md mx-auto px-5 pb-32">
                        {/* Identity Statement */}
                        <View className="mt-6 mb-10">
                            <View className="bg-obsidian rounded-2xl p-8 border border-white/5 shadow-2xl">
                                <Text
                                    className="text-stone text-[10px] uppercase tracking-[0.3em] mb-6"
                                    style={{ fontFamily: 'Inter_600SemiBold' }}
                                >
                                    Identity Statement
                                </Text>
                                <Text
                                    className="text-ash text-2xl italic leading-relaxed"
                                    style={{ fontFamily: 'Newsreader_400Regular_Italic' }}
                                >
                                    "I am a man who earns respect through discipline and truth."
                                </Text>
                            </View>
                        </View>

                        {/* Divider */}
                        <View className="mb-6 flex-row items-center gap-3">
                            <View className="h-[1px] flex-1 bg-stone/20" />
                            <Text
                                className="text-xs uppercase text-stone tracking-[0.2em] px-2"
                                style={{ fontFamily: 'Inter_600SemiBold' }}
                            >
                                Morning Sankalpa
                            </Text>
                            <View className="h-[1px] flex-1 bg-stone/20" />
                        </View>

                        {/* Questions */}
                        <View className="space-y-6">
                            {/* Question 1 */}
                            <View>
                                <Text
                                    className="text-sm text-stone/80 pl-1 mb-3"
                                    style={{ fontFamily: 'Inter_500Medium' }}
                                >
                                    What kind of man do I choose to be today?
                                </Text>
                                <TextInput
                                    value={sankalpa.character}
                                    onChangeText={(text) => setSankalpa({ ...sankalpa, character: text })}
                                    onBlur={saveSankalpa}
                                    multiline
                                    placeholder="Commit to a character..."
                                    placeholderTextColor="#9A9A9A30"
                                    className="w-full bg-obsidian border border-white/5 rounded-xl p-4 text-ash text-base leading-relaxed min-h-[100px]"
                                    style={{ fontFamily: 'Inter_400Regular', textAlignVertical: 'top' }}
                                />
                            </View>

                            {/* Question 2 */}
                            <View>
                                <Text
                                    className="text-sm text-stone/80 pl-1 mb-3"
                                    style={{ fontFamily: 'Inter_500Medium' }}
                                >
                                    One red flag I must avoid today
                                </Text>
                                <TextInput
                                    value={sankalpa.avoid}
                                    onChangeText={(text) => setSankalpa({ ...sankalpa, avoid: text })}
                                    onBlur={saveSankalpa}
                                    multiline
                                    placeholder="Identify the weakness..."
                                    placeholderTextColor="#9A9A9A30"
                                    className="w-full bg-obsidian border border-white/5 rounded-xl p-4 text-ash text-base leading-relaxed min-h-[100px]"
                                    style={{ fontFamily: 'Inter_400Regular', textAlignVertical: 'top' }}
                                />
                            </View>

                            {/* Question 3 */}
                            <View>
                                <Text
                                    className="text-sm text-stone/80 pl-1 mb-3"
                                    style={{ fontFamily: 'Inter_500Medium' }}
                                >
                                    One action that protects my future
                                </Text>
                                <TextInput
                                    value={sankalpa.action}
                                    onChangeText={(text) => setSankalpa({ ...sankalpa, action: text })}
                                    onBlur={saveSankalpa}
                                    multiline
                                    placeholder="Plant the seed today..."
                                    placeholderTextColor="#9A9A9A30"
                                    className="w-full bg-obsidian border border-white/5 rounded-xl p-4 text-ash text-base leading-relaxed min-h-[100px]"
                                    style={{ fontFamily: 'Inter_400Regular', textAlignVertical: 'top' }}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Footer Button */}
                <View className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-antrika via-antrika/95 to-transparent pt-12">
                    <Pressable
                        onPress={handleSave}
                        className="bg-forest active:opacity-90 py-4 px-6 rounded-xl flex-row items-center justify-center gap-3 shadow-lg"
                    >
                        <Text
                            className="text-ash text-sm uppercase tracking-wide"
                            style={{ fontFamily: 'Inter_600SemiBold' }}
                        >
                            Day is set
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
