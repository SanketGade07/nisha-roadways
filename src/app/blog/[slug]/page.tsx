/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getPostBySlug, getAllPosts, client } from "@/sanity/lib/client";
import BlogContent from "@/components/blog/BlogContent";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage?: any;
    authorImage?: any;
    publishedAt: string;
    author: string;
    authorRole?: string;
    excerpt?: string;
    body: any;
    categories?: string[];
    faqs?: { question: string; answer: string }[];
}

export const revalidate = 60;

// Generate Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slugParam = resolvedParams.slug;

    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    metaDescription,
    "slug": slug.current,
    "thumbnail": mainImage.asset->url,
    excerpt,
    "date": publishedAt,
    "author": author->name,
  }`;

    const post = await client.fetch(query, { slug: slugParam });

    if (!post) {
        return { title: "Blog | Nisha Roadways", description: "This blog post does not exist." };
    }

    return {
        title: post.title,
        description: post.metaDescription || post.excerpt || "Read this article on our blog.",
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: [post.thumbnail].filter(Boolean),
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const blog = await getPostBySlug(slug) as BlogPost;
    const allPosts = await getAllPosts() as BlogPost[];
    const relatedBlogs = allPosts
        .filter((post: BlogPost) => post.slug.current !== slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <BlogContent blog={blog} relatedBlogs={relatedBlogs} />
            <CtaBanner />
            <Footer />
        </main>
    );
}
