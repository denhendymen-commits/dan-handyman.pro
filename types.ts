export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EstimateResponse {
  estimatedPriceRange: string;
  explanation: string;
  difficultyLevel: number;
  materialsNeeded: string[];
  disclaimer: string;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}