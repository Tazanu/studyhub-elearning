import { Video, Presentation, Share2, Upload, Mic, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const toolIcons = {
  'HD Video Call': Video,
  'Interactive Whiteboard': Presentation,
  'Screen Sharing': Share2,
  'File Upload & Storage': Upload,
  'Session Recording': Video,
  'Real-time Chat': MessageCircle
};

export default function SessionTools({ tools }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleTrialClick = () => {
    if (!user) { toast.error('Please log in to start a trial session'); navigate('/login'); return; }
    toast.info('Free trial session — select a time slot in the booking widget above.');
  };
  return (
    <section className="px-6 py-12 border-t" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Virtual Classroom Tools</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-video rounded-xl mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(96,165,250,0.2), rgba(139,92,246,0.2))' }}>
              <div className="text-center">
                <Presentation className="w-16 h-16 mx-auto mb-3" style={{ color: 'var(--accent-blue)' }} />
                <p className="font-semibold">Interactive Whiteboard Preview</p>
              </div>
            </div>
            <button onClick={handleTrialClick} className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}>
              Start Free Trial Session
            </button>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Supported Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, i) => {
                const Icon = toolIcons[tool] || Mic;
                return (
                  <div key={i} className="p-4 rounded-xl border" style={{ background: 'var(--bg-main)', borderColor: 'var(--border-subtle)' }}>
                    <Icon className="w-6 h-6 mb-2" style={{ color: 'var(--accent-blue)' }} />
                    <p className="text-sm font-medium">{tool}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
