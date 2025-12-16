import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';
import { FamilyDetailsSection, PartnerPreferencesSection, Watermark, KundliDisplay } from './TemplateHelpers';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Helper Components
const TealSection = ({ title, color, children }: { title: string; color: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h4 className="text-sm font-semibold pb-1 border-b mb-2" style={{ color, borderColor: color }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const TealGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-1 text-sm">{children}</div>
);

const CoralCard = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-3 rounded-xl" style={{ backgroundColor: `${color.primary}10` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const CoralRow = ({ label, value }: { label: string; value: string }) => (
  <p className="text-sm"><span className="text-gray-500">{label}:</span> {value}</p>
);

const NavyItem = ({ label, value, accent }: { label: string; value: string; accent: string }) => (
  <div><span className="text-xs opacity-60">{label}</span><p style={{ color: accent }}>{value}</p></div>
);

const NavyBox = ({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) => (
  <div className="bg-white/5 rounded-lg p-4">
    <h4 className="font-semibold mb-2" style={{ color: accent }}>{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const VintageRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <tr><td className="py-1 w-32" style={{ color }}>{label}</td><td>{value}</td></tr>
);

const VintageBox = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="bg-white rounded p-3" style={{ border: `1px solid ${color.primary}` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-xs space-y-1">{children}</div>
  </div>
);

const SageSection = ({ title, color, children }: { title: string; color: string; children: React.ReactNode }) => (
  <div><h4 className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color }}>{title}</h4><div className="text-sm">{children}</div></div>
);

const SageGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-2 text-sm">{children}</div>
);

// Template 11: Teal Modern
export const TealModernTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute top-0 left-0 w-1/3 h-full" style={{ backgroundColor: colorTheme.primary }} />
    <div className="relative z-10 p-8 flex">
      <div className="w-1/3 pr-6 text-white">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mb-4 object-contain brightness-150" />}
        <div className="w-32 h-40 bg-white/20 rounded-lg mb-4 overflow-hidden">
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <h2 className="font-display text-xl">{data.prefix} {data.fullName}</h2>
        <p className="text-sm opacity-80 mt-1">{data.occupation}</p>
        <p className="text-sm font-semibold" style={{ color: colorTheme.accent }}>{data.annualIncome}</p>
        <div className="mt-4 space-y-2 text-sm">
          <p>📍 {data.city}, {data.state}</p>
          <p>📞 {data.contactNumber}</p>
          <p>✉️ {data.email}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4">
            <p className="text-xs mb-1" style={{ color: colorTheme.accent }}>Kundli</p>
            <img src={data.kundliImage} alt="Kundli" className="w-28 h-28 object-contain rounded border border-white/30" />
          </div>
        )}
      </div>
      <div className="flex-1 pl-6">
        <h1 className="font-script text-4xl mb-4" style={{ color: colorTheme.primary }}>Marriage Biodata</h1>
        {data.aboutMe && <p className="text-sm italic text-gray-600 mb-4">"{data.aboutMe}"</p>}
        <TealSection title="Personal Details" color={colorTheme.primary}>
          <TealGrid>
            <span>DOB</span><span>{data.dateOfBirth} ({data.age}y)</span>
            <span>Height</span><span>{data.height}</span>
            <span>Weight</span><span>{data.weight}</span>
            <span>Complexion</span><span>{data.complexion}</span>
            <span>Diet</span><span>{data.diet}</span>
            <span>Status</span><span>{data.maritalStatus}</span>
          </TealGrid>
        </TealSection>
        <TealSection title="Religious Details" color={colorTheme.primary}>
          <TealGrid>
            <span>Religion</span><span>{data.religion}</span>
            <span>Caste</span><span>{data.caste}</span>
            <span>Gotra</span><span>{data.gotra}</span>
            <span>Manglik</span><span>{data.manglikStatus}</span>
            <span>Rashi</span><span>{data.zodiac}</span>
            <span>Birth Place</span><span>{data.placeOfBirth}</span>
          </TealGrid>
        </TealSection>
        <TealSection title="Education & Career" color={colorTheme.primary}>
          <p>{data.highestEducation}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </TealSection>
        <TealSection title="Family" color={colorTheme.primary}>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
        </TealSection>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 12: Coral Warm
export const CoralWarmTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.primary}20)` }}>
    <div className="absolute top-0 left-0 right-0 h-48 rounded-b-[50%]" style={{ backgroundColor: colorTheme.primary }} />
    <div className="relative z-10 pt-6 px-8 pb-8">
      <div className="text-center text-white">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-200" />}
        <h1 className="font-elegant text-3xl mt-2 italic">Marriage Biodata</h1>
      </div>
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 -mt-4">
        <div className="flex items-center gap-6 -mt-16">
          <div className="w-32 h-40 bg-gray-100 rounded-xl shadow-lg mx-auto overflow-hidden" style={{ border: `4px solid white` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="font-display text-2xl text-gray-800">{data.prefix} {data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
        </div>
        {data.aboutMe && <p className="text-center text-gray-600 italic text-sm mt-2">"{data.aboutMe}"</p>}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <CoralCard title="Personal Info" color={colorTheme}>
            <CoralRow label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} />
            <CoralRow label="Height" value={data.height} />
            <CoralRow label="Complexion" value={data.complexion} />
            <CoralRow label="Diet" value={data.diet} />
          </CoralCard>
          <CoralCard title="Religious Info" color={colorTheme}>
            <CoralRow label="Religion" value={data.religion} />
            <CoralRow label="Gotra" value={data.gotra} />
            <CoralRow label="Manglik" value={data.manglikStatus} />
            <CoralRow label="Rashi" value={data.zodiac} />
          </CoralCard>
          <CoralCard title="Education" color={colorTheme}>
            <p className="text-sm">{data.highestEducation}</p>
            <p className="text-sm text-gray-600">{data.workDetail}</p>
          </CoralCard>
          <CoralCard title="Family" color={colorTheme}>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={false} />
          </CoralCard>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        <div className="mt-4 text-center p-3 rounded-xl" style={{ backgroundColor: `${colorTheme.primary}15` }}>
          <p style={{ color: colorTheme.primary }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 13: Navy Formal
export const NavyFormalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative`} style={{ backgroundColor: colorTheme.secondary }}>
    <div className="absolute inset-6" style={{ border: `1px solid ${colorTheme.accent}40` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-150" />}
        <h1 className="font-royal text-2xl tracking-[0.3em] mt-2" style={{ color: colorTheme.accent }}>MARRIAGE BIODATA</h1>
      </div>
      <div className="flex gap-8">
        <div className="w-44 h-56 bg-white/10 rounded overflow-hidden" style={{ border: `1px solid ${colorTheme.accent}60` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl" style={{ color: colorTheme.accent }}>{data.prefix} {data.fullName}</h2>
          <p className="opacity-80 mt-1">{data.occupation} | {data.annualIncome}</p>
          {data.aboutMe && <p className="mt-2 text-sm italic opacity-80">"{data.aboutMe}"</p>}
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <NavyItem label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} accent={colorTheme.accent} />
            <NavyItem label="Height" value={data.height} accent={colorTheme.accent} />
            <NavyItem label="Religion" value={`${data.religion}, ${data.caste}`} accent={colorTheme.accent} />
            <NavyItem label="Gotra" value={`${data.gotra} / ${data.aakna}`} accent={colorTheme.accent} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <NavyBox title="Education & Career" accent={colorTheme.accent}>
          <p>{data.highestEducation}</p>
          <p className="opacity-80">{data.workDetail}</p>
        </NavyBox>
        <NavyBox title="Family" accent={colorTheme.accent}>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
        </NavyBox>
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} variant="dark" />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      <div className="mt-4 py-4 text-center" style={{ borderTop: `1px solid ${colorTheme.accent}40` }}>
        <p style={{ color: colorTheme.accent }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 14: Rust Vintage
export const RustVintageTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-paisley opacity-30" />
    <div className="absolute inset-4" style={{ border: `4px double ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-display text-4xl mt-2" style={{ color: colorTheme.primary }}>Biodata</h1>
      </div>
      <div className="flex gap-6">
        <div className="w-36 h-44 bg-white overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl" style={{ color: colorTheme.primary }}>{data.prefix} {data.fullName}</h2>
          {data.aboutMe && <p className="text-sm italic text-gray-600 mt-1">"{data.aboutMe}"</p>}
          <table className="w-full mt-3 text-sm">
            <tbody>
              <VintageRow label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} color={colorTheme.primary} />
              <VintageRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
              <VintageRow label="Religion/Caste" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
              <VintageRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
              <VintageRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <VintageBox title="Education & Career" color={colorTheme}>
          <p>{data.highestEducation}</p>
          <p>{data.occupation} - {data.annualIncome}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </VintageBox>
        <VintageBox title="Family Details" color={colorTheme}>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
        </VintageBox>
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      <div className="mt-4 p-4 text-center" style={{ backgroundColor: `${colorTheme.primary}15` }}>
        <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

// Template 15: Sage Minimalist
export const SageMinimalistTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute top-0 right-0 w-1/2 h-full" style={{ backgroundColor: `${colorTheme.primary}15` }} />
    <div className="relative z-10 p-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-5xl font-light text-gray-800 tracking-tight">{data.fullName}</h1>
          <p className="mt-2" style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
          {data.aboutMe && <p className="mt-2 text-sm italic text-gray-500">"{data.aboutMe}"</p>}
        </div>
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-14 h-14 object-contain opacity-60" />}
      </div>
      <div className="flex gap-10">
        <div className="flex-1 space-y-6">
          <SageSection title="Personal" color={colorTheme.primary}>
            <SageGrid>
              <span>Age</span><span>{data.age} years</span>
              <span>Height</span><span>{data.height}</span>
              <span>DOB</span><span>{data.dateOfBirth}</span>
              <span>Complexion</span><span>{data.complexion}</span>
              <span>Diet</span><span>{data.diet}</span>
              <span>Birth Place</span><span>{data.placeOfBirth}</span>
            </SageGrid>
          </SageSection>
          <SageSection title="Background" color={colorTheme.primary}>
            <SageGrid>
              <span>Religion</span><span>{data.religion}</span>
              <span>Caste</span><span>{data.caste}</span>
              <span>Gotra</span><span>{data.gotra}</span>
              <span>Manglik</span><span>{data.manglikStatus}</span>
            </SageGrid>
          </SageSection>
          <SageSection title="Education" color={colorTheme.primary}>
            <p>{data.highestEducation}</p>
            <p className="text-gray-500">{data.workDetail}</p>
          </SageSection>
          <SageSection title="Family" color={colorTheme.primary}>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
          </SageSection>
          <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        </div>
        <div className="w-40">
          <div className="w-full h-52 bg-gray-100 rounded overflow-hidden" style={{ border: `1px solid ${colorTheme.primary}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} size="small" />
        </div>
      </div>
      <div className="mt-8 pt-4 border-t text-sm text-gray-500">
        {data.contactNumber} • {data.email} • {data.city}, {data.state}
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);
