import useInView from '../../hooks/useInView';

const STATS = [
    { value: '5,000+', label: 'Active students' },
    { value: '4',      label: 'Core features'   },
    { value: '500+',   label: 'Peer tutors'      },
];

export default function TrustBar() {
    const [ref, inView] = useInView();

    return (
        <section
            ref={ref}
            aria-label="Platform statistics"
            className="py-10 border-t border-b"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <dl className="grid grid-cols-3 gap-4 sm:gap-8">
                    {STATS.map(({ value, label }, i) => (
                        <div key={label} className={`text-center fade-up delay-${i + 1} ${inView ? 'in-view' : ''}`}>
                            <dt
                                className="text-3xl sm:text-4xl font-bold tabular-nums"
                                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--accent-blue)' }}
                            >
                                {value}
                            </dt>
                            <dd className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                                {label}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
