import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import api from '../api/client';

const API_ORIGIN = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace('/api', '');

export default function JoinRequestsPanel({ groupId, isAdmin }) {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(null);

    const fetchRequests = async () => {
        if (!isAdmin) {
            console.log('Not admin, skipping fetch');
            return;
        }
        console.log('Fetching join requests for group', groupId);
        try {
            const { data } = await api.get(`/groups/${groupId}/requests`);
            console.log('Join requests fetched:', data);
            setRequests(data);
        } catch (err) {
            console.error('Failed to fetch join requests:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
        const interval = setInterval(fetchRequests, 15000); // Poll every 15s
        return () => clearInterval(interval);
    }, [groupId, isAdmin]);

    const handleApprove = async (requestId) => {
        setProcessing(requestId);
        try {
            await api.post(`/groups/${groupId}/requests/${requestId}/approve`);
            toast.success('Request approved');
            fetchRequests();
        } catch (err) {
            toast.error(err.response?.data?.error || 'Failed to approve request');
        } finally {
            setProcessing(null);
        }
    };

    const handleDeny = async (requestId) => {
        setProcessing(requestId);
        try {
            await api.post(`/groups/${groupId}/requests/${requestId}/deny`);
            toast.success('Request denied');
            fetchRequests();
        } catch (err) {
            toast.error(err.response?.data?.error || 'Failed to deny request');
        } finally {
            setProcessing(null);
        }
    };

    if (!isAdmin) return null;

    if (loading) {
        return (
            <div className="flex justify-center py-8">
                <Loader2 size={24} className="animate-spin" style={{ color: 'var(--accent-blue)' }} />
            </div>
        );
    }

    if (requests.length === 0) return null;

    return (
        <div className="px-5 py-4 border-b" style={{ background: 'rgba(0, 82, 204, 0.05)', borderColor: 'var(--border-subtle)' }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Pending Join Requests ({requests.length})
            </h3>
            <div className="space-y-2">
                {requests.map((req) => (
                    <motion.div
                        key={req.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between p-3 rounded-lg border"
                        style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                    >
                        <div className="flex items-center gap-3">
                            {req.users.profile_picture ? (
                                <img
                                    src={`${API_ORIGIN}${req.users.profile_picture}`}
                                    alt={req.users.first_name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            ) : (
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                    style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
                                >
                                    {req.users.first_name[0]}{req.users.last_name[0]}
                                </div>
                            )}
                            <div>
                                <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                                    {req.users.first_name} {req.users.last_name}
                                </div>
                                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                    {req.users.university} · {req.users.field_of_study}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleApprove(req.id)}
                                disabled={processing === req.id}
                                className="px-3 py-1.5 rounded-lg flex items-center gap-1 text-xs font-semibold text-white transition-all hover:scale-105 disabled:opacity-50"
                                style={{ background: 'linear-gradient(135deg, #00aa00, #00cc00)' }}
                            >
                                {processing === req.id ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                                Approve
                            </button>
                            <button
                                onClick={() => handleDeny(req.id)}
                                disabled={processing === req.id}
                                className="px-3 py-1.5 rounded-lg flex items-center gap-1 text-xs font-semibold text-white transition-all hover:scale-105 disabled:opacity-50"
                                style={{ background: 'linear-gradient(135deg, #cc0000, #ff0000)' }}
                            >
                                {processing === req.id ? <Loader2 size={14} className="animate-spin" /> : <X size={14} />}
                                Deny
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
