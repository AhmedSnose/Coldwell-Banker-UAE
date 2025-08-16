'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { handleDownload } from '@/utils';
import { SectionProps } from '@/types';
import { slideInFromBottom, fadeInLeft } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks';
import Button from '@/components/ui/Button';

interface CTASectionProps extends SectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Feel Free to Join our 15 Days Free Trial",
  subtitle = "Love our Our Tool?",
  buttonText = "Download Template",
  backgroundImage = "/images/img_group_134.png",
  className = ''
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className={`relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[60px] sm:-mt-[70px] md:-mt-[80px] lg:-mt-[90px] mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px] z-20 ${className}`}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={slideInFromBottom}
        className="bg-[linear-gradient(135deg,#ff9797_0%,#c084fc_50%,#8053ff_100%)] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[36px] p-[32px] sm:p-[40px] md:p-[48px] lg:p-[56px] relative overflow-hidden shadow-2xl"
      >
        
        {/* Background Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] opacity-70 pointer-events-none">
          <Image
            src={backgroundImage}
            alt="Decorative Pattern"
            fill
            className="object-cover object-right"
          />
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            ...fadeInLeft,
            visible: {
              ...fadeInLeft.visible,
              transition: {
                ...fadeInLeft.visible.transition,
                delay: 0.3,
              },
            },
          }}
          className="relative z-10 flex flex-col justify-center items-start max-w-[60%]"
        >
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-normal leading-[1.3] text-white/90 mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px]">
            {subtitle}
          </p>
          <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-poppins font-semibold leading-[1.15] text-white mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px]">
            {title}
          </h3>
          <Button
            variant="secondary"
            size="md"
            onClick={() => handleDownload()}
            className="bg-[#000000] text-white hover:bg-gray-800 px-[24px] sm:px-[28px] md:px-[32px] lg:px-[36px] py-[10px] sm:py-[12px] md:py-[14px] lg:py-[16px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium rounded-[8px] sm:rounded-[10px] md:rounded-[12px] transition-all duration-300"
          >
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;