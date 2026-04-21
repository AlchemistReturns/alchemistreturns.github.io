import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { placeholderPosts, getPostBySlug } from "@/lib/blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all placeholder posts
export async function generateStaticParams() {
  return placeholderPosts.map((post) => ({ slug: post.slug }));
}

// Generate per-post metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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

/**
 * Very lightweight Markdown → HTML renderer for placeholder content.
 * This will be replaced by Sanity PortableText renderer after CMS integration.
 */
function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hup])/gm, "")
    .trim();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
                src={post.coverImage}
                alt={post.title}
                width={720}
                height={380}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>
          )}

          <article
            className="blog-post-body"
            /* 
              NOTE: dangerouslySetInnerHTML is used here with our own simple 
              markdown renderer for placeholder content only.
              When Sanity is integrated, this will be replaced with 
              @portabletext/react for safe rendering of rich text.
            */
            dangerouslySetInnerHTML={{
              __html: post.body ? `<p>${renderMarkdown(post.body)}</p>` : "",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
