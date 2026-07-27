import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Loader2, UserCheck, Crown } from 'lucide-react';
import api from '../api/client';
import { toast } from 'sonner';

export default function MembersModal({ groupId, onClose }) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMembers = async () => {
            try {
                const { data } = await api.get(`/groups/${groupId}/members`);
                setMembers(data);
            } catch (err) {
                console.warn('Members endpoint not implemented yet:', err);
                toast.error('Unable to load members');
                setMembers([]);
            } finally {
                setLoading(false);
            }
        };
        loadMembers();
    }, [groupId]);

    useEffect(() => {
        const handler = e => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <>
            <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="members-modal-title"
                className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
                <div
                    className="w-full max-w-md rounded-2xl border p-6 pointer-events-auto max-h-[80vh] overflow-y-auto"
                    style={{
                        background: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.5)'
                    }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2
                            id="members-modal-title"
                            className="text-xl font-bold"
                            style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--accent-blue)' }}
                        >
                            Group Members
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg transition-colors hover:bg-red-500 hover:text-white"
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 size={32} className="animate-spin" style={{ color: 'var(--accent-blue)' }} />
                        </div>
                    ) : members.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                No members yet
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {members.map(member => (
                                <div
                                    key={member.user_id}
                                    className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-opacity-50"
                                    style={{ background: 'var(--bg-hover)' }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                                        style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
                                    >
                                        {member.users?.first_name?.[0]}{member.users?.last_name?.[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold truncate">
                                            {member.users?.first_name} {member.users?.last_name}
                                        </p>
                                        <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
                                            {member.users?.field_of_study || 'Student'}
                                        </p>
                                    </div>
                                    {member.role === 'owner' ? (
                                        <div
                                            className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                                            style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24' }}
                                        >
                                            <Crown size={12} />
                                            Owner
                                        </div>
                                    ) : (
                                        <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                            <UserCheck size={16} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
}
