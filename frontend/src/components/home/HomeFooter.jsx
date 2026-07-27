import { Link } from 'react-router-dom';
import { useState } from 'react';
import useInView from '../../hooks/useInView';

const LINKS = {
    Platform: [
        { label: 'Study Groups',   to: '/groups'       },
        { label: 'Q&A Forum',      to: '/qa'           },
        { label: 'Notes Library',  to: '/notes'        },
        { label: 'Find Tutors',    to: '/tutors'       },
        { label: 'Become a Tutor', to: '/become-tutor' },
    ],
    Company: [
        { label: 'About Us',   to: '/about'    },
        { label: 'Blog',       to: '/register' },
        { label: 'Careers',    to: '/register' },
        { label: 'Contact Us', to: '/register' },
    ],
    Support: [
        { label: 'Help Centre',            to: '/register' },
        { label: 'Community Guidelines',   to: '/register' },
        { label: 'Report an Issue',        to: '/register' },
        { label: 'Status',                 to: '/register' },
    ],
    Legal: [
        { label: 'Privacy Policy',   to: '/privacy'  },
        { label: 'Terms of Service', to: '/terms'    },
        { label: 'Cookie Policy',    to: '/register' },
        { label: 'Accessibility',    to: '/register' },
    ],
};

/* SVG social icons — lucide doesn't ship branded icons */
const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const YouTubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const SOCIALS = [
    { Icon: XIcon,        label: 'X (Twitter)', href: 'https://twitter.com'  },
    { Icon: LinkedInIcon, label: 'LinkedIn',     href: 'https://linkedin.com' },
    { Icon: GitHubIcon,   label: 'GitHub',       href: 'https://github.com'  },
    { Icon: YouTubeIcon,  label: 'YouTube',      href: 'https://youtube.com' },
];

export default function HomeFooter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.05 });

    const handleSubscribe = e => {
        e.preventDefault();
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <footer
            ref={ref}
            role="contentinfo"
            className="border-t px-4 sm:px-6 pt-14 pb-8"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
            <div className={`max-w-6xl mx-auto fade-up ${inView ? 'in-view' : ''}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">

                    {/* brand + newsletter — spans 2 cols on lg */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                        <Link to="/" className="text-xl font-bold logo-gradient inline-block mb-3" aria-label="StudyHub home"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            StudyHub
                        </Link>
                        <p className="text-sm mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Peer-to-peer learning for students. Study groups, notes, Q&A and tutors in one place.
                        </p>
                        <p className="text-xs mb-5" style={{ color: 'var(--text-muted)' }}>
                            Free to join. No credit card required.
                        </p>

                        <form onSubmit={handleSubscribe} aria-label="Email newsletter signup">
                            <label htmlFor="footer-email" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                                Get platform updates
                            </label>
                            <div className="flex gap-2">
                                <input
                                    id="footer-email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="flex-1 px-3 py-2 rounded-lg border text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"
                                    style={{ background: 'var(--bg-input)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)', outlineColor: '#0066ff' }}
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-opacity hover:opacity-90"
                                    style={{ background: 'var(--accent-blue)', outlineColor: '#60a5fa' }}
                                >
                                    {submitted ? '✓' : 'Subscribe'}
                                </button>
                            </div>
                            {submitted && (
                                <p className="text-xs mt-2" style={{ color: '#34d399' }}>You're subscribed!</p>
                            )}
                        </form>
                    </div>

                    {/* link columns */}
                    {Object.entries(LINKS).map(([heading, items]) => (
                        <nav key={heading} aria-label={`${heading} links`}>
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-primary)' }}>
                                {heading}
                            </h3>
                            <ul className="space-y-2.5 list-none p-0 m-0">
                                {items.map(({ label, to }) => (
                                    <li key={label}>
                                        <Link
                                            to={to}
                                            className="text-sm transition-colors hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 rounded"
                                            style={{ color: 'var(--text-secondary)', outlineColor: '#0066ff' }}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                {/* bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} StudyHub · All rights reserved
                    </p>

                    <div className="flex items-center gap-1">
                        {SOCIALS.map(({ Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                                style={{ color: 'var(--text-muted)', outlineColor: '#0066ff' }}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
