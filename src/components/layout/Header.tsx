'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { NAVIGATION_ITEMS } from '@/constants';
import { NavigationItem } from '@/types';
import { handleDownload } from '@/utils';
import Button from '@/components/ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (item: NavigationItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.id === 'download') {
      handleDownload();
    }
    setMenuOpen(false);
  };

  return (
    <header className={`w-full ${className}`}>
      <div className="w-full max-w-[1110px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mt-[13px] sm:mt-[20px] md:mt-[26px]">
          {/* Logo Section */}
          <div className="flex items-center gap-[4px] sm:gap-[6px] md:gap-[8px]">
            <Image
              src="/images/img_search_white_a700.svg"
              alt="Search Icon"
              width={20}
              height={16}
              className="sm:w-[30px] sm:h-[24px] md:w-[40px] md:h-[32px]"
            />
            <Image
              src="/images/img_squid.svg"
              alt="Squid Logo"
              width={40}
              height={15}
              className="sm:w-[60px] sm:h-[22px] md:w-[80px] md:h-[30px]"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-3" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-global-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent z-50 lg:z-auto border-t lg:border-t-0 border-gray-800`}>
            <div className="flex flex-col lg:flex-row items-center gap-[3px] sm:gap-[4px] md:gap-[6px] p-4 lg:p-0">
              {NAVIGATION_ITEMS.map((item) => (
                item.isButton ? (
                  <Button
                    key={item.id}
                    variant={item.variant || 'primary'}
                    size="sm"
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-poppins font-normal leading-[21px] text-center"
                  >
                    {item.label}
                  </Button>
                ) : (
                  <button
                    key={item.id}
                    role="menuitem"
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-poppins font-normal leading-[21px] text-center text-white hover:text-purple-400 transition-colors duration-200 px-2 py-1"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;