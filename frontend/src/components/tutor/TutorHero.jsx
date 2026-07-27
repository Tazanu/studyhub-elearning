import { motion } from 'framer-motion';
import { Star, MessageSquare, Users, CheckCircle, Clock, TrendingUp, Globe, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import TutorAvatar from './TutorAvatar';

export default function TutorHero({ tutor, scrollToBooking, openMessageModal }) {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleFreeTrial = () => {
        if (!user) { toast.error('Please log in to book a session'); navigate('/login'); return; }
        scrollToBooking?.();
        toast.info('Select your preferred time slot below');
    };

    const handleMessage = () => {
        if (!user) { toast.error('Please log in to message a tutor'); navigate('/login'); return; }
        openMessageModal?.();
    };

    return (
        <section className="relative border-b overflow-hidden"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>

            {/* Gradient banner */}
            <div className="h-40 md:h-52 relative"
                style={{ background: 'linear-gradient(135deg,#0052cc 0%,#0066ff 40%,#8b5cf6 100%)' }}>
                <div aria-hidden className="absolute inset-0"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.04) 0,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 14px)' }} />
                <div aria-hidden className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: 'linear-gradient(to top,var(--bg-card),transparent)' }} />
                <button
                    onClick={() => navigate('/tutors')}
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-white transition-all hover:bg-white/20"
                >
                    <ArrowLeft size={16} /> Back to Tutors
                </button>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
                {/* Avatar — pulled up over banner */}
                <div className="-mt-16 mb-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="relative inline-block"
                    >
                        <TutorAvatar
                            src={tutor.avatar}
                            name={tutor.name}
                            tutorId={tutor.id}
                            size={tutor.isOwn ? 144 : 128}
                            rounded="rounded-2xl"
                            isOwn={tutor.isOwn}
                            onUpload={tutor.onUpload}
                            className="border-4 shadow-2xl"
                        />
                        {tutor.isOnline && (
                            <span className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                                style={{ background: '#16a34a' }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                                Online
                            </span>
                        )}
                    </motion.div>
                </div>

                {/* Name + actions — always below the avatar, never overlapping banner */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                        <h1 className="text-2xl md:text-4xl font-bold leading-tight"
                            style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{tutor.name}</h1>
                        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-secondary)' }}>{tutor.title}</p>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14}
                                        className={i < Math.round(tutor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} />
                                ))}
                                <span className="font-semibold text-sm ml-1">{tutor.rating}</span>
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>({tutor.totalReviews} reviews)</span>
                            </div>
                            <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                                <Globe size={12} /> {tutor.availability?.timezone}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                        className="flex gap-3 flex-wrap shrink-0"
                    >
                        <button onClick={handleFreeTrial}
                            className="px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
                            style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}>
                            Book a Session
                        </button>
                        <button onClick={handleMessage}
                            className="px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all hover:border-blue-500 flex items-center gap-2"
                            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}>
                            <MessageSquare size={15} /> Message
                        </button>
                    </motion.div>
                </div>

                {/* Subject tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tutor.subjects.map((s, i) => (
                        <motion.span key={i}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className="px-3 py-1 rounded-lg text-sm font-medium"
                            style={{ background: 'rgba(0,102,255,0.1)', color: 'var(--accent-blue)', border: '1px solid rgba(0,102,255,0.15)' }}>
                            {s.name}
                        </motion.span>
                    ))}
                </div>

                {/* Stats grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                >
                    {[
                        { icon: Users, value: tutor.stats.totalStudents, label: 'Students' },
                        { icon: CheckCircle, value: tutor.stats.sessionsCompleted, label: 'Sessions' },
                        { icon: TrendingUp, value: `${tutor.stats.responseRate}%`, label: 'Response Rate' },
                        { icon: Clock, value: `${tutor.stats.yearsExperience} yrs`, label: 'Experience' },
                    ].map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex items-center gap-3 p-4 rounded-xl border"
                            style={{ background: 'var(--bg-main)', borderColor: 'var(--border-subtle)' }}>
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                style={{ background: 'rgba(0,102,255,0.1)' }}>
                                <Icon size={18} style={{ color: 'var(--accent-blue)' }} />
                            </div>
                            <div>
                                <div className="font-bold text-base leading-tight"
                                    style={{ fontFamily: "'Space Grotesk',sans-serif" }}>{value}</div>
                                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
