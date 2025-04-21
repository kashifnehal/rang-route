"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import CulturalHeritage from "@/components/CulturalHeritage";

const MainContainer = styled.div`
  background-color: #f7f3ee;
  color: #2c2c2c;
`;

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c2c2c;
  text-align: left;
  padding: 0 5%;
  background-color: #f7f3ee;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  line-height: 1.1;
  color: #2c2c2c;
  font-family: "Playfair Display", serif;

  span {
    display: block;
    color: #e2725b;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  line-height: 1.6;
  color: #666;
  font-family: "Inter", sans-serif;
`;

const CTAButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #2c2c2c;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    background-color: #e2725b;
  }
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 968px) {
    height: 400px;
  }
`;

const FeaturedSection = styled.section`
  padding: 8rem 5%;
  background-color: #fff;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    font-size: 3rem;
    font-weight: 300;
    color: #2c2c2c;
    font-family: "Playfair Display", serif;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const CollectionCard = styled(motion.div)`
  position: relative;
  height: 500px;
  background-color: #f7f3ee;
  overflow: hidden;
`;

const CollectionImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.6s ease;

  ${CollectionCard}:hover & {
    transform: scale(1.05);
  }
`;

const CollectionInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  transform: translateY(0);
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    font-family: "Playfair Display", serif;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
    line-height: 1.6;
    font-family: "Inter", sans-serif;
  }

  ${CollectionCard}:hover & {
    transform: translateY(-10px);
  }
`;

const CraftsmanshipSection = styled.section`
  padding: 8rem 5%;
  background-color: #f7f3ee;
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: 300;
    color: #2c2c2c;
    font-family: "Playfair Display", serif;
    margin-bottom: 3rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  h3 {
    font-size: 3.5rem;
    color: #e2725b;
    font-family: "Playfair Display", serif;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
`;

export default function Home() {
  return (
    <>
      <MainContainer>
        <HeroSection>
          <HeroGrid>
            <HeroContent>
              <HeroTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Celebrating
                <span>India's Craft Legacy</span>
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover exquisite ethnic wear that brings together traditional
                craftsmanship and contemporary design, curated from artisans
                across India.
              </HeroSubtitle>
              <CTAButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collections
              </CTAButton>
            </HeroContent>
            <HeroImageContainer
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1583391733956-6c77a0fd0146"
                alt="Traditional Indian Artisan"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </HeroImageContainer>
          </HeroGrid>
        </HeroSection>

        <FeaturedSection>
          <SectionTitle>
            <h2>Regional Collections</h2>
            <p>
              Each piece tells a story of heritage, crafted by artisans who have
              inherited generations of skill and tradition.
            </p>
          </SectionTitle>
          <CollectionsGrid>
            <CollectionCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CollectionImage
                src="https://images.unsplash.com/photo-1585938389612-a552a28d6914"
                alt="Rajasthani Collection"
                fill
              />
              <CollectionInfo>
                <h3>Rajasthani Heritage</h3>
                <p>
                  Vibrant colors and intricate mirror work that reflects the
                  royal legacy of Rajasthan
                </p>
              </CollectionInfo>
            </CollectionCard>

            <CollectionCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CollectionImage
                src="https://images.unsplash.com/photo-1583391733956-6c77a0fd0146"
                alt="Kerala Collection"
                fill
              />
              <CollectionInfo>
                <h3>Kerala Elegance</h3>
                <p>
                  Traditional kasavu and contemporary designs inspired by God's
                  own country
                </p>
              </CollectionInfo>
            </CollectionCard>

            <CollectionCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CollectionImage
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c"
                alt="Bengali Collection"
                fill
              />
              <CollectionInfo>
                <h3>Bengali Sophistication</h3>
                <p>
                  Classic handloom and jamdani weaves that embody Bengali
                  artistry
                </p>
              </CollectionInfo>
            </CollectionCard>
          </CollectionsGrid>
        </FeaturedSection>

        <CraftsmanshipSection>
          <h2>Our Craft Journey</h2>
          <StatsGrid>
            <StatCard>
              <h3>150+</h3>
              <p>Artisan Partners</p>
            </StatCard>
            <StatCard>
              <h3>15</h3>
              <p>Regional Traditions</p>
            </StatCard>
            <StatCard>
              <h3>5000+</h3>
              <p>Unique Designs</p>
            </StatCard>
          </StatsGrid>
        </CraftsmanshipSection>
      </MainContainer>
      <CulturalHeritage />
    </>
  );
}
