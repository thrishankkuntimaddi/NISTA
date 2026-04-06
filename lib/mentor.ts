import type { MentorResponse, Reflection } from '../types';

const MENTOR_RESPONSES = {
    first_time: [
        "Discipline is the bridge between intention and action.",
        "The path is narrowed by excuses. The choice remains yours.",
        "Silence speaks louder than noise. Begin with honesty.",
    ],
    betrayed: [
        "You saw the weakness. Now choose differently.",
        "The red flag was visible. Recognition is the first step.",
        "Awareness without action is still sleep.",
    ],
    protected: [
        "Consistency builds integrity.",
        "The choice was conscious. Continue.",
        "Small acts accumulate quietly.",
    ],
    neutral: [
        "Observe without judgment.",
        "The witness does not celebrate or condemn.",
        "Truth requires no praise.",
    ],
};

export const generateMentorResponse = (reflection: Reflection | null): MentorResponse => {
    // First time using the app
    if (!reflection) {
        return {
            text: MENTOR_RESPONSES.first_time[0],
            type: 'first_time',
        };
    }

    // If user betrayed their rule
    if (reflection.betrayal && reflection.betrayal.trim().length > 20) {
        const responses = MENTOR_RESPONSES.betrayed;
        return {
            text: responses[Math.floor(Math.random() * responses.length)],
            type: 'betrayed',
        };
    }

    // If user protected their dignity
    if (reflection.protection && reflection.protection.trim().length > 20) {
        const responses = MENTOR_RESPONSES.protected;
        return {
            text: responses[Math.floor(Math.random() * responses.length)],
            type: 'protected',
        };
    }

    // Neutral response
    const responses = MENTOR_RESPONSES.neutral;
    return {
        text: responses[Math.floor(Math.random() * responses.length)],
        type: 'neutral',
    };
};
