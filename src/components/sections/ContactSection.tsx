'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContactForm, useScrollAnimation } from '@/hooks';
import { SectionProps } from '@/types';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, bounceIn } from '@/utils/animations';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import TextArea from '@/components/ui/TextArea';

interface ContactSectionProps extends SectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get In Touch",
  subtitle = "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
  className = ''
}) => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    submitMessage,
    updateField,
    submitForm,
    resetForm
  } = useContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  const { ref, controls } = useScrollAnimation();

  if (isSubmitted) {
    return (
      <section className={`flex flex-col lg:flex-row gap-[28px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] justify-center items-start w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] ${className}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bounceIn}
          className="flex flex-col items-center justify-center w-full text-center"
        >
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 max-w-md">
            <div className="text-green-500 text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-4">{submitMessage}</p>
            <Button
              variant="primary"
              size="md"
              onClick={resetForm}
              className="px-6 py-2"
            >
              Send Another Message
            </Button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={ref} className={`flex flex-col lg:flex-row gap-[28px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] justify-center items-start w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] ${className}`}>
      {/* Left Side - Illustration */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInLeft}
        className="relative flex justify-center items-center w-full lg:w-auto h-[340px] sm:h-[420px] md:h-[520px] lg:h-[620px]"
      >
        <Image
          src="/images/img_group_133.svg"
          alt="Contact Illustration"
          width={310}
          height={310}
          className="mt-[12px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px]"
        />
        
        {/* Floating Elements */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } }
          }}
          initial="hidden"
          animate={controls}
          className="absolute bottom-[20px] right-[20px]"
        >
          <Image
            src="/images/Ellipse 14.png"
            alt="Floating Element"
            width={96}
            height={96}
            className="w-[56px] sm:w-[64px] md:w-[78px] lg:w-[96px] h-[56px] sm:h-[64px] md:h-[78px] lg:h-[96px]"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.5 } }
          }}
          initial="hidden"
          animate={controls}
          className="absolute top-[20px] left-[20px]"
        >
          <Image
            src="/images/Ellipse 16.png"
            alt="Floating Element"
            width={64}
            height={64}
            className="w-[38px] sm:w-[44px] md:w-[54px] lg:w-[64px] h-[38px] sm:h-[44px] md:h-[54px] lg:h-[64px]"
          />
        </motion.div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInRight}
        className="flex flex-col justify-start items-center w-full lg:w-auto"
      >
        <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-poppins font-semibold leading-[1.1] text-center text-[#ffffff]">
          {title}
        </h2>
        <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-poppins font-normal leading-[1.4] text-center text-[#9e9e9e] w-[90%] mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[28px]">
          {subtitle}
        </p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate={controls}
          variants={{
            ...staggerContainer,
            visible: {
              ...staggerContainer.visible,
              transition: {
                ...staggerContainer.visible.transition,
                delay: 0.3,
              },
            },
          }}
          className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[22px] w-full max-w-[400px] mt-[24px] sm:mt-[28px] md:mt-[32px] lg:mt-[36px] items-center"
        >
          <motion.div variants={staggerItem} className="w-full">
            <EditText 
              placeholder="Your Email" 
              type="email" 
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              className="w-full h-[48px] sm:h-[52px]"
              required
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={staggerItem} className="w-full">
            <EditText 
              placeholder="Name" 
              type="text" 
              value={formData.name}
              onChange={(value) => updateField('name', value)}
              className="w-full h-[48px] sm:h-[52px]"
              required
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={staggerItem} className="w-full">
            <TextArea 
              placeholder="Message" 
              rows={4} 
              value={formData.message}
              onChange={(value) => updateField('message', value)}
              className="w-full min-h-[120px] sm:min-h-[140px]"
              required
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          {submitMessage && !isSubmitted && (
            <motion.p
              variants={staggerItem}
              className={`text-sm ${submitMessage.includes('error') ? 'text-red-400' : 'text-green-400'}`}
            >
              {submitMessage}
            </motion.p>
          )}

          <motion.div variants={staggerItem}>
            <Button
              variant="primary"
              size="md"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="w-auto mt-[12px] sm:mt-[14px] md:mt-[16px] lg:mt-[18px] px-[28px] py-[10px] text-[12px] font-medium"
            >
              {isSubmitting ? 'Sending...' : 'Get in Touch'}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;