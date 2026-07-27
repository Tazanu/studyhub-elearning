import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import api from '../api/client';

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

export default function UploadNoteModal({ onClose, onUploaded, canMarkPremium = false }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        subject: '',
        tags: '',
        groupId: '',
        isPremium: false,
        price: ''
    });
    const [file, setFile] = useState(null);
    const [groups, setGroups] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [dragActive, setDragActive] = useState(false);
    const [errors, setErrors] = useState({});

    const fileInputRef = useRef(null);
    const firstInputRef = useRef(null);

    useEffect(() => {
        firstInputRef.current?.focus();
        
        api.get('/groups').then(({ data }) => {
            setGroups(data.filter(g => g.isMember));
        }).catch(() => {});
    }, []);

    useEffect(() => {
        const handler = e => { if (e.key === 'Escape' && !uploading) onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose, uploading]);

    const handleDrag = e => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = e => {
        if (e.target.files && e.target.files[0]) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const validateAndSetFile = file => {
        setErrors(prev => ({ ...prev, file: '' }));

        if (file.size > MAX_FILE_SIZE) {
            setErrors(prev => ({ ...prev, file: 'File size must be less than 20MB' }));
            return;
        }

        setFile(file);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const newErrors = {};
        if (!form.title) newErrors.title = 'Title is required';
        if (!form.description) newErrors.description = 'Description is required';
        if (!form.subject) newErrors.subject = 'Subject is required';
        if (!file) newErrors.file = 'Please select a file to upload';
        if (form.isPremium && (!form.price || parseFloat(form.price) <= 0)) {
            newErrors.price = 'Price is required for premium notes';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setUploading(true);
        setUploadProgress(0);

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('subject', form.subject);
        formData.append('tags', form.tags);
        if (form.groupId) formData.append('groupId', form.groupId);
        formData.append('isPremium', form.isPremium ? 'true' : 'false');
        if (form.isPremium && form.price) formData.append('price', form.price);
        formData.append('file', file);

        try {
            await api.post('/notes', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            });

            onUploaded();
        } catch (err) {
            toast.error(err.response?.data?.error || 'Failed to upload note');
            setUploading(false);
            setUploadProgress(0);
        }
    };

    return (
        <>
            <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={uploading ? undefined : onClose}
            />
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="upload-modal-title"
                className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
                <div
                    className="w-full max-w-2xl rounded-2xl border p-8 pointer-events-auto max-h-[90vh] overflow-y-auto"
                    style={{
                        background: 'var(--bg-card)',
                        borderColor: 'var(--border-subtle)',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.5)'
                    }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2
                            id="upload-modal-title"
                            className="text-xl font-bold"
                            style={{ fontFamily: "'Space Grotesk',sans-serif", color: 'var(--accent-blue)' }}
                        >
                            Upload Note
                        </h2>
                        <button
                            onClick={onClose}
                            disabled={uploading}
                            className="p-1.5 rounded-lg transition-colors hover:bg-red-500 hover:text-white disabled:opacity-50"
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1.5">Title *</label>
                            <input
                                ref={firstInputRef}
                                type="text"
                                value={form.title}
                                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                                placeholder="e.g. Calculus II - Integration Techniques"
                                className="form-input px-4"
                                style={errors.title ? { borderColor: 'var(--error)' } : {}}
                            />
                            {errors.title && <p className="text-xs mt-1" style={{ color: 'var(--error)' }}>{errors.title}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1.5">Description *</label>
                            <textarea
                                value={form.description}
                                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                                placeholder="Describe what this note covers..."
                                rows={3}
                                className="form-input px-4 py-3"
                                style={{ height: 'auto', resize: 'vertical', ...(errors.description ? { borderColor: 'var(--error)' } : {}) }}
                            />
                            {errors.description && <p className="text-xs mt-1" style={{ color: 'var(--error)' }}>{errors.description}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1.5">Subject *</label>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                                    placeholder="e.g. Mathematics"
                                    className="form-input px-4"
                                    style={errors.subject ? { borderColor: 'var(--error)' } : {}}
                                />
                                {errors.subject && <p className="text-xs mt-1" style={{ color: 'var(--error)' }}>{errors.subject}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1.5">
                                    Tags <span className="font-normal text-xs" style={{ color: 'var(--text-muted)' }}>(comma-separated)</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.tags}
                                    onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                                    placeholder="calculus, integration, math"
                                    className="form-input px-4"
                                />
                            </div>
                        </div>

                        {groups.length > 0 && (
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-1.5">
                                    Share with Group <span className="font-normal text-xs" style={{ color: 'var(--text-muted)' }}>(optional)</span>
                                </label>
                                <select
                                    value={form.groupId}
                                    onChange={e => setForm(f => ({ ...f, groupId: e.target.value }))}
                                    className="form-input px-4"
                                >
                                    <option value="">None - public note</option>
                                    {groups.map(g => (
                                        <option key={g.id} value={g.id}>{g.name}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1.5">File *</label>
                            <div
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all"
                                style={{
                                    borderColor: dragActive ? 'var(--accent-blue)' : errors.file ? 'var(--error)' : 'var(--border-subtle)',
                                    background: dragActive ? 'rgba(0,102,255,0.05)' : 'var(--bg-hover)'
                                }}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.txt,.md,.jpg,.jpeg,.png,.gif,.webp"
                                />
                                <Upload size={32} className="mx-auto mb-3" style={{ color: 'var(--accent-blue)' }} />
                                {file ? (
                                    <div>
                                        <p className="font-semibold mb-1">{file.name}</p>
                                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="font-semibold mb-1">Click or drag file here</p>
                                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                            PDF, DOC, images, etc. Max 20MB
                                        </p>
                                    </div>
                                )}
                            </div>
                            {errors.file && (
                                <p className="text-xs mt-1 flex items-center gap-1" style={{ color: 'var(--error)' }}>
                                    <AlertCircle size={12} /> {errors.file}
                                </p>
                            )}
                        </div>

                        {canMarkPremium && (
                            <div className="mb-4 p-4 rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
                                <div className="flex items-center gap-3 mb-3">
                                    <input
                                        type="checkbox"
                                        id="premium"
                                        checked={form.isPremium}
                                        onChange={e => setForm(f => ({ ...f, isPremium: e.target.checked }))}
                                        className="w-4 h-4"
                                    />
                                    <label htmlFor="premium" className="text-sm font-semibold">Mark as Premium</label>
                                </div>
                                {form.isPremium && (
                                    <div>
                                        <label className="block text-sm font-semibold mb-1.5">Price (XAF) *</label>
                                        <input
                                            type="number"
                                            min="1"
                                            step="1"
                                            value={form.price}
                                            onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                                            placeholder="500"
                                            className="form-input px-4"
                                            style={errors.price ? { borderColor: 'var(--error)' } : {}}
                                        />
                                        {errors.price && <p className="text-xs mt-1" style={{ color: 'var(--error)' }}>{errors.price}</p>}
                                    </div>
                                )}
                            </div>
                        )}

                        {uploading && (
                            <div className="mb-4">
                                <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                                    <span>Uploading...</span>
                                    <span>{uploadProgress}%</span>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border-subtle)' }}>
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ background: 'var(--accent-blue)' }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${uploadProgress}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3 justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={uploading}
                                className="px-5 py-2.5 rounded-lg border text-sm font-medium disabled:opacity-50"
                                style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={uploading}
                                className="px-5 py-2.5 rounded-lg font-semibold text-white text-sm inline-flex items-center gap-2 disabled:opacity-60"
                                style={{ background: 'linear-gradient(135deg,#0052cc,#0066ff)' }}
                            >
                                {uploading ? (
                                    <><Loader2 size={14} className="animate-spin" /> Uploading...</>
                                ) : (
                                    <><Upload size={14} /> Upload Note</>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    );
}
