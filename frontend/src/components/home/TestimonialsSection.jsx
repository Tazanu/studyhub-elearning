import useInView from '../../hooks/useInView';

const TESTIMONIALS = [
    {
        quote: "StudyHub completely changed how I prepare for exams. Finding a study group in my department used to take weeks. Now it takes minutes.",
        name: 'Aïcha Nkemdirim',
        role: '3rd year · University of Buea · Computer Science',
        initials: 'AN',
        color: '#60a5fa',
    },
    {
        quote: "I posted a question about organic chemistry at 11pm and had three detailed answers by midnight. The Q&A forum is genuinely useful, not just noise.",
        name: 'Fabrice Tchamba',
        role: '2nd year · University of Yaoundé I · Biochemistry',
        initials: 'FT',
        color: '#34d399',
    },
    {
        quote: "I signed up as a tutor to earn on the side. Booking is smooth, payments come through reliably, and my schedule stays under my control.",
        name: 'Rodrigue Mballa',
        role: 'Graduate student · University of Douala · Engineering',
        initials: 'RM',
        color: '#8b5cf6',
    },
];

export default function TestimonialsSection() {
    const [ref, inView] = useInView();

    return (
        <section
            aria-labelledby="testimonials-heading"
            className="py-20 sm:py-28 px-4 sm:px-6 border-t"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
            <div className="max-w-6xl mx-auto">
                <header className={`text-center mb-14 fade-up ${inView ? 'in-view' : ''}`} ref={ref}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-blue)' }}>
                        Student stories
                    </p>
                    <h2
                        id="testimonials-heading"
                        className="font-bold"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}
                    >
                        What students are saying
                    </h2>
                </header>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none p-0 m-0">
                    {TESTIMONIALS.map(({ quote, name, role, initials, color }, i) => (
                        <li
                            key={name}
                            className={`rounded-2xl border p-7 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg fade-up delay-${i + 1} ${inView ? 'in-view' : ''}`}
                            style={{ background: 'var(--bg-main)', borderColor: 'var(--border-subtle)' }}
                        >
                            <div className="flex gap-0.5 mb-4" aria-label="5 star rating">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} style={{ color: '#facc15' }} aria-hidden="true">★</span>
                                ))}
                            </div>

                            <blockquote className="flex-1 mb-6">
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    "{quote}"
                                </p>
                            </blockquote>

                            <footer className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                                    style={{ background: `${color}22`, color }}
                                    aria-hidden="true"
                                >
                                    {initials}
                                </div>
                                <div>
                                    <cite className="not-italic font-semibold text-sm block" style={{ color: 'var(--text-primary)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        {name}
                                    </cite>
                                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{role}</span>
                                </div>
                            </footer>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
