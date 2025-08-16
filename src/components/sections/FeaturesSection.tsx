'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURE_BOXES } from '@/constants';
import { SectionProps } from '@/types';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks';
import FeatureBox from '@/components/ui/FeatureBox';

interface FeaturesSectionProps extends SectionProps {
  title?: string;
  subtitle?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = "Feature Boxes",
  subtitle = "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  className = ''
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className={`w-full ${className}`}>
      {/* Section Header */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px]"
      >
        <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] font-poppins font-semibold leading-[1.15] text-[#ffffff] mb-[4px] sm:mb-[8px] md:mb-[12px] text-left">
          {title}
        </h2>
        <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-poppins font-normal leading-[1.4] text-left text-[#9e9e9e] w-full sm:w-[70%] md:w-[55%] lg:w-[45%]">
          {subtitle}
        </p>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[24px] sm:mt-[32px] md:mt-[40px] lg:mt-[48px]"
      >
        {FEATURE_BOXES.map((feature) => (
          <FeatureBox
            key={feature.id}
            {...feature}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;