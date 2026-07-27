import { BookOpen } from 'lucide-react';

const levelColors = {
  Expert: { bg: 'rgba(244,114,182,0.1)', text: '#f472b6' },
  Advanced: { bg: 'rgba(139,92,246,0.1)', text: '#8b5cf6' },
  Intermediate: { bg: 'rgba(96,165,250,0.1)', text: '#60a5fa' },
  Beginner: { bg: 'rgba(52,211,153,0.1)', text: '#34d399' }
};

export default function SubjectTags({ tutor }) {
  return (
    <section className="px-6 py-12 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Subjects & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {tutor.subjects.map((subject, i) => (
            <div key={i} className="p-4 rounded-xl border transition-all hover:shadow-md" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" style={{ color: 'var(--accent-blue)' }} />
                  <h3 className="font-semibold text-lg">{subject.name}</h3>
                </div>
                <span className="px-2 py-1 rounded text-xs font-medium" style={{ background: levelColors[subject.level].bg, color: levelColors[subject.level].text }}>
                  {subject.level}
                </span>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{subject.grades}</p>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {tutor.specializations.map((spec, i) => (
              <span key={i} className="px-4 py-2 rounded-lg font-medium" style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399' }}>
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
