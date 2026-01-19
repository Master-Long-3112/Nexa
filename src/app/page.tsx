import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/landing/Hero";
import Image from "next/image";
import Partner from "@/components/landing/Partner";
import IdolCard from "@/components/landing/CaseStudy/IdolCard";
import CaseStudy from "@/components/landing/CaseStudy/CaseStudy";
import CompetitiveAdvantage from "@/components/landing/CompetitiveAdvantage";
import ForCreator from "@/components/landing/ForCreator";
import ForBrand from "@/components/landing/ForBrand";
import OurNetwork from "@/components/landing/OurNetwork";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OurNetwork />
      <CompetitiveAdvantage />
      <ForCreator />
      <CaseStudy />
      <ForBrand />
      <Partner />
      <ContactSection />

      <Footer />
    </div>
  );
}
