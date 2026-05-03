"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Smile, Users, Utensils, Wine, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "Menu", id: "#menu" },
        { name: "Experience", id: "#about" },
        { name: "Testimonials", id: "#testimonials" },
      ]}
      brandName="Authentic Georgian"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Authentic Georgian Experience"
      description="Discover the soul of Georgia in the heart of Samarkand. A timeless journey of flavors in a premium, welcoming atmosphere."
      buttons={[{ text: "Reserve a Table", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-wooden-dining-room-with-modern-lighting-generated-by-ai_188544-29879.jpg"
      imageAlt="Georgian Fine Dining Interior"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Heritage"
      metrics={[
        { icon: Utensils, label: "Years of Tradition", value: "15+" },
        { icon: Smile, label: "Happy Guests", value: "10k+" },
        { icon: Award, label: "Authentic Dishes", value: "50+" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="The Premium Difference"
      description="We blend traditional Georgian techniques with world-class hospitality."
      features={[
        {
          title: "Expert Chefs",          description: "Authentic Georgian masters crafting every dish with care.",          media: { imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-dish_1150-1361.jpg" },
          items: [{ icon: CheckCircle, text: "Certified Master Chefs" }, { icon: CheckCircle, text: "Traditional Techniques" }],
          reverse: false
        }
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Classic Khachapuri", price: "$15", imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-egg-bread-fresh-off-oven-with-milk-wooden-desk-dough-bake-bread-bun-eggs_140725-74804.jpg" },
        { id: "p2", name: "Signature Khinkali", price: "$12", imageSrc: "http://img.b2bpic.net/free-photo/azerbaijani-dushbere-khingal-inside-pottery-bowl-with-herbs_114579-3623.jpg" },
        { id: "p3", name: "Grilled Meat Platter", price: "$28", imageSrc: "http://img.b2bpic.net/free-photo/assortment-thanksgiving-day-delicious-dinner_23-2149100162.jpg" },
      ]}
      title="Signature Flavors"
      description="A curated preview of our beloved traditional offerings."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Elena P.", role: "Traveler", company: "France", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-presents-girl-ring_1398-4220.jpg" },
        { id: "2", name: "Mark S.", role: "Foodie", company: "UK", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081870.jpg" },
      ]}
      title="Guest Experiences"
      description="Stories from our valued guests."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "20+", description: "Authentic recipes mastered" },
        { id: "m2", value: "12", description: "Georgian wine regions represented" },
        { id: "m3", value: "4.9", description: "Average guest satisfaction score" },
      ]}
      title="Our Impact"
      description="Celebrating our journey and guest satisfaction."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Table"
      description="Ready to experience the best Georgian cuisine? Reserve your spot today."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-young-woman-smiling-with-female-bartender-bar-counter_23-2147936179.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Authentic Georgian"
      columns={[
        { title: "Visit Us", items: [{ label: "Samarkand Center, Uzbekistan", href: "#" }] },
        { title: "Navigation", items: [{ label: "Home", href: "#hero" }, { label: "Menu", href: "#menu" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}