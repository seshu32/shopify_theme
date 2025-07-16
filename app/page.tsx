'use client';

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AgricultureSection from '@/components/sections/AgricultureSection';
import CollectionsSection from '@/components/sections/CollectionsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import FarmingTechniques from '@/components/sections/FarmingTechniques';
import ProduceStory from '@/components/sections/ProduceStory';
import FarmToHome from '@/components/sections/FarmToHome';
import TeamSection from '@/components/sections/TeamSection';
import WorksSection from '@/components/sections/WorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ConferenceSection from '@/components/sections/ConferenceSection';
import BlogSection from '@/components/sections/BlogSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <HeroSection />
        <div id="main-content" className="relative z-10">
          <AgricultureSection />
          <CollectionsSection />
          <ProductsSection />
          <FarmingTechniques />
          <ProduceStory />
          <FarmToHome />
          <TeamSection />
          <WorksSection />
          <TestimonialsSection />
          <ConferenceSection />
          <BlogSection />
        </div>
        <FooterSection />
      </div>
    </Layout>
  );
} 