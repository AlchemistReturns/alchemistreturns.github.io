import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from '@/sanity/client'
import { allPostsQuery } from '@/sanity/queries'
export const revalidate = 60 // ISR: revalidate every 60s

export const metadata: Metadata = {
  title: "Blog — Abrar Mahmud Hasan",
  description:
    "Thoughts on backend engineering, AI, distributed systems, and software craft by Abrar Mahmud Hasan.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <>
      <Navbar />
      <main>
        <div className="blog-page-header">
          <div className="container">
            <h1 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Blog
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                maxWidth: "480px",
                margin: 0,
              }}
            >
              Thoughts on backend engineering, AI, distributed systems, and the
              craft of building software that lasts.
            </p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="blog-grid">
              {posts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="card blog-card"
                  aria-label={`Read: ${post.title}`}
                >
                  {post.coverImage && (
                    <div className="blog-thumb">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={720}
                        height={200}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  )}
                  <div className="blog-body">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <time className="blog-date" dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <span className="blog-read-more">
                      Read more{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
