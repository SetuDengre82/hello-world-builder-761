import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Grid3X3 } from 'lucide-react';
import { ImageSize } from '@/types/profile';
import { ganeshJiOptions } from '@/lib/ganeshJiOptions';

interface ImagesTabProps {
  showGaneshJi: boolean;
  onToggleGaneshJi: (show: boolean) => void;
  selectedGaneshJi: string;
  onSelectGaneshJi: (id: string) => void;
  photoSize: ImageSize;
  onPhotoSizeChange: (size: ImageSize) => void;
  kundliSize: ImageSize;
  onKundliSizeChange: (size: ImageSize) => void;
}

export const ImagesTab = ({
  showGaneshJi,
  onToggleGaneshJi,
  selectedGaneshJi,
  onSelectGaneshJi,
  photoSize,
  onPhotoSizeChange,
  kundliSize,
  onKundliSizeChange
}: ImagesTabProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-[hsl(var(--maroon))]">Images & Ganesh Ji</h3>
        <p className="text-sm text-muted-foreground">Customize images in your biodata</p>
      </div>

      {/* Ganesh Ji Toggle */}
      <div className="p-4 bg-card rounded-lg border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🙏</span>
            <div>
              <Label htmlFor="ganesh-toggle" className="font-medium">Show Ganesh Ji</Label>
              <p className="text-xs text-muted-foreground">Display at top of profile</p>
            </div>
          </div>
          <Switch
            id="ganesh-toggle"
            checked={showGaneshJi}
            onCheckedChange={onToggleGaneshJi}
          />
        </div>
      </div>

      {/* Ganesh Ji Style Selection */}
      {showGaneshJi && (
        <div className="space-y-3">
          <Label className="text-sm font-medium text-[hsl(var(--maroon))]">
            Select Ganesh Ji Style
          </Label>
          <div className="grid grid-cols-2 gap-3">
            {ganeshJiOptions.map(option => (
              <button
                key={option.id}
                onClick={() => onSelectGaneshJi(option.id)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  selectedGaneshJi === option.id
                    ? 'border-[hsl(var(--maroon))] bg-[hsl(var(--maroon))]/5'
                    : 'border-muted hover:border-[hsl(var(--maroon))]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={option.image} 
                    alt={option.name} 
                    className="w-12 h-12 object-contain rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{option.name}</p>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Image Sizes */}
      <div className="space-y-4 pt-4 border-t">
        <Label className="text-lg font-semibold text-[hsl(var(--maroon))]">
          Image Sizes
        </Label>
        
        {/* Profile Photo Size */}
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[hsl(var(--maroon))]" />
            <div>
              <span className="font-medium">Profile Photo</span>
              <p className="text-xs text-muted-foreground">Adjust photo size in biodata</p>
            </div>
          </div>
          <Select value={photoSize} onValueChange={(v) => onPhotoSizeChange(v as ImageSize)}>
            <SelectTrigger className="w-28">
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
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
          <div className="flex items-center gap-3">
            <Grid3X3 className="w-5 h-5 text-[hsl(var(--maroon))]" />
            <div>
              <span className="font-medium">Kundli Image</span>
              <p className="text-xs text-muted-foreground">Adjust kundli size in biodata</p>
            </div>
          </div>
          <Select value={kundliSize} onValueChange={(v) => onKundliSizeChange(v as ImageSize)}>
            <SelectTrigger className="w-28">
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
  );
};
