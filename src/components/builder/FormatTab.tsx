import { Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const templates: Template[] = [
  { id: 'classic-royal', name: 'Classic Royal', description: 'Traditional with gold borders', icon: '👑' },
  { id: 'modern-minimal', name: 'Modern Minimal', description: 'Clean and contemporary', icon: '✨' },
  { id: 'traditional-mandala', name: 'Traditional Mandala', description: 'Hindi text with mandala patterns', icon: '🕉️' },
  { id: 'elegant-floral', name: 'Elegant Floral', description: 'Soft florals and rounded cards', icon: '🌸' },
  { id: 'royal-peacock', name: 'Royal Peacock', description: 'Dark navy with gold accents', icon: '🦚' },
  { id: 'saffron-traditional', name: 'Saffron Traditional', description: 'Traditional orange theme', icon: '🧡' },
  { id: 'maroon-classic', name: 'Maroon Classic', description: 'Deep maroon elegance', icon: '❤️' },
  { id: 'golden-gradient', name: 'Golden Gradient', description: 'Luxurious gold gradients', icon: '💛' },
  { id: 'emerald-green', name: 'Emerald Green', description: 'Rich emerald tones', icon: '💚' },
  { id: 'purple-royal', name: 'Purple Royal', description: 'Royal purple aesthetics', icon: '💜' },
  { id: 'teal-modern', name: 'Teal Modern', description: 'Modern teal design', icon: '🩵' },
  { id: 'coral-warm', name: 'Coral Warm', description: 'Warm coral sunset vibes', icon: '🧡' },
  { id: 'navy-formal', name: 'Navy Formal', description: 'Formal and professional', icon: '💙' },
  { id: 'rust-vintage', name: 'Rust Vintage', description: 'Vintage rustic charm', icon: '🤎' },
  { id: 'sage-minimalist', name: 'Sage Minimalist', description: 'Calm sage green minimal', icon: '🌿' },
  { id: 'blush-elegant', name: 'Blush Elegant', description: 'Soft blush pink elegance', icon: '🌷' },
  { id: 'champagne-luxury', name: 'Champagne Luxury', description: 'Luxurious champagne gold', icon: '🥂' },
  { id: 'olive-traditional', name: 'Olive Traditional', description: 'Earthy olive tones', icon: '🫒' },
  { id: 'diamond-premium', name: 'Diamond Premium', description: 'Premium diamond sparkle', icon: '💎' },
  { id: 'rainbow-festive', name: 'Rainbow Festive', description: 'Colorful festive celebration', icon: '🌈' },
  { id: 'classic-white', name: 'Classic White', description: 'Clean white elegance', icon: '🤍' },
];

interface FormatTabProps {
  selectedTemplate: string;
  onSelectTemplate: (id: string) => void;
}

export const FormatTab = ({ selectedTemplate, onSelectTemplate }: FormatTabProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-[hsl(var(--maroon))]">Choose Your Format</h3>
        <p className="text-sm text-muted-foreground">Select from {templates.length} unique layouts</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate(template.id)}
            className={`relative p-4 rounded-lg text-left transition-all border-2 ${
              selectedTemplate === template.id
                ? 'border-[hsl(var(--maroon))] bg-[hsl(var(--maroon))]/5'
                : 'border-muted hover:border-[hsl(var(--gold))] bg-card'
            }`}
          >
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[hsl(var(--maroon))] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
            <span className="text-2xl mb-2 block">{template.icon}</span>
            <h4 className="font-medium text-sm">{template.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{template.description}</p>
          </button>
        ))}
      </div>
      
      <div className="pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Selected:</span> {templates.find(t => t.id === selectedTemplate)?.icon}{' '}
          {templates.find(t => t.id === selectedTemplate)?.name}
        </p>
      </div>
    </div>
  );
};
