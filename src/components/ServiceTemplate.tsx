"use client";

import Footer from "@/components/Footer";
import { ServiceData } from "@/data/services";
import ServiceHero from "./services/ServiceHero";
import ServiceTabs from "./services/ServiceTabs";
import ServiceAbout from "./services/ServiceAbout";
import ServiceBenefits from "./services/ServiceBenefits";
import ServiceSpecs from "./services/ServiceSpecs";
import { useState, useEffect } from "react";

interface ServiceTemplateProps {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionIds = ["about", "benefits", "specs", "process"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        ctaText={service.ctaText}
        heroImage={service.heroImage}
      />

      <ServiceTabs activeTab={activeTab} />

      <main className="flex flex-col">
        <ServiceAbout
          title={service.about.title}
          description={service.about.description}
          stats={service.about.stats}
        />
        <ServiceBenefits
          benefits={service.keyBenefits}
        />

        <ServiceSpecs
          specs={service.technicalSpecs}
        />

        <div id="process" />
      </main>

      <Footer />
    </div>
  );
}

