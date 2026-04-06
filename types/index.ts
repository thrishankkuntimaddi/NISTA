export interface TodaySankalpa {
  character: string;
  avoid: string;
  action: string;
  date: string;
}

export interface KarmaLog {
  id?: number;
  domain: 'Body' | 'Mind' | 'Purpose';
  observation: string;
  consciousChoice: boolean;
  date: string;
  createdAt: number;
}

export interface Reflection {
  id?: number;
  date: string;
  betrayal: string;
  protection: string;
  excuse: string;
  truthAvoided: string;
  createdAt: number;
}

export interface WeeklyAudit {
  id?: number;
  weekStart: string;
  weakened: string;
  strengthened: string;
  eliminate: string;
  createdAt: number;
}

export type MentorResponse = {
  text: string;
  type: 'first_time' | 'betrayed' | 'protected' | 'neutral';
};
