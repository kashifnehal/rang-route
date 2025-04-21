"use client";

import styled from "styled-components";
import Image from "next/image";

const culturalData = [
  {
    region: "Goa",
    title: "Goan Carnival Parade",
    type: "image",
    url: "https://www.pexels.com/photo/colorful-carnival-parade-in-goa-1234567/",
    source: "Pexels",
  },
  {
    region: "Rajasthan",
    title: "Traditional Rajasthani Dance",
    type: "video",
    url: "https://www.pexels.com/video/rajasthani-folk-dance-performance-2345678/",
    source: "Pexels",
  },
  {
    region: "Kerala",
    title: "Kathakali Dance Performance",
    type: "image",
    url: "https://www.pexels.com/photo/kathakali-dancer-in-kerala-3456789/",
    source: "Pexels",
  },
  {
    region: "Punjab",
    title: "Bhangra Dance Celebration",
    type: "video",
    url: "https://www.pexels.com/video/punjabi-bhangra-dance-4567890/",
    source: "Pexels",
  },
  {
    region: "West Bengal",
    title: "Durga Puja Festival",
    type: "image",
    url: "https://www.pexels.com/photo/durga-puja-celebration-in-kolkata-5678901/",
    source: "Pexels",
  },
  {
    region: "Tamil Nadu",
    title: "Bharatanatyam Dance",
    type: "video",
    url: "https://www.pexels.com/video/bharatanatyam-dance-performance-6789012/",
    source: "Pexels",
  },
  {
    region: "Assam",
    title: "Bihu Festival Dance",
    type: "image",
    url: "https://www.pexels.com/photo/bihu-dance-celebration-in-assam-7890123/",
    source: "Pexels",
  },
  {
    region: "Maharashtra",
    title: "Ganesh Chaturthi Procession",
    type: "video",
    url: "https://www.pexels.com/video/ganesh-chaturthi-festival-in-mumbai-8901234/",
    source: "Pexels",
  },
];

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const Region = styled.span`
  color: ${({ theme }) => theme.colors.primary.terracotta};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

const MediaPlaceholder = styled.div<{ isVideo: boolean }>`
  position: relative;
  width: 100%;
  height: 200px;
  background: ${({ theme, isVideo }) =>
    isVideo ? theme.colors.primary.indigo : theme.colors.primary.sandalwood};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

export default function CulturalHeritage() {
  return (
    <Section>
      <Container>
        <Title>Explore India's Cultural Heritage</Title>
        <Grid>
          {culturalData.map((item, index) => (
            <Card key={index}>
              <MediaPlaceholder isVideo={item.type === "video"}>
                {item.type === "video" ? "Video Content" : "Image Content"}
              </MediaPlaceholder>
              <CardContent>
                <Region>{item.region}</Region>
                <CardTitle>{item.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
