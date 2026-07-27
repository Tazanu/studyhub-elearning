export default function StudyHubLogo({ size = 'md', showText = true, className = '' }) {
    const sizes = {
        sm: { icon: 28, text: 'text-lg' },
        md: { icon: 36, text: 'text-2xl' },
        lg: { icon: 52, text: 'text-4xl' },
        xl: { icon: 72, text: 'text-5xl' }
    };

    const { icon, text } = sizes[size] || sizes.md;

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Icon */}
            <div 
                className="relative flex items-center justify-center"
                style={{
                    width: icon,
                    height: icon,
                }}
            >
                <svg
                    width={icon}
                    height={icon}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background circle with playful gradient */}
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="url(#bgGradient)"
                    />
                    
                    {/* Gradients */}
                    <defs>
                        <linearGradient id="bgGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0066ff" />
                            <stop offset="100%" stopColor="#0052cc" />
                        </linearGradient>
                        <linearGradient id="capGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                    </defs>

                    {/* Stack of books (base) */}
                    <rect x="30" y="55" width="40" height="8" rx="1" fill="white" opacity="0.9" />
                    <rect x="32" y="48" width="36" height="7" rx="1" fill="white" opacity="0.8" />
                    <rect x="34" y="42" width="32" height="6" rx="1" fill="white" opacity="0.7" />

                    {/* Graduation cap */}
                    <g transform="translate(50, 28)">
                        {/* Cap board (square top) */}
                        <path
                            d="M -16 0 L 0 -8 L 16 0 L 0 8 Z"
                            fill="url(#capGradient)"
                        />
                        {/* Cap button */}
                        <circle cx="0" cy="0" r="2" fill="#fbbf24" />
                        {/* Tassel */}
                        <line x1="0" y1="0" x2="6" y2="10" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="6" cy="11" r="2" fill="#fbbf24" />
                    </g>

                    {/* Sparkles/stars for fun */}
                    <g opacity="0.8">
                        <path d="M 20 30 L 21 32 L 23 33 L 21 34 L 20 36 L 19 34 L 17 33 L 19 32 Z" fill="#60a5fa" />
                        <path d="M 75 40 L 76 42 L 78 43 L 76 44 L 75 46 L 74 44 L 72 43 L 74 42 Z" fill="#34d399" />
                        <path d="M 78 62 L 79 63.5 L 80.5 64.5 L 79 65.5 L 78 67 L 77 65.5 L 75.5 64.5 L 77 63.5 Z" fill="#fbbf24" />
                    </g>

                    {/* Smiley face on top book */}
                    <g transform="translate(50, 58)">
                        <circle cx="-4" cy="-1" r="1.5" fill="#0066ff" />
                        <circle cx="4" cy="-1" r="1.5" fill="#0066ff" />
                        <path d="M -3 2 Q 0 4 3 2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </g>
                </svg>
            </div>

            {/* Text */}
            {showText && (
                <div className="flex flex-col leading-none">
                    <span 
                        className={`font-bold ${text}`}
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            background: 'linear-gradient(135deg, #0052cc 0%, #0066ff 50%, #34d399 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        StudyHub
                    </span>
                    {size === 'xl' && (
                        <span 
                            className="text-xs font-semibold tracking-wide mt-1"
                            style={{
                                color: 'var(--accent-blue)',
                                letterSpacing: '0.05em'
                            }}
                        >
                            Learn Together 🎓
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
