import { useState } from 'react';
import { ProfileData, sampleProfileData } from '@/types/profile';
import * as Templates from '@/components/templates';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const templateList = [
  { id: 'classic-royal', name: 'Classic Royal', component: Templates.ClassicRoyalTemplate },
  { id: 'modern-minimal', name: 'Modern Minimal', component: Templates.ModernMinimalTemplate },
  { id: 'traditional-mandala', name: 'Traditional Mandala', component: Templates.TraditionalMandalaTemplate },
  { id: 'elegant-floral', name: 'Elegant Floral', component: Templates.ElegantFloralTemplate },
  { id: 'royal-peacock', name: 'Royal Peacock', component: Templates.RoyalPeacockTemplate },
  { id: 'saffron-traditional', name: 'Saffron Traditional', component: Templates.SaffronTraditionalTemplate },
  { id: 'maroon-classic', name: 'Maroon Classic', component: Templates.MaroonClassicTemplate },
  { id: 'golden-gradient', name: 'Golden Gradient', component: Templates.GoldenGradientTemplate },
  { id: 'emerald-green', name: 'Emerald Green', component: Templates.EmeraldGreenTemplate },
  { id: 'purple-royal', name: 'Purple Royal', component: Templates.PurpleRoyalTemplate },
  { id: 'teal-modern', name: 'Teal Modern', component: Templates.TealModernTemplate },
  { id: 'coral-warm', name: 'Coral Warm', component: Templates.CoralWarmTemplate },
  { id: 'navy-formal', name: 'Navy Formal', component: Templates.NavyFormalTemplate },
  { id: 'rust-vintage', name: 'Rust Vintage', component: Templates.RustVintageTemplate },
  { id: 'sage-minimalist', name: 'Sage Minimalist', component: Templates.SageMinimalistTemplate },
  { id: 'blush-elegant', name: 'Blush Elegant', component: Templates.BlushElegantTemplate },
  { id: 'champagne-luxury', name: 'Champagne Luxury', component: Templates.ChampagneLuxuryTemplate },
  { id: 'olive-traditional', name: 'Olive Traditional', component: Templates.OliveTraditionalTemplate },
  { id: 'diamond-premium', name: 'Diamond Premium', component: Templates.DiamondPremiumTemplate },
  { id: 'rainbow-festive', name: 'Rainbow Festive', component: Templates.RainbowFestiveTemplate },
  { id: 'classic-white', name: 'Classic White', component: Templates.ClassicWhiteTemplate },
];

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(templateList[0].id);
  const [profileData] = useState<ProfileData>(sampleProfileData);

  const currentTemplate = templateList.find(t => t.id === selectedTemplate);
  const TemplateComponent = currentTemplate?.component;

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] to-[hsl(var(--champagne))]">
      <header className="bg-white/80 backdrop-blur-sm border-b border-[hsl(var(--gold))]/20 sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl text-[hsl(var(--maroon))]">Marriage Profile Generator</h1>
          <div className="flex items-center gap-4">
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Template" />
              </SelectTrigger>
              <SelectContent className="bg-white max-h-[300px]">
                {templateList.map(t => (
                  <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handlePrint} className="bg-[hsl(var(--maroon))] hover:bg-[hsl(var(--maroon))]/90">
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-4 gap-4 mb-8 print:hidden">
          {templateList.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTemplate(t.id)}
              className={`p-3 rounded-lg text-sm text-left transition-all ${
                selectedTemplate === t.id
                  ? 'bg-[hsl(var(--maroon))] text-white'
                  : 'bg-white hover:bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/30'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="shadow-2xl print:shadow-none">
            {TemplateComponent && <TemplateComponent data={profileData} style="" />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
