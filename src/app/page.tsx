import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import CompanyLogos from "@/components/CompanyLogos";
import AboutAdvantages from "@/components/AboutAdvantages";
import Feature from "@/components/FeaturesSection";
import Solutions from "@/components/OurSolution";
import ReviewVideo from "@/components/ReviewVideo";
import IndustryInsights from "@/components/IndustryInsights";
import GlobalLocationsMap from "@/components/GlobalLocationsMap";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-20 ">
      <Hero />
      <CompanyLogos />
      <AboutAdvantages />
      {/* <Feature /> */}
      <Solutions />
      <ImpactSection />
      <ReviewVideo />
      <IndustryInsights />
      <GlobalLocationsMap />
      <CtaBanner />
      <Footer />
    </main>
  );
}
