import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/landing/Hero";
import Image from "next/image";
import Partner from "@/components/landing/Partner";
import IdolCard from "@/components/landing/CaseStudy/IdolCard";
import CaseStudy from "@/components/landing/CaseStudy/CaseStudy";
import CompetitiveAdvantage from "@/components/landing/CompetitiveAdvantage";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CompetitiveAdvantage />
      <CaseStudy />
      <Partner />
      <ContactSection />

      <Footer />
    </div>
  );
}
