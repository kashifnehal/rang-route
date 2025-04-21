"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: 80px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const BlogCategory = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primary.indigo};
  color: ${({ theme }) => theme.colors.text.light};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const BlogTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.terracotta};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    text-decoration: underline;
  }
`;

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "What to Wear in Leh: A Complete Guide",
    excerpt:
      "Discover the perfect wardrobe essentials for your Leh adventure, from traditional woolens to modern layering techniques.",
    category: "Travel Guide",
    image: "/images/blog-leh.jpg",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "what-to-wear-in-leh",
  },
  {
    id: 2,
    title: "The Art of Chikankari: Lucknow's Timeless Craft",
    excerpt:
      "Explore the intricate world of Chikankari embroidery, its history, and how it's being reimagined for modern fashion.",
    category: "Craft & Culture",
    image: "/images/blog-chikankari.jpg",
    date: "March 10, 2024",
    readTime: "7 min read",
    slug: "art-of-chikankari",
  },
  {
    id: 3,
    title: "Sustainable Fashion: The Indian Way",
    excerpt:
      "Learn about traditional Indian sustainable fashion practices and how they're shaping the future of eco-friendly clothing.",
    category: "Sustainability",
    image: "/images/blog-sustainable.jpg",
    date: "March 5, 2024",
    readTime: "6 min read",
    slug: "sustainable-fashion-indian-way",
  },
  {
    id: 4,
    title: "A Guide to Bandhani: The Art of Tie and Dye",
    excerpt:
      "Dive into the colorful world of Bandhani, from its origins in Gujarat to its modern interpretations in contemporary fashion.",
    category: "Craft & Culture",
    image: "/images/blog-bandhani.jpg",
    date: "February 28, 2024",
    readTime: "8 min read",
    slug: "guide-to-bandhani",
  },
  {
    id: 5,
    title: "Monsoon Fashion: Staying Stylish in the Rain",
    excerpt:
      "Tips and tricks for maintaining your style during the monsoon season, with a focus on quick-dry fabrics and practical accessories.",
    category: "Style Guide",
    image: "/images/blog-monsoon.jpg",
    date: "February 20, 2024",
    readTime: "4 min read",
    slug: "monsoon-fashion-guide",
  },
  {
    id: 6,
    title: "The Rise of Handloom: Supporting Indian Artisans",
    excerpt:
      "How the handloom industry is evolving and how you can support local artisans while building a sustainable wardrobe.",
    category: "Sustainability",
    image: "/images/blog-handloom.jpg",
    date: "February 15, 2024",
    readTime: "6 min read",
    slug: "rise-of-handloom",
  },
];

export default function BlogPage() {
  return (
    <BlogContainer>
      <PageTitle>Culture Journal</PageTitle>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <BlogImage>
                <img src={post.image} alt={post.title} />
              </BlogImage>
            </Link>
            <BlogContent>
              <BlogCategory>{post.category}</BlogCategory>
              <Link href={`/blog/${post.slug}`}>
                <BlogTitle>{post.title}</BlogTitle>
              </Link>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </BlogMeta>
              <ReadMoreLink href={`/blog/${post.slug}`}>
                Read More →
              </ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}
