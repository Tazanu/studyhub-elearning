import { Lock, FileText, Download } from 'lucide-react';
import { toast } from 'sonner';

export default function SessionResources({ resources, tutorName }) {
  const handleDownloadResource = (resource) => {
    if (resource.locked) {
      toast.error('This resource is locked. Book a session to unlock!');
      return;
    }
    toast.success(`Downloading ${resource.name}...`);
    // Simulate download
    setTimeout(() => {
      toast.info('Download complete!');
    }, 1500);
  };
  
  const handleDownloadReport = () => {
    toast.info('Generating progress report...');
    setTimeout(() => {
      toast.success('Progress report downloaded!');
      // In real app, trigger actual PDF download
    }, 2000);
  };
  
  const handleRecordingClick = (recordingNum) => {
    toast.info('Session recordings are available after booking your first session.');
  };
  return (
    <section className="px-6 py-12 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Session Resources</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Past Session Recordings</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  onClick={() => handleRecordingClick(i)}
                  className="p-4 rounded-xl border flex items-center justify-between cursor-pointer hover:border-blue-500 transition-all" 
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                    <div>
                      <p className="font-medium">Session Recording #{i}</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Available after enrollment</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shared Materials</h3>
            <div className="space-y-3">
              {resources.map((resource, i) => (
                <div 
                  key={i} 
                  onClick={() => handleDownloadResource(resource)}
                  className="p-4 rounded-xl border flex items-center justify-between cursor-pointer hover:border-blue-500 transition-all" 
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" style={{ color: 'var(--accent-blue)' }} />
                    <p className="font-medium">{resource.name}</p>
                  </div>
                  {resource.locked ? (
                    <Lock className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                  ) : (
                    <Download className="w-5 h-5" style={{ color: 'var(--accent-blue)' }} />
                  )}
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleDownloadReport}
              className="mt-4 w-full py-3 rounded-xl font-semibold border transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950" 
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <Download className="w-4 h-4 inline mr-2" />
              Download Progress Report (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
