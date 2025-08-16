import { FeatureBox, CompanyLogo, NavigationItem, SocialMediaLink, FloatingElement } from '@/types';

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home'
  },
  {
    id: 'download',
    label: 'Download Template',
    isButton: true,
    variant: 'primary',
    onClick: () => {
      // Handle download action
      console.log('Download template clicked');
    }
  }
];

// Feature boxes data
export const FEATURE_BOXES: FeatureBox[] = [
  {
    id: 'customizable-1',
    title: 'Fully Customizable',
    description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem',
    icon: '/images/img_vector.svg',
    iconBg: '#222228'
  },
  {
    id: 'customizable-2',
    title: 'Fully Customizable',
    description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem',
    icon: '/images/img_vector_white_a700.svg',
    iconBg: '#222228'
  },
  {
    id: 'customizable-3',
    title: 'Fully Customizable',
    description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem',
    icon: '/images/img_vector_white_a700_46x44.svg',
    gradient: true
  },
  {
    id: 'customizable-4',
    title: 'Fully Customizable',
    description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem',
    icon: '/images/img_vector_white_a700_44x44.svg',
    iconBg: '#222228'
  },
  {
    id: 'customizable-5',
    title: 'Fully Customizable',
    description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem',
    icon: '/images/img_vector_46x44.svg',
    iconBg: '#222228'
  },
  {
    id: 'customizable-6',
    title: 'Fully Customizable',
    description: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem',
    icon: '/images/img_vector_white_a700_42x44.svg',
    iconBg: '#222228'
  }
];

// Company logos
export const COMPANY_LOGOS: CompanyLogo[] = [
  {
    id: 'company-1',
    name: 'Company 1',
    logo: '/images/img_frame.svg',
    width: 58,
    height: 21
  },
  {
    id: 'company-2',
    name: 'Company 2',
    logo: '/images/img_group_96.svg',
    width: 54,
    height: 14
  },
  {
    id: 'company-3',
    name: 'Company 3',
    logo: '/images/img_group_97.svg',
    width: 60,
    height: 12
  },
  {
    id: 'company-4',
    name: 'Company 4',
    logo: '/images/img_group_98.svg',
    width: 48,
    height: 11
  },
  {
    id: 'company-5',
    name: 'Company 5',
    logo: '/images/img_group_99.svg',
    width: 39,
    height: 14
  },
  {
    id: 'company-6',
    name: 'Company 6',
    logo: '/images/img_group_100.svg',
    width: 40,
    height: 13
  }
];

// Social media links
export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    id: 'social-1',
    name: 'Social Media 1',
    icon: '/images/img_group_27.svg',
    url: '#',
    ariaLabel: 'Follow us on Social Media 1'
  },
  {
    id: 'social-2',
    name: 'Social Media 2',
    icon: '/images/img_group_28.svg',
    url: '#',
    ariaLabel: 'Follow us on Social Media 2'
  },
  {
    id: 'social-3',
    name: 'Social Media 3',
    icon: '/images/img_group_29.svg',
    url: '#',
    ariaLabel: 'Follow us on Social Media 3'
  }
];

// Floating elements for hero section
export const FLOATING_ELEMENTS: FloatingElement[] = [
  {
    id: 'ellipse-5',
    image: '/images/Ellipse 5.png',
    alt: 'Floating Element Left',
    width: 130,
    height: 130,
    position: {
      top: '180px',
      left: '50px'
    },
    responsive: {
      mobile: { width: 76, height: 76 },
      tablet: { width: 110, height: 110 },
      desktop: { width: 130, height: 130 }
    }
  },
  {
    id: 'ellipse-3',
    image: '/images/Ellipse 3.png',
    alt: 'Floating Element Right',
    width: 96,
    height: 96,
    position: {
      top: '140px',
      right: '80px'
    },
    responsive: {
      mobile: { width: 56, height: 56 },
      tablet: { width: 80, height: 80 },
      desktop: { width: 96, height: 96 }
    }
  },
  {
    id: 'ellipse-14',
    image: '/images/Ellipse 14.png',
    alt: 'Floating Element Middle',
    width: 64,
    height: 64,
    position: {
      top: '100px',
      left: '50%',
      transform: '-translate-x-1/2'
    },
    responsive: {
      mobile: { width: 48, height: 48 },
      tablet: { width: 64, height: 64 },
      desktop: { width: 72, height: 72 }
    }
  }
];

// App metadata
export const APP_METADATA = {
  title: 'Squid Design Services - Beautiful Landing Page Templates',
  description: 'Professional landing page templates with beautiful design and full customization. Download premium templates for your business.',
  keywords: 'landing page, templates, design, web design, ui/ux, squid design',
  author: 'Squid Design Services',
  url: 'https://squiddesign.com',
  image: '/images/hero-img.png'
};

// Contact form configuration
export const CONTACT_FORM_CONFIG = {
  fields: [
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email' as const,
      placeholder: 'Your Email',
      required: true,
      validation: {
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
      }
    },
    {
      id: 'name',
      name: 'name',
      label: 'Name',
      type: 'text' as const,
      placeholder: 'Name',
      required: true,
      validation: {
        minLength: 2,
        maxLength: 50
      }
    },
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      placeholder: 'Message',
      required: true,
      validation: {
        minLength: 10,
        maxLength: 500
      }
    }
  ]
};

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

// Animation durations
export const ANIMATION_DURATIONS = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms'
};

// Z-index layers
export const Z_INDEX = {
  background: 0,
  content: 10,
  header: 20,
  modal: 50,
  tooltip: 100
};