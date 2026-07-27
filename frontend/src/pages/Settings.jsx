import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Palette, Trash2, Eye, EyeOff, Sun, Moon, ChevronRight, Shield, Bell } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Sidebar from '../components/Sidebar';

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ icon: Icon, title, color, children, delay = 0 }) {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay }}
            className="rounded-2xl border overflow-hidden"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
            <div className="flex items-center gap-3 px-6 py-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}1a` }}>
                    <Icon size={16} color={color} strokeWidth={2} />
                </div>
                <h2 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{title}</h2>
            </div>
            <div className="px-6 py-5">{children}</div>
        </motion.div>
    );
}

function Field({ label, children }) {
    return (
        <div className="mb-4 last:mb-0">
            <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>{label}</label>
            {children}
        </div>
    );
}

function Input({ type = 'text', value, onChange, placeholder, disabled, rightSlot }) {
    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none transition-colors"
                style={{
                    background: disabled ? 'var(--bg-hover)' : 'var(--bg-main)',
                    borderColor: 'var(--border-subtle)',
                    color: disabled ? 'var(--text-secondary)' : 'var(--text-primary)',
                    paddingRight: rightSlot ? '2.75rem' : undefined,
                }}
                onFocus={e => !disabled && (e.target.style.borderColor = 'var(--accent-blue)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
            />
            {rightSlot && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
            )}
        </div>
    );
}

function SaveButton({ loading, label = 'Save changes', onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
            disabled={loading}
            className="mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)', opacity: loading ? 0.7 : 1 }}
        >
            {loading ? 'Saving…' : label}
        </motion.button>
    );
}

// ── ACCOUNT SECTION ──────────────────────────────────────────────
function AccountSection({ user }) {
    return (
        <Section icon={User} title="Account" color="#0066ff" delay={0}>
            <Field label="Email address">
                <Input value={user?.email || ''} disabled />
            </Field>
            <Field label="Full name">
                <Input value={`${user?.first_name || ''} ${user?.last_name || ''}`.trim()} disabled />
            </Field>
            <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                To update your name, university, or bio, visit your{' '}
                <a href="/profile" className="underline" style={{ color: 'var(--accent-blue)' }}>Profile page</a>.
            </p>
        </Section>
    );
}

// ── PASSWORD SECTION ─────────────────────────────────────────────
function PasswordSection() {
    const [form, setForm]     = useState({ current: '', next: '', confirm: '' });
    const [show, setShow]     = useState({ current: false, next: false, confirm: false });
    const [loading, setLoading] = useState(false);

    const toggle = k => setShow(s => ({ ...s, [k]: !s[k] }));
    const set    = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const save = async () => {
        if (form.next !== form.confirm) { toast.error('New passwords do not match'); return; }
        if (form.next.length < 6)       { toast.error('Password must be at least 6 characters'); return; }
        setLoading(true);
        try {
            await api.post('/auth/change-password', { currentPassword: form.current, newPassword: form.next });
            toast.success('Password changed!');
            setForm({ current: '', next: '', confirm: '' });
        } catch (err) {
            toast.error(err.response?.data?.error || 'Failed to change password');
        } finally { setLoading(false); }
    };

    const eyeBtn = k => (
        <button type="button" onClick={() => toggle(k)} style={{ color: 'var(--text-muted)' }}>
            {show[k] ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
    );

    return (
        <Section icon={Lock} title="Password & Security" color="#8b5cf6" delay={0.07}>
            <Field label="Current password">
                <Input type={show.current ? 'text' : 'password'} value={form.current}
                    onChange={e => set('current', e.target.value)} placeholder="Enter current password"
                    rightSlot={eyeBtn('current')} />
            </Field>
            <Field label="New password">
                <Input type={show.next ? 'text' : 'password'} value={form.next}
                    onChange={e => set('next', e.target.value)} placeholder="At least 6 characters"
                    rightSlot={eyeBtn('next')} />
            </Field>
            <Field label="Confirm new password">
                <Input type={show.confirm ? 'text' : 'password'} value={form.confirm}
                    onChange={e => set('confirm', e.target.value)} placeholder="Repeat new password"
                    rightSlot={eyeBtn('confirm')} />
            </Field>
            {form.next && form.confirm && form.next !== form.confirm && (
                <p className="text-xs mt-1" style={{ color: '#ef4444' }}>Passwords don't match</p>
            )}
            <SaveButton loading={loading} label="Change password" onClick={save} />
        </Section>
    );
}

// ── APPEARANCE SECTION ───────────────────────────────────────────
function AppearanceSection() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Section icon={Palette} title="Appearance" color="#34d399" delay={0.14}>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Choose how StudyHub looks to you.
            </p>
            <div className="grid grid-cols-2 gap-3">
                {[
                    { key: 'light', icon: Sun,  label: 'Light', bg: '#f8fafc', border: '#e2e8f0', text: '#0f172a' },
                    { key: 'dark',  icon: Moon, label: 'Dark',  bg: '#121212', border: '#2a2a2a', text: '#f1f5f9' },
                ].map(({ key, icon: Icon, label, bg, border, text }) => {
                    const active = theme === key;
                    return (
                        <motion.button
                            key={key}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => !active && toggleTheme()}
                            className="relative rounded-xl border-2 p-4 text-left transition-all"
                            style={{
                                borderColor: active ? 'var(--accent-blue)' : 'var(--border-subtle)',
                                background: active ? 'rgba(0,102,255,0.06)' : 'var(--bg-main)',
                            }}
                        >
                            {active && (
                                <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: 'var(--accent-blue)' }} />
                            )}
                            {/* mini preview */}
                            <div className="rounded-lg mb-3 p-2 flex flex-col gap-1.5" style={{ background: bg, border: `1px solid ${border}` }}>
                                <div className="h-1.5 w-3/4 rounded-full" style={{ background: border }} />
                                <div className="h-1.5 w-1/2 rounded-full" style={{ background: border }} />
                                <div className="h-4 w-full rounded" style={{ background: border, opacity: 0.5 }} />
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon size={14} color={active ? 'var(--accent-blue)' : 'var(--text-secondary)'} />
                                <span className="text-sm font-semibold" style={{ color: active ? 'var(--accent-blue)' : 'var(--text-primary)' }}>
                                    {label}
                                </span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </Section>
    );
}

// ── NOTIFICATIONS SECTION ────────────────────────────────────────
function NotificationsSection() {
    const [prefs, setPrefs] = useState({
        answers:  true,
        mentions: true,
        groups:   true,
        notes:    false,
    });

    const toggle = k => setPrefs(p => ({ ...p, [k]: !p[k] }));

    const rows = [
        { key: 'answers',  label: 'New answers on my questions' },
        { key: 'mentions', label: 'Mentions & replies' },
        { key: 'groups',   label: 'Group activity' },
        { key: 'notes',    label: 'New notes in my subjects' },
    ];

    return (
        <Section icon={Bell} title="Notifications" color="#f59e0b" delay={0.21}>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Control which in-app notifications you receive.
            </p>
            <ul className="space-y-3">
                {rows.map(({ key, label }) => (
                    <li key={key} className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{label}</span>
                        <button
                            onClick={() => toggle(key)}
                            className="relative w-10 h-5 rounded-full transition-colors"
                            style={{ background: prefs[key] ? 'var(--accent-blue)' : 'var(--bg-hover)' }}
                        >
                            <motion.span
                                animate={{ x: prefs[key] ? 20 : 2 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow"
                                style={{ display: 'block' }}
                            />
                        </button>
                    </li>
                ))}
            </ul>
            <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
                Preferences are saved locally. Email notifications coming soon.
            </p>
        </Section>
    );
}

// ── DANGER ZONE ──────────────────────────────────────────────────
function DangerSection({ onDeleteAccount }) {
    const [confirming, setConfirming] = useState(false);
    const [input, setInput]           = useState('');

    return (
        <Section icon={Shield} title="Danger Zone" color="#ef4444" delay={0.28}>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Irreversible actions. Proceed with caution.
            </p>
            {!confirming ? (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setConfirming(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border"
                    style={{ borderColor: '#ef444440', color: '#ef4444', background: 'rgba(239,68,68,0.06)' }}
                >
                    <Trash2 size={14} /> Delete my account
                </motion.button>
            ) : (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    <p className="text-sm font-semibold" style={{ color: '#ef4444' }}>
                        Type <strong>DELETE</strong> to confirm account deletion.
                    </p>
                    <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Type DELETE" />
                    <div className="flex gap-2">
                        <button
                            onClick={() => { setConfirming(false); setInput(''); }}
                            className="px-4 py-2 rounded-xl text-sm border"
                            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)', background: 'none' }}
                        >
                            Cancel
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={input !== 'DELETE'}
                            onClick={onDeleteAccount}
                            className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
                            style={{ background: '#ef4444', opacity: input === 'DELETE' ? 1 : 0.4 }}
                        >
                            Permanently delete
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </Section>
    );
}

// ── MAIN ─────────────────────────────────────────────────────────
export default function Settings() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        try {
            await api.delete('/users/account');
            logout();
            navigate('/');
            toast.success('Account deleted.');
        } catch {
            toast.error('Could not delete account. Please contact support.');
        }
    };

    return (
        <div className="lg:pl-60" style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
            <Sidebar />
            <main className="pt-20 pb-16 px-4 md:px-8 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mb-8"
                >
                    <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text-primary)' }}>
                        Settings
                    </h1>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Manage your account, security, and preferences.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-5">
                    <AccountSection user={user} />
                    <PasswordSection />
                    <AppearanceSection />
                    <NotificationsSection />
                    <DangerSection onDeleteAccount={handleDeleteAccount} />
                </div>
            </main>
        </div>
    );
}
