function Footer() {
    return (
        <footer
            className="border-t px-8 pt-12 pb-6"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--accent-blue)' }}>StudyHub</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Empowering students through collaborative learning and knowledge sharing.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--accent-blue)' }}>Platform</h3>
                    <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                        <li>Study Groups</li>
                        <li>Q&A Forum</li>
                        <li>Notes Sharing</li>
                        <li>Find Tutors</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--accent-blue)' }}>Support</h3>
                    <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                        <li>About Us</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--accent-blue)' }}>Contact</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>📍 Molyko, Buea, Mile 15</p>
                    <p style={{ color: 'var(--text-secondary)' }}>📞 +237 672 488 417</p>
                    <p style={{ color: 'var(--text-secondary)' }}>👨‍💻 Developed by Tazanu Stanley</p>
                </div>
            </div>
            <div
                className="text-center pt-6 border-t"
                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
                <p>© {new Date().getFullYear()} StudyHub. All rights reserved. Made with ❤️ in Buea</p>
            </div>
        </footer>
    );
}

export default Footer;