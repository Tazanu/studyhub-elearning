import { useState } from 'react';
import { Star, Shield, ChevronDown } from 'lucide-react';

export default function ReviewSection({ reviews, ratingBreakdown, totalReviews, rating }) {
  const [sortBy, setSortBy] = useState('recent');
  const [showAll, setShowAll] = useState(false);
  
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'highest') return b.rating - a.rating;
    return 0;
  });
  
  const displayReviews = showAll ? sortedReviews : sortedReviews.slice(0, 4);
  
  return (
    <section className="px-6 py-12 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Reviews & Ratings</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 rounded-xl" style={{ background: 'var(--bg-card)' }}>
            <div className="text-5xl font-bold mb-2">{rating}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{totalReviews} total reviews</p>
          </div>
          
          <div className="md:col-span-2">
            <RatingBreakdown breakdown={ratingBreakdown} total={totalReviews} />
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold">Student Reviews</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rated</option>
          </select>
        </div>
        
        <div className="space-y-4">
          {displayReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        {reviews.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 mx-auto flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all hover:border-blue-500"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            {showAll ? 'Show Less' : 'Load More Reviews'}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </section>
  );
}

function RatingBreakdown({ breakdown, total }) {
  return (
    <div className="space-y-2">
      {[5, 4, 3, 2, 1].map(stars => {
        const count = breakdown[stars] || 0;
        const percentage = (count / total) * 100;
        return (
          <div key={stars} className="flex items-center gap-3">
            <span className="text-sm font-medium w-8">{stars}★</span>
            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-card)' }}>
              <div
                className="h-full transition-all"
                style={{ width: `${percentage}%`, background: 'linear-gradient(90deg, #fbbf24, #f59e0b)' }}
              />
            </div>
            <span className="text-sm w-12 text-right" style={{ color: 'var(--text-secondary)' }}>{count}</span>
          </div>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="p-6 rounded-xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="flex items-start gap-4">
        <img src={review.avatar} alt={review.studentName} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{review.studentName}</span>
                {review.verified && (
                  <Shield className="w-4 h-4 text-green-500" title="Verified student" />
                )}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {review.subject} · {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
          <p className="leading-relaxed">{review.text}</p>
        </div>
      </div>
    </div>
  );
}
