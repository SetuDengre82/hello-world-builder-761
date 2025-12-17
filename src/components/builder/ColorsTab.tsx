import { Check } from 'lucide-react';
import { ColorTheme } from '@/types/profile';

export const colorThemes: ColorTheme[] = [
  { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' },
  { id: 'rose-gold', name: 'Rose Gold', primary: '#B76E79', secondary: '#F5E6E8', accent: '#FDF5F6' },
  { id: 'royal-blue', name: 'Royal Blue', primary: '#1E3A5F', secondary: '#C9A227', accent: '#F5F7FA' },
  { id: 'emerald', name: 'Emerald', primary: '#2E7D32', secondary: '#C9A227', accent: '#E8F5E9' },
  { id: 'purple-gold', name: 'Purple & Gold', primary: '#5B2C6F', secondary: '#D4AF37', accent: '#F4ECF7' },
  { id: 'saffron', name: 'Saffron', primary: '#FF6B00', secondary: '#8B0000', accent: '#FFF3E0' },
  { id: 'teal', name: 'Teal', primary: '#008080', secondary: '#B8860B', accent: '#E0F7FA' },
  { id: 'burgundy', name: 'Burgundy', primary: '#722F37', secondary: '#D4AF37', accent: '#FDF4F5' },
  { id: 'navy', name: 'Navy', primary: '#001F3F', secondary: '#C9A227', accent: '#F0F4F8' },
  { id: 'coral', name: 'Coral', primary: '#FF6F61', secondary: '#2C3E50', accent: '#FFF5F4' },
  { id: 'olive', name: 'Olive', primary: '#556B2F', secondary: '#8B4513', accent: '#F5F5DC' },
  { id: 'blush', name: 'Blush', primary: '#DE6FA1', secondary: '#8B4557', accent: '#FFF0F5' },
  { id: 'champagne', name: 'Champagne', primary: '#F7E7CE', secondary: '#8B7355', accent: '#FFFAF0' },
  { id: 'rust', name: 'Rust', primary: '#B7410E', secondary: '#2F4F4F', accent: '#FFF4E6' },
  { id: 'sage', name: 'Sage', primary: '#9CAF88', secondary: '#5F6F52', accent: '#F5F7F3' },
  { id: 'midnight', name: 'Midnight', primary: '#191970', secondary: '#FFD700', accent: '#F0F0FF' },
  { id: 'terracotta', name: 'Terracotta', primary: '#E2725B', secondary: '#5D4037', accent: '#FBE9E7' },
  { id: 'peacock', name: 'Peacock', primary: '#0D5C63', secondary: '#FFB347', accent: '#E0FFFF' },
  { id: 'mahogany', name: 'Mahogany', primary: '#C04000', secondary: '#FFE4B5', accent: '#FFF8F0' },
  { id: 'ivory', name: 'Ivory', primary: '#FFFFF0', secondary: '#8B7355', accent: '#FFFFFF' },
];

interface ColorsTabProps {
  selectedColor: string;
  onSelectColor: (id: string) => void;
}

export const ColorsTab = ({ selectedColor, onSelectColor }: ColorsTabProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-[hsl(var(--maroon))]">Choose Color Theme</h3>
        <p className="text-sm text-muted-foreground">Select from {colorThemes.length} beautiful themes</p>
      </div>

      <div className="grid grid-cols-4 gap-3 max-h-[calc(100vh-350px)] overflow-y-auto pr-2">
        {colorThemes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelectColor(theme.id)}
            className={`relative p-2 rounded-lg transition-all border-2 ${
              selectedColor === theme.id
                ? 'border-[hsl(var(--maroon))] ring-2 ring-[hsl(var(--maroon))]/20'
                : 'border-transparent hover:border-muted'
            }`}
          >
            <div className="flex gap-1 mb-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.primary }} />
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.secondary }} />
              <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: theme.accent }} />
            </div>
            <p className="text-xs font-medium truncate">{theme.name}</p>
            {selectedColor === theme.id && (
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[hsl(var(--maroon))] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
