import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "StudyHub completely changed how I prepare for exams. Finding a study group in my department used to take weeks. Now it takes minutes.",
        name: "Aïcha Nkemdirim",
        context: "3rd year · University of Buea · Computer Science",
        photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
    },
    {
        quote: "I posted a question about organic chemistry at 11pm and had three detailed answers by midnight. The Q&A forum is genuinely useful, not just noise.",
        name: "Fabrice Tchamba",
        context: "2nd year · University of Yaoundé I · Biochemistry",
        photo: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop&crop=face",
    },
    {
        quote: "The notes library saved my semester. Someone had already summarised the entire macroeconomics module. I used it to fill gaps from missed lectures.",
        name: "Mireille Essomba",
        context: "Final year · AIMS Cameroon · Mathematics",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    },
    {
        quote: "I signed up as a tutor to earn on the side. Booking is smooth, payments come through reliably, and my schedule stays under my control.",
        name: "Rodrigue Mballa",
        context: "Graduate student · University of Douala · Engineering",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
];

const LEN = testimonials.length;

export default function Testimonials() {
    const [idx, setIdx]       = useState(0);
    const [visible, setVisible] = useState(true);
    const paused = useRef(false);

    // fade out → change index → fade in
    const go = useCallback((nextFn) => {
        setVisible(false);
        setTimeout(() => {
            setIdx(prev => {
                const next = typeof nextFn === 'function' ? nextFn(prev) : nextFn;
                return (next + LEN) % LEN;
            });
            setVisible(true);
        }, 250);
    }, []);

    // auto-advance — no stale closure because go is stable and setIdx uses functional update
    useEffect(() => {
        const t = setInterval(() => {
            if (!paused.current) go(i => i + 1);
        }, 3000);
        return () => clearInterval(t);
    }, [go]);

    const t = testimonials[idx];

    return (
        <section
            className="py-32 px-6"
            style={{ background: 'var(--bg-main)' }}
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
        >
            <div className="max-w-5xl mx-auto">

                {/* header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: 'var(--accent-blue)' }}>
                        Student Stories
                    </p>
                    <h2
                        className="font-bold"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        What students are saying
                    </h2>
                </div>

                {/* card */}
                <div
                    className="rounded-2xl border overflow-hidden"
                    style={{
                        background: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.25s ease, transform 0.25s ease',
                    }}
                >
                    <div className="flex flex-col md:flex-row">

                        {/* photo */}
                        <div className="relative md:w-72 shrink-0" style={{ minHeight: 280 }}>
                            <img
                                key={t.photo}
                                src={t.photo}
                                alt={t.name}
                                className="w-full h-full object-cover"
                                style={{ minHeight: 280, display: 'block' }}
                            />
                            <div aria-hidden className="absolute inset-0 hidden md:block"
                                style={{ background: 'linear-gradient(to right, transparent 70%, var(--bg-card) 100%)' }} />
                            <div aria-hidden className="absolute inset-0 block md:hidden"
                                style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--bg-card) 100%)' }} />
                        </div>

                        {/* quote */}
                        <div className="flex-1 flex flex-col justify-center px-8 py-10 md:pl-6 md:pr-12">
                            <Quote size={32} className="mb-5"
                                style={{ color: 'var(--accent-blue)', opacity: 0.4 }} />
                            <p
                                className="font-medium leading-relaxed mb-8"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.75,
                                }}
                            >
                                {t.quote}
                            </p>
                            <div>
                                <p className="font-semibold text-base" style={{ color: 'var(--accent-blue)' }}>
                                    {t.name}
                                </p>
                                <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                    {t.context}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* controls */}
                <div className="flex items-center justify-center gap-5 mt-8">
                    <button
                        onClick={() => go(i => i - 1)}
                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-blue-500 hover:text-blue-500"
                        style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex gap-2 items-center">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                style={{
                                    width: i === idx ? 24 : 8,
                                    height: 8,
                                    borderRadius: 999,
                                    background: i === idx ? 'var(--accent-blue)' : 'var(--border-subtle)',
                                    transition: 'all 0.3s ease',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => go(i => i + 1)}
                        className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:border-blue-500 hover:text-blue-500"
                        style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
}
