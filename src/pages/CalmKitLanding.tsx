import StickyTopBar from '@/components/calm-kit/StickyTopBar';
import HeroSection from '@/components/calm-kit/HeroSection';
import TrustBar from '@/components/calm-kit/TrustBar';
import ProblemSection from '@/components/calm-kit/ProblemSection';
import SolutionSection from '@/components/calm-kit/SolutionSection';
import HowItWorks from '@/components/calm-kit/HowItWorks';
import SocialProof from '@/components/calm-kit/SocialProof';
import Guarantee from '@/components/calm-kit/Guarantee';
import FAQSection from '@/components/calm-kit/FAQSection';
import FinalCTA from '@/components/calm-kit/FinalCTA';
import MobileStickyBar from '@/components/calm-kit/MobileStickyBar';

const CalmKitLanding = () => (
  <div style={{ backgroundColor: '#FAFAF7', color: '#1A1A1A', fontFamily: 'Inter, sans-serif' }} className="min-h-screen">
    <StickyTopBar />
    <HeroSection />
    <TrustBar />
    <ProblemSection />
    <SolutionSection />
    <HowItWorks />
    <SocialProof />
    <Guarantee />
    <FAQSection />
    <FinalCTA />
    <MobileStickyBar />
  </div>
);

export default CalmKitLanding;
