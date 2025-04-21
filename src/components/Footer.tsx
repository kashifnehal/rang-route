"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.indigo};
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary.terracotta};
  color: ${({ theme }) => theme.colors.text.light};
  border-radius: 4px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.terracotta};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Rang Route</h3>
          <p>
            Curating region-specific clothing for travelers across India,
            celebrating traditional craftsmanship and contemporary design.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>Shop</li>
            <li>About Us</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <p>
            Subscribe to receive updates on new collections and travel guides.
          </p>
          <NewsletterForm>
            <Input type="email" placeholder="Enter your email" />
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Subscribe
            </Button>
          </NewsletterForm>
        </FooterSection>

        <FooterSection>
          <h3>Connect With Us</h3>
          <SocialLinks>
            <SocialLink
              href="#"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              Instagram
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              Facebook
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              Pinterest
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>
          &copy; {new Date().getFullYear()} Rang Route. All rights reserved.
        </p>
      </Copyright>
    </FooterContainer>
  );
}
