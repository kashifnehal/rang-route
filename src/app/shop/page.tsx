"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const ShopContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: 80px; // Account for fixed header
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const CollectionCard = styled(motion.div)`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

const CollectionInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: ${({ theme }) => theme.colors.text.light};
`;

const collections = [
  {
    id: 1,
    name: "Goa Collection",
    description: "Light, breezy pieces perfect for coastal vibes",
    image: "/images/goa-collection.jpg",
    slug: "goa",
  },
  {
    id: 2,
    name: "Kashmir Collection",
    description: "Elegant pashmina and woolen essentials",
    image: "/images/kashmir-collection.jpg",
    slug: "kashmir",
  },
  {
    id: 3,
    name: "Rajasthan Collection",
    description: "Vibrant prints and traditional craftsmanship",
    image: "/images/rajasthan-collection.jpg",
    slug: "rajasthan",
  },
  {
    id: 4,
    name: "Kerala Collection",
    description: "Comfortable cotton and handloom weaves",
    image: "/images/kerala-collection.jpg",
    slug: "kerala",
  },
  {
    id: 5,
    name: "Gujarat Collection",
    description: "Colorful bandhani and mirror work",
    image: "/images/gujarat-collection.jpg",
    slug: "gujarat",
  },
  {
    id: 6,
    name: "Himachal Collection",
    description: "Warm woolens and traditional patterns",
    image: "/images/himachal-collection.jpg",
    slug: "himachal",
  },
];

export default function ShopPage() {
  return (
    <ShopContainer>
      <PageTitle>Shop by Region</PageTitle>
      <CollectionsGrid>
        {collections.map((collection) => (
          <Link href={`/shop/${collection.slug}`} key={collection.id}>
            <CollectionCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={collection.image} alt={collection.name} />
              <CollectionInfo>
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
              </CollectionInfo>
            </CollectionCard>
          </Link>
        ))}
      </CollectionsGrid>
    </ShopContainer>
  );
}
