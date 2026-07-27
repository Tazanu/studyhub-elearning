import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useInView from '../../hooks/useInView';

export default function FinalCTA() {
    const [ref, inView] = useInView();

    return (
        <section
            aria-labelledby="final-cta-heading"
            className="py-20 sm:py-28 px-4 sm:px-6 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)' }}
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,102,255,0.15) 0%, transparent 65%)' }} />
            </div>

            <div ref={ref} className={`relative max-w-2xl mx-auto fade-up ${inView ? 'in-view' : ''}`}>
                <h2
                    id="final-cta-heading"
                    className="font-bold mb-4"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', color: '#f0f0f0' }}
                >
                    Ready to study smarter?
                </h2>
                <p className={`mb-8 text-base fade-up delay-1 ${inView ? 'in-view' : ''}`} style={{ color: 'rgba(240,240,240,0.65)', lineHeight: 1.8 }}>
                    Join students already using StudyHub to get better results, together.
                </p>
                <Link
                    to="/register"
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 fade-up delay-2 ${inView ? 'in-view' : ''}`}
                    style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)', fontSize: '1rem', outlineColor: '#60a5fa' }}
                >
                    Create your free account <ArrowRight size={18} />
                </Link>
                <p className={`mt-4 text-xs fade-up delay-3 ${inView ? 'in-view' : ''}`} style={{ color: 'rgba(240,240,240,0.4)' }}>
                    Free to join · No credit card required
                </p>
            </div>
        </section>
    );
}
