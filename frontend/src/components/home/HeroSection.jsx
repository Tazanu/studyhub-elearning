import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import useInView from '../../hooks/useInView';

export default function HeroSection() {
    const [ref, inView] = useInView({ threshold: 0.08 });

    return (
        <section
            ref={ref}
            aria-label="Hero"
            className="relative pt-28 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 overflow-hidden"
            style={{ background: 'var(--bg-main)' }}
        >
            {/* background blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,102,255,0.07) 0%, transparent 65%)' }} />
                <div style={{ position: 'absolute', top: '20%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)' }} />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* left — copy */}
                    <div className={`text-center lg:text-left slide-left ${inView ? 'in-view' : ''}`}>
                        <h1
                            className="font-bold leading-tight mb-5"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
                                letterSpacing: '-0.03em',
                                color: 'var(--text-primary)',
                            }}
                        >
                            Study smarter.{' '}
                            <span className="gradient-text">Grow together.</span>
                        </h1>

                        <p
                            className={`mb-8 max-w-lg mx-auto lg:mx-0 fade-up delay-1 ${inView ? 'in-view' : ''}`}
                            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.8, color: 'var(--text-secondary)' }}
                        >
                            Connect with study groups, get answers to tough questions, discover shared notes, and book peer tutors. All in one place.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center fade-up delay-2 ${inView ? 'in-view' : ''}`}>
                            <Link
                                to="/register"
                                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)', fontSize: '0.95rem', outlineColor: '#0066ff' }}
                            >
                                Get started free <ArrowRight size={16} />
                            </Link>
                            <button
                                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium border transition-all hover:border-blue-500 w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', outlineColor: '#0066ff' }}
                                aria-label="Watch a 2-minute overview of StudyHub"
                            >
                                <Play size={15} fill="currentColor" /> Watch overview
                            </button>
                        </div>

                        <p className={`mt-4 text-xs fade-up delay-3 ${inView ? 'in-view' : ''}`} style={{ color: 'var(--text-muted)' }}>
                            Free to join · Always
                        </p>
                    </div>

                    {/* right — visual */}
                    <div className={`relative hidden lg:block slide-right ${inView ? 'in-view' : ''}`} aria-hidden="true">
                        <div
                            className="rounded-2xl border overflow-hidden"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                        >
                            <div className="h-44 w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0052cc 0%, #7c3aed 100%)' }}>
                                {/* grid overlay */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

                                {/* code snippet card */}
                                <div className="absolute top-4 left-4 px-3 py-2 rounded-lg text-xs font-mono leading-relaxed" style={{ background: 'rgba(0,0,0,0.35)', color: '#93c5fd', backdropFilter: 'blur(4px)', lineHeight: 1.6 }}>
                                    <span style={{ color: '#c084fc' }}>def </span>
                                    <span style={{ color: '#86efac' }}>dijkstra</span>
                                    <span style={{ color: '#fff' }}>(graph, src):</span><br />
                                    <span style={{ color: '#94a3b8' }}>{'  '}dist = </span>
                                    <span style={{ color: '#fbbf24' }}>&#123;&#125;</span><br />
                                    <span style={{ color: '#94a3b8' }}>{'  '}heap = [(</span>
                                    <span style={{ color: '#f87171' }}>0</span>
                                    <span style={{ color: '#94a3b8' }}>, src)]</span>
                                </div>

                                {/* complexity badge */}
                                <div className="absolute top-4 right-4 px-2.5 py-1.5 rounded-lg text-xs font-mono" style={{ background: 'rgba(0,0,0,0.35)', color: '#86efac', backdropFilter: 'blur(4px)' }}>
                                    O(E log V)
                                </div>

                                {/* graph nodes */}
                                <svg className="absolute bottom-3 right-4" width="90" height="58" viewBox="0 0 90 58" fill="none">
                                    <line x1="15" y1="44" x2="45" y2="14" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                                    <line x1="45" y1="14" x2="75" y2="44" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                                    <line x1="15" y1="44" x2="75" y2="44" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                                    <line x1="45" y1="14" x2="45" y2="44" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
                                    <circle cx="45" cy="14" r="7" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
                                    <circle cx="15" cy="44" r="7" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="1.5" />
                                    <circle cx="75" cy="44" r="7" fill="#0e7490" stroke="#67e8f9" strokeWidth="1.5" />
                                    <circle cx="45" cy="44" r="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                                    <text x="43" y="18" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">A</text>
                                    <text x="13" y="48" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">B</text>
                                    <text x="73" y="48" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">C</text>
                                    <text x="30" y="26" fill="rgba(255,255,255,0.7)" fontSize="6">4</text>
                                    <text x="60" y="26" fill="rgba(255,255,255,0.7)" fontSize="6">2</text>
                                    <text x="44" y="56" fill="rgba(255,255,255,0.7)" fontSize="6">7</text>
                                </svg>

                                {/* math formula */}
                                <div className="absolute bottom-4 left-4 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    T(n) = 2T(n/2) + Θ(n)
                                </div>
                            </div>
                            <div className="p-5">
                                <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,102,255,0.12)', color: 'var(--accent-blue)' }}>Computer Science · UYI</span>
                                <h3 className="font-semibold mt-2 mb-1" style={{ color: 'var(--text-primary)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Advanced Algorithms Study Group</h3>
                                <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>Fabrice Tchamba · 18 members · Active now</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold" style={{ color: '#34d399' }}>Free</span>
                                    <Link to="/register" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ background: 'var(--accent-blue)' }}>Join group</Link>
                                </div>
                            </div>
                        </div>

                        {/* floating badge */}
                        <div
                            className={`absolute -bottom-4 -left-6 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg fade-up delay-4 ${inView ? 'in-view' : ''}`}
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,102,255,0.15)', color: 'var(--accent-blue)' }}>FT</div>
                            <div>
                                <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Fabrice joined your group</p>
                                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Advanced Algorithms · just now</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
