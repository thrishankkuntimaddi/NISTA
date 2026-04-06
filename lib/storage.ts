import * as SecureStore from 'expo-secure-store';

const PREFIX = 'nistha_';

export const storage = {
    async save(key: string, value: any): Promise<void> {
        try {
            const jsonValue = JSON.stringify(value);
            await SecureStore.setItemAsync(PREFIX + key, jsonValue);
        } catch (error) {
            console.error('Storage save error:', error);
        }
    },

    async load<T>(key: string): Promise<T | null> {
        try {
            const value = await SecureStore.getItemAsync(PREFIX + key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Storage load error:', error);
            return null;
        }
    },

    async remove(key: string): Promise<void> {
        try {
            await SecureStore.deleteItemAsync(PREFIX + key);
        } catch (error) {
            console.error('Storage remove error:', error);
        }
    },

    async clear(): Promise<void> {
        // SecureStore doesn't have a clear all method
        // Would need to track keys separately if needed
        console.log('Clear all not implemented');
    },
};

// Helper to get formatted date
export const getToday = (): string => {
    return new Date().toISOString().split('T')[0];
};

// Check if today's sankalpa exists
export const hasTodaysSankalpa = async (): Promise<boolean> => {
    const today = getToday();
    const sankalpa = await storage.load<{ date: string }>('today_sankalpa');
    return sankalpa?.date === today;
};

// Check if today's reflection exists
export const hasTodaysReflection = async (): Promise<boolean> => {
    const today = getToday();
    const reflection = await storage.load<{ date: string }>('today_reflection');
    return reflection?.date === today;
};
