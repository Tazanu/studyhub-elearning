import HeroSection       from '../components/home/HeroSection';
import TrustBar          from '../components/home/TrustBar';
import WhySection        from '../components/home/WhySection';
import CourseDiscovery   from '../components/home/CourseDiscovery';
import HowItWorks        from '../components/home/HowItWorks';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTA          from '../components/home/FinalCTA';
import HomeFooter        from '../components/home/HomeFooter';

export default function Home() {
    return (
        <main id="main-content" tabIndex={-1} style={{ background: 'var(--bg-main)', color: 'var(--text-primary)' }}>
            <HeroSection />
            <TrustBar />
            <WhySection />
            <CourseDiscovery />
            <HowItWorks />
            <TestimonialsSection />
            <FinalCTA />
            <HomeFooter />
        </main>
    );
}
