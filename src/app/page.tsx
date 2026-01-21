import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/landing/home/Hero";
import Image from "next/image";
import Partner from "@/components/landing/Partner";
import IdolCard from "@/components/landing/CaseStudy/IdolCard";
import CaseStudy from "@/components/landing/CaseStudy/CaseStudy";
import CompetitiveAdvantage from "@/components/landing/home/CompetitiveAdvantage";
import ForCreator from "@/components/landing/ForCreator";
import ForBrand from "@/components/landing/ForBrand";
import OurNetwork from "@/components/landing/home/OurNetwork";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurNetwork />
      <CompetitiveAdvantage />
      <ContactSection />
      {/* 
      
      
      <ForCreator />
      <CaseStudy />
      <ForBrand />
      <Partner /> */}
    </div>
  );
}
