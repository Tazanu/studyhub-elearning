import { useState } from 'react';
import { Calendar, Clock, Users, Globe, X, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import api from '../../api/client';
import { useAuth } from '../../context/AuthContext';
import PaymentModal from './PaymentModal';
import { calcSessionPrice } from '../../data/normalizeTutor';

const sessionTypes = [
  { id: '1on1', label: '1-on-1', icon: Users },
  { id: 'group', label: 'Group', icon: Users },
  { id: 'trial', label: 'Free Trial', icon: Clock }
];

const durations = [1, 2, 3, 4, 5, 6, 7, 8]; // hours per day
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function BookingWidget({ tutor }) {
  const { user } = useAuth();
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTime, setSelectedTime] = useState(null);
  const [sessionType, setSessionType] = useState('1on1');
  const [duration, setDuration] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [pendingBookingId, setPendingBookingId] = useState(null);
  const navigate = useNavigate();

  const calculatePrice = () => calcSessionPrice(duration, sessionType);

  const handleBook = () => {
    if (!user) {
      toast.error('Please log in to book a session');
      navigate('/login');
      return;
    }
    if (!selectedTime) {
      toast.error('Please select a time slot');
      return;
    }
    
    const booking = {
      tutor: tutor.name,
      tutorId: tutor.id,
      day: selectedDay,
      time: selectedTime,
      sessionType,
      duration,
      price: calculatePrice(),
      date: new Date().toISOString()
    };
    
    setBookingData(booking);
    setShowModal(true);
  };
  
  const confirmBooking = async () => {
    try {
      const dayIndex = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].indexOf(bookingData.day);
      const today = new Date();
      const diff = (dayIndex - today.getDay() + 7) % 7 || 7;
      const sessionDate = new Date(today);
      sessionDate.setDate(today.getDate() + diff);

      const [startH, startM] = bookingData.time.split(':').map(Number);
      const endHRaw = startH + bookingData.duration;
      // Cap at 23:59 so the time string is always valid
      const endH = Math.min(endHRaw, 23);
      const endM = endHRaw > 23 ? 59 : startM;
      const endTime = `${String(endH).padStart(2,'0')}:${String(endM).padStart(2,'0')}`;

      const { data } = await api.post(`/tutors/${tutor.id}/bookings`, {
        subject: tutor.subjects?.[0]?.name || 'General',
        sessionDate: sessionDate.toISOString().split('T')[0],
        startTime: bookingData.time,
        endTime,
        durationHours: bookingData.duration,
        totalAmount: bookingData.price,
      });

      setPendingBookingId(data.booking?.id ?? null);
      setShowModal(false);

      if (bookingData.price === 0) {
        toast.success('Free trial session booked!');
        setSelectedTime(null);
        return;
      }
      setShowPayment(true);
    } catch (err) {
      const msg = err.response?.data?.error || 'Failed to create booking. Please try again.';
      toast.error(msg);
    }
  };

  const handlePaymentSuccess = () => {
    toast.success('Payment confirmed! Session booked. Check your dashboard.');
    setShowPayment(false);
    setSelectedTime(null);
    setSelectedDay('Monday');
    setPendingBookingId(null);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setBookingData(null);
  };

  return (
    <section className="px-4 sm:px-6 py-12 border-t" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Book a Session</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Session Type</label>
              <div className="grid grid-cols-3 gap-2">
                {sessionTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSessionType(type.id)}
                    className="p-3 rounded-lg border font-medium transition-all"
                    style={{
                      borderColor: sessionType === type.id ? 'var(--accent-blue)' : 'var(--border-subtle)',
                      background: sessionType === type.id ? 'rgba(96,165,250,0.1)' : 'transparent',
                      color: sessionType === type.id ? 'var(--accent-blue)' : 'var(--text-primary)'
                    }}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block font-medium mb-2">Duration</label>
              <div className="flex flex-wrap gap-2">
                {durations.map(d => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className="px-3 py-2 rounded-lg border font-medium transition-all min-w-[44px] text-center"
                    style={{
                      borderColor: duration === d ? 'var(--accent-blue)' : 'var(--border-subtle)',
                      background: duration === d ? 'rgba(96,165,250,0.1)' : 'transparent',
                      color: duration === d ? 'var(--accent-blue)' : 'var(--text-primary)'
                    }}
                  >
                    {d}h
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="flex items-center gap-2 font-medium mb-2">
                <Globe className="w-4 h-4" />
                Timezone: {tutor.availability.timezone}
              </label>
            </div>
            
            <div className="p-4 rounded-xl" style={{ background: 'rgba(96,165,250,0.05)' }}>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-2xl">{calculatePrice().toLocaleString()}</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>FCFA</span>
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                per {duration} hour{duration > 1 ? 's' : ''} {sessionType === '1on1' ? '1-on-1' : sessionType} session
              </div>
              {sessionType === 'trial' && (
                <div className="mt-2 text-xs font-medium" style={{ color: '#34d399' }}>🎉 First trial session is FREE!</div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block font-medium mb-2">Select Day & Time</label>
            <div className="mb-4 overflow-x-auto">
              <div className="flex gap-2">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
                    style={{
                      borderColor: selectedDay === day ? 'var(--accent-blue)' : 'var(--border-subtle)',
                      background: selectedDay === day ? 'rgba(96,165,250,0.1)' : 'var(--bg-card)',
                      color: selectedDay === day ? 'var(--accent-blue)' : 'var(--text-primary)',
                      border: '1px solid'
                    }}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              {tutor.availability.schedule[selectedDay]?.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className="p-2 rounded-lg border text-sm font-medium transition-all hover:shadow-sm"
                  style={{
                    borderColor: selectedTime === time ? 'var(--accent-blue)' : 'var(--border-subtle)',
                    background: selectedTime === time ? 'rgba(96,165,250,0.1)' : 'var(--bg-card)',
                    color: selectedTime === time ? 'var(--accent-blue)' : 'var(--text-primary)'
                  }}
                >
                  {time}
                </button>
              )) || <p className="col-span-3 text-center py-4" style={{ color: 'var(--text-secondary)' }}>No available slots</p>}
            </div>
            
            <button
              onClick={handleBook}
              disabled={!selectedTime}
              className="w-full py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      {showModal && bookingData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={closeModal}>
          <div className="p-6 rounded-2xl max-w-md w-full animate-scale" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Confirm Booking</h3>
              <button onClick={closeModal} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Tutor</span>
                <span className="font-medium">{bookingData.tutor}</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Date</span>
                <span className="font-medium">{bookingData.day}</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Time</span>
                <span className="font-medium">{bookingData.time}</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Duration</span>
                <span className="font-medium">{bookingData.duration} hour{bookingData.duration > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Session Type</span>
                <span className="font-medium capitalize">{bookingData.sessionType === '1on1' ? '1-on-1' : bookingData.sessionType}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold">Total Price</span>
                <span className="font-bold text-xl" style={{ color: 'var(--accent-blue)' }}>
                  {bookingData.price === 0 ? 'FREE' : `${bookingData.price.toLocaleString()} FCFA`}
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 py-3 rounded-xl font-semibold border transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}
              >
                <Check className="w-5 h-5" />
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Payment modal */}
      <PaymentModal
        open={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
        amount={bookingData?.price ?? 0}
        description={`Session with ${tutor.name} · ${bookingData?.duration} min`}
        type="tutor_booking"
        metadata={{ bookingId: pendingBookingId, tutorId: tutor.id }}
      />
    </section>
  );
}
