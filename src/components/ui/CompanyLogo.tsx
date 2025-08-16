'use client';
import React from 'react';
import Image from 'next/image';
import { CompanyLogo as CompanyLogoType } from '@/types';
import { cn } from '@/utils';

interface CompanyLogoProps extends CompanyLogoType {
  className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  logo,
  width,
  height,
  className = ''
}) => {
  return (
    <div className={cn(
      'bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px]',
      'p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px]',
      'flex justify-center items-center',
      'w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px]',
      'transition-all duration-300 hover:bg-[#111111]',
      className
    )}>
      <Image
        src={logo}
        alt={`${name} Logo`}
        width={width}
        height={height}
        className="object-contain"
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </div>
  );
};

export default CompanyLogo;