import type { KarmaLog, Reflection, WeeklyAudit } from '../types';

export const initDatabase = async () => {
    // SQLite is only initialized on native platforms in this project.
};

export const karmaLogDB = {
    async add(_log: Omit<KarmaLog, 'id'>): Promise<void> {
        throw new Error('Karma logging is not available on web yet.');
    },

    async getRecent(_limit: number = 10): Promise<KarmaLog[]> {
        return [];
    },
};

export const reflectionDB = {
    async save(_reflection: Omit<Reflection, 'id'>): Promise<void> {
        throw new Error('Reflection storage is not available on web yet.');
    },

    async getByDate(_date: string): Promise<Reflection | null> {
        return null;
    },

    async getRecent(_limit: number = 7): Promise<Reflection[]> {
        return [];
    },
};

export const weeklyAuditDB = {
    async save(_audit: Omit<WeeklyAudit, 'id'>): Promise<void> {
        throw new Error('Weekly audits are not available on web yet.');
    },

    async getByWeek(_weekStart: string): Promise<WeeklyAudit | null> {
        return null;
    },
};
