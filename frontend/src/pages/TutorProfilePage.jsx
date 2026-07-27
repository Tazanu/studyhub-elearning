import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Send, X } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../context/AuthContext';
import TutorHero from '../components/tutor/TutorHero';
import TutorAbout from '../components/tutor/TutorAbout';
import SubjectTags from '../components/tutor/SubjectTags';
import BookingWidget from '../components/tutor/BookingWidget';
import PricingCards from '../components/tutor/PricingCards';
import SessionTools from '../components/tutor/SessionTools';
import ReviewSection from '../components/tutor/ReviewSection';
import SessionResources from '../components/tutor/SessionResources';
import SimilarTutorsCarousel from '../components/tutor/SimilarTutorsCarousel';
import { mockTutor } from '../data/mockTutor';
import { normalizeTutor } from '../data/normalizeTutor';
import api from '../api/client';

export default function TutorProfilePage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { state: routeState } = useLocation();
  const [loading, setLoading] = useState(true);
  const [tutor, setTutor] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [message, setMessage] = useState('');
  const bookingRef = useRef(null);
  const [tutorUserId, setTutorUserId] = useState(null);

  useEffect(() => {
    setLoading(true);
    // First check sessionStorage cache for the exact avatar/name shown on listing
    const cached = JSON.parse(sessionStorage.getItem('tutors_cache') || '[]');
    const cachedTutor = cached.find(t => String(t.id) === String(id));

    api.get(`/tutors/${id}`)
      .then(r => {
        const normalized = normalizeTutor(r.data);
        const userId = r.data.users?.id ?? r.data.user_id;
        setTutorUserId(userId);
        if (cachedTutor) {
          normalized.avatar = cachedTutor.avatar;
          normalized.name   = cachedTutor.name;
        } else if (routeState?.avatar) {
          normalized.avatar = routeState.avatar;
          normalized.name   = routeState.name;
        }
        setTutor(normalized);
      })
      .catch(() => setTutor({ ...mockTutor, avatar: mockTutor.avatar, name: mockTutor.name }))
      .finally(() => setLoading(false));
  }, [id]);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  
  const openMessageModal = () => {
    if (!user) { toast.error('Please log in to message a tutor'); navigate('/login'); return; }
    setShowMessageModal(true);
  };
  
  const closeMessageModal = () => {
    setShowMessageModal(false);
    setMessage('');
  };
  
  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }
    
    const messages = JSON.parse(localStorage.getItem('tutorMessages') || '[]');
    messages.push({
      tutorId: tutor.id,
      tutorName: tutor.name,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'sent'
    });
    localStorage.setItem('tutorMessages', JSON.stringify(messages));
    
    toast.success('Message sent! The tutor will respond within 24 hours.');
    closeMessageModal();
  };

  const structuredData = tutor ? {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": tutor.name,
    "jobTitle": tutor.title,
    "description": tutor.bio,
    "image": tutor.avatar,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tutor.rating,
      "reviewCount": tutor.totalReviews
    },
    "offers": {
      "@type": "Offer",
      "price": tutor.pricing.single.price,
      "priceCurrency": "XAF"
    }
  } : null;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
      { "@type": "ListItem", "position": 2, "name": "Tutors", "item": "/tutors" },
      { "@type": "ListItem", "position": 3, "name": tutor?.name }
    ]
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>{tutor.name} - {tutor.title} | StudyHub</title>
        <meta name="description" content={tutor.bio} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }} className="tutor-page-wrapper">
        <TutorHero
          tutor={{
            ...tutor,
            isOwn: user && tutorUserId && String(user.id) === String(tutorUserId),
            onUpload: (u) => setTutor(prev => ({ ...prev, avatar: u.profile_picture || null })),
          }}
          scrollToBooking={scrollToBooking}
          openMessageModal={openMessageModal}
        />
        <TutorAbout tutor={tutor} />
        <SubjectTags tutor={tutor} />
        <div ref={bookingRef}>
          <BookingWidget tutor={tutor} />
        </div>
        <PricingCards pricing={tutor.pricing} scrollToBooking={scrollToBooking} />
        <SessionTools tools={tutor.sessionTools} />
        <ReviewSection
          reviews={tutor.reviews}
          ratingBreakdown={tutor.ratingBreakdown}
          totalReviews={tutor.totalReviews}
          rating={tutor.rating}
        />
        <SessionResources resources={tutor.resources} tutorName={tutor.name} />
        <SimilarTutorsCarousel excludeId={tutor.id} />
        
        {showMessageModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={closeMessageModal}>
            <div className="p-6 rounded-2xl max-w-lg w-full" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Message {tutor.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Response time: ~2 hours</p>
                </div>
                <button onClick={closeMessageModal} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi! I'm interested in learning more about your tutoring services..."
                className="w-full h-32 p-4 rounded-xl border resize-none mb-4"
                style={{ 
                  background: 'var(--bg-main)', 
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              />
              
              <div className="flex gap-3">
                <button
                  onClick={closeMessageModal}
                  className="flex-1 py-3 rounded-xl font-semibold border transition-all"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMessage}
                  className="flex-1 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function LoadingSkeleton() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }} className="tutor-page-wrapper">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="animate-pulse space-y-8">
          <div className="flex gap-8">
            <div className="w-32 h-32 rounded-2xl" style={{ background: 'var(--bg-card)' }} />
            <div className="flex-1 space-y-4">
              <div className="h-8 rounded" style={{ background: 'var(--bg-card)', width: '60%' }} />
              <div className="h-6 rounded" style={{ background: 'var(--bg-card)', width: '40%' }} />
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-8 w-24 rounded" style={{ background: 'var(--bg-card)' }} />
                ))}
              </div>
            </div>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 rounded-xl" style={{ background: 'var(--bg-card)' }} />
          ))}
        </div>
      </div>
    </div>
  );
}
