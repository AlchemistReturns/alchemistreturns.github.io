import type { BlogPost } from "@/types/blog";

/**
 * Placeholder blog posts.
 * These will be replaced by Sanity CMS queries once Sanity is integrated.
 * Each post mirrors the structure of a Sanity document.
 */
export const placeholderPosts: BlogPost[] = [
  {
    _id: "1",
    title: "Building Resilient Microservices with Kubernetes and RabbitMQ",
    slug: "resilient-microservices-kubernetes-rabbitmq",
    excerpt:
      "A deep-dive into how I architected Valerix — a production-style microservices platform — and the lessons learned about fault tolerance, message queues, and cloud orchestration.",
    coverImage: "/assets/valerix.png",
    publishedAt: "2026-04-10",
    category: "Backend",
    body: `## Introduction

When building Valerix for the BUET CSE Fest 2026 hackathon, the goal was clear: design a microservices architecture that could fail gracefully and recover automatically.

## The Architecture

We used RabbitMQ as our message broker to decouple services, ensuring that a single service crash wouldn't bring the entire system down. Each service published events to a shared exchange, and dead-letter queues captured failed messages for retry.

## Kubernetes Orchestration

Kubernetes gave us the ability to define health checks, resource limits, and auto-scaling policies declaratively. Combined with AWS EKS, rolling deployments meant zero downtime during updates.

## Key Lessons

- **Design for failure first.** Assume every external call will fail.
- **Circuit breakers are essential.** Use them between synchronous HTTP calls.
- **Observability from day one.** Prometheus metrics and Grafana dashboards were invaluable.
`,
  },
  {
    _id: "2",
    title: "AI-Powered Medical Support: What We Built at Future Builders 2025",
    slug: "healthx-future-builders-2025",
    excerpt:
      "How our team built HealthX — an AI-powered application providing medical support to rural Bangladesh — and how Gemini AI made the difference.",
    coverImage: "/assets/healthx.png",
    publishedAt: "2026-03-22",
    category: "AI & ML",
    body: `## The Problem

Bangladesh's Hill Tracts and rural regions have severely limited access to quality medical support. We wanted to build something that could act as a first-line medical aide.

## Our Solution: HealthX

HealthX uses Gemini AI to analyse symptoms, provide preliminary guidance, and escalate urgent cases. The frontend was built in React, backed by Node.js and Firebase for real-time data.

## The Result

We secured 2nd place at Future Builders 2025, but more importantly, we built something with real-world potential. The Gemini integration allowed us to handle nuanced medical queries with surprising accuracy.

## Takeaways

Using a powerful LLM like Gemini as the reasoning core — instead of a custom model — let us focus on UX and integration rather than model training.
`,
  },
  {
    _id: "3",
    title: "Supervised vs Unsupervised Learning: A Practitioner's Perspective",
    slug: "supervised-vs-unsupervised-learning",
    excerpt:
      "After completing Datacamp's ML certifications and applying them in the Agri-Predictive Model project, here's what I actually learned about choosing the right algorithm.",
    coverImage: "/assets/agriculture.png",
    publishedAt: "2026-02-15",
    category: "AI & ML",
    body: `## Overview

When I started the Agri-Predictive Model project, I had to make a fundamental choice: supervised or unsupervised learning?

## Supervised Learning in Practice

With labelled soil data mapped to crop classes, supervised learning was the natural fit. We used RandomForestClassifier from Scikit-learn, tuning hyperparameters with GridSearchCV to achieve strong cross-validated accuracy.

## When Unsupervised Makes Sense

Unsupervised methods like K-Means and hierarchical clustering shine when you need to discover hidden structure — useful for segmenting soil types without predefined labels.

## Conclusion

The right choice depends on your data and goal. When in doubt — and you have labelled data — start supervised. Use unsupervised techniques to explore and validate.
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return placeholderPosts.find((p) => p.slug === slug);
}
