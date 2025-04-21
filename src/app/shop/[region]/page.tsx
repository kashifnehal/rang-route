"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const CollectionContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: 80px;
`;

const CollectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CollectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CollectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const FilterGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.primary.indigo};
  border-radius: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary.indigo : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.text.light : theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.indigo};
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.div`
  height: 300px;
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

const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const ProductName = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary.terracotta};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const AddToCartButton = styled(motion.button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary.indigo};
  color: ${({ theme }) => theme.colors.text.light};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

// Mock data for products
const products = [
  {
    id: 1,
    name: "Handwoven Cotton Kurta",
    price: "₹2,499",
    image: "/images/product1.jpg",
    category: "Kurtas",
  },
  {
    id: 2,
    name: "Block Print Maxi Dress",
    price: "₹3,999",
    image: "/images/product2.jpg",
    category: "Dresses",
  },
  {
    id: 3,
    name: "Embroidered Dupatta",
    price: "₹1,999",
    image: "/images/product3.jpg",
    category: "Accessories",
  },
  // Add more products as needed
];

const categories = ["All", "Kurtas", "Dresses", "Accessories"];

export default function CollectionPage({
  params,
}: {
  params: { region: string };
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <CollectionContainer>
      <CollectionHeader>
        <CollectionTitle>
          {params.region.charAt(0).toUpperCase() + params.region.slice(1)}{" "}
          Collection
        </CollectionTitle>
        <CollectionDescription>
          Discover our curated selection of traditional and contemporary pieces
          inspired by the rich cultural heritage of{" "}
          {params.region.charAt(0).toUpperCase() + params.region.slice(1)}.
        </CollectionDescription>
      </CollectionHeader>

      <FilterSection>
        <FilterGroup>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterGroup>
      </FilterSection>

      <ProductsGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <AddToCartButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </CollectionContainer>
  );
}
