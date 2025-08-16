'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FeatureBox as FeatureBoxType } from '@/types';
import { cn } from '@/utils';
import { cardHover, scaleIn } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks';

interface FeatureBoxProps extends FeatureBoxType {
  className?: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  title,
  description,
  icon,
  iconBg,
  gradient = false,
  className = ''
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scaleIn}
      whileHover={cardHover}
      className={cn(
        'bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]',
        'p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px]',
        'flex flex-col justify-center items-center',
        'transition-colors duration-300 hover:bg-[#1a1a1f]',
        className
      )}>
      {/* Icon Container */}
      <div className={cn(
        'rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px]',
        'p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px]',
        'flex justify-center items-center',
        'mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]',
        gradient 
          ? 'bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)]'
          : 'bg-[#222228]'
      )}>
        <Image
          src={icon}
          alt="Feature Icon"
          width={26}
          height={26}
          className="sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]"
        />
      </div>

      {/* Content */}
      <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
        {title}
      </h3>
      <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureBox;