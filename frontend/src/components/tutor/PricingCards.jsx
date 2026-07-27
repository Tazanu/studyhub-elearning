import { Check, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PaymentModal from './PaymentModal';

export default function PricingCards({ pricing, scrollToBooking }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentPlan, setPaymentPlan] = useState(null);

  const handleChoosePlan = (plan) => {
    if (!user) { toast.error('Please log in to choose a plan'); navigate('/login'); return; }
    setPaymentPlan(plan);
  };

  const handlePaymentSuccess = () => {
    setSelectedPlan(paymentPlan.key);
    setPaymentPlan(null);
    toast.success(`${paymentPlan.name} activated!`);
    if (scrollToBooking) setTimeout(() => scrollToBooking(), 500);
  };

  const plans = [
    { key: 'single',   name: 'Single Session', ...pricing.single,   price: Math.round(pricing.single.price)   },
    { key: 'monthly',  name: 'Monthly Pack',   ...pricing.monthly,  price: Math.round(pricing.monthly.price)  },
    { key: 'semester', name: 'Semester Bundle',...pricing.semester,  price: Math.round(pricing.semester.price) },
  ];

  return (
    <section className="px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Pricing Plans</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Choose the plan that works best for you</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div
              key={plan.key}
              className="p-6 rounded-2xl border transition-all hover:shadow-xl relative"
              style={{
                background: 'var(--bg-card)',
                borderColor: plan.badge ? 'var(--accent-blue)' : 'var(--border-subtle)',
                borderWidth: plan.badge ? '2px' : '1px',
                transform: plan.badge ? 'scale(1.03)' : 'scale(1)',
                margin: plan.badge ? '0 auto' : undefined,
                maxWidth: plan.badge ? '100%' : undefined
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1" style={{ background: 'linear-gradient(135deg, #0052cc, #0066ff)' }}>
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1" style={{ color: 'var(--accent-blue)' }}>
                  {plan.price.toLocaleString()}
                  <span className="text-lg font-normal" style={{ color: 'var(--text-secondary)' }}> FCFA</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{plan.sessions} session{plan.sessions > 1 ? 's' : ''}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#34d399' }} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleChoosePlan(plan)}
                className="w-full py-3 rounded-xl font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: plan.badge ? 'linear-gradient(135deg, #0052cc, #0066ff)' : (selectedPlan === plan.key ? 'rgba(96,165,250,0.1)' : 'var(--bg-main)'),
                  color: plan.badge ? 'white' : (selectedPlan === plan.key ? 'var(--accent-blue)' : 'var(--text-primary)'),
                  border: plan.badge ? 'none' : `2px solid ${selectedPlan === plan.key ? 'var(--accent-blue)' : 'var(--border-subtle)'}`
                }}
              >
                {selectedPlan === plan.key ? '✓ Active' : `Pay ${plan.price.toLocaleString()} FCFA`}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          🔒 Secured by MeSomb · MTN MoMo & Orange Money
        </div>
      </div>

      <PaymentModal
        open={!!paymentPlan}
        onClose={() => setPaymentPlan(null)}
        onSuccess={handlePaymentSuccess}
        amount={paymentPlan?.price ?? 0}
        description={paymentPlan ? `${paymentPlan.name} · ${paymentPlan.sessions} session${paymentPlan.sessions > 1 ? 's' : ''}` : ''}
        type="pricing_plan"
        metadata={{ plan: paymentPlan?.key }}
      />
    </section>
  );
}
