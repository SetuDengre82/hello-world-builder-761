import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';
import { FamilyDetailsSection, PartnerPreferencesSection, Watermark, KundliDisplay } from './TemplateHelpers';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Helper Components
const BlushRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <p><span style={{ color }} className="font-medium">{label}:</span> {value}</p>
);

const BlushBox = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-4 rounded-xl" style={{ backgroundColor: `${color.primary}10` }}>
    <h4 className="font-semibold mb-2" style={{ color: color.secondary }}>{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const ChampagneItem = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <p className="text-sm"><span className="text-gray-500">{label}:</span> <span style={{ color }}>{value}</span></p>
);

const ChampagneBox = ({ title, color, children, className = '' }: { title: string; color: ColorTheme; children: React.ReactNode; className?: string }) => (
  <div className={`p-4 bg-white shadow rounded ${className}`} style={{ borderLeft: `3px solid ${color.primary}` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const ChampagneDetail = ({ label, value }: { label: string; value: string }) => (
  <p className="text-sm"><span className="text-gray-500">{label}:</span> {value}</p>
);

const OliveRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <tr><td className="py-0.5 text-gray-600 w-28">{label}</td><td className="font-medium">{value}</td></tr>
);

const OliveBox = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-3 bg-white rounded" style={{ border: `1px solid ${color.primary}40` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-xs space-y-1">{children}</div>
  </div>
);

const DiamondItem = ({ label, value }: { label: string; value: string }) => (
  <div><span className="text-gray-500 text-xs">{label}</span><p className="text-gray-300">{value}</p></div>
);

const DiamondBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
    <h4 className="font-semibold text-sm mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-white">{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const RainbowBox = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-3 rounded-xl" style={{ backgroundColor: `${color.primary}10` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-xs space-y-1">{children}</div>
  </div>
);

// Template 16: Blush Elegant
export const BlushElegantTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-floral opacity-20" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain" />}
        <h1 className="font-script text-5xl mt-2" style={{ color: colorTheme.secondary }}>Marriage Biodata</h1>
      </div>
      <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl">
        <div className="flex gap-8">
          <div className="w-40 h-52 rounded-2xl overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h2 className="font-elegant text-3xl italic" style={{ color: colorTheme.secondary }}>{data.prefix} {data.fullName}</h2>
            <p style={{ color: colorTheme.primary }} className="mt-1">{data.occupation} | {data.annualIncome}</p>
            <div className="mt-4 space-y-1 text-sm">
              <BlushRow label="Birth" value={`${data.dateOfBirth} (${data.age}y)`} color={colorTheme.primary} />
              <BlushRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
              <BlushRow label="Religion" value={`${data.religion} - ${data.caste}`} color={colorTheme.primary} />
              <BlushRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
              <BlushRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
            </div>
          </div>
        </div>
        {data.aboutMe && <p className="mt-4 text-center italic text-gray-600">"{data.aboutMe}"</p>}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <BlushBox title="Education & Career" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </BlushBox>
          <BlushBox title="Family Details" color={colorTheme}>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
          </BlushBox>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-6 text-center p-4 rounded-xl" style={{ backgroundColor: `${colorTheme.primary}20` }}>
          <p style={{ color: colorTheme.secondary }}>✆ {data.contactNumber} | ✉ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 17: Champagne Luxury
export const ChampagneLuxuryTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-mandala opacity-20" />
    <div className="absolute inset-3" style={{ border: `2px solid ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-royal text-3xl tracking-wider mt-2" style={{ color: colorTheme.primary }}>VIVAH BIODATA</h1>
      </div>
      <div className="flex gap-6">
        <div className="w-40 h-52 bg-white shadow-lg overflow-hidden" style={{ border: `4px solid ${colorTheme.primary}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl text-gray-800">{data.prefix} {data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
          {data.aboutMe && <p className="mt-2 text-sm italic text-gray-600">"{data.aboutMe}"</p>}
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <ChampagneItem label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} color={colorTheme.primary} />
            <ChampagneItem label="Height" value={data.height} color={colorTheme.primary} />
            <ChampagneItem label="Religion" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
            <ChampagneItem label="Gotra" value={data.gotra} color={colorTheme.primary} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <ChampagneBox title="Education" color={colorTheme}>
          <p>{data.highestEducation}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </ChampagneBox>
        <ChampagneBox title="Religion & Horoscope" color={colorTheme}>
          <ChampagneDetail label="Manglik" value={data.manglikStatus} />
          <ChampagneDetail label="Rashi" value={`${data.zodiac}, ${data.nakshatra}`} />
        </ChampagneBox>
      </div>
      <ChampagneBox title="Family Background" color={colorTheme} className="mt-4">
        <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
      </ChampagneBox>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      <div className="mt-4 p-4 text-center" style={{ backgroundColor: `${colorTheme.primary}20` }}>
        <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 18: Olive Traditional
export const OliveTraditionalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: `linear-gradient(to bottom, ${colorTheme.accent}, ${colorTheme.primary}20)` }}>
    <div className="absolute inset-0 pattern-paisley opacity-20" />
    <div className="absolute inset-4" style={{ border: `4px solid ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-hindi text-xl mt-2" style={{ color: colorTheme.primary }}>॥ श्री गणेशाय नमः ॥</h1>
        <h2 className="font-display text-3xl text-gray-800 mt-1">Marriage Profile</h2>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex gap-6">
          <div className="w-36 h-44 overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl" style={{ color: colorTheme.primary }}>{data.prefix} {data.fullName}</h3>
            {data.aboutMe && <p className="text-sm italic text-gray-600 mt-1">"{data.aboutMe}"</p>}
            <table className="w-full mt-3 text-sm">
              <tbody>
                <OliveRow label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} color={colorTheme.primary} />
                <OliveRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
                <OliveRow label="Religion/Caste" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
                <OliveRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
                <OliveRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <OliveBox title="Education & Profession" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p>{data.occupation} - {data.annualIncome}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </OliveBox>
          <OliveBox title="Family" color={colorTheme}>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
          </OliveBox>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-4 p-3 rounded text-center" style={{ backgroundColor: `${colorTheme.primary}15` }}>
          <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 19: Diamond Premium
export const DiamondPremiumTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, #1a1a2e, ${colorTheme.secondary})` }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain brightness-150" />}
        <h1 className="font-royal text-3xl tracking-wider mt-2" style={{ background: `linear-gradient(90deg, ${colorTheme.accent}, white, ${colorTheme.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          PREMIUM BIODATA
        </h1>
      </div>
      <div className="backdrop-blur-md rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex gap-6">
          <div className="w-40 h-52 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl" style={{ background: `linear-gradient(90deg, ${colorTheme.accent}, white)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {data.prefix} {data.fullName}
            </h2>
            <p className="text-gray-400 mt-1">{data.occupation} | {data.annualIncome}</p>
            {data.aboutMe && <p className="mt-2 text-sm italic text-gray-400">"{data.aboutMe}"</p>}
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <DiamondItem label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} />
              <DiamondItem label="Height" value={data.height} />
              <DiamondItem label="Religion" value={`${data.religion}, ${data.caste}`} />
              <DiamondItem label="Gotra" value={data.gotra} />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <DiamondBox title="Education & Career">
            <p>{data.highestEducation}</p>
            <p className="text-gray-400">{data.workDetail}</p>
          </DiamondBox>
          <DiamondBox title="Family">
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
          </DiamondBox>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} variant="dark" />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-4 p-4 rounded-xl text-center" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
          <p className="text-gray-300">📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 20: Rainbow Festive
export const RainbowFestiveTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`}>
    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.primary}20, ${colorTheme.secondary}10)` }} />
    <div className="absolute top-0 left-0 w-full h-32 opacity-80" style={{ background: `linear-gradient(90deg, ${colorTheme.primary}, ${colorTheme.secondary}, ${colorTheme.primary})` }} />
    <div className="absolute bottom-0 left-0 w-full h-32 opacity-80" style={{ background: `linear-gradient(90deg, ${colorTheme.secondary}, ${colorTheme.primary}, ${colorTheme.secondary})` }} />
    <div className="relative z-10 pt-6 px-8 pb-8">
      <div className="text-center text-white mb-4">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-150" />}
        <h1 className="font-script text-4xl drop-shadow-lg mt-1">Marriage Biodata</h1>
      </div>
      <div className="bg-white/95 rounded-2xl shadow-2xl p-6 mt-4 mb-4">
        <div className="text-center mb-4">
          <div className="w-28 h-36 rounded-xl mx-auto overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <h2 className="font-display text-2xl text-gray-800 mt-3">{data.prefix} {data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
        </div>
        {data.aboutMe && <p className="text-center text-gray-600 italic text-sm mb-4">"{data.aboutMe}"</p>}
        <div className="grid grid-cols-3 gap-3">
          <RainbowBox title="Personal" color={colorTheme}>
            <p>DOB: {data.dateOfBirth}</p><p>Age: {data.age}y</p><p>Height: {data.height}</p><p>Diet: {data.diet}</p>
          </RainbowBox>
          <RainbowBox title="Religious" color={colorTheme}>
            <p>{data.religion}</p><p>Gotra: {data.gotra}</p><p>Manglik: {data.manglikStatus}</p><p>Rashi: {data.zodiac}</p>
          </RainbowBox>
          <RainbowBox title="Career" color={colorTheme}>
            <p>{data.highestEducation}</p><p>{data.occupation}</p><p>{data.annualIncome}</p>
          </RainbowBox>
        </div>
        <div className="mt-4 p-3 rounded-xl" style={{ backgroundColor: `${colorTheme.primary}10` }}>
          <h4 className="font-semibold text-sm mb-2" style={{ color: colorTheme.primary }}>Family</h4>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-4 text-center py-3 rounded-xl" style={{ backgroundColor: `${colorTheme.primary}15` }}>
          📞 {data.contactNumber} | ✉️ {data.email}
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 21: Classic White
export const ClassicWhiteTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute inset-4" style={{ border: `2px solid ${colorTheme.primary}` }} />
    <div className="absolute inset-6" style={{ border: `1px solid ${colorTheme.primary}60` }} />
    <div className="relative z-10 p-12">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain" />}
        <h1 className="font-display text-4xl mt-2" style={{ color: colorTheme.primary }}>Marriage Biodata</h1>
        <div className="w-24 h-1 mx-auto mt-2" style={{ backgroundColor: colorTheme.primary }} />
      </div>
      <div className="flex gap-8">
        <div className="w-40 h-52 overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">{data.prefix} {data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
          {data.aboutMe && <p className="mt-2 text-sm italic text-gray-600">"{data.aboutMe}"</p>}
          <table className="w-full mt-4 text-sm">
            <tbody>
              <tr><td className="py-1 text-gray-500 w-28">Date of Birth</td><td>{data.dateOfBirth} ({data.age} years)</td></tr>
              <tr><td className="py-1 text-gray-500">Height / Weight</td><td>{data.height} / {data.weight}</td></tr>
              <tr><td className="py-1 text-gray-500">Complexion</td><td>{data.complexion}</td></tr>
              <tr><td className="py-1 text-gray-500">Religion</td><td>{data.religion}, {data.caste}</td></tr>
              <tr><td className="py-1 text-gray-500">Gotra / Aakna</td><td>{data.gotra} / {data.aakna}</td></tr>
              <tr><td className="py-1 text-gray-500">Manglik / Rashi</td><td>{data.manglikStatus} / {data.zodiac}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="p-4" style={{ backgroundColor: `${colorTheme.primary}10` }}>
          <h4 className="font-semibold mb-2" style={{ color: colorTheme.primary }}>Education & Career</h4>
          <p className="text-sm">{data.highestEducation}</p>
          <p className="text-sm text-gray-600">{data.workDetail}</p>
        </div>
        <div className="p-4" style={{ backgroundColor: `${colorTheme.primary}10` }}>
          <h4 className="font-semibold mb-2" style={{ color: colorTheme.primary }}>Family Details</h4>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
        </div>
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      <div className="mt-6 text-center p-4" style={{ backgroundColor: `${colorTheme.primary}15` }}>
        <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
        <p className="text-sm text-gray-600">{data.presentAddress}, {data.city}</p>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);
