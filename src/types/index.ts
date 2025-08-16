// Common types used throughout the application

export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonVariant {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea';
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
}

export interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export interface FeatureBox {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg?: string;
  gradient?: boolean;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  isButton?: boolean;
  variant?: ButtonVariant['variant'];
}

export interface SocialMediaLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

export interface FloatingElement {
  id: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  responsive: {
    mobile: { width: number; height: number };
    tablet: { width: number; height: number };
    desktop: { width: number; height: number };
  };
}

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export interface SectionProps extends BaseComponent {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'transparent' | 'dark' | 'gradient';
}