'use client';
import React from 'react';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`w-full mt-[10px] sm:mt-[15px] md:mt-[20px] ${className}`}>
      <div className="w-full">
        {/* Main Footer Content */}
        <div className="w-full bg-global-6">
          <div className="w-full max-w-[1440px] mx-auto px-[15px] sm:px-[22px] md:px-[30px] py-[15px] sm:py-[22px] md:py-[30px]">
            <div className="flex flex-col lg:flex-row justify-center items-end">
              <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[80%] mt-[10px] sm:mt-[15px] md:mt-[20px]">
                {/* Company Info */}
                <div className="flex flex-col gap-[11px] sm:gap-[16px] md:gap-[22px] justify-start items-start w-full lg:w-[26%] mt-[2px] sm:mt-[3px] md:mt-[4px] mb-6 lg:mb-0">
                  <Image
                    src="/images/img_vector_white_a700_52x64.svg"
                    alt="Company Logo"
                    width={28}
                    height={22}
                    className="sm:w-[42px] sm:h-[33px] md:w-[56px] md:h-[44px]"
                  />
                  <p className="text-sm font-poppins font-normal leading-[28px] text-left text-global-1 w-full">
                    A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                  </p>
                </div>

                {/* Sections */}
                <div className="flex flex-col gap-[1px] sm:gap-[1.5px] md:gap-[2px] justify-start items-start w-full lg:w-[42%]">
                  <h3 className="text-base font-poppins font-semibold leading-[24px] text-center text-global-2 mb-2">
                    Sections
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
                    <div className="text-sm font-poppins font-normal leading-[38px] text-left text-global-1 w-full sm:w-[18%]">
                      <p>Home</p>
                      <p>Section One</p>
                      <p>Section Two</p>
                      <p>Section Tree</p>
                    </div>
                    <div className="text-sm font-poppins font-normal leading-[38px] text-left text-global-1 w-full sm:w-[18%]">
                      <p>Home</p>
                      <p>Section One</p>
                      <p>Section Two</p>
                      <p>Section Tree</p>
                    </div>
                    <div className="text-sm font-poppins font-normal leading-[38px] text-left text-global-1 w-full sm:w-[18%]">
                      <p>Home</p>
                      <p>Section One</p>
                      <p>Section Two</p>
                      <p>Section Tree</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="w-full bg-global-1">
          <div className="w-full max-w-[1440px] mx-auto px-[72px] sm:px-[108px] md:px-[144px] py-[13px] sm:py-[19px] md:py-[26px]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <p className="text-sm font-poppins font-normal leading-[21px] text-left text-global-1 mb-[3px] sm:mb-[4px] md:mb-[6px]">
                All Rights Reservd Inkyy.com 2022
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center mr-0 sm:mr-[10px] md:mr-[20px]">
                <button 
                  className="w-[40px] h-[40px] bg-global-6 rounded-[16px] p-[5px] sm:p-[7px] md:p-[10px] hover:opacity-80 transition-opacity duration-200"
                  aria-label="Social Media 1"
                >
                  <Image
                    src="/images/img_group_27.svg"
                    alt="Social Icon 1"
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </button>
                <button 
                  className="w-[40px] h-[40px] bg-global-6 rounded-[16px] p-[6px] sm:p-[9px] md:p-[12px] hover:opacity-80 transition-opacity duration-200"
                  aria-label="Social Media 2"
                >
                  <Image
                    src="/images/img_group_28.svg"
                    alt="Social Icon 2"
                    width={16}
                    height={16}
                    className="w-full h-full"
                  />
                </button>
                <button 
                  className="w-[40px] h-[40px] bg-global-6 rounded-[16px] p-[5px] sm:p-[7px] md:p-[10px] hover:opacity-80 transition-opacity duration-200"
                  aria-label="Social Media 3"
                >
                  <Image
                    src="/images/img_group_29.svg"
                    alt="Social Icon 3"
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;