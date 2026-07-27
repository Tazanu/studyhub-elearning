export default function QA() {
    return (
        <div className="min-h-screen pt-28 pb-20 px-6" style={{ background: 'var(--bg-main)', color: 'var(--text-primary)' }}>
            <div className="max-w-5xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent-blue)' }}>Knowledge</p>
                <h1 className="font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 2.75rem)', letterSpacing: '-0.02em' }}>Q&amp;A Forum</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Ask questions and get answers from peers. Coming soon.</p>
            </div>
        </div>
    );
}
