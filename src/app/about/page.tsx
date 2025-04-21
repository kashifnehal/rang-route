"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: 80px;
`;

const HeroSection = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/images/about-hero.jpg") center/cover no-repeat;
  color: ${({ theme }) => theme.colors.text.light};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const ContentSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ValueCard = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 8px;
`;

const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </HeroTitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          At Rang Route, we believe that clothing is more than just fabric—it's
          a story waiting to be told. Our mission is to bridge the gap between
          traditional Indian craftsmanship and contemporary fashion, creating
          pieces that not only look beautiful but also carry the rich heritage
          of India's diverse regions.
        </Paragraph>
        <Paragraph>
          We work directly with artisans across India, ensuring fair wages and
          preserving traditional techniques that have been passed down through
          generations. Each piece in our collection is a testament to the skill
          and dedication of these craftspeople.
        </Paragraph>

        <SectionTitle>Our Values</SectionTitle>
        <ValuesGrid>
          <ValueCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <ValueTitle>Sustainability</ValueTitle>
            <ValueDescription>
              We use eco-friendly materials and processes, minimizing our
              environmental impact while maximizing the longevity of our
              products.
            </ValueDescription>
          </ValueCard>

          <ValueCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <ValueTitle>Artisan Support</ValueTitle>
            <ValueDescription>
              We partner with skilled artisans, providing them with fair wages
              and opportunities to preserve their craft.
            </ValueDescription>
          </ValueCard>

          <ValueCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <ValueTitle>Cultural Heritage</ValueTitle>
            <ValueDescription>
              Each piece celebrates the unique cultural heritage of its region,
              bringing traditional designs to contemporary wardrobes.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>

        <SectionTitle>Our Impact</SectionTitle>
        <Paragraph>
          Since our inception, we've worked with over 50 artisan communities
          across India, supporting more than 200 families. Our commitment to
          sustainable practices has helped preserve traditional techniques while
          creating modern, wearable pieces that resonate with today's conscious
          consumers.
        </Paragraph>
        <Paragraph>
          We're not just selling clothes—we're sharing stories, preserving
          traditions, and building a bridge between India's rich cultural
          heritage and the modern world.
        </Paragraph>
      </ContentSection>
    </AboutContainer>
  );
}
