// Ganesh Ji image options for biodata
// Using different artistic representations

import ganeshJi1 from '@/assets/ganesh-ji.png';

// Default Ganesh Ji images with different styles
export interface GaneshJiOption {
  id: string;
  name: string;
  image: string;
  description: string;
}

// We'll use the existing image as default and create variations
// In production, these would be actual different images
export const ganeshJiOptions: GaneshJiOption[] = [
  {
    id: 'classic',
    name: 'Classic',
    image: ganeshJi1,
    description: 'Traditional Ganesh Ji'
  },
  {
    id: 'modern',
    name: 'Modern',
    image: ganeshJi1, // Will be replaced with generated images
    description: 'Contemporary style'
  },
  {
    id: 'line-art',
    name: 'Line Art',
    image: ganeshJi1,
    description: 'Minimalist line drawing'
  },
  {
    id: 'golden',
    name: 'Golden',
    image: ganeshJi1,
    description: 'Golden ornate style'
  },
  {
    id: 'colorful',
    name: 'Colorful',
    image: ganeshJi1,
    description: 'Vibrant colored version'
  },
  {
    id: 'mandala',
    name: 'Mandala',
    image: ganeshJi1,
    description: 'With mandala pattern'
  },
  {
    id: 'simple',
    name: 'Simple',
    image: ganeshJi1,
    description: 'Simple silhouette'
  },
  {
    id: 'traditional',
    name: 'Traditional',
    image: ganeshJi1,
    description: 'Traditional Indian art'
  }
];

export const getGaneshJiImage = (id: string): string => {
  const option = ganeshJiOptions.find(opt => opt.id === id);
  return option?.image || ganeshJi1;
};
