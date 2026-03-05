import Footer from "@/components/Footer";
import { ServiceData } from "@/data/services";
import ServiceHero from "./services/ServiceHero";

interface ServiceTemplateProps {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        ctaText={service.ctaText}
        heroImage={service.heroImage}
      />

      <Footer />
    </div>
  );
}