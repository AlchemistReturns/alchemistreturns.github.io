import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";
import { postBySlugQuery, allPostsQuery } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).auto("format").fit("max");
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all Sanity posts
export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery);
  return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}

// Generate per-post metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });
  
  if (!post) return {};
  
  return {
    title: `${post.title} — Abrar Mahmud Hasan`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <div className="blog-post-header" style={{ background: "var(--bg)" }}>
          <div className="container">
            <Link href="/blog" className="back-link">
              <i className="fas fa-arrow-left" aria-hidden="true" /> Back to
              Blog
            </Link>
            <div className="blog-meta">
              <span className="blog-category">{post.category}</span>
              <time className="blog-date" dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1rem",
                maxWidth: "600px",
              }}
            >
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="container">
          {post.coverImage && (
            <div className="blog-post-cover">
              <Image
                src={urlFor(post.coverImage).width(720).url()}
                alt={post.title}
                width={720}
                height={380}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>
          )}

          <article className="blog-post-body">
            {post.body && <PortableText value={post.body} />}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
