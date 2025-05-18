import Footer from '@/components/footer/Footer';
import AboutMe from '@/components/about-me/AboutMe';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';
import Experience from '@/components/experience/Experience';
// import Image from 'next/image';

export default function Home() {
  return (
    <div className="blur-box">
      <ProfileSummary />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}
