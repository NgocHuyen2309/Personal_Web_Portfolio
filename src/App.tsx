import { Header } from './components/Header';
import { ScrollSpySidebar } from './components/ScrollSpySidebar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { MyStorySection } from './components/MyStorySection';
import { ProjectsSection } from './components/ProjectsSection';
import { CTAPartner } from './components/CTAPartner';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-purple-50 text-purple-950 min-h-screen w-full overflow-x-hidden selection:bg-purple-300 selection:text-purple-950 font-sans relative">
      <Header />
      <ScrollSpySidebar />
      
      <HeroSection />
      <ProfileSection />
      <MyStorySection />
      <ProjectsSection />
      
      {/* Ensure CTA and Footer are wrapped appropriately if needed */}
      <CTAPartner />
      <Footer />
    </main>
  );
}

export default App;
