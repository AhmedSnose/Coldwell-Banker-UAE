'use client';
import React from 'react';
import Image from 'next/image';
import { handleDownload } from '@/utils';
import { SectionProps } from '@/types';
import Button from '@/components/ui/Button';

interface GuideSectionProps extends SectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  image?: string;
}

const GuideSection: React.FC<GuideSectionProps> = ({
  title = "We are here to guide and help you at all times",
  subtitle = "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  buttonText = "Download",
  image = "/images/guide-img.png",
  className = ''
}) => {
  return (
    <section className={`flex flex-col lg:flex-row gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] justify-center items-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] relative ${className}`}>
      
      {/* Left Side - Orbital Animation */}
      <div className="flex justify-center items-center w-full lg:w-[55%] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px]">
        <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] aspect-square">
          <Image
            src={image}
            alt="Orbital Animation with Brand Icons"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-[45%] text-center lg:text-left">
        <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-poppins font-semibold leading-[1.1] text-center lg:text-left text-[#ffffff]">
          {title}
        </h2>
        <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-poppins font-normal leading-[1.4] text-center lg:text-left text-[#9e9e9e] w-[90%] mt-[12px] sm:mt-[14px] md:mt-[16px] lg:mt-[18px]">
          {subtitle}
        </p>
        <Button
          variant="primary"
          size="md"
          onClick={() => handleDownload()}
          className="mt-[28px] sm:mt-[32px] md:mt-[38px] lg:mt-[46px] px-[28px] py-[12px] text-[16px] font-medium"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default GuideSection;