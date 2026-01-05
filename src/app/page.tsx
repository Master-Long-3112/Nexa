import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactSection/>
      <Footer/>
      
    </div>
  );
}
