'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BaseComponent } from '@/types';
import { pageTransition } from '@/utils/animations';
import Footer from './Footer';

interface LayoutProps extends BaseComponent {
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '',
  showFooter = true 
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={`flex flex-col justify-start items-center w-full bg-[#000000] font-poppins overflow-hidden relative ${className}`}
    >
      {/* Blurred Background Circles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left blurred circle */}
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-black/20 rounded-full blur-[150px] sm:w-[400px] sm:h-[400px] sm:blur-[180px] md:w-[500px] md:h-[500px] md:blur-[220px]"></div>
        {/* Top right blurred circle */}
        <div className="absolute top-[5%] right-[-8%] w-[250px] h-[250px] bg-black/25 rounded-full blur-[120px] sm:w-[350px] sm:h-[350px] sm:blur-[160px] md:w-[450px] md:h-[450px] md:blur-[200px]"></div>
        {/* Center left blurred circle */}
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-black/15 rounded-full blur-[180px] sm:w-[500px] sm:h-[500px] sm:blur-[220px] md:w-[600px] md:h-[600px] md:blur-[260px]"></div>
        {/* Bottom center blurred circle */}
        <div className="absolute bottom-[20%] left-[50%] transform -translate-x-1/2 w-[350px] h-[350px] bg-black/20 rounded-full blur-[170px] sm:w-[450px] sm:h-[450px] sm:blur-[200px] md:w-[550px] md:h-[550px] md:blur-[240px]"></div>
        {/* Bottom right blurred circle */}
        <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-black/25 rounded-full blur-[140px] sm:w-[400px] sm:h-[400px] sm:blur-[180px] md:w-[500px] md:h-[500px] md:blur-[220px]"></div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col justify-start items-center w-full relative z-10">
        {children}
        
        {/* Footer */}
        {showFooter && <Footer />}
      </div>
    </motion.div>
  );
};

export default Layout;