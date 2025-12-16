import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Template 16: Blush Elegant
export const BlushElegantTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-floral" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain" />}
        <h1 className="font-script text-5xl mt-2" style={{ color: colorTheme.secondary }}>Marriage Biodata</h1>
      </div>
      <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl">
        <div className="flex gap-8">
          <div className="w-40 h-52 rounded-2xl overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: `${colorTheme.primary}20` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h2 className="font-elegant text-3xl italic" style={{ color: colorTheme.secondary }}>{data.prefix} {data.fullName}</h2>
            <p style={{ color: colorTheme.primary }} className="mt-1">{data.occupation} | {data.annualIncome}</p>
            <div className="mt-4 space-y-2 text-sm">
              <BlushRow label="Birth" value={`${data.dateOfBirth} (${data.age}y) at ${data.timeOfBirth}`} color={colorTheme.primary} />
              <BlushRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
              <BlushRow label="Complexion" value={data.complexion} color={colorTheme.primary} />
              <BlushRow label="Religion" value={`${data.religion} - ${data.caste}`} color={colorTheme.primary} />
              <BlushRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
              <BlushRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
            </div>
          </div>
        </div>
        {data.aboutMe && (
          <p className="mt-4 text-center italic text-gray-600">"{data.aboutMe}"</p>
        )}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <BlushBox title="Education & Career" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p className="text-gray-600">{data.educationDetails}</p>
            <p style={{ color: colorTheme.secondary }}>{data.annualIncome}</p>
            <p className="text-gray-600 text-sm">{data.workDetail}</p>
          </BlushBox>
          <BlushBox title="Family Details" color={colorTheme}>
            <p>Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-gray-600">{data.fatherOccupation}</p>
            <p>Mother: {data.motherPrefix} {data.motherName}</p>
            {data.brothers.length > 0 && <p className="text-sm">Brothers: {data.brothers.map(b => b.name).join(', ')}</p>}
            {data.sisters.length > 0 && <p className="text-sm">Sisters: {data.sisters.map(s => s.name).join(', ')}</p>}
          </BlushBox>
        </div>
        <div className="mt-6 text-center p-4 rounded-xl" style={{ backgroundColor: `${colorTheme.primary}20` }}>
          <p style={{ color: colorTheme.secondary }}>✆ {data.contactNumber} | ✉ {data.email}</p>
          <p className="text-sm text-gray-600">{data.presentAddress}, {data.city}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain rounded-lg border" style={{ borderColor: colorTheme.primary }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 17: Champagne Luxury
export const ChampagneLuxuryTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-mandala opacity-20" />
    <div className="absolute inset-3" style={{ border: `2px solid ${colorTheme.primary}` }} />
    <div className="absolute inset-4" style={{ border: `1px solid ${colorTheme.primary}60` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-royal text-3xl tracking-wider mt-2" style={{ color: colorTheme.primary }}>VIVAH BIODATA</h1>
      </div>
      <div className="flex gap-6">
        <div className="w-40 h-52 bg-white shadow-lg overflow-hidden" style={{ border: `4px solid ${colorTheme.primary}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl text-gray-800">{data.prefix} {data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <ChampagneItem label="Date of Birth" value={`${data.dateOfBirth} (${data.age}y)`} color={colorTheme.primary} />
            <ChampagneItem label="Height" value={data.height} color={colorTheme.primary} />
            <ChampagneItem label="Weight" value={data.weight} color={colorTheme.primary} />
            <ChampagneItem label="Complexion" value={data.complexion} color={colorTheme.primary} />
            <ChampagneItem label="Place of Birth" value={data.placeOfBirth} color={colorTheme.primary} />
            <ChampagneItem label="Time" value={data.timeOfBirth} color={colorTheme.primary} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <ChampagneBox title="Religion & Horoscope" color={colorTheme}>
          <ChampagneDetail label="Religion" value={`${data.religion}, ${data.caste}`} />
          <ChampagneDetail label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} />
          <ChampagneDetail label="Rashi" value={`${data.zodiac}, ${data.nakshatra}`} />
          <ChampagneDetail label="Manglik" value={data.manglikStatus} />
        </ChampagneBox>
        <ChampagneBox title="Education" color={colorTheme}>
          <p>{data.highestEducation}</p>
          <p className="text-gray-600 text-sm">{data.educationDetails}</p>
          <p className="text-gray-600 text-sm">{data.workDetail}</p>
        </ChampagneBox>
      </div>
      <ChampagneBox title="Family Background" color={colorTheme} className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-sm text-gray-600">{data.fatherOccupation}</p>
          </div>
          <div>
            <p className="font-semibold">Mother: {data.motherPrefix} {data.motherName}</p>
          </div>
          <div>
            <p>Brothers: {data.brothers.length > 0 ? data.brothers.map(b => `${b.name}${b.married ? '(M)' : ''}`).join(', ') : 'None'}</p>
          </div>
          <div>
            <p>Sisters: {data.sisters.length > 0 ? data.sisters.map(s => `${s.name}${s.married ? '(M)' : ''}`).join(', ') : 'None'}</p>
          </div>
          <p>Family: {data.familyType} / {data.familyStatus}</p>
          <p>Mama: {data.maternalUncleName}</p>
        </div>
      </ChampagneBox>
      <div className="mt-4 p-4 text-center" style={{ backgroundColor: `${colorTheme.primary}20` }}>
        <p><strong>Contact:</strong> 📞 {data.contactNumber} | ✉️ {data.email}</p>
        <p className="text-sm">{data.presentAddress}, {data.city}</p>
      </div>
      {data.kundliImage && (
        <div className="mt-4 flex justify-center">
          <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
        </div>
      )}
    </div>
  </div>
);

// Template 18: Olive Traditional
export const OliveTraditionalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: `linear-gradient(to bottom, ${colorTheme.accent}, ${colorTheme.primary}20)` }}>
    <div className="absolute inset-0 pattern-paisley opacity-20" />
    <div className="absolute inset-4" style={{ border: `4px solid ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-hindi text-xl mt-2" style={{ color: colorTheme.primary }}>॥ श्री गणेशाय नमः ॥</h1>
        <h2 className="font-display text-3xl text-gray-800 mt-1">Marriage Profile</h2>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex gap-6">
          <div className="w-36 h-44 overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: `${colorTheme.primary}15` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl" style={{ color: colorTheme.primary }}>{data.prefix} {data.fullName}</h3>
            <table className="w-full mt-3 text-sm">
              <tbody>
                <OliveRow label="Date of Birth" value={`${data.dateOfBirth} (${data.age}y)`} color={colorTheme.primary} />
                <OliveRow label="Birth Time/Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} color={colorTheme.primary} />
                <OliveRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
                <OliveRow label="Complexion" value={data.complexion} color={colorTheme.primary} />
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
            <p className="text-gray-600">{data.educationDetails}</p>
            <p>{data.occupation}</p>
            <p className="font-semibold" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
            <p className="text-gray-600 text-sm">{data.workDetail}</p>
          </OliveBox>
          <OliveBox title="Family" color={colorTheme}>
            <p>Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-gray-600 text-sm">{data.fatherOccupation}</p>
            <p className="mt-1">Mother: {data.motherPrefix} {data.motherName}</p>
            {data.brothers.length > 0 && <p>Brothers: {data.brothers.map(b => b.name).join(', ')}</p>}
            {data.sisters.length > 0 && <p>Sisters: {data.sisters.map(s => s.name).join(', ')}</p>}
            <p>Mama: {data.maternalUncleName}</p>
          </OliveBox>
        </div>
        <div className="mt-4 p-3 rounded text-center" style={{ backgroundColor: `${colorTheme.primary}15` }}>
          <p><strong>Contact:</strong> 📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p className="text-sm">{data.presentAddress}, {data.city}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 19: Diamond Premium
export const DiamondPremiumTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, #1a1a2e, ${colorTheme.secondary})` }}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain brightness-150" />}
        <h1 className="font-royal text-3xl tracking-wider mt-2" style={{ background: `linear-gradient(90deg, ${colorTheme.accent}, white, ${colorTheme.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          PREMIUM BIODATA
        </h1>
      </div>
      <div className="backdrop-blur-md rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex gap-6">
          <div className="w-40 h-52 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.2)' }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl" style={{ background: `linear-gradient(90deg, ${colorTheme.accent}, white)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {data.prefix} {data.fullName}
            </h2>
            <p className="text-gray-400 mt-1">{data.occupation} | {data.annualIncome}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <DiamondItem label="Date of Birth" value={`${data.dateOfBirth} (${data.age}y)`} />
              <DiamondItem label="Height" value={data.height} />
              <DiamondItem label="Weight" value={data.weight} />
              <DiamondItem label="Complexion" value={data.complexion} />
              <DiamondItem label="Religion" value={`${data.religion}, ${data.caste}`} />
              <DiamondItem label="Gotra" value={`${data.gotra} / ${data.aakna}`} />
              <DiamondItem label="Manglik" value={data.manglikStatus} />
              <DiamondItem label="Rashi" value={`${data.zodiac}, ${data.nakshatra}`} />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <DiamondBox title="Education & Career">
            <p>{data.highestEducation}</p>
            <p className="text-gray-400">{data.educationDetails}</p>
            <p className="text-gray-400">{data.workDetail}</p>
          </DiamondBox>
          <DiamondBox title="Family">
            <p>Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-gray-400">{data.fatherOccupation}</p>
            <p className="mt-1">Mother: {data.motherPrefix} {data.motherName}</p>
            <p className="text-sm">Brothers: {data.brothers.length} | Sisters: {data.sisters.length}</p>
          </DiamondBox>
        </div>
        <div className="mt-4 p-4 rounded-xl text-center" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
          <p className="text-gray-300">📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p className="text-gray-400 text-sm">{data.presentAddress}, {data.city}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain rounded border border-white/30" />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 20: Rainbow Festive
export const RainbowFestiveTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`}>
    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.primary}20, ${colorTheme.secondary}10)` }} />
    <div className="absolute top-0 left-0 w-full h-32 opacity-80" style={{ background: `linear-gradient(90deg, ${colorTheme.primary}, ${colorTheme.secondary}, ${colorTheme.primary})` }} />
    <div className="absolute bottom-0 left-0 w-full h-32 opacity-80" style={{ background: `linear-gradient(90deg, ${colorTheme.secondary}, ${colorTheme.primary}, ${colorTheme.secondary})` }} />
    <div className="relative z-10 pt-6 px-8 pb-8">
      <div className="text-center text-white mb-4">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-150" />}
        <h1 className="font-script text-4xl drop-shadow-lg mt-1">Marriage Biodata</h1>
      </div>
      <div className="bg-white/95 rounded-2xl shadow-2xl p-6 mt-4 mb-4">
        <div className="text-center mb-4">
          <div className="w-28 h-36 rounded-xl mx-auto overflow-hidden" style={{ background: `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.primary}20)`, border: `2px solid ${colorTheme.primary}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <h2 className="font-display text-2xl text-gray-800 mt-3">{data.prefix} {data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
        </div>
        {data.aboutMe && (
          <p className="text-center text-gray-600 italic text-sm mb-4">"{data.aboutMe}"</p>
        )}
        <div className="grid grid-cols-2 gap-3">
          <RainbowCard title="Personal" color={colorTheme}>
            <p>DOB: {data.dateOfBirth} ({data.age}y)</p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <p>Complexion: {data.complexion}</p>
          </RainbowCard>
          <RainbowCard title="Religious" color={colorTheme}>
            <p>Religion: {data.religion}</p>
            <p>Caste: {data.caste}</p>
            <p>Gotra: {data.gotra}</p>
            <p>Manglik: {data.manglikStatus}</p>
          </RainbowCard>
          <RainbowCard title="Career" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p className="font-semibold" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
          </RainbowCard>
          <RainbowCard title="Family" color={colorTheme}>
            <p>F: {data.fatherPrefix} {data.fatherName}</p>
            <p>M: {data.motherPrefix} {data.motherName}</p>
            <p>Siblings: {data.brothers.length}B, {data.sisters.length}S</p>
          </RainbowCard>
        </div>
        <div className="mt-4 text-center p-3 rounded-xl" style={{ background: `linear-gradient(90deg, ${colorTheme.accent}, ${colorTheme.primary}20, ${colorTheme.accent})` }}>
          <p className="text-gray-700">📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p className="text-sm text-gray-600">{data.presentAddress}, {data.city}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-32 h-32 object-contain rounded-lg border" style={{ borderColor: colorTheme.primary }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 21: Classic White
export const ClassicWhiteTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute inset-6" style={{ border: `1px solid ${colorTheme.primary}40` }} />
    <div className="absolute inset-8" style={{ border: `1px solid ${colorTheme.primary}20` }} />
    <div className="relative z-10 p-12">
      <div className="text-center mb-8">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain opacity-80" />}
        <h1 className="font-display text-3xl text-gray-800 mt-3">Marriage Biodata</h1>
        <div className="w-24 h-0.5 mx-auto mt-2" style={{ backgroundColor: colorTheme.primary }} />
      </div>
      <div className="flex gap-8">
        <div className="w-40 h-52 bg-gray-100 overflow-hidden" style={{ border: `1px solid ${colorTheme.primary}40` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl text-gray-800 pb-2" style={{ borderBottom: `1px solid ${colorTheme.primary}30` }}>{data.prefix} {data.fullName}</h2>
          <div className="mt-4 space-y-2 text-sm">
            <WhiteRow label="Date of Birth" value={`${data.dateOfBirth} (${data.age} years)`} />
            <WhiteRow label="Height / Weight" value={`${data.height} / ${data.weight}`} />
            <WhiteRow label="Complexion" value={data.complexion} />
            <WhiteRow label="Religion / Caste" value={`${data.religion}, ${data.caste}`} />
            <WhiteRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} />
            <WhiteRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} />
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <WhiteSection title="Education & Career" color={colorTheme.primary}>
          <p>{data.highestEducation}</p>
          <p>{data.occupation} - {data.annualIncome}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </WhiteSection>
        <WhiteSection title="Family Background" color={colorTheme.primary}>
          <p>Father: {data.fatherPrefix} {data.fatherName} ({data.fatherOccupation})</p>
          <p>Mother: {data.motherPrefix} {data.motherName}</p>
          {data.brothers.length > 0 && <p>Brothers: {data.brothers.map(b => `${b.name}${b.married ? ' (Married)' : ''}`).join(', ')}</p>}
          {data.sisters.length > 0 && <p>Sisters: {data.sisters.map(s => `${s.name}${s.married ? ' (Married)' : ''}`).join(', ')}</p>}
          <p>Mama: {data.maternalUncleName}</p>
        </WhiteSection>
        <div className="pt-4 text-center text-sm text-gray-600" style={{ borderTop: `1px solid ${colorTheme.primary}20` }}>
          <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p>{data.presentAddress}, {data.city}, {data.state}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Helper components
const BlushRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="flex gap-2">
    <span style={{ color }}>{label}:</span>
    <span>{value}</span>
  </div>
);

const BlushBox = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="rounded-xl p-4" style={{ backgroundColor: `${color.primary}15` }}>
    <h4 className="font-semibold mb-2" style={{ color: color.secondary }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const ChampagneItem = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div>
    <span className="text-xs" style={{ color }}>{label}</span>
    <p>{value}</p>
  </div>
);

const ChampagneBox = ({ title, children, className = '', color }: { title: string; children: React.ReactNode; className?: string; color: ColorTheme }) => (
  <div className={`bg-white p-4 ${className}`} style={{ border: `1px solid ${color.primary}40` }}>
    <h4 className="font-semibold mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const ChampagneDetail = ({ label, value }: { label: string; value: string }) => (
  <p><span className="text-gray-500">{label}:</span> {value}</p>
);

const OliveRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <tr>
    <td className="py-1 w-36" style={{ color }}>{label}</td>
    <td className="py-1">{value}</td>
  </tr>
);

const OliveBox = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="p-4 rounded" style={{ backgroundColor: `${color.primary}10` }}>
    <h4 className="font-semibold mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const DiamondItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-gray-500 text-xs">{label}</span>
    <p>{value}</p>
  </div>
);

const DiamondBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/5 rounded-xl p-4">
    <h4 className="font-semibold text-gray-300 mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const RainbowCard = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="rounded-lg p-3" style={{ backgroundColor: `${color.accent}`, border: `1px solid ${color.primary}30` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.secondary }}>{title}</h4>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const WhiteRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2">
    <span className="text-gray-500 w-36">{label}:</span>
    <span>{value}</span>
  </div>
);

const WhiteSection = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div className="pb-4" style={{ borderBottom: `1px solid ${color}20` }}>
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);
