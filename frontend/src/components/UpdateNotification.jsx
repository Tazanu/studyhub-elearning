import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function UpdateNotification({ updateSW, offlineReady, needRefresh, setNeedRefresh, setOfflineReady }) {
    const { theme } = useTheme();
    const [dismissed, setDismissed] = useState(false);

    // Show offline-ready toast briefly, then auto-dismiss
    useEffect(() => {
        if (offlineReady && !dismissed) {
            const timer = setTimeout(() => {
                setOfflineReady(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [offlineReady, dismissed, setOfflineReady]);

    const handleUpdate = () => {
        updateSW(true);
    };

    const handleDismiss = () => {
        setDismissed(true);
        setNeedRefresh(false);
    };

    return (
        <AnimatePresence>
            {needRefresh && !dismissed && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="fixed top-20 left-1/2 z-50 w-full max-w-md px-4"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <div
                        className="rounded-xl p-4 border shadow-2xl flex items-center gap-3"
                        style={{
                            background: theme === 'dark' ? 'rgba(20,20,20,0.98)' : 'rgba(255,255,255,0.98)',
                            borderColor: 'var(--accent-blue)',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(0,102,255,0.15)' }}
                        >
                            <RefreshCw size={18} style={{ color: 'var(--accent-blue)' }} />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>
                                New version available
                            </p>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                Refresh to update StudyHub
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleUpdate}
                            className="px-4 py-2 rounded-lg font-semibold text-white text-xs shrink-0"
                            style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
                        >
                            Refresh
                        </motion.button>
                        <button
                            onClick={handleDismiss}
                            className="p-1.5 rounded-lg transition-colors hover:bg-red-500 hover:text-white shrink-0"
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label="Dismiss"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </motion.div>
            )}

            {offlineReady && !dismissed && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="fixed top-20 left-1/2 z-50 w-full max-w-md px-4"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <div
                        className="rounded-xl p-4 border shadow-2xl flex items-center gap-3"
                        style={{
                            background: theme === 'dark' ? 'rgba(20,20,20,0.98)' : 'rgba(255,255,255,0.98)',
                            borderColor: '#34d399',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(52,211,153,0.15)' }}
                        >
                            <span style={{ fontSize: '20px' }}>✓</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>
                                StudyHub is ready
                            </p>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                App works offline now
                            </p>
                        </div>
                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1.5 rounded-lg transition-colors hover:bg-gray-500 hover:text-white shrink-0"
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label="Dismiss"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
