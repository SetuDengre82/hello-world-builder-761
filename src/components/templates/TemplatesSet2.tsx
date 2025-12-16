import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Template 6: Saffron Traditional
export const SaffronTraditionalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: `linear-gradient(to bottom, ${colorTheme.accent}, white)` }}>
    <div className="absolute top-0 left-0 right-0 h-24" style={{ backgroundColor: colorTheme.primary }} />
    <div className="relative z-10 pt-4 px-8 pb-8">
      <div className="text-center text-white mb-4">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-1 object-contain brightness-200" />}
        <h1 className="font-hindi text-xl">॥ श्री गणेशाय नमः ॥</h1>
      </div>
      <div className="bg-white rounded-xl shadow-2xl p-6 -mt-2">
        <h2 className="text-center font-script text-4xl mb-4" style={{ color: colorTheme.primary }}>Marriage Biodata</h2>
        <div className="flex gap-6">
          <div className="w-36 h-44 rounded-lg overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl text-gray-800">{data.prefix} {data.fullName}</h3>
            <div className="mt-3 text-sm space-y-1">
              <Row label="Date of Birth" value={`${data.dateOfBirth} (${data.age} years)`} color={colorTheme.primary} />
              <Row label="Time & Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} color={colorTheme.primary} />
              <Row label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
              <Row label="Complexion" value={data.complexion} color={colorTheme.primary} />
              <Row label="Religion/Caste" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
              <Row label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
              <Row label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
            </div>
          </div>
        </div>
        {data.aboutMe && (
          <div className="mt-4 p-3 rounded-lg text-sm italic" style={{ backgroundColor: colorTheme.accent }}>"{data.aboutMe}"</div>
        )}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <SaffronSection title="Education & Career" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p className="text-gray-600">{data.educationDetails}</p>
            <p>{data.occupation}</p>
            <p className="font-semibold" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
            <p className="text-gray-600 text-xs">{data.workDetail}</p>
          </SaffronSection>
          <SaffronSection title="Family Details" color={colorTheme}>
            <p>Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-gray-600">{data.fatherOccupation}</p>
            <p className="mt-1">Mother: {data.motherPrefix} {data.motherName}</p>
            {data.brothers.length > 0 && <p className="mt-1">Brothers: {data.brothers.map(b => `${b.name}${b.married ? ' (M)' : ''}`).join(', ')}</p>}
            {data.sisters.length > 0 && <p>Sisters: {data.sisters.map(s => `${s.name}${s.married ? ' (M)' : ''}`).join(', ')}</p>}
            <p className="mt-1">Mama: {data.maternalUncleName}</p>
          </SaffronSection>
          <SaffronSection title="Address" color={colorTheme}>
            <p>{data.presentAddress}</p>
            <p>{data.city}, {data.state}</p>
            <p className="text-gray-600 mt-1">Permanent: {data.permanentAddress}</p>
          </SaffronSection>
          <SaffronSection title="Contact" color={colorTheme}>
            <p>📞 {data.contactNumber}</p>
            <p>✉️ {data.email}</p>
            {data.hobbies.length > 0 && <p className="mt-1 text-xs">Hobbies: {data.hobbies.join(', ')}</p>}
          </SaffronSection>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <div className="text-center">
              <p className="text-sm font-semibold mb-1" style={{ color: colorTheme.primary }}>Kundli</p>
              <img src={data.kundliImage} alt="Kundli" className="w-40 h-40 object-contain rounded border" style={{ borderColor: colorTheme.primary }} />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 7: Maroon Classic
export const MaroonClassicTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute inset-0" style={{ border: `12px solid ${colorTheme.secondary}` }} />
    <div className="absolute inset-3" style={{ border: `2px solid ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-display text-4xl mt-2" style={{ color: colorTheme.secondary }}>Marriage Profile</h1>
        <div className="w-32 h-1 mx-auto mt-2" style={{ backgroundColor: colorTheme.primary }} />
      </div>
      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          <MaroonBox title="Personal Information" color={colorTheme}>
            <Grid2>
              <LabelValue label="Full Name" value={`${data.prefix} ${data.fullName}`} />
              <LabelValue label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} />
              <LabelValue label="Height" value={data.height} />
              <LabelValue label="Weight" value={data.weight} />
              <LabelValue label="Complexion" value={data.complexion} />
              <LabelValue label="Blood Group" value={data.bloodGroup} />
              <LabelValue label="Diet" value={data.diet} />
              <LabelValue label="Status" value={data.maritalStatus} />
            </Grid2>
          </MaroonBox>
          <MaroonBox title="Horoscope Details" color={colorTheme}>
            <Grid2>
              <LabelValue label="Birth Time" value={data.timeOfBirth} />
              <LabelValue label="Birth Place" value={data.placeOfBirth} />
              <LabelValue label="Gotra" value={data.gotra} />
              <LabelValue label="Aakna" value={data.aakna} />
              <LabelValue label="Manglik" value={data.manglikStatus} />
              <LabelValue label="Rashi" value={data.zodiac} />
              <LabelValue label="Nakshatra" value={data.nakshatra} />
            </Grid2>
          </MaroonBox>
        </div>
        <div className="w-40">
          <div className="w-full h-52 bg-gray-100 overflow-hidden" style={{ border: `4px solid ${colorTheme.secondary}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
        </div>
      </div>
      <MaroonBox title="Education & Career" color={colorTheme} className="mt-4">
        <Grid2>
          <LabelValue label="Education" value={data.highestEducation} />
          <LabelValue label="Occupation" value={data.occupation} />
          <LabelValue label="Company" value={data.workDetail} />
          <LabelValue label="Income" value={data.annualIncome} />
        </Grid2>
      </MaroonBox>
      <MaroonBox title="Family Details" color={colorTheme} className="mt-4">
        <Grid2>
          <LabelValue label="Father" value={`${data.fatherPrefix} ${data.fatherName} (${data.fatherOccupation})`} />
          <LabelValue label="Mother" value={`${data.motherPrefix} ${data.motherName}`} />
          <LabelValue label="Brothers" value={data.brothers.length > 0 ? data.brothers.map(b => `${b.name}${b.married ? '(M)' : ''}`).join(', ') : 'None'} />
          <LabelValue label="Sisters" value={data.sisters.length > 0 ? data.sisters.map(s => `${s.name}${s.married ? '(M)' : ''}`).join(', ') : 'None'} />
          <LabelValue label="Family Type" value={`${data.familyType} / ${data.familyStatus}`} />
          <LabelValue label="Mama" value={data.maternalUncleName} />
        </Grid2>
      </MaroonBox>
      <div className="mt-4 text-center p-3 text-white rounded" style={{ backgroundColor: colorTheme.secondary }}>
        <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
        <p className="text-sm opacity-90">{data.presentAddress}, {data.city}</p>
      </div>
      {data.kundliImage && (
        <div className="mt-4 flex justify-center">
          <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain border-2 rounded" style={{ borderColor: colorTheme.primary }} />
        </div>
      )}
    </div>
  </div>
);

// Template 8: Golden Gradient
export const GoldenGradientTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="absolute inset-0 pattern-paisley opacity-10" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />}
        <h1 className="font-script text-5xl mt-2" style={{ color: colorTheme.accent }}>Biodata</h1>
      </div>
      <div className="backdrop-blur rounded-2xl p-6" style={{ background: `linear-gradient(135deg, ${colorTheme.primary}30, transparent)`, border: `1px solid ${colorTheme.accent}50` }}>
        <div className="flex items-start gap-6 mb-6">
          <div className="w-36 h-44 rounded-xl overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}`, backgroundColor: `${colorTheme.primary}30` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="text-white">
            <h2 className="font-display text-3xl" style={{ color: colorTheme.accent }}>{data.fullName}</h2>
            <p style={{ color: colorTheme.accent }} className="mt-1">{data.occupation} | {data.annualIncome}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <GoldItem label="Age" value={`${data.age} years`} color={colorTheme.accent} />
              <GoldItem label="Height" value={data.height} color={colorTheme.accent} />
              <GoldItem label="DOB" value={data.dateOfBirth} color={colorTheme.accent} />
              <GoldItem label="Birth Place" value={data.placeOfBirth} color={colorTheme.accent} />
              <GoldItem label="Complexion" value={data.complexion} color={colorTheme.accent} />
              <GoldItem label="Diet" value={data.diet} color={colorTheme.accent} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-white">
          <GoldBox title="Religion & Gotra" color={colorTheme.accent}>
            <p>{data.religion} - {data.caste}</p>
            <p>Gotra: {data.gotra} | Aakna: {data.aakna}</p>
            <p>Manglik: {data.manglikStatus}</p>
            <p>Rashi: {data.zodiac} | Nakshatra: {data.nakshatra}</p>
          </GoldBox>
          <GoldBox title="Education" color={colorTheme.accent}>
            <p>{data.highestEducation}</p>
            <p className="text-sm opacity-80">{data.educationDetails}</p>
            <p style={{ color: colorTheme.accent }}>{data.annualIncome}</p>
            <p className="text-sm opacity-80">{data.workDetail}</p>
          </GoldBox>
          <GoldBox title="Family" color={colorTheme.accent}>
            <p>Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-sm opacity-80">{data.fatherOccupation}</p>
            <p>Mother: {data.motherPrefix} {data.motherName}</p>
            {data.brothers.length > 0 && <p className="text-sm">Brothers: {data.brothers.length}</p>}
            {data.sisters.length > 0 && <p className="text-sm">Sisters: {data.sisters.length}</p>}
          </GoldBox>
          <GoldBox title="Contact" color={colorTheme.accent}>
            <p>📞 {data.contactNumber}</p>
            <p>✉️ {data.email}</p>
            <p className="text-sm opacity-80">{data.presentAddress}, {data.city}</p>
          </GoldBox>
        </div>
        {data.hobbies.length > 0 && (
          <div className="mt-4 text-white text-sm">
            <span style={{ color: colorTheme.accent }}>Hobbies: </span>{data.hobbies.join(', ')}
          </div>
        )}
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <div className="text-center">
              <p className="text-sm mb-1" style={{ color: colorTheme.accent }}>Kundli</p>
              <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain rounded border" style={{ borderColor: colorTheme.accent }} />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 9: Emerald Green
export const EmeraldGreenTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="absolute inset-0 pattern-mandala opacity-10" />
    <div className="relative z-10 p-8">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-0.5" style={{ backgroundColor: colorTheme.accent }} />
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 object-contain brightness-150" />}
        <div className="w-12 h-0.5" style={{ backgroundColor: colorTheme.accent }} />
      </div>
      <h1 className="text-center font-royal text-3xl tracking-wider mb-6" style={{ color: colorTheme.accent }}>VIVAH BIODATA</h1>
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
        <div className="text-center mb-6">
          <div className="w-32 h-40 bg-white/20 rounded-xl mx-auto overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <h2 className="font-display text-2xl mt-4" style={{ color: colorTheme.accent }}>{data.prefix} {data.fullName}</h2>
          <p className="opacity-80">{data.occupation} | {data.annualIncome}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <EmeraldCard title="Personal" color={colorTheme.accent}>
            <p>DOB: {data.dateOfBirth}</p>
            <p>Age: {data.age} years</p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <p>Complexion: {data.complexion}</p>
            <p>Diet: {data.diet}</p>
          </EmeraldCard>
          <EmeraldCard title="Religious" color={colorTheme.accent}>
            <p>Religion: {data.religion}</p>
            <p>Caste: {data.caste}</p>
            <p>Gotra: {data.gotra}</p>
            <p>Aakna: {data.aakna}</p>
            <p>Manglik: {data.manglikStatus}</p>
            <p>Rashi: {data.zodiac}</p>
          </EmeraldCard>
          <EmeraldCard title="Career" color={colorTheme.accent}>
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p style={{ color: colorTheme.accent }}>{data.annualIncome}</p>
            <p className="text-xs opacity-80">{data.workDetail}</p>
          </EmeraldCard>
        </div>
        <div className="mt-4 bg-white/5 rounded-lg p-4">
          <h4 className="font-semibold mb-2" style={{ color: colorTheme.accent }}>Family Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>Father: {data.fatherPrefix} {data.fatherName} - {data.fatherOccupation}</p>
            <p>Mother: {data.motherPrefix} {data.motherName}</p>
            <p>Brothers: {data.brothers.length > 0 ? data.brothers.map(b => b.name).join(', ') : 'None'}</p>
            <p>Sisters: {data.sisters.length > 0 ? data.sisters.map(s => s.name).join(', ') : 'None'}</p>
            <p>Family: {data.familyType} / {data.familyStatus}</p>
            <p>Mama: {data.maternalUncleName}</p>
          </div>
        </div>
        <div className="mt-4 text-center py-3 rounded-lg" style={{ backgroundColor: `${colorTheme.accent}30` }}>
          <p style={{ color: colorTheme.accent }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
          <p className="text-sm opacity-80">{data.presentAddress}, {data.city}, {data.state}</p>
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain rounded border" style={{ borderColor: colorTheme.accent }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 10: Purple Royal
export const PurpleRoyalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="absolute inset-4 rounded-xl" style={{ border: `2px solid ${colorTheme.accent}40` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />}
        <h1 className="font-elegant text-4xl italic mt-2" style={{ color: colorTheme.accent }}>Marriage Profile</h1>
      </div>
      <div className="flex gap-6">
        <div className="w-40 h-52 bg-white/20 rounded-2xl overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl" style={{ color: colorTheme.accent }}>{data.fullName}</h2>
          <p className="opacity-80 mb-4">{data.occupation} | {data.annualIncome}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <InfoItem label="Date of Birth" value={`${data.dateOfBirth} (${data.age}y)`} accent={colorTheme.accent} />
            <InfoItem label="Height" value={data.height} accent={colorTheme.accent} />
            <InfoItem label="Weight" value={data.weight} accent={colorTheme.accent} />
            <InfoItem label="Complexion" value={data.complexion} accent={colorTheme.accent} />
            <InfoItem label="Religion" value={`${data.religion}, ${data.caste}`} accent={colorTheme.accent} />
            <InfoItem label="Gotra" value={`${data.gotra} / ${data.aakna}`} accent={colorTheme.accent} />
            <InfoItem label="Manglik" value={data.manglikStatus} accent={colorTheme.accent} />
            <InfoItem label="Rashi" value={`${data.zodiac}, ${data.nakshatra}`} accent={colorTheme.accent} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <PurpleBox title="Education & Career" accent={colorTheme.accent}>
          <p>{data.highestEducation}</p>
          <p className="opacity-80">{data.educationDetails}</p>
          <p className="mt-1">{data.workDetail}</p>
        </PurpleBox>
        <PurpleBox title="Family Background" accent={colorTheme.accent}>
          <p>Father: {data.fatherPrefix} {data.fatherName}</p>
          <p className="opacity-80">{data.fatherOccupation}</p>
          <p className="mt-1">Mother: {data.motherPrefix} {data.motherName}</p>
          <p className="text-sm">Brothers: {data.brothers.length} | Sisters: {data.sisters.length}</p>
        </PurpleBox>
      </div>
      <div className="mt-4 text-center py-4 bg-white/10 rounded-xl">
        <p style={{ color: colorTheme.accent }}>{data.contactNumber} • {data.email}</p>
        <p className="opacity-80 text-sm mt-1">{data.presentAddress}, {data.city}, {data.state}</p>
      </div>
      {data.kundliImage && (
        <div className="mt-4 flex justify-center">
          <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain rounded border" style={{ borderColor: colorTheme.accent }} />
        </div>
      )}
    </div>
  </div>
);

// Helper components
const Row = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <p><span style={{ color }} className="font-medium">{label}:</span> {value}</p>
);

const SaffronSection = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="rounded-lg p-4" style={{ backgroundColor: color.accent }}>
    <h4 className="font-semibold mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const MaroonBox = ({ title, children, className = '', color }: { title: string; children: React.ReactNode; className?: string; color: ColorTheme }) => (
  <div className={`rounded-lg p-4 ${className}`} style={{ backgroundColor: `${color.secondary}10`, border: `1px solid ${color.secondary}30` }}>
    <h4 className="font-semibold mb-3" style={{ color: color.secondary }}>{title}</h4>
    {children}
  </div>
);

const Grid2 = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-2 text-sm">{children}</div>
);

const LabelValue = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-gray-500">{label}:</span>
    <span className="ml-1">{value}</span>
  </div>
);

const GoldItem = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div>
    <span className="text-xs" style={{ color }}>{label}</span>
    <p>{value}</p>
  </div>
);

const GoldBox = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div className="bg-white/5 rounded-lg p-4">
    <h4 className="font-semibold mb-2" style={{ color }}>{title}</h4>
    <div className="text-sm opacity-90">{children}</div>
  </div>
);

const EmeraldCard = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div className="bg-white/5 rounded-lg p-3">
    <h4 className="text-sm font-semibold mb-2" style={{ color }}>{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const InfoItem = ({ label, value, accent }: { label: string; value: string; accent: string }) => (
  <div>
    <span className="text-xs opacity-70">{label}</span>
    <p>{value}</p>
  </div>
);

const PurpleBox = ({ title, children, accent }: { title: string; children: React.ReactNode; accent: string }) => (
  <div className="bg-white/10 rounded-xl p-4">
    <h4 className="font-semibold mb-2" style={{ color: accent }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);
