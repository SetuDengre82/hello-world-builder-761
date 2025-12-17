// Ganesh Ji image options for biodata
// Using different artistic representations

import ganeshJiClassic from '@/assets/ganesh-ji-classic.png';
import ganeshJiModern from '@/assets/ganesh-ji-modern.png';
import ganeshJiLineart from '@/assets/ganesh-ji-lineart.png';
import ganeshJiGolden from '@/assets/ganesh-ji-golden.png';
import ganeshJiColorful from '@/assets/ganesh-ji-colorful.png';
import ganeshJiMandala from '@/assets/ganesh-ji-mandala.png';
import ganeshJiSimple from '@/assets/ganesh-ji-simple.png';
import ganeshJiTraditional from '@/assets/ganesh-ji-traditional.png';

// Default Ganesh Ji images with different styles
export interface GaneshJiOption {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const ganeshJiOptions: GaneshJiOption[] = [
  {
    id: 'classic',
    name: 'Classic',
    image: ganeshJiClassic,
    description: 'Traditional red & gold style'
  },
  {
    id: 'modern',
    name: 'Modern',
    image: ganeshJiModern,
    description: 'Contemporary minimalist'
  },
  {
    id: 'line-art',
    name: 'Line Art',
    image: ganeshJiLineart,
    description: 'Elegant line drawing'
  },
  {
    id: 'golden',
    name: 'Golden',
    image: ganeshJiGolden,
    description: 'Luxurious golden finish'
  },
  {
    id: 'colorful',
    name: 'Colorful',
    image: ganeshJiColorful,
    description: 'Vibrant festive colors'
  },
  {
    id: 'mandala',
    name: 'Mandala',
    image: ganeshJiMandala,
    description: 'With mandala pattern'
  },
  {
    id: 'simple',
    name: 'Simple',
    image: ganeshJiSimple,
    description: 'Clean silhouette'
  },
  {
    id: 'traditional',
    name: 'Traditional',
    image: ganeshJiTraditional,
    description: 'Rajasthani art style'
  }
];

export const getGaneshJiImage = (id: string): string => {
  const option = ganeshJiOptions.find(opt => opt.id === id);
  return option?.image || ganeshJiClassic;
};
