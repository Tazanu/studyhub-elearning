import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mic, MicOff, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import api from '../api/client';
import Sidebar from '../components/Sidebar';

const CATEGORIES = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Engineering', 'Medicine', 'Business', 'Other'];

export default function AskQuestion() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState([]);
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [audioURL, setAudioURL] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const imageInputRef = useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioBlob(audioBlob);
                setAudioURL(audioUrl);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setRecording(true);
            toast.success('Recording started');
        } catch (error) {
            console.error('Recording error:', error);
            toast.error('Failed to start recording. Please check microphone permissions.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && recording) {
            mediaRecorderRef.current.stop();
            setRecording(false);
            toast.success('Recording stopped');
        }
    };

    const handleImageSelect = (e) => {
        const files = Array.from(e.target.files);
        if (images.length + files.length > 5) {
            toast.error('Maximum 5 images allowed');
            return;
        }
        setImages([...images, ...files]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim() || !subject) {
            toast.error('Title, content, and subject are required');
            return;
        }

        setSubmitting(true);

        try {
            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('content', content.trim());
            formData.append('subject', subject);
            if (category) formData.append('category', category);
            if (tags) formData.append('tags', JSON.stringify(tags.split(',').map(t => t.trim()).filter(Boolean)));

            if (audioBlob) {
                formData.append('audio', audioBlob, 'question-audio.webm');
            }

            images.forEach(image => {
                formData.append('images', image);
            });

            const { data } = await api.post('/qa', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success('Question posted successfully!');
            navigate(`/qa/${data.question.id}`);
        } catch (error) {
            console.error('Submit error:', error);
            toast.error(error.response?.data?.error || 'Failed to post question');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="lg:pl-60" style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
            <Sidebar />
            <div className="min-h-screen" style={{ background: 'var(--bg-main)', color: 'var(--text-primary)', paddingTop: '80px' }}>
                <div className="max-w-4xl mx-auto px-6 py-8">
                
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate('/qa')}
                        className="p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Ask a Question
                        </h1>
                        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                            Get help from the community
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                        <label className="block text-sm font-semibold mb-2">Title *</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What's your question? Be specific."
                            className="w-full px-4 py-3 rounded-lg border outline-none transition-all"
                            style={{
                                background: 'var(--bg-card)',
                                borderColor: 'var(--border-subtle)',
                                color: 'var(--text-primary)'
                            }}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Description *</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Provide all the details someone would need to answer your question..."
                            rows={8}
                            className="w-full px-4 py-3 rounded-lg border outline-none transition-all resize-none"
                            style={{
                                background: 'var(--bg-card)',
                                borderColor: 'var(--border-subtle)',
                                color: 'var(--text-primary)'
                            }}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Subject *</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="e.g., Calculus"
                                className="w-full px-4 py-3 rounded-lg border outline-none transition-all"
                                style={{
                                    background: 'var(--bg-card)',
                                    borderColor: 'var(--border-subtle)',
                                    color: 'var(--text-primary)'
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border outline-none transition-all"
                                style={{
                                    background: 'var(--bg-card)',
                                    borderColor: 'var(--border-subtle)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <option value="">Select category</option>
                                {CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Tags</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="e.g., derivatives, limits, integration (comma-separated)"
                            className="w-full px-4 py-3 rounded-lg border outline-none transition-all"
                            style={{
                                background: 'var(--bg-card)',
                                borderColor: 'var(--border-subtle)',
                                color: 'var(--text-primary)'
                            }}
                        />
                    </div>

                    <div className="p-4 rounded-lg border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                        <label className="block text-sm font-semibold mb-3">Audio Explanation (Optional)</label>
                        <div className="flex items-center gap-3">
                            {!audioURL ? (
                                <button
                                    type="button"
                                    onClick={recording ? stopRecording : startRecording}
                                    className={`px-4 py-2 rounded-lg font-semibold text-white flex items-center gap-2 transition-all ${recording ? 'animate-pulse' : ''}`}
                                    style={{ background: recording ? '#ef4444' : 'var(--accent-blue)' }}
                                >
                                    {recording ? <MicOff size={18} /> : <Mic size={18} />}
                                    {recording ? 'Stop Recording' : 'Start Recording'}
                                </button>
                            ) : (
                                <div className="flex items-center gap-3 flex-1">
                                    <audio src={audioURL} controls className="flex-1" />
                                    <button
                                        type="button"
                                        onClick={() => { setAudioBlob(null); setAudioURL(''); }}
                                        className="p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-4 rounded-lg border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                        <label className="block text-sm font-semibold mb-3">Images (Optional, max 5)</label>
                        <input
                            ref={imageInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageSelect}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => imageInputRef.current?.click()}
                            disabled={images.length >= 5}
                            className="px-4 py-2 rounded-lg border flex items-center gap-2 transition-all hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                        >
                            <ImageIcon size={18} />
                            Add Images
                        </button>

                        {images.length > 0 && (
                            <div className="grid grid-cols-3 gap-3 mt-3">
                                {images.map((image, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-24 object-cover rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-1 right-1 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
                        >
                            {submitting && <Loader2 size={18} className="animate-spin" />}
                            {submitting ? 'Posting...' : 'Post Question'}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/qa')}
                            className="px-8 py-3 rounded-lg font-semibold border transition-all"
                            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
