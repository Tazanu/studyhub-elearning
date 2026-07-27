import { Users, MessageSquare, BookOpen, GraduationCap } from 'lucide-react';
import useInView from '../../hooks/useInView';

const BENEFITS = [
    {
        Icon: Users,
        color: '#60a5fa',
        bg: 'rgba(96,165,250,0.1)',
        headline: 'Find your people, stop studying alone',
        body: 'Create or join study groups in your department. Coordinate sessions, share resources, and stay accountable together.',
    },
    {
        Icon: MessageSquare,
        color: '#34d399',
        bg: 'rgba(52,211,153,0.1)',
        headline: 'Get unstuck in minutes, not days',
        body: "Post a question and get precise answers from peers who've already covered the material. The Q&A forum is fast and on-topic.",
    },
    {
        Icon: BookOpen,
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.1)',
        headline: 'Never miss a lecture again',
        body: 'Access well-organised notes, summaries, and past papers uploaded by fellow students. Free for the whole community.',
    },
    {
        Icon: GraduationCap,
        color: '#f472b6',
        bg: 'rgba(244,114,182,0.1)',
        headline: 'Book a tutor who speaks your context',
        body: 'Connect with verified peer tutors for 1-on-1 sessions. Pay only for the time you use, starting from 500 FCFA/hr.',
    },
];

export default function WhySection() {
    const [ref, inView] = useInView();

    return (
        <section
            aria-labelledby="why-heading"
            className="py-20 sm:py-28 px-4 sm:px-6"
            style={{ background: 'var(--bg-main)' }}
        >
            <div className="max-w-6xl mx-auto">
                <header className={`text-center mb-14 fade-up ${inView ? 'in-view' : ''}`} ref={ref}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-blue)' }}>
                        Why StudyHub
                    </p>
                    <h2
                        id="why-heading"
                        className="font-bold"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}
                    >
                        Everything you need to excel, in one place
                    </h2>
                </header>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
                    {BENEFITS.map(({ Icon, color, bg, headline, body }, i) => (
                        <li
                            key={headline}
                            className={`rounded-2xl border p-7 transition-transform hover:-translate-y-1 hover:shadow-lg fade-up delay-${i + 1} ${inView ? 'in-view' : ''}`}
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                        >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: bg }}>
                                <Icon size={22} color={color} strokeWidth={1.75} aria-hidden="true" />
                            </div>
                            <h3
                                className="font-semibold mb-2 leading-snug"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color }}
                            >
                                {headline}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
