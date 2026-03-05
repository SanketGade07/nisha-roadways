import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import CompanyLogos from "@/components/CompanyLogos";
import AboutAdvantages from "@/components/AboutAdvantages";
import SpecializedCategories from "@/components/SpecializedCategories";
import Solutions from "@/components/OurSolution";
import ReviewVideo from "@/components/ReviewVideo";
// import BlogSection from "@/components/BlogSection";
import GlobalLocationsMap from "@/components/GlobalLocationsMap";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import IndustryInsights from "@/components/IndustryInsights";

export default function Home() {
  return (
    <main className="pt-20 ">
      <Hero />
      <CompanyLogos />
      <AboutAdvantages />
      <SpecializedCategories />
      {/* <Solutions /> */}
      <ImpactSection />
      <ReviewVideo />
      <IndustryInsights />
      {/* <BlogSection /> */}
      <GlobalLocationsMap />
      <CtaBanner />
      <Footer />
    </main>
  );
}
