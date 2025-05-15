import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import PortfolioSection from "@/components/sections/Portfolio";
import ClientsSection from "@/components/sections/Clients";
import TeamSection from "@/components/sections/Team";
import TestimonialsSection from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
