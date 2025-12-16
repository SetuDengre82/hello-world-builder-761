import { useState } from 'react';
import { ProfileData, sampleProfileData } from '@/types/profile';
import * as Templates from '@/components/templates';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormatTab } from './FormatTab';
import { ColorsTab } from './ColorsTab';
import { DetailsTab } from './DetailsTab';
import { LayoutGrid, Palette, FileText, Eye, ZoomIn, ZoomOut, Download } from 'lucide-react';

const templateList = [
  { id: 'classic-royal', component: Templates.ClassicRoyalTemplate },
  { id: 'modern-minimal', component: Templates.ModernMinimalTemplate },
  { id: 'traditional-mandala', component: Templates.TraditionalMandalaTemplate },
  { id: 'elegant-floral', component: Templates.ElegantFloralTemplate },
  { id: 'royal-peacock', component: Templates.RoyalPeacockTemplate },
  { id: 'saffron-traditional', component: Templates.SaffronTraditionalTemplate },
  { id: 'maroon-classic', component: Templates.MaroonClassicTemplate },
  { id: 'golden-gradient', component: Templates.GoldenGradientTemplate },
  { id: 'emerald-green', component: Templates.EmeraldGreenTemplate },
  { id: 'purple-royal', component: Templates.PurpleRoyalTemplate },
  { id: 'teal-modern', component: Templates.TealModernTemplate },
  { id: 'coral-warm', component: Templates.CoralWarmTemplate },
  { id: 'navy-formal', component: Templates.NavyFormalTemplate },
  { id: 'rust-vintage', component: Templates.RustVintageTemplate },
  { id: 'sage-minimalist', component: Templates.SageMinimalistTemplate },
  { id: 'blush-elegant', component: Templates.BlushElegantTemplate },
  { id: 'champagne-luxury', component: Templates.ChampagneLuxuryTemplate },
  { id: 'olive-traditional', component: Templates.OliveTraditionalTemplate },
  { id: 'diamond-premium', component: Templates.DiamondPremiumTemplate },
  { id: 'rainbow-festive', component: Templates.RainbowFestiveTemplate },
  { id: 'classic-white', component: Templates.ClassicWhiteTemplate },
];

export const ProfileBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('classic-royal');
  const [selectedColor, setSelectedColor] = useState('gold-maroon');
  const [showGaneshJi, setShowGaneshJi] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData>(sampleProfileData);
  const [zoom, setZoom] = useState(100);

  const currentTemplate = templateList.find(t => t.id === selectedTemplate);
  const TemplateComponent = currentTemplate?.component;

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] to-[hsl(var(--champagne))]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[hsl(var(--gold))]/20 sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl text-[hsl(var(--maroon))]">Create Your Perfect Biodata</h1>
              <p className="text-sm text-muted-foreground">Choose from 21 unique formats and 20 color themes</p>
            </div>
            <Button onClick={handlePrint} className="bg-[hsl(var(--maroon))] hover:bg-[hsl(var(--maroon))]/90 gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 print:p-0">
        <div className="flex gap-6 print:block">
          {/* Left Panel - Tabs */}
          <div className="w-[400px] shrink-0 print:hidden">
            <div className="bg-white rounded-xl shadow-lg border border-[hsl(var(--gold))]/20 p-4">
              <Tabs defaultValue="format" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="format" className="gap-2 text-xs">
                    <LayoutGrid className="w-4 h-4" />
                    Format
                  </TabsTrigger>
                  <TabsTrigger value="colors" className="gap-2 text-xs">
                    <Palette className="w-4 h-4" />
                    Colors
                  </TabsTrigger>
                  <TabsTrigger value="details" className="gap-2 text-xs">
                    <FileText className="w-4 h-4" />
                    Details
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="format" className="mt-0">
                  <FormatTab 
                    selectedTemplate={selectedTemplate}
                    onSelectTemplate={setSelectedTemplate}
                  />
                </TabsContent>
                
                <TabsContent value="colors" className="mt-0">
                  <ColorsTab 
                    selectedColor={selectedColor}
                    onSelectColor={setSelectedColor}
                    showGaneshJi={showGaneshJi}
                    onToggleGaneshJi={setShowGaneshJi}
                  />
                </TabsContent>
                
                <TabsContent value="details" className="mt-0">
                  <DetailsTab 
                    data={profileData}
                    onChange={setProfileData}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex-1 print:w-full">
            {/* Preview Header */}
            <div className="flex items-center justify-between mb-4 print:hidden">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[hsl(var(--maroon))]" />
                <span className="font-medium text-[hsl(var(--maroon))]">Live Preview</span>
                <span className="text-xs px-2 py-1 bg-[hsl(var(--gold))]/20 rounded-full">
                  {templateList.find(t => t.id === selectedTemplate)?.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => setZoom(Math.max(50, zoom - 10))}>
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm w-14 text-center">{zoom}%</span>
                <Button variant="outline" size="icon" onClick={() => setZoom(Math.min(150, zoom + 10))}>
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Preview Area */}
            <div className="bg-gray-100 rounded-xl p-6 min-h-[800px] flex justify-center overflow-auto print:bg-white print:p-0 print:min-h-0">
              <div 
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                className="shadow-2xl print:shadow-none print:transform-none"
              >
                {TemplateComponent && (
                  <TemplateComponent 
                    data={profileData} 
                    style="" 
                    showGaneshJi={showGaneshJi}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
