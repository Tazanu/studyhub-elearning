import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Search, Plus, Users, X, Loader2, UserCheck,
    Laptop2, Calculator, FlaskConical, Cog, Briefcase,
    Scale, TrendingUp, Dna, Atom, WifiOff } from 'lucide-react';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import MembersModal from '../components/MembersModal';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

/* ── banner config ────────────────────────────────────────────── */
const BANNERS = {
    'computer science': { gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',  glow: '#3b82f6', Icon: Laptop2      },
    'mathematics':      { gradient: 'linear-gradient(135deg,#10b981,#047857)',  glow: '#10b981', Icon: Calculator   },
    'physics':          { gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',  glow: '#8b5cf6', Icon: Atom         },
    'chemistry':        { gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',  glow: '#8b5cf6', Icon: FlaskConical },
    'engineering':      { gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',  glow: '#f59e0b', Icon: Cog          },
    'business':         { gradient: 'linear-gradient(135deg,#ec4899,#db2777)',  glow: '#ec4899', Icon: Briefcase    },
    'biology':          { gradient: 'linear-gradient(135deg,#34d399,#059669)',  glow: '#34d399', Icon: Dna          },
    'economics':        { gradient: 'linear-gradient(135deg,#f59e0b,#b45309)',  glow: '#f59e0b', Icon: TrendingUp   },
    'law':              { gradient: 'linear-gradient(135deg,#94a3b8,#475569)',  glow: '#94a3b8', Icon: Scale        },
};
const DEFAULT_BANNER = { gradient: 'linear-gradient(135deg,#64748b,#475569)', glow: '#64748b', Icon: Users };
const getBanner = s => {
    const k = (s || '').toLowerCase();
    return Object.entries(BANNERS).find(([key]) => k.includes(key))?.[1] ?? DEFAULT_BANNER;
};

/* ── card variants ────────────────────────────────────────────── */
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22,1,0.36,1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

/* ── main ─────────────────────────────────────────────────────── */
export default function Groups() {
    const { user } = useAuth();
    const navigate  = useNavigate();
    const isOnline = useOnlineStatus();

    const [groups,        setGroups]        = useState([]);
    const [loading,       setLoading]       = useState(true);
    const [search,        setSearch]        = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [subjectFilter, setSubjectFilter] = useState('');
    const [showModal,     setShowModal]     = useState(false);
    const [joining,       setJoining]       = useState(null);
    const [showMembersFor, setShowMembersFor] = useState(null); // groupId

    // Debounce search input — only update filter after 280ms of no typing
    useEffect(() => {
        const t = setTimeout(() => setDebouncedSearch(search), 280);
        return () => clearTimeout(t);
    }, [search]);

    const loadGroups = useCallback(async (silent = false) => {
        if (!silent) setLoading(true);
        try {
            const { data } = await api.get('/groups');
            setGroups(data);
        } catch (error) {
            if (!silent) toast.error('Failed to load groups');
        } finally {
            if (!silent) setLoading(false);
        }
    }, []);

    useEffect(() => { loadGroups(); }, [loadGroups]);

    // Poll every 15s so new groups/membership changes appear
    useEffect(() => {
        const t = setInterval(() => loadGroups(true), 15000);
        return () => clearInterval(t);
    }, [loadGroups]);

    /* ── filter ───────────────────────────────────────────────── */
    const subjects = useMemo(
        () => [...new Set(groups.map(g => g.subject).filter(Boolean))].sort(),
        [groups]
    );
    const filtered = useMemo(() => {
        const q = debouncedSearch.toLowerCase();
        return groups.filter(g =>
            (!q || g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q))
            && (!subjectFilter || g.subject === subjectFilter)
        );
    }, [groups, debouncedSearch, subjectFilter]);

    /* ── actions ──────────────────────────────────────────────── */
    const handleJoin = async (groupId) => {
        if (!user) { navigate('/login'); return; }
        setJoining(groupId);

        try {
            const { data } = await api.post(`/groups/${groupId}/join`);

            if (data.requestStatus === 'pending') {
                // Group requires approval — show pending state, don't mark as member yet
                toast.info('Join request sent! Waiting for admin approval.');
                setGroups(prev => prev.map(g =>
                    g.id === groupId ? { ...g, pendingRequest: true } : g
                ));
            } else {
                // Instant join
                toast.success('You joined the group!');
                setGroups(prev => prev.map(g =>
                    g.id === groupId
                        ? { ...g, isMember: true, memberRole: 'member', current_members: (g.current_members || 0) + 1 }
                        : g
                ));
            }
        } catch (err) {
            const msg = err.response?.data?.error || 'Failed to join group';
            // Already pending
            if (err.response?.data?.requestStatus === 'pending') {
                toast.info('Your join request is already pending approval.');
            } else {
                toast.error(msg);
            }
        } finally {
            setJoining(null);
        }
    };

    const handleLeave = async (groupId) => {
        // Optimistic update — immediately remove membership
        setGroups(prev => prev.map(g =>
            g.id === groupId
                ? { ...g, isMember: false, memberRole: null, current_members: Math.max(0, (g.current_members || 1) - 1) }
                : g
        ));

        try {
            await api.delete(`/groups/${groupId}/leave`);
            toast.success('You left the group');
        } catch (err) {
            // Roll back on failure
            setGroups(prev => prev.map(g =>
                g.id === groupId
                    ? { ...g, isMember: true, memberRole: 'member', current_members: (g.current_members || 0) + 1 }
                    : g
            ));
            toast.error(err.response?.data?.error || 'Failed to leave group');
        }
    };

    const totalMembers = groups.reduce((s, g) => s + (g.current_members || 0), 0);

    return (
        <div className="lg:pl-60" style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-primary)' }}>
            <Sidebar />

            {/* ── HERO ────────────────────────────────────────── */}
            <section className="pt-20 px-6 py-12 text-center border-b"
                style={{ background: 'linear-gradient(135deg,rgba(0,102,255,0.07),rgba(139,92,246,0.07))', borderColor: 'var(--border-subtle)' }}>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text"
                    style={{ fontFamily: "'Space Grotesk',sans-serif" }}>Study Groups</h1>
                <p className="max-w-xl mx-auto mb-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Join collaborative learning communities, share knowledge, and grow with peers.
                </p>
                <div className="flex justify-center gap-12 flex-wrap">
                    {[
                        [groups.length,  'Active Groups'],
                        [totalMembers,   'Total Members'],
                        [subjects.length,'Subjects'],
                    ].map(([n, l]) => (
                        <div key={l} className="text-center">
                            <div className="text-3xl font-bold tabular-nums"
                                style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--accent-blue)' }}>{n}</div>
                            <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{l}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FILTER BAR ──────────────────────────────────── */}
            <div className="sticky top-16 z-30 px-4 sm:px-6 py-3 border-b"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
                    <div className="relative flex-1 min-w-0 sm:min-w-[200px]">
                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2"
                            style={{ color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search groups…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="form-input pl-9 pr-4"
                            style={{ height: 40 }}
                        />
                    </div>
                    <select
                        value={subjectFilter}
                        onChange={e => setSubjectFilter(e.target.value)}
                        className="form-input px-3"
                        style={{ height: 40, minWidth: 140 }}
                    >
                        <option value="">All Subjects</option>
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {user ? (
                        <motion.button
                            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                            onClick={() => setShowModal(true)}
                            disabled={!isOnline}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                            style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}
                            title={!isOnline ? "You're offline — reconnect to create groups" : "Create a new group"}
                        >
                            {!isOnline ? <WifiOff size={15} /> : <Plus size={15} />} Create Group
                        </motion.button>
                    ) : (
                        <Link to="/login" className="px-4 py-2 rounded-lg font-semibold border-2 text-sm"
                            style={{ borderColor: 'var(--accent-blue)', color: 'var(--text-primary)' }}>
                            Sign In to Create
                        </Link>
                    )}
                </div>
            </div>

            {/* ── GRID ────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden border"
                                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                                <div className="h-28 skeleton-shimmer" />
                                <div className="p-6 flex flex-col gap-3">
                                    <div className="skeleton-shimmer h-4 rounded w-3/4" />
                                    <div className="skeleton-shimmer h-3 rounded w-full" />
                                    <div className="skeleton-shimmer h-3 rounded w-5/6" />
                                    <div className="skeleton-shimmer h-8 rounded mt-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-4">🔍</p>
                        <h3 className="text-xl font-semibold mb-2">No groups found</h3>
                        <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {search || subjectFilter ? 'Try a different search or filter.' : 'Be the first to create a study group!'}
                        </p>
                        {user && (
                            <button onClick={() => setShowModal(true)}
                                className="px-5 py-2.5 rounded-xl font-semibold text-white text-sm"
                                style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}>
                                Create First Group
                            </button>
                        )}
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={stagger} initial="hidden" animate="show"
                    >
                        {filtered.map(group => (
                            <GroupCard
                                key={group.id}
                                group={group}
                                user={user}
                                joining={joining === group.id}
                                onJoin={() => handleJoin(group.id)}
                                onLeave={() => handleLeave(group.id)}
                                onViewMembers={() => setShowMembersFor(group.id)}
                                navigate={navigate}
                                isOnline={isOnline}
                            />
                        ))}
                    </motion.div>
                )}
            </div>

            {/* ── CREATE MODAL ────────────────────────────────── */}
            <AnimatePresence>
                {showModal && (
                    <CreateGroupModal
                        onClose={() => setShowModal(false)}
                        onCreated={() => { setShowModal(false); loadGroups(false); toast.success('Group created!'); }}
                    />
                )}
            </AnimatePresence>

            {/* ── MEMBERS MODAL ───────────────────────────────── */}
            <AnimatePresence>
                {showMembersFor && (
                    <MembersModal
                        groupId={showMembersFor}
                        onClose={() => setShowMembersFor(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

/* ── group card ───────────────────────────────────────────────── */
function GroupCard({ group, user, joining, onJoin, onLeave, onViewMembers, navigate, isOnline }) {
    const banner   = getBanner(group.subject);
    const isFull   = group.current_members >= group.max_members;
    const isMember = group.isMember;
    const isOwner  = group.memberRole === 'owner';
    const [confirmLeave, setConfirmLeave] = useState(false);

    return (
        <motion.div
            variants={cardVariant}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,102,255,0.12)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="rounded-2xl overflow-hidden border flex flex-col relative"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
            {/* Unread badge */}
            {group.unreadCount > 0 && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: '#ef4444', boxShadow: '0 2px 8px rgba(239,68,68,0.4)' }}
                >
                    {group.unreadCount > 9 ? '9+' : group.unreadCount}
                </motion.div>
            )}
            {/* banner — Lucide icon + glow + texture */}
            <div
                className="relative h-28 flex items-center justify-center select-none overflow-hidden"
                style={{ background: banner.gradient }}
            >
                {/* diagonal stripe texture at low opacity */}
                <div aria-hidden style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)',
                }} />
                {/* ambient glow behind icon */}
                <div aria-hidden style={{
                    position: 'absolute',
                    width: 80, height: 80, borderRadius: '50%',
                    background: `radial-gradient(circle, ${banner.glow}55 0%, transparent 70%)`,
                    filter: 'blur(8px)',
                }} />
                <banner.Icon
                    size={44}
                    color="rgba(255,255,255,0.92)"
                    strokeWidth={1.5}
                    style={{ filter: `drop-shadow(0 2px 12px ${banner.glow}88)`, position: 'relative' }}
                />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-snug">{group.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: 'rgba(0,102,255,0.12)', color: 'var(--accent-blue)' }}>
                        {group.subject}
                    </span>
                </div>
                <p className="text-xs mb-3 flex-1 line-clamp-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {group.description}
                </p>
                <div className="flex justify-between text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
                    <button
                        onClick={onViewMembers}
                        className="inline-flex items-center gap-1 transition-colors hover:text-blue-400"
                        style={{ color: isFull ? 'var(--error)' : '#34d399', fontWeight: 600 }}
                    >
                        <Users size={12} />
                        {group.current_members}/{group.max_members}
                        <UserCheck size={11} className="ml-0.5 opacity-60" />
                    </button>
                    <span>by {group.users?.first_name} {group.users?.last_name}</span>
                </div>

                {/* action buttons */}
                {!user ? (
                    <Link to="/login"
                        className="block text-center text-xs py-2 rounded-lg border font-semibold"
                        style={{ borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)' }}>
                        Sign In to Join
                    </Link>
                ) : isMember ? (
                    <div className="flex gap-2">
                        <Link to={`/groups/${group.id}/chat`}
                            className="flex-1 text-center text-xs py-2 rounded-lg font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}>
                            Open Chat
                        </Link>
                        {!isOwner && (
                            <AnimatePresence mode="wait" initial={false}>
                                {confirmLeave ? (
                                    <motion.div
                                        key="confirm"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.92 }}
                                        transition={{ duration: 0.15 }}
                                        className="flex gap-1"
                                    >
                                        <button
                                            onClick={() => { setConfirmLeave(false); onLeave(); }}
                                            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white"
                                            style={{ background: 'var(--error)' }}
                                        >
                                            Yes, leave
                                        </button>
                                        <button
                                            onClick={() => setConfirmLeave(false)}
                                            className="px-2.5 py-1.5 rounded-lg text-xs border"
                                            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                                        >
                                            Cancel
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        key="leave"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.92 }}
                                        transition={{ duration: 0.15 }}
                                        onClick={() => setConfirmLeave(true)}
                                        className="px-3 py-2 rounded-lg text-xs border transition-colors hover:border-red-500 hover:text-red-500"
                                        style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                                    >
                                        Leave
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                ) : isFull ? (
                    <button disabled
                        className="w-full text-xs py-2 rounded-lg opacity-50 cursor-not-allowed border"
                        style={{ borderColor: 'var(--border-subtle)' }}>
                        Group Full
                    </button>
                ) : group.pendingRequest ? (
                    <button disabled
                        className="w-full text-xs py-2 rounded-lg font-semibold cursor-not-allowed"
                        style={{ background: 'rgba(251,191,36,0.12)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
                        ⏳ Request Pending
                    </button>
                ) : (
                    <motion.button
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                        onClick={onJoin}
                        disabled={joining || !isOnline}
                        className="w-full flex items-center justify-center gap-2 text-xs py-2 rounded-lg font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: 'linear-gradient(135deg,#10b981,#34d399)' }}
                        title={!isOnline ? "You're offline — reconnect to join" : "Join this group"}
                    >
                        {!isOnline
                            ? <><WifiOff size={13} /> Offline</>
                            : joining
                            ? <><Loader2 size={13} className="animate-spin" /> Joining…</>
                            : 'Join Group'
                        }
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}

/* ── create group modal ───────────────────────────────────────── */
function CreateGroupModal({ onClose, onCreated }) {
    const [form,       setForm]       = useState({ name: '', subject: '', maxMembers: 20, description: '' });
    const [submitting, setSubmitting] = useState(false);
    const firstRef = useRef(null);

    // Focus first input on mount
    useEffect(() => { firstRef.current?.focus(); }, []);

    // Escape key closes modal
    useEffect(() => {
        const handler = e => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    // Focus trap — keep Tab inside modal
    const trapRef = useRef(null);
    const handleKeyDown = e => {
        if (e.key !== 'Tab') return;
        const focusable = trapRef.current?.querySelectorAll(
            'input,textarea,select,button,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
        else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!form.name || !form.subject || !form.description) {
            toast.error('Name, subject, and description are required');
            return;
        }
        setSubmitting(true);
        try {
            await api.post('/groups', form);
            onCreated();
        } catch (err) {
            toast.error(err.response?.data?.error || 'Failed to create group');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose}
            />
            <motion.div
                ref={trapRef}
                role="dialog" aria-modal="true" aria-labelledby="modal-title"
                onKeyDown={handleKeyDown}
                className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
                <div className="w-full max-w-md rounded-2xl border p-5 sm:p-8 pointer-events-auto max-h-[90vh] overflow-y-auto"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
                    <div className="flex items-center justify-between mb-6">
                        <h2 id="modal-title" className="text-xl font-bold"
                            style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--accent-blue)' }}>
                            Create Study Group
                        </h2>
                        <button onClick={onClose} className="p-1.5 rounded-lg transition-colors hover:bg-red-500 hover:text-white"
                            style={{ color: 'var(--text-secondary)' }} aria-label="Close modal">
                            <X size={18} />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {[
                            { label: 'Group Name', field: 'name', type: 'text', ph: 'e.g. Advanced Python Study Circle', ref: firstRef },
                            { label: 'Subject',    field: 'subject', type: 'text', ph: 'e.g. Computer Science' },
                        ].map(({ label, field, type, ph, ref }) => (
                            <div key={field} className="mb-4">
                                <label className="block text-sm font-semibold mb-1.5">{label} *</label>
                                <input
                                    ref={ref}
                                    type={type}
                                    value={form[field]}
                                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                                    placeholder={ph}
                                    className="form-input px-4"
                                />
                            </div>
                        ))}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1.5">Max Members</label>
                            <input
                                type="number" min={2} max={100}
                                value={form.maxMembers}
                                onChange={e => setForm(f => ({ ...f, maxMembers: parseInt(e.target.value) || 20 }))}
                                className="form-input px-4"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-1.5">Description *</label>
                            <textarea
                                value={form.description}
                                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                                placeholder="What will your group study? What's the focus?"
                                rows={3}
                                className="form-input px-4 py-3"
                                style={{ height: 'auto', resize: 'vertical' }}
                            />
                        </div>
                        <div className="flex gap-3 justify-end">
                            <button type="button" onClick={onClose}
                                className="px-5 py-2.5 rounded-lg border text-sm font-medium"
                                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                                Cancel
                            </button>
                            <button type="submit" disabled={submitting}
                                className="px-5 py-2.5 rounded-lg font-semibold text-white text-sm inline-flex items-center gap-2 disabled:opacity-60"
                                style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}>
                                {submitting ? <><Loader2 size={14} className="animate-spin" />Creating…</> : 'Create Group'}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    );
}
