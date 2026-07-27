import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, WifiOff, BookOpen, GraduationCap, Plus, X, CheckCircle2 } from 'lucide-react';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

// Backend confirmed: university and fieldOfStudy are optional server-side.
// Only email, password, firstName, lastName are required by POST /api/auth/register.
// University and field of study will be collected during onboarding/profile completion instead.

const FIELDS_OF_STUDY = [
    'Computer Science', 'Engineering', 'Business', 'Medicine',
    'Arts & Humanities', 'Science', 'Mathematics', 'Physics',
    'Chemistry', 'Biology', 'Economics', 'Law', 'Other',
];

const SUGGESTED_SUBJECTS = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
    'French', 'History', 'Computer Science', 'Economics', 'Accounting',
    'Statistics', 'Literature', 'Philosophy', 'Geography', 'Calculus',
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const TIMES = ['Morning', 'Afternoon', 'Evening'];

function pwStrength(pw) {
    let s = 0;
    if (pw.length >= 8)           s++;
    if (pw.length >= 10)          s++;
    if (/[A-Z]/.test(pw))         s++;
    if (/[0-9]/.test(pw))         s++;
    if (/[^A-Za-z0-9]/.test(pw))  s++;
    return s;
}

function RoleCard({ icon: Icon, title, desc, selected, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex-1 flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all"
            style={{
                borderColor: selected ? 'var(--primary)' : 'var(--border-subtle)',
                background:  selected ? 'rgba(var(--primary-rgb, 0,82,204), 0.08)' : 'var(--bg-main)',
                cursor: 'pointer',
            }}
        >
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: selected ? 'var(--primary)' : 'var(--border-subtle)' }}>
                <Icon size={20} color={selected ? '#fff' : 'var(--text-secondary)'} />
            </div>
            <span className="font-semibold text-sm" style={{ color: selected ? 'var(--primary)' : 'var(--text-primary)' }}>{title}</span>
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{desc}</span>
        </button>
    );
}

function TutorFields({ tutor, setTutor, errors, touched, setTouched, setErrors }) {
    const subjectInputRef = useRef();

    const addSubject = (s) => {
        const val = s.trim();
        if (!val || tutor.subjects.includes(val)) return;
        setTutor(t => ({ ...t, subjects: [...t.subjects, val], subjectInput: '' }));
        if (errors.subjects) setErrors(e => ({ ...e, subjects: '' }));
    };

    const removeSubject = (s) =>
        setTutor(t => ({ ...t, subjects: t.subjects.filter(x => x !== s) }));

    const toggleAvail = (day, time) => {
        setTutor(t => {
            const key = `${day}_${time}`;
            const avail = { ...t.availability };
            avail[key] = !avail[key];
            return { ...t, availability: avail };
        });
    };

    const subjectError = touched.subjects && errors.subjects;
    const bioError     = touched.tutorBio && errors.tutorBio;

    return (
        <div
            className="mt-2 mb-6 rounded-xl border overflow-hidden"
            style={{ borderColor: 'var(--primary)', background: 'rgba(var(--primary-rgb,0,82,204),0.04)' }}
        >
            <div className="px-5 py-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <p className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>Tutor Application Details</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Reviewed by our team before you appear in search</p>
            </div>

            <div className="p-5 space-y-5">

                {/* subjects */}
                <div>
                    <label className="block font-semibold text-sm mb-1.5">
                        Subjects You Teach
                        <span className="ml-1 font-normal text-xs" style={{ color: 'var(--error)' }}>*</span>
                    </label>
                    <div className="flex gap-2 mb-2">
                        <input
                            ref={subjectInputRef}
                            type="text"
                            value={tutor.subjectInput}
                            onChange={e => setTutor(t => ({ ...t, subjectInput: e.target.value }))}
                            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSubject(tutor.subjectInput); } }}
                            placeholder="Type a subject and press Enter"
                            className="form-input px-4 flex-1"
                            style={subjectError ? { borderColor: 'var(--error)' } : {}}
                        />
                        <button
                            type="button"
                            onClick={() => addSubject(tutor.subjectInput)}
                            className="px-3 rounded-lg flex items-center justify-center"
                            style={{ background: 'var(--primary)', color: '#fff', minWidth: '44px', minHeight: '44px' }}
                        ><Plus size={16} /></button>
                    </div>

                    {tutor.subjects.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                            {tutor.subjects.map(s => (
                                <span key={s} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                                    style={{ background: 'rgba(var(--primary-rgb,0,82,204),0.12)', color: 'var(--primary)', border: '1px solid rgba(var(--primary-rgb,0,82,204),0.25)' }}>
                                    {s}
                                    <button type="button" onClick={() => removeSubject(s)} className="ml-0.5 hover:opacity-70"><X size={11} /></button>
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                        {SUGGESTED_SUBJECTS.filter(s => !tutor.subjects.includes(s)).slice(0, 8).map(s => (
                            <button key={s} type="button" onClick={() => addSubject(s)}
                                className="px-2.5 py-1 rounded-full text-xs border transition-colors hover:border-blue-500"
                                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                                + {s}
                            </button>
                        ))}
                    </div>
                    {subjectError && <p role="alert" className="text-xs mt-1.5" style={{ color: 'var(--error)' }}>{errors.subjects}</p>}
                </div>

                {/* experience */}
                <div>
                    <label htmlFor="yearsExp" className="block font-semibold text-sm mb-1.5">Years of Experience</label>
                    <select
                        id="yearsExp"
                        value={tutor.yearsExperience}
                        onChange={e => setTutor(t => ({ ...t, yearsExperience: e.target.value }))}
                        className="form-input px-4"
                        style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', width: '180px' }}
                    >
                        <option value="<1">&lt;1 year</option>
                        <option value="1-2">1–2 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5+">5+ years</option>
                    </select>
                </div>

                {/* bio */}
                <div>
                    <label htmlFor="tutorBio" className="block font-semibold text-sm mb-1.5">
                        Teaching Bio / Approach
                        <span className="ml-1 font-normal text-xs" style={{ color: 'var(--error)' }}>*</span>
                        <span className="ml-2 font-normal text-xs" style={{ color: 'var(--text-muted)' }}>max 300 chars</span>
                    </label>
                    <textarea
                        id="tutorBio"
                        value={tutor.bio}
                        onChange={e => {
                            if (e.target.value.length <= 300)
                                setTutor(t => ({ ...t, bio: e.target.value }));
                        }}
                        onBlur={() => {
                            setTouched(t => ({ ...t, tutorBio: true }));
                            setErrors(e => ({ ...e, tutorBio: tutor.bio.trim().length < 20 ? 'Bio must be at least 20 characters' : '' }));
                        }}
                        rows={3}
                        placeholder="e.g. I make complex topics simple by building intuition first..."
                        className="form-input px-4 resize-none"
                        style={{ ...(bioError ? { borderColor: 'var(--error)' } : {}), paddingTop: '10px', paddingBottom: '10px' }}
                        aria-invalid={!!bioError}
                    />
                    <div className="flex justify-between mt-1">
                        {bioError
                            ? <p role="alert" className="text-xs" style={{ color: 'var(--error)' }}>{errors.tutorBio}</p>
                            : <span />}
                        <p className="text-xs ml-auto" style={{ color: tutor.bio.length >= 280 ? 'var(--error)' : 'var(--text-muted)' }}>
                            {tutor.bio.length}/300
                        </p>
                    </div>
                </div>

                {/* hourly rate */}
                <div>
                    <label htmlFor="hourlyRate" className="block font-semibold text-sm mb-1.5">
                        Hourly Rate (FCFA)
                        <span className="ml-1.5 font-normal text-xs" style={{ color: 'var(--text-muted)' }}>300–2000</span>
                    </label>
                    <input
                        id="hourlyRate"
                        type="number"
                        min={300}
                        max={2000}
                        value={tutor.hourlyRate}
                        onChange={e => setTutor(t => ({ ...t, hourlyRate: e.target.value }))}
                        className="form-input px-4"
                        style={{ width: '160px' }}
                    />
                </div>

                {/* availability */}
                <div>
                    <label className="block font-semibold text-sm mb-2">Availability
                        <span className="ml-1.5 font-normal text-xs" style={{ color: 'var(--text-muted)' }}>optional</span>
                    </label>
                    <div className="overflow-x-auto">
                        <table className="text-xs w-full" style={{ borderCollapse: 'separate', borderSpacing: '4px' }}>
                            <thead>
                                <tr>
                                    <th className="text-left pb-1" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}></th>
                                    {TIMES.map(t => (
                                        <th key={t} className="pb-1 text-center" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{t}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {DAYS.map(day => (
                                    <tr key={day}>
                                        <td className="pr-2 font-medium" style={{ color: 'var(--text-primary)' }}>{day}</td>
                                        {TIMES.map(time => {
                                            const key = `${day}_${time}`;
                                            const on  = !!tutor.availability[key];
                                            return (
                                                <td key={time} className="text-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleAvail(day, time)}
                                                        className="w-full rounded transition-colors"
                                                        style={{
                                                            minHeight: '32px', minWidth: '72px',
                                                            background: on ? 'var(--primary)' : 'var(--bg-main)',
                                                            border: `1px solid ${on ? 'var(--primary)' : 'var(--border-subtle)'}`,
                                                            color: on ? '#fff' : 'var(--text-muted)',
                                                        }}
                                                    >{on ? '✓' : '—'}</button>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* proof document */}
                <div>
                    <label htmlFor="proofDoc" className="block font-semibold text-sm mb-1.5">
                        Proof of Expertise
                        <span className="ml-1.5 font-normal text-xs" style={{ color: 'var(--text-muted)' }}>optional — PDF or image, max 20MB</span>
                    </label>
                    <input
                        id="proofDoc"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.webp"
                        onChange={e => setTutor(t => ({ ...t, proofFile: e.target.files[0] || null }))}
                        className="form-input px-4"
                        style={{ paddingTop: '8px', paddingBottom: '8px' }}
                    />
                </div>

            </div>
        </div>
    );
}

function FieldError({ id, msg }) {
    if (!msg) return null;
    return (
        <p id={id} role="alert" className="text-xs mt-1.5" style={{ color: 'var(--error)' }}>
            {msg}
        </p>
    );
}

export default function Register() {
    const { login } = useAuth();
    const navigate  = useNavigate();
    const isOnline  = useOnlineStatus();

    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '',
        university: '', fieldOfStudy: '', password: '',
    });
    const [tutor, setTutor] = useState({
        subjects: [], subjectInput: '', bio: '',
        yearsExperience: '<1', hourlyRate: 500,
        availability: {}, proofFile: null,
    });
    const [role,    setRole]    = useState('student');
    const [terms,   setTerms]   = useState(false);
    const [showPw,  setShowPw]  = useState(false);
    const [errors,  setErrors]  = useState({});
    const [touched, setTouched] = useState({});
    const [loading, setLoading] = useState(false);

    const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }));

    /* ── per-field blur validation ──────────────────────────── */
    const validateField = (name, value) => {
        switch (name) {
            case 'firstName':  return value ? '' : 'First name is required';
            case 'lastName':   return value ? '' : 'Last name is required';
            case 'email':
                if (!value)                        return 'Email is required';
                if (!/\S+@\S+\.\S+/.test(value))   return 'Enter a valid email address';
                return '';
            case 'password':
                if (!value)          return 'Password is required';
                if (value.length < 8) return 'Password must be at least 8 characters';
                return '';
            default: return '';
        }
    };

    const handleBlur = (name, value) => {
        setTouched(t => ({ ...t, [name]: true }));
        const msg = validateField(name, value);
        setErrors(e => ({ ...e, [name]: msg }));
    };

    /* ── full submit validation ─────────────────────────────── */
    const validate = () => {
        const required = ['firstName', 'lastName', 'email', 'password'];
        const errs = {};
        required.forEach(f => {
            const msg = validateField(f, form[f]);
            if (msg) errs[f] = msg;
        });
        if (!terms) errs.terms = 'Please agree to the Terms of Service and Privacy Policy';
        if (role === 'tutor') {
            if (tutor.subjects.length === 0) errs.subjects = 'Add at least one subject';
            if (tutor.bio.trim().length < 20) errs.tutorBio = 'Bio must be at least 20 characters';
        }
        return errs;
    };

    const [confirmed, setConfirmed] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const errs = validate();
        setTouched(t => ({ ...t, firstName: true, lastName: true, email: true, password: true, tutorBio: role === 'tutor', subjects: role === 'tutor' }));
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setErrors({});
        setLoading(true);
        try {
            let data;
            if (role === 'tutor') {
                const fd = new FormData();
                fd.append('email',        form.email);
                fd.append('password',     form.password);
                fd.append('firstName',    form.firstName);
                fd.append('lastName',     form.lastName);
                if (form.university)   fd.append('university',   form.university);
                if (form.fieldOfStudy) fd.append('fieldOfStudy', form.fieldOfStudy);
                fd.append('becomeTutor', 'true');
                fd.append('tutorApplication', JSON.stringify({
                    subjects:        tutor.subjects,
                    bio:             tutor.bio,
                    yearsExperience: tutor.yearsExperience,
                    hourlyRate:      Number(tutor.hourlyRate) || 500,
                    availability:    tutor.availability,
                }));
                if (tutor.proofFile) fd.append('proofDocument', tutor.proofFile);
                ({ data } = await api.post('/auth/register', fd, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }));
            } else {
                ({ data } = await api.post('/auth/register', {
                    email:        form.email,
                    password:     form.password,
                    firstName:    form.firstName,
                    lastName:     form.lastName,
                    university:   form.university   || undefined,
                    fieldOfStudy: form.fieldOfStudy || undefined,
                }));
            }

            login(data.user, data.token);

            if (role === 'tutor') {
                setConfirmed(true);
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            setErrors({ general: err.response?.data?.error || 'Registration failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    /* ── password strength display ──────────────────────────── */
    const pw  = form.password;
    const sc  = pwStrength(pw);
    const barColor = !pw ? 'var(--border-subtle)' : sc < 2 ? 'var(--error)' : sc < 4 ? '#f59e0b' : '#10b981';
    const barWidth = !pw ? '0%' : sc < 2 ? '33%' : sc < 4 ? '66%' : '100%';
    const barLabel = !pw ? 'Use at least 8 characters'
        : sc < 2 ? 'Weak — add more characters'
        : sc < 4 ? 'Medium — add uppercase, numbers or symbols'
        : 'Strong password';

    const fieldBorder = name =>
        errors[name] && touched[name] ? { borderColor: 'var(--error)' } : {};

    if (confirmed) {
        return (
            <div
                className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12"
                style={{ background: 'var(--bg-main)', color: 'var(--text-primary)' }}
            >
                <div
                    className="w-full max-w-lg rounded-2xl p-8 sm:p-12 border text-center"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                        style={{ background: 'rgba(16,185,129,0.12)' }}>
                        <CheckCircle2 size={36} style={{ color: '#10b981' }} />
                    </div>
                    <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Application Submitted!</h1>
                    <p className="mb-1" style={{ color: 'var(--text-secondary)' }}>
                        Thanks for applying to teach on StudyHub!
                    </p>
                    <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                        We'll review your application and notify you within{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>24–48 hours</strong>.
                        In the meantime, explore StudyHub as a student.
                    </p>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                        style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', height: '52px' }}
                    >
                        Continue to Dashboard →
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12"
            style={{ background: 'var(--bg-main)', color: 'var(--text-primary)' }}
        >
            <div
                className="form-card w-full max-w-lg rounded-2xl p-6 sm:p-10 border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
                {/* header */}
                <div className="text-center mb-8">
                    <div className="text-2xl font-bold mb-3 logo-gradient">StudyHub</div>
                    <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Create Account</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Join StudyHub and start your learning journey</p>
                </div>

                {/* general server error */}
                <div aria-live="polite" aria-atomic="true">
                    {errors.general && (
                        <div className="mb-5 px-4 py-3 rounded-lg text-sm text-center"
                            style={{ color: 'var(--error)', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
                            {errors.general}
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} noValidate>

                    {/* role selection */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-7">
                        <RoleCard
                            icon={BookOpen}
                            title="I want to learn"
                            desc="Access tutors, notes & study groups"
                            selected={role === 'student'}
                            onClick={() => setRole('student')}
                        />
                        <RoleCard
                            icon={GraduationCap}
                            title="I want to teach"
                            desc="Become a tutor & earn by helping peers"
                            selected={role === 'tutor'}
                            onClick={() => setRole('tutor')}
                        />
                    </div>

                    {/* name row */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-5">
                        {[
                            ['firstName', 'First Name', 'First name'],
                            ['lastName',  'Last Name',  'Last name' ],
                        ].map(([field, label, ph]) => (
                            <div key={field} className="flex-1">
                                <label htmlFor={field} className="block font-semibold text-sm mb-1.5">
                                    {label}
                                </label>
                                <input
                                    id={field}
                                    type="text"
                                    value={form[field]}
                                    onChange={set(field)}
                                    onBlur={e => handleBlur(field, e.target.value)}
                                    placeholder={ph}
                                    autoComplete={field === 'firstName' ? 'given-name' : 'family-name'}
                                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                                    aria-invalid={!!(errors[field] && touched[field])}
                                    className="form-input px-4"
                                    style={fieldBorder(field)}
                                />
                                <FieldError id={`${field}-error`} msg={touched[field] ? errors[field] : ''} />
                            </div>
                        ))}
                    </div>

                    {/* email */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block font-semibold text-sm mb-1.5">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={set('email')}
                            onBlur={e => handleBlur('email', e.target.value)}
                            placeholder="you@university.cm"
                            autoComplete="email"
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            aria-invalid={!!(errors.email && touched.email)}
                            className="form-input px-4"
                            style={fieldBorder('email')}
                        />
                        <FieldError id="email-error" msg={touched.email ? errors.email : ''} />
                    </div>

                    {/* password + strength meter + eye toggle */}
                    <div className="mb-5">
                        <label htmlFor="password" className="block font-semibold text-sm mb-1.5">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPw ? 'text' : 'password'}
                                value={form.password}
                                onChange={set('password')}
                                onBlur={e => handleBlur('password', e.target.value)}
                                placeholder="Create a password"
                                autoComplete="new-password"
                                aria-describedby="pw-strength password-error"
                                aria-invalid={!!(errors.password && touched.password)}
                                className="form-input px-4"
                                style={{ paddingRight: '44px', ...fieldBorder('password') }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPw(v => !v)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded transition-colors"
                                style={{ color: 'var(--text-muted)' }}
                                aria-label={showPw ? 'Hide password' : 'Show password'}
                                tabIndex={0}
                            >
                                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {/* strength bar */}
                        <div className="h-1 rounded mt-2 overflow-hidden" style={{ background: 'var(--border-subtle)' }}>
                            <div className="h-full rounded transition-all duration-300"
                                style={{ width: barWidth, background: barColor }} />
                        </div>
                        <p id="pw-strength" className="text-xs mt-1" style={{ color: barColor }}>{barLabel}</p>
                        <FieldError id="password-error" msg={touched.password ? errors.password : ''} />
                    </div>

                    {/* optional fields — clearly labelled as optional */}
                    <div className="mb-5">
                        <label htmlFor="university" className="block font-semibold text-sm mb-1.5">
                            University / Institution
                            <span className="ml-1.5 font-normal text-xs" style={{ color: 'var(--text-muted)' }}>optional</span>
                        </label>
                        <input
                            id="university"
                            type="text"
                            value={form.university}
                            onChange={set('university')}
                            placeholder="Your university or institution"
                            autoComplete="organization"
                            className="form-input px-4"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="fieldOfStudy" className="block font-semibold text-sm mb-1.5">
                            Field of Study
                            <span className="ml-1.5 font-normal text-xs" style={{ color: 'var(--text-muted)' }}>optional</span>
                        </label>
                        <select
                            id="fieldOfStudy"
                            value={form.fieldOfStudy}
                            onChange={set('fieldOfStudy')}
                            className="form-input px-4"
                            style={{ background: 'var(--bg-input)', color: form.fieldOfStudy ? 'var(--text-primary)' : 'var(--text-muted)' }}
                        >
                            <option value="">Select your field (optional)</option>
                            {FIELDS_OF_STUDY.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                    </div>

                    {/* tutor fields — expand when role === 'tutor' */}
                    <div
                        style={{
                            maxHeight: role === 'tutor' ? '2000px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.4s ease',
                        }}
                    >
                        <TutorFields
                            tutor={tutor}
                            setTutor={setTutor}
                            errors={errors}
                            touched={touched}
                            setTouched={setTouched}
                            setErrors={setErrors}
                        />
                    </div>

                    {/* terms */}
                    <div className="flex items-start gap-3 mb-1.5">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={terms}
                            onChange={e => setTerms(e.target.checked)}
                            className="mt-0.5 w-4 h-4 shrink-0"
                            aria-describedby={errors.terms ? 'terms-error' : undefined}
                        />
                        <label htmlFor="terms" className="text-sm select-none" style={{ color: 'var(--text-secondary)' }}>
                            I agree to the{' '}
                            <Link to="/terms"   className="font-semibold" style={{ color: 'var(--primary)' }}>Terms of Service</Link>
                            {' '}and{' '}
                            <Link to="/privacy" className="font-semibold" style={{ color: 'var(--primary)' }}>Privacy Policy</Link>
                        </label>
                    </div>
                    <div aria-live="polite">
                        <FieldError id="terms-error" msg={errors.terms} />
                    </div>

                    {/* submit */}
                    <button
                        type="submit"
                        disabled={loading || !isOnline}
                        className="w-full mt-5 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', height: '52px' }}
                        title={!isOnline ? "You're offline — reconnect to create account" : "Create your account"}
                    >
                        {!isOnline
                            ? <><WifiOff size={18} /> You're Offline</>
                            : loading
                            ? <><Loader2 size={18} className="animate-spin" /> Creating Account…</>
                            : 'Create Account →'
                        }
                    </button>
                </form>

                {/* secondary action */}
                <div className="text-center mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold" style={{ color: 'var(--primary)' }}>Sign in instead</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
