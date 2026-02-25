/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getPostBySlug, getAllPosts, client } from "@/sanity/lib/client";
import BlogContent from "@/components/blog/BlogContent";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Link from "next/link";

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
export const dynamic = 'force-dynamic';

// Generate Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    try {
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
    } catch {
        return { title: "Blog | Nisha Roadways" };
    }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    try {
        const resolvedParams = await params;
        const { slug } = resolvedParams;

        const blog = await getPostBySlug(slug) as BlogPost;

        if (!blog) {
            return (
                <main className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
                        <Link href="/blog" className="text-blue-600 hover:underline">Back to blog</Link>
                    </div>
                </main>
            );
        }

        const allPosts = (await getAllPosts() || []) as BlogPost[];
        const relatedBlogs = allPosts
            .filter((post: BlogPost) => post && post.slug && post.slug.current !== slug)
            .slice(0, 3);

        return (
            <main className="min-h-screen bg-white">
                <BlogContent blog={blog} relatedBlogs={relatedBlogs} />
                <CtaBanner />
                <Footer />
            </main>
        );
    } catch {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Error loading blog post</h1>
                    <Link href="/blog" className="text-blue-600 hover:underline">Back to blog</Link>
                </div>
            </main>
        );
    }
}
