"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogPostContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: 80px;
  max-width: 800px;
  margin: 80px auto 0;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary.terracotta};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Category = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primary.indigo};
  color: ${({ theme }) => theme.colors.text.light};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
`;

const Meta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  font-size: ${({ theme }) => theme.typography.fontSize.body};

  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin: ${({ theme }) => `${theme.spacing.xl} 0 ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin: ${({ theme }) => `${theme.spacing.xl} 0`};
  }
`;

const ShareSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.background.secondary};
`;

const ShareTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ShareLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ShareLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.terracotta};
  }
`;

// Mock data for the blog post
const blogPost = {
  title: "The Art of Chikankari: Lucknow's Timeless Craft",
  category: "Craft & Culture",
  date: "March 10, 2024",
  readTime: "7 min read",
  image: "/images/blog-chikankari.jpg",
  content: `
    <p>
      Chikankari, the exquisite art of shadow work embroidery, has been synonymous
      with Lucknow's cultural heritage for centuries. This delicate craft, which
      involves creating intricate patterns using white thread on fine muslin,
      has adorned the wardrobes of royalty and continues to captivate fashion
      enthusiasts worldwide.
    </p>

    <h2>The Origins</h2>
    <p>
      The art of Chikankari is believed to have been introduced to Lucknow during
      the Mughal era. Legend has it that Nur Jehan, wife of Mughal Emperor
      Jahangir, was instrumental in popularizing this craft. The technique has
      since been passed down through generations of skilled artisans, each adding
      their own unique interpretations while maintaining the traditional essence.
    </p>

    <img src="/images/chikankari-process.jpg" alt="Chikankari embroidery process" />

    <h2>The Craft Process</h2>
    <p>
      Creating a Chikankari piece is a labor-intensive process that involves
      multiple stages. It begins with block printing the design onto the fabric,
      followed by the actual embroidery work. The fabric is then carefully washed
      to remove the printed marks, revealing the beautiful white-on-white
      embroidery. The entire process can take several weeks to complete,
      depending on the complexity of the design.
    </p>

    <h2>Modern Interpretations</h2>
    <p>
      While traditional Chikankari was primarily done in white thread on white
      fabric, contemporary designers are experimenting with colored threads and
      various fabric types. This evolution has helped keep the craft relevant
      while opening up new possibilities for modern fashion.
    </p>
  `,
};

export default function BlogPostPage() {
  const params = useParams();

  return (
    <BlogPostContainer>
      <BackLink href="/blog">← Back to Journal</BackLink>

      <HeroImage>
        <img src={blogPost.image} alt={blogPost.title} />
      </HeroImage>

      <Category>{blogPost.category}</Category>
      <Title>{blogPost.title}</Title>

      <Meta>
        <span>{blogPost.date}</span>
        <span>•</span>
        <span>{blogPost.readTime}</span>
      </Meta>

      <Content dangerouslySetInnerHTML={{ __html: blogPost.content }} />

      <ShareSection>
        <ShareTitle>Share this article</ShareTitle>
        <ShareLinks>
          <ShareLink
            href="#"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Twitter
          </ShareLink>
          <ShareLink
            href="#"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Facebook
          </ShareLink>
          <ShareLink
            href="#"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            LinkedIn
          </ShareLink>
        </ShareLinks>
      </ShareSection>
    </BlogPostContainer>
  );
}
