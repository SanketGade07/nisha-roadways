import { getServiceBySlug, servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Nisha Roadways`,
        description: service.subtitle,
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return <ServiceTemplate service={service} />;
}
