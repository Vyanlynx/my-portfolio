import Footer from '@/components/footer/Footer';
import AboutMe from '@/components/about-me/AboutMe';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';
// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <ProfileSummary />
      <AboutMe />
      <Footer />
    </div>
  );
}
