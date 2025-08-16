'use client';
import React from 'react';
import { COMPANY_LOGOS } from '@/constants';
import { SectionProps } from '@/types';
import CompanyLogo from '@/components/ui/CompanyLogo';

interface CompaniesSectionProps extends SectionProps {
  title?: string;
}

const CompaniesSection: React.FC<CompaniesSectionProps> = ({
  title = "Companies we Worked With Since 2015",
  className = ''
}) => {
  return (
    <section className={`relative flex justify-center w-full mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] ${className}`}>
      <div className="w-full bg-[#17171b] p-[40px] sm:p-[50px] md:p-[60px] lg:p-[80px] pb-[100px] sm:pb-[110px] md:pb-[120px] lg:pb-[130px]">
        <div className="flex justify-center items-start w-full">
          <div className="flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[48px] justify-start items-center w-[90%]">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-poppins font-semibold leading-[1.15] text-center text-[#ffffff] my-2">
              {title}
            </h2>
            
            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] w-full max-w-[1000px] justify-items-center">
              {COMPANY_LOGOS.map((company) => (
                <CompanyLogo
                  key={company.id}
                  {...company}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;