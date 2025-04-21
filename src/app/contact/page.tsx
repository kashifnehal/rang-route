"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: 80px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 8px;
`;

const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InfoItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ContactForm = styled.form`
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary.indigo};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary.indigo};
  border-radius: 4px;
  min-height: 150px;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary.indigo};
  color: ${({ theme }) => theme.colors.text.light};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  cursor: pointer;
`;

const SuccessMessage = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary.jade};
  color: ${({ theme }) => theme.colors.text.light};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show the success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContactContainer>
      <ContactGrid>
        <ContactInfo>
          <ContactTitle>Get in Touch</ContactTitle>
          <InfoItem>
            <h3>Address</h3>
            <p>123 Fashion Street</p>
            <p>Mumbai, Maharashtra 400001</p>
            <p>India</p>
          </InfoItem>
          <InfoItem>
            <h3>Email</h3>
            <p>hello@rangroute.com</p>
            <p>support@rangroute.com</p>
          </InfoItem>
          <InfoItem>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
            <p>+91 98765 43211</p>
          </InfoItem>
          <InfoItem>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Send us a Message</ContactTitle>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>
          {isSubmitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
}
