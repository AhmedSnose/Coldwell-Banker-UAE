'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FLOATING_ELEMENTS } from '@/constants';
import { handleDownload } from '@/utils';
import { scaleIn, floating } from '@/utils/animations';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex justify-center w-full h-[700px] sm:h-[850px] md:h-[1000px] lg:h-[1200px]">
      {/* Gradient Line */}
      <div className="absolute right-[54px] sm:right-[80px] md:right-[107px] lg:right-[130px] top-0 w-[1px] h-[300px] sm:h-[450px] md:h-[600px] lg:h-[768px] bg-[linear-gradient(180deg,#404047_0%,_#40404700_100%)]"></div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 w-screen overflow-visible mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]">
        <Image
          src="/images/img_subtract.png"
          alt="Background"
          width={1440}
          height={474}
          className="w-screen h-[200px] sm:h-[280px] md:h-[360px] lg:h-[500px] object-cover"
          style={{ objectPosition: "center bottom" }}
        />
      </div>

      {/* Header */}
      <Header className="absolute top-0 w-full z-20" />

      {/* Hero Content */}
      <div className="absolute top-[140px] sm:top-[170px] md:top-[200px] lg:top-[230px] w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col justify-start items-center text-center">
          <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[66px] font-poppins font-semibold leading-[1.15] text-[#ffffff] mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[24px] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px]">
            Beautiful Landing Page Design for You
          </h1>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-poppins font-normal leading-[1.4] text-[#9e9e9e] w-full sm:w-[75%] md:w-[55%] lg:w-[45%] mb-[24px] sm:mb-[28px] md:mb-[32px] lg:mb-[36px]">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>

          {/* Download Button */}
          <Button
            variant="primary"
            size="md"
            onClick={() => handleDownload()}
            className="px-[28px] py-[8px] sm:px-[36px] sm:py-[10px] md:px-[44px] md:py-[12px] text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]"
          >
            Download Template
          </Button>
        </div>
      </div>

      {/* Hero Image - Fixed responsive positioning to align with subtract background */}
      <div className="absolute bottom-[20px] sm:bottom-[40px] md:bottom-[60px] lg:bottom-[80px] w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 z-10 left-1/2 transform -translate-x-1/2">
        <div className="relative w-full">
          <Image
            src="/images/hero-img.png"
            alt="Hero Dashboard"
            width={900}
            height={600}
            className="w-full h-auto rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Floating Elements - Animated floating images */}
      {FLOATING_ELEMENTS.map((element, index) => (
        <motion.div
          key={element.id}
          initial="hidden"
          animate="visible"
          variants={{
            ...scaleIn,
            visible: {
              ...scaleIn.visible,
              transition: {
                ...scaleIn.visible.transition,
                delay: 0.8 + index * 0.2,
              },
            },
          }}
          className={`absolute z-10 ${
            element.id === 'ellipse-5' 
              ? 'top-[180px] sm:top-[240px] md:top-[300px] lg:top-[360px] left-[50px] sm:left-[70px] md:left-[90px] lg:left-[110px]'
              : element.id === 'ellipse-3'
              ? 'top-[140px] sm:top-[180px] md:top-[220px] lg:top-[280px] right-[80px] sm:right-[120px] md:right-[160px] lg:right-[200px]'
              : 'top-[100px] sm:top-[140px] md:top-[180px] lg:top-[220px] left-[50%] transform -translate-x-1/2'
          }`}
        >
          <motion.div
            variants={floating}
            animate="animate"
          >
            <Image
              src={element.image}
              alt={element.alt}
              width={element.width}
              height={element.height}
              className={`${
                element.id === 'ellipse-5' 
                  ? 'w-[76px] sm:w-[92px] md:w-[110px] lg:w-[130px] h-[76px] sm:h-[92px] md:h-[110px] lg:h-[130px]'
                  : element.id === 'ellipse-3'
                  ? 'w-[56px] sm:w-[68px] md:w-[80px] lg:w-[96px] h-[56px] sm:h-[68px] md:h-[80px] lg:h-[96px]'
                  : 'w-[48px] sm:w-[56px] md:w-[64px] lg:w-[72px] h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px]'
              }`}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;