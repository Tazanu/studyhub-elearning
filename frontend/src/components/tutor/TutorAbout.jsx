import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Lightbulb, CheckCircle } from 'lucide-react';

export default function TutorAbout({ tutor }) {
    return (
        <section className="px-4 sm:px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>About</h2>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left: bio + philosophy */}
                    <div className="lg:col-span-3 space-y-6">
                        <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
                            {tutor.bio}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.4 }}
                            className="p-5 rounded-2xl border-l-4"
                            style={{ background: 'rgba(139,92,246,0.06)', borderColor: '#8b5cf6', border: '1px solid rgba(139,92,246,0.15)', borderLeftWidth: 4 }}>
                            <div className="flex items-center gap-2 mb-2">
                                <Lightbulb size={16} style={{ color: '#8b5cf6' }} />
                                <span className="font-semibold text-sm">Teaching Philosophy</span>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                {tutor.teachingPhilosophy}
                            </p>
                        </motion.div>

                        {/* Specializations */}
                        <div>
                            <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>SPECIALIZATIONS</h3>
                            <div className="flex flex-wrap gap-2">
                                {tutor.specializations.map((spec, i) => (
                                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
                                        style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>
                                        <CheckCircle size={12} />
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: education, certs, languages */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Languages */}
                        <div className="p-5 rounded-2xl border"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                            <div className="flex items-center gap-2 mb-3">
                                <Globe size={16} style={{ color: 'var(--accent-blue)' }} />
                                <h3 className="font-semibold text-sm">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tutor.languages.map((lang, i) => (
                                    <span key={i} className="px-3 py-1 rounded-lg text-sm border"
                                        style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}>
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education timeline */}
                        <div className="p-5 rounded-2xl border"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                            <div className="flex items-center gap-2 mb-4">
                                <GraduationCap size={16} style={{ color: 'var(--accent-blue)' }} />
                                <h3 className="font-semibold text-sm">Education</h3>
                            </div>
                            <div className="space-y-4">
                                {tutor.education.map((edu, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                                                style={{ background: 'var(--accent-blue)' }} />
                                            {i < tutor.education.length - 1 && (
                                                <div className="w-px flex-1 mt-1" style={{ background: 'var(--border-subtle)' }} />
                                            )}
                                        </div>
                                        <div className="pb-3">
                                            <div className="font-medium text-sm leading-snug">{edu.degree}</div>
                                            <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                                                {edu.institution} · {edu.year}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="p-5 rounded-2xl border"
                            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                            <div className="flex items-center gap-2 mb-3">
                                <Award size={16} style={{ color: '#fbbf24' }} />
                                <h3 className="font-semibold text-sm">Certifications</h3>
                            </div>
                            <div className="space-y-2">
                                {tutor.certifications.map((cert, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm">
                                        <Award size={13} className="shrink-0" style={{ color: '#fbbf24' }} />
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
