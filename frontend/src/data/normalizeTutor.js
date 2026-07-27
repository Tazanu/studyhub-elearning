// ── PRICING ─────────────────────────────────────────────────────
// 500 FCFA per hour per day
// 1h = 500, 2h = 1,000, 3h = 1,500, 4h = 2,000
// 5h = 2,500, 6h = 3,000, 7h = 3,500, 8h (full day) = 4,000
// Group = 70% of 1-on-1 price
// Monthly pack  = 4 days × 500 × 0.90 = 1,800 FCFA (10% off)
// Semester pack = 16 days × 500 × 0.80 = 6,400 FCFA (20% off)
export const BASE_HOURLY_RATE = 500; // FCFA per hour

export function calcSessionPrice(hours, sessionType) {
    if (sessionType === 'trial') return 0;
    const base = BASE_HOURLY_RATE * hours;
    const groupDiscount = sessionType === 'group' ? 0.7 : 1;
    return Math.round(base * groupDiscount);
}

// Returns a consistent accent color per tutor id — used for initials avatars
const AVATAR_COLORS = ['#0066ff','#8b5cf6','#34d399','#f59e0b','#f472b6','#06b6d4','#ef4444','#84cc16'];
export const getAvatarColor = (id) => {
    const str = String(id ?? '');
    const num = parseInt(str);
    const index = isNaN(num)
        ? str.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
        : Math.abs(num);
    return AVATAR_COLORS[index % AVATAR_COLORS.length];
};

const EMPTY_PROFILE_DEFAULTS = {
    teachingPhilosophy: '',
    languages: ['English'],
    education: [],
    certifications: [],
    specializations: [],
    reviews: [],
    ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    sessionTools: ['HD Video Call', 'Interactive Whiteboard', 'Screen Sharing', 'File Upload & Storage', 'Session Recording', 'Real-time Chat'],
    resources: [],
};

/**
 * Maps a backend tutors row (+ users + tutor_availability) to the
 * shape expected by all tutor components.
 */
export function normalizeTutor(t) {
    const user = t.users ?? {};
    const name = `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim() || 'Unknown Tutor';
    const hourlyRate = parseFloat(t.hourly_rate ?? 0);

    // Build availability schedule from tutor_availability rows
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const DEFAULT_SLOTS = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
    const schedule = Object.fromEntries(days.map(d => [d, [...DEFAULT_SLOTS]]));
    (t.tutor_availability ?? []).forEach(slot => {
        const day = slot.day_of_week;
        if (!schedule[day]) return;
        try {
            const time = new Date(slot.start_time).toTimeString().slice(0, 5);
            if (time !== 'Inval' && !schedule[day].includes(time)) schedule[day].push(time);
        } catch {}
    });

    // Subjects: backend stores as string[], components expect [{ name, level, grades }]
    const subjects = (t.subjects ?? []).map(s =>
        typeof s === 'string' ? { name: s, level: 'Intermediate', grades: 'All levels' } : s
    );

    const single   = { price: BASE_HOURLY_RATE,               sessions: 1,  features: ['1-on-1 session (1 hour)', 'Session recording', 'Basic materials'] };
    const monthly  = { price: BASE_HOURLY_RATE * 4 * 0.9,     sessions: 4,  features: ['4 sessions/month (1h each)', 'Priority booking', 'Progress reports', '10% discount'], badge: 'Best Value' };
    const semester = { price: BASE_HOURLY_RATE * 16 * 0.8,    sessions: 16, features: ['16 sessions/semester (1h each)', 'Dedicated support', 'All resources', 'Exam strategy sessions', '20% discount'] };

    const totalSessions = t.total_sessions ?? 0;
    const rating = parseFloat(t.rating ?? 0);

    return {
        ...EMPTY_PROFILE_DEFAULTS,
        id: String(t.id),
        name,
        avatar: user.profile_picture || null,
        title: subjects.length ? subjects.map(s => s.name).join(' & ') + ' Tutor' : 'Tutor',
        isOnline: t.is_active ?? false,
        rating: rating || 0,
        totalReviews: totalSessions,
        stats: {
            totalStudents: totalSessions,
            sessionsCompleted: totalSessions,
            responseRate: 98,
            yearsExperience: t.experience_years ?? 0,
        },
        bio: t.bio || user.bio || '',
        subjects,
        pricing: { single, monthly, semester },
        availability: {
            timezone: 'Africa/Douala',
            schedule,
        },
    };
}

/**
 * Normalizes the list endpoint response (no tutor_availability included).
 */
export function normalizeTutorList(t) {
    const user = t.users ?? {};
    const name = `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim() || 'Unknown Tutor';
    const hourlyRate = parseFloat(t.hourly_rate ?? 0);
    const subjects = (t.subjects ?? []).map(s =>
        typeof s === 'string' ? { name: s, level: 'Intermediate', grades: 'All levels' } : s
    );
    const totalSessions = t.total_sessions ?? 0;

    return {
        id: String(t.id),
        name,
        avatar: user.profile_picture || null,
        title: subjects.length ? subjects.map(s => s.name).join(' & ') + ' Tutor' : 'Tutor',
        isOnline: t.is_active ?? false,
        rating: parseFloat(t.rating ?? 0) || 0,
        totalReviews: totalSessions,
        bio: t.bio || user.bio || '',
        subjects,
        stats: {
            totalStudents: totalSessions,
            sessionsCompleted: totalSessions,
        },
        pricing: { single: { price: hourlyRate } },
    };
}
