import * as SQLite from 'expo-sqlite';
import type { KarmaLog, Reflection, WeeklyAudit } from '../types';

let db: SQLite.SQLiteDatabase | null = null;

export const initDatabase = async () => {
    db = await SQLite.openDatabaseAsync('nistha.db');

    // Create tables
    await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS karma_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      domain TEXT NOT NULL,
      observation TEXT NOT NULL,
      conscious_choice INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS reflections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL UNIQUE,
      betrayal TEXT NOT NULL,
      protection TEXT NOT NULL,
      excuse TEXT NOT NULL,
      truth_avoided TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS weekly_audits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      week_start TEXT NOT NULL UNIQUE,
      weakened TEXT NOT NULL,
      strengthened TEXT NOT NULL,
      eliminate TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );
  `);
};

export const karmaLogDB = {
    async add(log: Omit<KarmaLog, 'id'>): Promise<void> {
        if (!db) throw new Error('Database not initialized');

        await db.runAsync(
            'INSERT INTO karma_logs (date, domain, observation, conscious_choice, created_at) VALUES (?, ?, ?, ?, ?)',
            [log.date, log.domain, log.observation, log.consciousChoice ? 1 : 0, log.createdAt]
        );
    },

    async getRecent(limit: number = 10): Promise<KarmaLog[]> {
        if (!db) throw new Error('Database not initialized');

        const rows = await db.getAllAsync<any>(
            'SELECT * FROM karma_logs ORDER BY created_at DESC LIMIT ?',
            [limit]
        );

        return rows.map((row) => ({
            id: row.id,
            date: row.date,
            domain: row.domain,
            observation: row.observation,
            consciousChoice: row.conscious_choice === 1,
            createdAt: row.created_at,
        }));
    },
};

export const reflectionDB = {
    async save(reflection: Omit<Reflection, 'id'>): Promise<void> {
        if (!db) throw new Error('Database not initialized');

        await db.runAsync(
            'INSERT OR REPLACE INTO reflections (date, betrayal, protection, excuse, truth_avoided, created_at) VALUES (?, ?, ?, ?, ?, ?)',
            [
                reflection.date,
                reflection.betrayal,
                reflection.protection,
                reflection.excuse,
                reflection.truthAvoided,
                reflection.createdAt,
            ]
        );
    },

    async getByDate(date: string): Promise<Reflection | null> {
        if (!db) throw new Error('Database not initialized');

        const row = await db.getFirstAsync<any>(
            'SELECT * FROM reflections WHERE date = ?',
            [date]
        );

        if (!row) return null;

        return {
            id: row.id,
            date: row.date,
            betrayal: row.betrayal,
            protection: row.protection,
            excuse: row.excuse,
            truthAvoided: row.truth_avoided,
            createdAt: row.created_at,
        };
    },

    async getRecent(limit: number = 7): Promise<Reflection[]> {
        if (!db) throw new Error('Database not initialized');

        const rows = await db.getAllAsync<any>(
            'SELECT * FROM reflections ORDER BY created_at DESC LIMIT ?',
            [limit]
        );

        return rows.map((row) => ({
            id: row.id,
            date: row.date,
            betrayal: row.betrayal,
            protection: row.protection,
            excuse: row.excuse,
            truthAvoided: row.truth_avoided,
            createdAt: row.created_at,
        }));
    },
};

export const weeklyAuditDB = {
    async save(audit: Omit<WeeklyAudit, 'id'>): Promise<void> {
        if (!db) throw new Error('Database not initialized');

        await db.runAsync(
            'INSERT OR REPLACE INTO weekly_audits (week_start, weakened, strengthened, eliminate, created_at) VALUES (?, ?, ?, ?, ?)',
            [audit.weekStart, audit.weakened, audit.strengthened, audit.eliminate, audit.createdAt]
        );
    },

    async getByWeek(weekStart: string): Promise<WeeklyAudit | null> {
        if (!db) throw new Error('Database not initialized');

        const row = await db.getFirstAsync<any>(
            'SELECT * FROM weekly_audits WHERE week_start = ?',
            [weekStart]
        );

        if (!row) return null;

        return {
            id: row.id,
            weekStart: row.week_start,
            weakened: row.weakened,
            strengthened: row.strengthened,
            eliminate: row.eliminate,
            createdAt: row.created_at,
        };
    },
};
