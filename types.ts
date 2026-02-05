import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string; // Added for detailed view
  icon: LucideIcon;
  details?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
}