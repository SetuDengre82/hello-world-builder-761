import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';
import { FamilyDetailsSection, PartnerPreferencesSection, Watermark, KundliDisplay, ProfilePhoto, getImageSize } from './TemplateHelpers';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Helper Components for Set 5
const VelvetItem = ({ label, value }: { label: string; value: string }) => (
  <p className="text-sm"><span className="text-gray-500 text-xs">{label}:</span> <span className="font-medium">{value}</span></p>
);

const VelvetBox = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-4 rounded-2xl backdrop-blur-sm" style={{ backgroundColor: `${color.primary}15`, border: `1px solid ${color.primary}30` }}>
    <h4 className="font-semibold text-sm mb-3" style={{ color: color.secondary }}>{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const JewelRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="flex justify-between py-1 border-b border-gray-100 last:border-0">
    <span className="text-gray-600 text-sm">{label}</span>
    <span className="font-medium text-sm" style={{ color }}>{value}</span>
  </div>
);

const SapphireItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2 text-sm"><span className="text-blue-300/70">{label}:</span><span className="text-white">{value}</span></div>
);

const EmeraldDetail = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <p className="text-sm"><span className="text-gray-500">{label}:</span> <span style={{ color }} className="font-medium">{value}</span></p>
);

const PearlBox = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-4 bg-white/80 backdrop-blur rounded-xl shadow-sm" style={{ borderTop: `3px solid ${color.primary}` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const RubyRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-pink-500" />
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

const TopazItem = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <p className="text-sm border-l-2 pl-2 my-1" style={{ borderColor: color }}><span className="text-gray-500">{label}:</span> {value}</p>
);

const OnyxDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="text-sm text-gray-200"><span className="text-gray-400">{label}:</span> {value}</div>
);

// Template 22: Velvet Luxe
export const VelvetLuxeTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: `linear-gradient(145deg, ${colorTheme.accent}, #fff5f5, ${colorTheme.accent})` }}>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23800020" fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
    <div className="absolute top-0 left-0 right-0 h-2" style={{ background: `linear-gradient(90deg, ${colorTheme.primary}, ${colorTheme.secondary}, ${colorTheme.primary})` }} />
    <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: `linear-gradient(90deg, ${colorTheme.secondary}, ${colorTheme.primary}, ${colorTheme.secondary})` }} />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain drop-shadow-lg" />}
        <h1 className="font-script text-5xl mt-3" style={{ color: colorTheme.secondary }}>विवाह परिचय</h1>
        <p className="font-elegant text-lg mt-1" style={{ color: colorTheme.primary }}>Marriage Biodata</p>
      </div>
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl" style={{ border: `2px solid ${colorTheme.primary}40` }}>
        <div className="flex gap-8 items-start">
          <div className="relative">
            <ProfilePhoto photo={data.profilePhoto} colorTheme={colorTheme} size={data.photoSize} className="rounded-2xl shadow-xl" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colorTheme.primary }}>
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-royal text-3xl" style={{ color: colorTheme.secondary }}>{data.prefix} {data.fullName}</h2>
            <p className="text-lg mt-1" style={{ color: colorTheme.primary }}>{data.occupation}</p>
            <p className="text-sm text-gray-600">{data.annualIncome}</p>
            {data.aboutMe && <p className="mt-3 italic text-gray-600 text-sm border-l-4 pl-3" style={{ borderColor: colorTheme.primary }}>"{data.aboutMe}"</p>}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <VelvetBox title="📋 Personal Details" color={colorTheme}>
            <VelvetItem label="Birth Date" value={`${data.dateOfBirth} (${data.age} years)`} />
            <VelvetItem label="Height / Weight" value={`${data.height} / ${data.weight}`} />
            <VelvetItem label="Complexion" value={data.complexion} />
            <VelvetItem label="Diet" value={data.diet} />
          </VelvetBox>
          <VelvetBox title="🕉️ Religious Details" color={colorTheme}>
            <VelvetItem label="Religion" value={`${data.religion} - ${data.caste}`} />
            <VelvetItem label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} />
            <VelvetItem label="Manglik" value={data.manglikStatus} />
            <VelvetItem label="Rashi / Nakshatra" value={`${data.zodiac} / ${data.nakshatra}`} />
          </VelvetBox>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <VelvetBox title="🎓 Education & Career" color={colorTheme}>
            <p className="font-medium">{data.highestEducation}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </VelvetBox>
          <VelvetBox title="👨‍👩‍👧‍👦 Family Background" color={colorTheme}>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
          </VelvetBox>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-2xl" style={{ background: `linear-gradient(90deg, ${colorTheme.primary}20, ${colorTheme.secondary}20, ${colorTheme.primary}20)` }}>
          <p className="font-medium" style={{ color: colorTheme.secondary }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p className="text-sm text-gray-600 mt-1">📍 {data.city}, {data.state}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 23: Jewel Classic
export const JewelClassicTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: '#fffef8' }}>
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${colorTheme.primary} 1px, transparent 0)`, backgroundSize: '30px 30px' }} />
    <div className="absolute inset-4 border-8" style={{ borderColor: colorTheme.primary, borderStyle: 'double' }} />
    <div className="absolute top-6 left-6 right-6 h-px" style={{ backgroundColor: colorTheme.secondary }} />
    <div className="absolute bottom-6 left-6 right-6 h-px" style={{ backgroundColor: colorTheme.secondary }} />
    <div className="relative z-10 p-12">
      <div className="text-center mb-8">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-24 h-24 mx-auto object-contain" />}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-20" style={{ backgroundColor: colorTheme.primary }} />
          <h1 className="font-display text-4xl tracking-wide" style={{ color: colorTheme.secondary }}>BIODATA</h1>
          <div className="h-px w-20" style={{ backgroundColor: colorTheme.primary }} />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="text-center">
          <ProfilePhoto photo={data.profilePhoto} colorTheme={colorTheme} size={data.photoSize} className="shadow-lg" />
          <h2 className="font-elegant text-xl mt-4" style={{ color: colorTheme.secondary }}>{data.prefix} {data.fullName}</h2>
        </div>
        <div className="flex-1 space-y-2">
          <JewelRow label="Date of Birth" value={`${data.dateOfBirth} (${data.age} years)`} color={colorTheme.primary} />
          <JewelRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
          <JewelRow label="Religion / Caste" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
          <JewelRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
          <JewelRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
          <JewelRow label="Education" value={data.highestEducation} color={colorTheme.primary} />
          <JewelRow label="Occupation" value={`${data.occupation} - ${data.annualIncome}`} color={colorTheme.primary} />
        </div>
      </div>
      {data.aboutMe && <p className="text-center italic text-gray-600 mt-6 px-8">"{data.aboutMe}"</p>}
      <div className="mt-6 p-5 bg-white rounded-lg shadow" style={{ border: `1px solid ${colorTheme.primary}30` }}>
        <h4 className="font-semibold mb-3" style={{ color: colorTheme.secondary }}>Family Details</h4>
        <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} size={data.kundliSize} />
      <div className="mt-6 text-center p-4 rounded-lg" style={{ backgroundColor: `${colorTheme.primary}15` }}>
        <p style={{ color: colorTheme.secondary }}>Contact: {data.contactNumber} | {data.email}</p>
        <p className="text-sm text-gray-600 mt-1">{data.city}, {data.state}</p>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 24: Sapphire Night
export const SapphireNightTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden text-white`} style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}>
    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1), transparent 40%)' }} />
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%234f46e5" fill-opacity="0.1"%3E%3Cpath d="M20 0l20 20-20 20L0 20z"/%3E%3C/g%3E%3C/svg%3E")' }} />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />}
        <h1 className="font-royal text-4xl mt-3 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Marriage Biodata
        </h1>
      </div>
      <div className="backdrop-blur-lg rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex gap-6">
          <ProfilePhoto photo={data.profilePhoto} colorTheme={{...colorTheme, primary: '#6366f1', accent: '#1e1b4b'}} size={data.photoSize} className="rounded-xl" />
          <div className="flex-1">
            <h2 className="text-3xl font-display bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              {data.prefix} {data.fullName}
            </h2>
            <p className="text-blue-300 mt-1">{data.occupation} | {data.annualIncome}</p>
            {data.aboutMe && <p className="mt-3 text-blue-200/70 italic text-sm">"{data.aboutMe}"</p>}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <SapphireItem label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} />
              <SapphireItem label="Height" value={data.height} />
              <SapphireItem label="Religion" value={`${data.religion}, ${data.caste}`} />
              <SapphireItem label="Gotra" value={data.gotra} />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
            <h4 className="text-blue-300 font-semibold mb-2">Education & Career</h4>
            <p className="text-white">{data.highestEducation}</p>
            <p className="text-blue-200/70">{data.workDetail}</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
            <h4 className="text-blue-300 font-semibold mb-2">Family Background</h4>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
          </div>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={{...colorTheme, primary: '#818cf8', accent: '#e0e7ff'}} variant="dark" />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={{...colorTheme, primary: '#6366f1'}} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-blue-200">📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 25: Emerald Garden
export const EmeraldGardenTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: 'linear-gradient(to bottom, #f0fdf4, #dcfce7, #f0fdf4)' }}>
    <div className="absolute top-0 left-0 w-40 h-40 opacity-20" style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }} />
    <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20" style={{ background: 'radial-gradient(circle, #16a34a, transparent)' }} />
    <div className="absolute inset-6 border-2 border-green-600/20 rounded-3xl" />
    <div className="relative z-10 p-10">
      <div className="text-center mb-8">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-script text-5xl mt-3 text-green-800">Marriage Biodata</h1>
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-2xl">🌿</span>
          <div className="h-px w-24 bg-green-600/40" />
          <span className="text-2xl">🌿</span>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl">
        <div className="flex gap-8">
          <ProfilePhoto photo={data.profilePhoto} colorTheme={{...colorTheme, primary: '#16a34a', accent: '#dcfce7'}} size={data.photoSize} className="rounded-2xl shadow-lg" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-green-900">{data.prefix} {data.fullName}</h2>
            <p className="text-green-600 text-lg">{data.occupation} | {data.annualIncome}</p>
            {data.aboutMe && <p className="mt-3 text-gray-600 italic border-l-4 border-green-500 pl-3">"{data.aboutMe}"</p>}
            <div className="mt-4 space-y-1">
              <EmeraldDetail label="Birth" value={`${data.dateOfBirth} (${data.age} years)`} color="#16a34a" />
              <EmeraldDetail label="Height / Weight" value={`${data.height} / ${data.weight}`} color="#16a34a" />
              <EmeraldDetail label="Religion" value={`${data.religion} - ${data.caste}`} color="#16a34a" />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🎓 Education</h4>
            <p>{data.highestEducation}</p>
            <p className="text-gray-600 text-sm">{data.workDetail}</p>
          </div>
          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">🕉️ Religious Details</h4>
            <p>Gotra: {data.gotra} | Manglik: {data.manglikStatus}</p>
            <p>Rashi: {data.zodiac} | Nakshatra: {data.nakshatra}</p>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-xl bg-green-50/50 border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">👨‍👩‍👧‍👦 Family</h4>
          <FamilyDetailsSection data={data} colorTheme={{...colorTheme, primary: '#16a34a'}} showOccupation={true} />
        </div>
        <PartnerPreferencesSection data={data} colorTheme={{...colorTheme, primary: '#16a34a', secondary: '#166534'}} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={{...colorTheme, primary: '#16a34a'}} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-xl bg-green-100">
          <p className="text-green-800">📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 26: Pearl White
export const PearlWhiteTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: 'linear-gradient(180deg, #fafafa, #f5f5f5, #fafafa)' }}>
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(168, 162, 158, 0.1) 0%, transparent 50%)' }} />
    <div className="absolute inset-8" style={{ border: `1px solid ${colorTheme.primary}40` }} />
    <div className="relative z-10 p-12">
      <div className="text-center mb-8">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain opacity-80" />}
        <h1 className="font-elegant text-4xl mt-4 tracking-widest" style={{ color: colorTheme.secondary }}>BIODATA</h1>
        <p className="text-gray-500 text-sm tracking-wider mt-1">विवाह परिचय पत्र</p>
      </div>
      <div className="flex gap-10">
        <div>
          <ProfilePhoto photo={data.profilePhoto} colorTheme={colorTheme} size={data.photoSize} className="rounded shadow-md" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl" style={{ color: colorTheme.primary }}>{data.prefix} {data.fullName}</h2>
          <p className="text-gray-600 mt-1">{data.occupation} | {data.annualIncome}</p>
          {data.aboutMe && <p className="mt-3 text-gray-500 italic text-sm">"{data.aboutMe}"</p>}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <PearlBox title="Personal" color={colorTheme}>
          <p>DOB: {data.dateOfBirth}</p>
          <p>Age: {data.age} years</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </PearlBox>
        <PearlBox title="Religious" color={colorTheme}>
          <p>{data.religion} - {data.caste}</p>
          <p>Gotra: {data.gotra}</p>
          <p>Manglik: {data.manglikStatus}</p>
          <p>Rashi: {data.zodiac}</p>
        </PearlBox>
        <PearlBox title="Education" color={colorTheme}>
          <p>{data.highestEducation}</p>
          <p className="text-gray-600 text-xs">{data.workDetail}</p>
        </PearlBox>
      </div>
      <div className="mt-4">
        <PearlBox title="Family Details" color={colorTheme}>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
        </PearlBox>
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} size={data.kundliSize} />
      <div className="mt-6 text-center py-4" style={{ borderTop: `1px solid ${colorTheme.primary}40` }}>
        <p style={{ color: colorTheme.secondary }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
        <p className="text-gray-500 text-sm mt-1">{data.city}, {data.state}</p>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 27: Ruby Romance
export const RubyRomanceTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: 'linear-gradient(135deg, #fef2f2, #fff1f2, #fef2f2)' }}>
    <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle, #dc2626, transparent)' }} />
    <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle, #be123c, transparent)' }} />
    <div className="absolute inset-4 rounded-3xl" style={{ border: '2px solid rgba(220, 38, 38, 0.2)' }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-script text-5xl mt-3 text-rose-800">💕 Marriage Biodata 💕</h1>
      </div>
      <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <ProfilePhoto photo={data.profilePhoto} colorTheme={{...colorTheme, primary: '#dc2626', accent: '#fef2f2'}} size={data.photoSize} className="rounded-full mx-auto shadow-lg" />
          <h2 className="font-elegant text-3xl mt-4 text-rose-900">{data.prefix} {data.fullName}</h2>
          <p className="text-rose-600">{data.occupation} | {data.annualIncome}</p>
          {data.aboutMe && <p className="mt-3 text-gray-600 italic">"{data.aboutMe}"</p>}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-rose-800 border-b border-rose-200 pb-1">Personal Details</h4>
            <RubyRow label="Birth Date" value={`${data.dateOfBirth} (${data.age}y)`} />
            <RubyRow label="Height / Weight" value={`${data.height} / ${data.weight}`} />
            <RubyRow label="Complexion" value={data.complexion} />
            <RubyRow label="Diet" value={data.diet} />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-rose-800 border-b border-rose-200 pb-1">Religious Details</h4>
            <RubyRow label="Religion" value={`${data.religion} - ${data.caste}`} />
            <RubyRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} />
            <RubyRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} />
          </div>
        </div>
        <div className="mt-6 p-4 rounded-xl bg-rose-50">
          <h4 className="font-semibold text-rose-800 mb-2">👨‍👩‍👧‍👦 Family Background</h4>
          <FamilyDetailsSection data={data} colorTheme={{...colorTheme, primary: '#dc2626'}} showOccupation={true} />
        </div>
        <PartnerPreferencesSection data={data} colorTheme={{...colorTheme, primary: '#dc2626', secondary: '#9f1239'}} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={{...colorTheme, primary: '#dc2626'}} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-xl bg-gradient-to-r from-rose-100 to-pink-100">
          <p className="text-rose-800">📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 28: Topaz Sunshine
export const TopazSunshineTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: 'linear-gradient(to bottom, #fffbeb, #fef3c7, #fffbeb)' }}>
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, rgba(251, 191, 36, 0.3), transparent 50%)' }} />
    <div className="absolute inset-6 rounded-2xl" style={{ border: '3px solid #d97706' }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-display text-4xl mt-3 text-amber-800">☀️ Marriage Biodata ☀️</h1>
      </div>
      <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg">
        <div className="flex gap-6">
          <ProfilePhoto photo={data.profilePhoto} colorTheme={{...colorTheme, primary: '#d97706', accent: '#fffbeb'}} size={data.photoSize} className="rounded-xl shadow-md" />
          <div className="flex-1">
            <h2 className="font-royal text-3xl text-amber-900">{data.prefix} {data.fullName}</h2>
            <p className="text-amber-600 text-lg">{data.occupation}</p>
            <p className="text-amber-500">{data.annualIncome}</p>
            {data.aboutMe && <p className="mt-3 text-gray-600 italic text-sm border-l-4 border-amber-500 pl-3">"{data.aboutMe}"</p>}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <h4 className="font-semibold text-amber-800 mb-2">📋 Personal Info</h4>
            <TopazItem label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} color="#d97706" />
            <TopazItem label="Height / Weight" value={`${data.height} / ${data.weight}`} color="#d97706" />
            <TopazItem label="Complexion" value={data.complexion} color="#d97706" />
            <TopazItem label="Diet" value={data.diet} color="#d97706" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-amber-800 mb-2">🕉️ Religious Info</h4>
            <TopazItem label="Religion" value={`${data.religion} - ${data.caste}`} color="#d97706" />
            <TopazItem label="Gotra" value={data.gotra} color="#d97706" />
            <TopazItem label="Manglik" value={data.manglikStatus} color="#d97706" />
            <TopazItem label="Rashi" value={data.zodiac} color="#d97706" />
          </div>
        </div>
        <div className="mt-4 p-4 rounded-xl bg-amber-50">
          <h4 className="font-semibold text-amber-800 mb-2">🎓 Education & Career</h4>
          <p>{data.highestEducation}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </div>
        <div className="mt-4 p-4 rounded-xl bg-amber-50">
          <h4 className="font-semibold text-amber-800 mb-2">👨‍👩‍👧‍👦 Family</h4>
          <FamilyDetailsSection data={data} colorTheme={{...colorTheme, primary: '#d97706'}} showOccupation={true} />
        </div>
        <PartnerPreferencesSection data={data} colorTheme={{...colorTheme, primary: '#d97706', secondary: '#92400e'}} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={{...colorTheme, primary: '#d97706'}} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-xl bg-amber-100">
          <p className="text-amber-800">📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 29: Onyx Midnight
export const OnyxMidnightTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden text-white`} style={{ background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #1a1a1a)' }}>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 50%)' }} />
    <div className="absolute inset-6 rounded-lg" style={{ border: '1px solid rgba(255,255,255,0.1)' }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-8">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />}
        <h1 className="font-royal text-4xl mt-4 text-white tracking-wider">MARRIAGE BIODATA</h1>
        <div className="w-32 h-px mx-auto mt-2 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      <div className="backdrop-blur rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex gap-8">
          <ProfilePhoto photo={data.profilePhoto} colorTheme={{...colorTheme, primary: '#ffffff', accent: '#2d2d2d'}} size={data.photoSize} className="rounded-lg" />
          <div className="flex-1">
            <h2 className="text-3xl font-display text-white">{data.prefix} {data.fullName}</h2>
            <p className="text-gray-400 mt-1">{data.occupation} | {data.annualIncome}</p>
            {data.aboutMe && <p className="mt-3 text-gray-500 italic text-sm">"{data.aboutMe}"</p>}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <OnyxDetail label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} />
              <OnyxDetail label="Height" value={data.height} />
              <OnyxDetail label="Religion" value={`${data.religion}, ${data.caste}`} />
              <OnyxDetail label="Gotra" value={data.gotra} />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h4 className="text-white/80 font-semibold mb-2">Education & Career</h4>
            <p className="text-gray-300">{data.highestEducation}</p>
            <p className="text-gray-500">{data.workDetail}</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <h4 className="text-white/80 font-semibold mb-2">Family</h4>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
          </div>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={{...colorTheme, primary: '#9ca3af', accent: '#f3f4f6'}} variant="dark" />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={{...colorTheme, primary: '#9ca3af'}} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <p className="text-gray-300">📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 30: Amethyst Dreams
export const AmethystDreamsTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff, #ede9fe, #faf5ff)' }}>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.2), transparent 40%), radial-gradient(circle at 70% 80%, rgba(192, 132, 252, 0.15), transparent 40%)' }} />
    <div className="absolute top-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.15), transparent)' }} />
    <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, rgba(147, 51, 234, 0.15), transparent)' }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-script text-5xl mt-3 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 bg-clip-text text-transparent">
          Marriage Biodata
        </h1>
        <div className="flex justify-center gap-3 mt-2">
          <span className="text-purple-400">✦</span>
          <span className="text-violet-400">✦</span>
          <span className="text-purple-400">✦</span>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl" style={{ border: '2px solid rgba(147, 51, 234, 0.2)' }}>
        <div className="flex gap-8">
          <div className="text-center">
            <ProfilePhoto photo={data.profilePhoto} colorTheme={{...colorTheme, primary: '#9333ea', accent: '#faf5ff'}} size={data.photoSize} className="rounded-2xl shadow-lg" />
            <h2 className="font-elegant text-2xl mt-4 text-purple-900">{data.prefix} {data.fullName}</h2>
            <p className="text-purple-600">{data.occupation}</p>
          </div>
          <div className="flex-1">
            {data.aboutMe && <p className="text-gray-600 italic mb-4 border-l-4 border-purple-500 pl-3">"{data.aboutMe}"</p>}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-purple-50">
                <p className="text-xs text-purple-400">Date of Birth</p>
                <p className="font-medium text-purple-900">{data.dateOfBirth} ({data.age}y)</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-50">
                <p className="text-xs text-purple-400">Height / Weight</p>
                <p className="font-medium text-purple-900">{data.height} / {data.weight}</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-50">
                <p className="text-xs text-purple-400">Religion / Caste</p>
                <p className="font-medium text-purple-900">{data.religion} - {data.caste}</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-50">
                <p className="text-xs text-purple-400">Gotra / Rashi</p>
                <p className="font-medium text-purple-900">{data.gotra} / {data.zodiac}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50">
            <h4 className="font-semibold text-purple-800 mb-2">🎓 Education & Career</h4>
            <p>{data.highestEducation}</p>
            <p className="text-gray-600 text-sm">{data.workDetail}</p>
            <p className="text-purple-600 mt-1">{data.annualIncome}</p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50">
            <h4 className="font-semibold text-purple-800 mb-2">👨‍👩‍👧‍👦 Family Background</h4>
            <FamilyDetailsSection data={data} colorTheme={{...colorTheme, primary: '#9333ea'}} showOccupation={true} />
          </div>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={{...colorTheme, primary: '#9333ea', secondary: '#7c3aed'}} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={{...colorTheme, primary: '#9333ea'}} size={data.kundliSize} />
        <div className="mt-6 text-center p-4 rounded-xl bg-gradient-to-r from-purple-100 via-violet-100 to-purple-100">
          <p className="text-purple-800">📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p className="text-purple-600 text-sm mt-1">{data.city}, {data.state}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);
