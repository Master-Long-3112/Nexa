import ContactSection from "@/components/landing/home/ContactSection";
import Hero from "@/components/landing/home/Hero";
import CompetitiveAdvantage from "@/components/landing/home/CompetitiveAdvantage";
import OurNetwork from "@/components/landing/home/OurNetwork";
import Community from "@/components/landing/home/Community";
import Award from "@/components/landing/home/Award";
import Kols from "@/components/landing/home/Kols";
import Partner from "@/components/landing/home/Partner";
import News from "@/components/landing/home/News";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Hero />
      <OurNetwork />
      <CompetitiveAdvantage />
      <ContactSection />
      <Community />
      <Award />
      <Kols />
      <Partner />
      <News />
    </div>
  );
}
