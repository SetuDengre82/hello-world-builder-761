import { useState } from 'react';
import { ProfileData, sampleProfileData, ColorTheme, ImageSize } from '@/types/profile';
import * as Templates from '@/components/templates';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormatTab } from './FormatTab';
import { ColorsTab, colorThemes } from './ColorsTab';
import { DetailsTab } from './DetailsTab';
import { LayoutGrid, Palette, FileText, Eye, ZoomIn, ZoomOut, Download, Image, Crown, User, Grid3X3 } from 'lucide-react';
import { exportToPDF, exportAsImage } from '@/lib/pdfExport';
import { ganeshJiOptions, getGaneshJiImage } from '@/lib/ganeshJiOptions';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

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
  const [selectedGaneshJi, setSelectedGaneshJi] = useState('classic');
  const [profileData, setProfileData] = useState<ProfileData>(sampleProfileData);
  const [zoom, setZoom] = useState(70);
  const [isPremium, setIsPremium] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const currentTemplate = templateList.find(t => t.id === selectedTemplate);
  const TemplateComponent = currentTemplate?.component;
  const currentColorTheme = colorThemes.find(c => c.id === selectedColor) || colorThemes[0];
  const ganeshJiImage = getGaneshJiImage(selectedGaneshJi);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportToPDF('biodata-preview', {
        fileName: `${profileData.fullName.replace(/\s+/g, '-')}-biodata`,
        isPremium
      });
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      toast.error('Failed to export PDF. Please try again.');
      console.error(error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportImage = async () => {
    setIsExporting(true);
    try {
      await exportAsImage('biodata-preview', {
        fileName: `${profileData.fullName.replace(/\s+/g, '-')}-biodata`,
        isPremium
      });
      toast.success('Image downloaded successfully!');
    } catch (error) {
      toast.error('Failed to export image. Please try again.');
      console.error(error);
    } finally {
      setIsExporting(false);
    }
  };

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
            <div className="flex items-center gap-3">
              {/* Premium Toggle */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-yellow-50 rounded-lg border border-amber-200">
                <Crown className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-amber-800 font-medium">Premium</span>
                <Switch 
                  checked={isPremium} 
                  onCheckedChange={setIsPremium}
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>
              
              {/* Export Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    className="bg-[hsl(var(--maroon))] hover:bg-[hsl(var(--maroon))]/90 gap-2"
                    disabled={isExporting}
                  >
                    <Download className="w-4 h-4" />
                    {isExporting ? 'Exporting...' : 'Download'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleExportPDF} className="gap-2">
                    <FileText className="w-4 h-4" />
                    Download as PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleExportImage} className="gap-2">
                    <Image className="w-4 h-4" />
                    Download as Image
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 print:p-0">
        <div className="flex gap-6 print:block">
          {/* Left Panel - Tabs */}
          <div className="w-[420px] shrink-0 print:hidden">
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
                  <div className="space-y-4">
                    <ColorsTab 
                      selectedColor={selectedColor}
                      onSelectColor={setSelectedColor}
                      showGaneshJi={showGaneshJi}
                      onToggleGaneshJi={setShowGaneshJi}
                    />
                    
                    {/* Ganesh Ji Selection */}
                    {showGaneshJi && (
                      <div className="pt-3 border-t">
                        <label className="text-sm font-medium text-[hsl(var(--maroon))] mb-2 block">
                          Select Ganesh Ji Style
                        </label>
                        <Select value={selectedGaneshJi} onValueChange={setSelectedGaneshJi}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {ganeshJiOptions.map(option => (
                              <SelectItem key={option.id} value={option.id}>
                                <div className="flex items-center gap-2">
                                  <span>{option.name}</span>
                                  <span className="text-xs text-muted-foreground">- {option.description}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Image Size Controls */}
                    <div className="pt-3 border-t space-y-3">
                      <Label className="text-sm font-medium text-[hsl(var(--maroon))]">
                        Image Sizes
                      </Label>
                      
                      {/* Profile Photo Size */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Profile Photo</span>
                        </div>
                        <Select 
                          value={profileData.photoSize || 'medium'} 
                          onValueChange={(value: ImageSize) => setProfileData({...profileData, photoSize: value})}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Kundli Size */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Grid3X3 className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Kundli</span>
                        </div>
                        <Select 
                          value={profileData.kundliSize || 'medium'} 
                          onValueChange={(value: ImageSize) => setProfileData({...profileData, kundliSize: value})}
                        >
                          <SelectTrigger className="w-24">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
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
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: currentColorTheme.primary + '20', color: currentColorTheme.primary }}>
                  {currentColorTheme.name}
                </span>
                {!isPremium && (
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                    Free (with watermark)
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => setZoom(Math.max(30, zoom - 10))}>
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
                <div id="biodata-preview">
                  {TemplateComponent && (
                    <TemplateComponent 
                      data={profileData} 
                      style="" 
                      showGaneshJi={showGaneshJi}
                      colorTheme={currentColorTheme}
                      isPremium={isPremium}
                      ganeshJiImage={ganeshJiImage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
