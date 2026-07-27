import { Star, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/client';
import { normalizeTutorList } from '../../data/normalizeTutor';

export default function SimilarTutorsCarousel({ tutors: propTutors, excludeId }) {
  const scrollRef = useRef(null);
  const [tutors, setTutors] = useState(propTutors ?? []);

  useEffect(() => {
    api.get('/tutors')
      .then(r => {
        if (r.data?.length) {
          const all = r.data.map(normalizeTutorList);
          sessionStorage.setItem('tutors_cache', JSON.stringify(all));
          const list = all
            .filter(t => t.id !== String(excludeId))
            .slice(0, 8);
          if (list.length) setTutors(list);
        }
      })
      .catch(() => {});
  }, [excludeId]);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="px-6 py-12 border-t" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Similar Tutors</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg border transition-all hover:border-blue-500"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg border transition-all hover:border-blue-500"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tutors.map(tutor => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TutorCard({ tutor }) {
  const navigate = useNavigate();
  
  const handleViewProfile = () => {
    navigate(`/tutor/${tutor.id}`, { state: { name: tutor.name, avatar: tutor.avatar } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div
      onClick={handleViewProfile}
      className="flex-shrink-0 w-72 p-5 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      style={{ background: 'var(--bg-main)', borderColor: 'var(--border-subtle)' }}
    >
      <img src={tutor.avatar} alt={tutor.name} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg mb-2">{tutor.name}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {tutor.subjects.slice(0, 2).map((subject, i) => (
          <span key={i} className="px-2 py-1 rounded text-xs font-medium" style={{ background: 'rgba(96,165,250,0.1)', color: 'var(--accent-blue)' }}>
            {subject.name || subject}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{tutor.rating}</span>
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>({tutor.reviews})</span>
        </div>
        <div className="font-bold" style={{ color: 'var(--accent-blue)' }}>{(tutor.pricing?.single?.price ?? 0).toLocaleString()} FCFA</div>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleViewProfile();
        }}
        className="w-full py-2 rounded-lg font-medium border transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950" 
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        View Profile
      </button>
    </div>
  );
}
