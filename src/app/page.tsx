"use client"
import Layout from "@/components/layout/Layout"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import GuideSection from "@/components/sections/GuideSection"
import CompaniesSection from "@/components/sections/CompaniesSection"
import CTASection from "@/components/sections/CTASection"
import ContactSection from "@/components/sections/ContactSection"

export default function SquidLandingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />
      {/* Guide Section */}
      <GuideSection />

      {/* Companies Section */}
      <CompaniesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />

    </Layout>
  )
}
