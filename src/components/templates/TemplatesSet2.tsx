import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';
import { FamilyDetailsSection, PartnerPreferencesSection, Watermark, KundliDisplay } from './TemplateHelpers';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

const Row = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="flex"><span className="w-28 shrink-0 font-medium" style={{ color }}>{label}:</span><span>{value}</span></div>
);

const SaffronSection = ({ title, color, children }: { title: string; color: ColorTheme; children: React.ReactNode }) => (
  <div className="p-3 rounded-lg" style={{ backgroundColor: color.accent }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-xs space-y-1">{children}</div>
  </div>
);

// Template 6-10 with all fields, partner preferences, watermark
export const SaffronTraditionalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: `linear-gradient(to bottom, ${colorTheme.accent}, white)` }}>
    <div className="absolute top-0 left-0 right-0 h-24" style={{ backgroundColor: colorTheme.primary }} />
    <div className="relative z-10 pt-4 px-8 pb-8">
      <div className="text-center text-white mb-4">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-1 object-contain brightness-200" />}
        <h1 className="font-hindi text-xl">॥ श्री गणेशाय नमः ॥</h1>
      </div>
      <div className="bg-white rounded-xl shadow-2xl p-6 -mt-2">
        <h2 className="text-center font-script text-4xl mb-4" style={{ color: colorTheme.primary }}>Marriage Biodata</h2>
        <div className="flex gap-6">
          <div className="w-36 h-44 rounded-lg overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1 text-sm space-y-1">
            <h3 className="font-display text-2xl text-gray-800">{data.prefix} {data.fullName}</h3>
            <Row label="Date of Birth" value={`${data.dateOfBirth} (${data.age} years)`} color={colorTheme.primary} />
            <Row label="Time & Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} color={colorTheme.primary} />
            <Row label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
            <Row label="Religion/Caste" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
            <Row label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
            <Row label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
          </div>
        </div>
        {data.aboutMe && <div className="mt-4 p-3 rounded-lg text-sm italic" style={{ backgroundColor: colorTheme.accent }}>"{data.aboutMe}"</div>}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <SaffronSection title="Education & Career" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p className="font-semibold" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </SaffronSection>
          <SaffronSection title="Family Details" color={colorTheme}>
            <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
          </SaffronSection>
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-4 text-center p-3 rounded text-white" style={{ backgroundColor: colorTheme.primary }}>
          📞 {data.contactNumber} | ✉️ {data.email} | 📍 {data.city}, {data.state}
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

export const MaroonClassicTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute inset-0" style={{ border: `12px solid ${colorTheme.secondary}` }} />
    <div className="absolute inset-3" style={{ border: `2px solid ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-display text-4xl mt-2" style={{ color: colorTheme.secondary }}>Marriage Profile</h1>
      </div>
      <div className="flex gap-8">
        <div className="flex-1 space-y-4 text-xs">
          <div className="p-3 rounded" style={{ backgroundColor: colorTheme.accent }}>
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.primary }}>Personal Information</h4>
            <div className="grid grid-cols-2 gap-1">
              <p><strong>Name:</strong> {data.prefix} {data.fullName}</p>
              <p><strong>DOB:</strong> {data.dateOfBirth} ({data.age}y)</p>
              <p><strong>Height:</strong> {data.height}</p>
              <p><strong>Weight:</strong> {data.weight}</p>
              <p><strong>Complexion:</strong> {data.complexion}</p>
              <p><strong>Diet:</strong> {data.diet}</p>
            </div>
          </div>
          <div className="p-3 rounded" style={{ backgroundColor: colorTheme.accent }}>
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.primary }}>Horoscope</h4>
            <div className="grid grid-cols-2 gap-1">
              <p><strong>Birth:</strong> {data.timeOfBirth}, {data.placeOfBirth}</p>
              <p><strong>Gotra:</strong> {data.gotra}</p>
              <p><strong>Manglik:</strong> {data.manglikStatus}</p>
              <p><strong>Rashi:</strong> {data.zodiac}</p>
            </div>
          </div>
        </div>
        <div className="w-40 h-52 bg-gray-100 overflow-hidden" style={{ border: `4px solid ${colorTheme.secondary}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
      </div>
      <div className="mt-4 p-3 rounded text-xs" style={{ backgroundColor: colorTheme.accent }}>
        <h4 className="font-semibold mb-2" style={{ color: colorTheme.primary }}>Education & Career</h4>
        <p>{data.highestEducation} | {data.occupation} | {data.annualIncome}</p>
        <p className="text-gray-600">{data.workDetail}</p>
      </div>
      <div className="mt-4 p-3 rounded text-xs" style={{ backgroundColor: colorTheme.accent }}>
        <h4 className="font-semibold mb-2" style={{ color: colorTheme.primary }}>Family Details</h4>
        <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} />
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      <div className="mt-4 text-center p-3 text-white rounded" style={{ backgroundColor: colorTheme.secondary }}>
        📞 {data.contactNumber} | ✉️ {data.email} | 📍 {data.city}
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

export const GoldenGradientTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="relative z-10 p-8 text-white">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />}
        <h1 className="font-script text-5xl mt-2" style={{ color: colorTheme.accent }}>Biodata</h1>
      </div>
      <div className="backdrop-blur rounded-2xl p-6" style={{ background: `rgba(255,255,255,0.1)`, border: `1px solid ${colorTheme.accent}50` }}>
        <div className="flex gap-6 mb-6">
          <div className="w-36 h-44 rounded-xl overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div>
            <h2 className="font-display text-3xl" style={{ color: colorTheme.accent }}>{data.fullName}</h2>
            <p style={{ color: colorTheme.accent }}>{data.occupation} | {data.annualIncome}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <p>Age: {data.age} years</p>
              <p>Height: {data.height}</p>
              <p>DOB: {data.dateOfBirth}</p>
              <p>Place: {data.placeOfBirth}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Religion</h4>
            <p>{data.religion} - {data.caste}</p>
            <p>Gotra: {data.gotra} | Manglik: {data.manglikStatus}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Education</h4>
            <p>{data.highestEducation}</p>
            <p className="opacity-80">{data.workDetail}</p>
          </div>
        </div>
        <div className="mt-4 bg-white/10 rounded-lg p-3 text-sm">
          <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Family</h4>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} variant="dark" />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-4 text-center py-3 rounded-lg" style={{ backgroundColor: `${colorTheme.accent}30` }}>
          <p style={{ color: colorTheme.accent }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

export const EmeraldGreenTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="relative z-10 p-8">
      {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-150" />}
      <h1 className="text-center font-royal text-3xl mb-6" style={{ color: colorTheme.accent }}>VIVAH BIODATA</h1>
      <div className="bg-white/10 rounded-xl p-6">
        <div className="text-center mb-6">
          <div className="w-32 h-40 bg-white/20 rounded-xl mx-auto overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <h2 className="font-display text-2xl mt-4" style={{ color: colorTheme.accent }}>{data.prefix} {data.fullName}</h2>
          <p className="opacity-80">{data.occupation} | {data.annualIncome}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div className="bg-white/5 rounded-lg p-3">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Personal</h4>
            <p>DOB: {data.dateOfBirth}</p><p>Age: {data.age}y</p><p>Height: {data.height}</p><p>Diet: {data.diet}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Religious</h4>
            <p>{data.religion}</p><p>Gotra: {data.gotra}</p><p>Manglik: {data.manglikStatus}</p><p>Rashi: {data.zodiac}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Career</h4>
            <p>{data.highestEducation}</p><p>{data.occupation}</p><p style={{ color: colorTheme.accent }}>{data.annualIncome}</p>
          </div>
        </div>
        <div className="mt-4 bg-white/5 rounded-lg p-3 text-xs">
          <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Family</h4>
          <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
        </div>
        <PartnerPreferencesSection data={data} colorTheme={colorTheme} variant="dark" />
        <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
        <div className="mt-4 text-center py-3 rounded-lg" style={{ backgroundColor: `${colorTheme.accent}30` }}>
          <p style={{ color: colorTheme.accent }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);

export const PurpleRoyalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme, isPremium = false, ganeshJiImage }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="relative z-10 p-10">
      {showGaneshJi && <img src={ganeshJiImage || ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />}
      <h1 className="font-elegant text-4xl italic text-center mt-2" style={{ color: colorTheme.accent }}>Marriage Profile</h1>
      <div className="mt-6 flex gap-6">
        <div className="flex-1 space-y-4 text-sm">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Personal</h4>
            <p>{data.prefix} {data.fullName} | {data.dateOfBirth} ({data.age}y)</p>
            <p>Height: {data.height} | {data.complexion} | {data.diet}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Religion</h4>
            <p>{data.religion} - {data.caste} | Gotra: {data.gotra}</p>
            <p>Manglik: {data.manglikStatus} | Rashi: {data.zodiac}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Career</h4>
            <p>{data.highestEducation}</p>
            <p>{data.occupation} - {data.annualIncome}</p>
          </div>
        </div>
        <div className="w-40 h-52 rounded-xl overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
      </div>
      <div className="mt-4 bg-white/10 rounded-lg p-4 text-sm">
        <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Family</h4>
        <FamilyDetailsSection data={data} colorTheme={colorTheme} showOccupation={true} variant="dark" />
      </div>
      <PartnerPreferencesSection data={data} colorTheme={colorTheme} variant="dark" />
      <KundliDisplay kundliImage={data.kundliImage} colorTheme={colorTheme} />
      <div className="mt-4 text-center py-3 rounded-lg" style={{ backgroundColor: `${colorTheme.accent}30` }}>
        📞 {data.contactNumber} | ✉️ {data.email}
      </div>
    </div>
    <Watermark isPremium={isPremium} />
  </div>
);
