import { useState } from 'react';
import { X, Phone, Loader, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import api from '../../api/client';

const SERVICES = [
    { id: 'MTN', label: 'MTN MoMo', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)' },
    { id: 'ORANGE', label: 'Orange Money', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.3)' },
];

/**
 * PaymentModal
 * Props:
 *   open        — boolean
 *   onClose     — () => void
 *   onSuccess   — (transaction) => void
 *   amount      — number (XAF)
 *   description — string
 *   metadata    — object (optional, e.g. { bookingId, plan })
 *   type        — string (e.g. 'tutor_booking', 'pricing_plan')
 */
export default function PaymentModal({ open, onClose, onSuccess, amount, description, metadata = {}, type = 'payment' }) {
    const [service, setService] = useState('MTN');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | failed

    if (!open) return null;

    const handleClose = () => {
        if (status === 'loading') return;
        setStatus('idle');
        setPhone('');
        setService('MTN');
        onClose();
    };

    const handlePay = async () => {
        const cleaned = phone.replace(/\s+/g, '');
        if (!cleaned || cleaned.length < 9) {
            toast.error('Enter a valid phone number');
            return;
        }

        setStatus('loading');
        try {
            const { data } = await api.post('/payments/collect', {
                amount,
                service,
                payer: cleaned,
                type,
                description,
                metadata,
            });

            if (data.success) {
                setStatus('success');
                setTimeout(() => {
                    onSuccess?.(data.transaction);
                    handleClose();
                }, 1800);
            } else {
                setStatus('failed');
            }
        } catch (err) {
            setStatus('failed');
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-end sm:items-center justify-center z-50 px-0 sm:px-4"
            style={{ background: 'rgba(0,0,0,0.65)' }}
            onClick={handleClose}
        >
            <div
                className="w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-5 sm:p-6"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h3 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                            Mobile Money Payment
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>{description}</p>
                    </div>
                    <button onClick={handleClose} disabled={status === 'loading'}
                        className="p-1.5 rounded-lg transition-colors hover:opacity-70">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Amount */}
                <div className="text-center py-4 mb-5 rounded-xl"
                    style={{ background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                    <p className="text-3xl font-bold tabular-nums" style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--accent-blue)' }}>
                        {amount.toLocaleString()}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>FCFA</p>
                </div>

                {status === 'idle' || status === 'loading' ? (
                    <>
                        {/* Service selector */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {SERVICES.map(s => (
                                <button
                                    key={s.id}
                                    onClick={() => setService(s.id)}
                                    className="py-3 rounded-xl font-semibold text-sm transition-all"
                                    style={{
                                        background: service === s.id ? s.bg : 'var(--bg-main)',
                                        border: `2px solid ${service === s.id ? s.border : 'var(--border-subtle)'}`,
                                        color: service === s.id ? s.color : 'var(--text-secondary)',
                                    }}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>

                        {/* Phone input */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium"
                                    style={{ color: 'var(--text-secondary)' }}>+237</span>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder="6XX XXX XXX"
                                    className="w-full pl-14 pr-4 py-3 rounded-xl border text-sm"
                                    style={{
                                        background: 'var(--bg-main)',
                                        borderColor: 'var(--border-subtle)',
                                        color: 'var(--text-primary)',
                                    }}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <p className="text-xs mt-1.5" style={{ color: 'var(--text-secondary)' }}>
                                You will receive a prompt on your phone to confirm the payment.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={handleClose}
                                disabled={status === 'loading'}
                                className="flex-1 py-3 rounded-xl font-semibold border transition-all disabled:opacity-40"
                                style={{ borderColor: 'var(--border-subtle)' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handlePay}
                                disabled={status === 'loading' || !phone}
                                className="flex-1 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                                style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}
                            >
                                {status === 'loading'
                                    ? <><Loader className="w-4 h-4 animate-spin" /> Processing…</>
                                    : `Pay ${amount.toLocaleString()} FCFA`
                                }
                            </button>
                        </div>
                    </>
                ) : status === 'success' ? (
                    <div className="text-center py-6">
                        <CheckCircle className="w-14 h-14 mx-auto mb-3" style={{ color: '#34d399' }} />
                        <p className="text-lg font-bold mb-1">Payment Successful!</p>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Your session has been confirmed.</p>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <XCircle className="w-14 h-14 mx-auto mb-3" style={{ color: '#f87171' }} />
                        <p className="text-lg font-bold mb-1">Payment Failed</p>
                        <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
                            Please check your balance or try a different number.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="px-6 py-2.5 rounded-xl font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}
                        >
                            Try Again
                        </button>
                    </div>
                )}

                <p className="text-xs text-center mt-4" style={{ color: 'var(--text-secondary)' }}>
                    🔒 Secured by MeSomb · MTN MoMo & Orange Money
                </p>
            </div>
        </div>
    );
}
