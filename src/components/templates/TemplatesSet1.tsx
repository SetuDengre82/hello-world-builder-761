import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';

export interface TemplateProps {
  data: ProfileData;
  style: string;
  showGaneshJi?: boolean;
  colorTheme?: ColorTheme;
}

const defaultTheme: ColorTheme = {
  id: 'gold-maroon',
  name: 'Gold & Maroon',
  primary: '#D4AF37',
  secondary: '#800020',
  accent: '#FFF8E7'
};

// Template 1: Classic Royal
export const ClassicRoyalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] p-8 ${style} relative overflow-hidden`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-mandala opacity-20" />
    <div className="relative z-10">
      <div className="text-center mb-4">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-2 object-contain" />}
        <h1 className="font-script text-3xl" style={{ color: colorTheme.primary }}>Marriage Profile</h1>
      </div>
      <div className="p-5 bg-white/90" style={{ border: `3px solid ${colorTheme.primary}` }}>
        <div className="flex gap-5">
          <div className="w-36 h-44 flex items-center justify-center overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}>
            {data.profilePhoto ? (
              <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-sm">Photo</span>
            )}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl mb-2" style={{ color: colorTheme.secondary }}>{data.prefix} {data.fullName}</h2>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <p><span className="font-semibold">DOB:</span> {data.dateOfBirth}</p>
              <p><span className="font-semibold">Age:</span> {data.age} years</p>
              <p><span className="font-semibold">Height:</span> {data.height}</p>
              <p><span className="font-semibold">Weight:</span> {data.weight}</p>
              <p><span className="font-semibold">Complexion:</span> {data.complexion}</p>
              <p><span className="font-semibold">Blood Group:</span> {data.bloodGroup}</p>
              <p><span className="font-semibold">Marital Status:</span> {data.maritalStatus}</p>
              <p><span className="font-semibold">Diet:</span> {data.diet}</p>
            </div>
          </div>
        </div>
        
        {data.aboutMe && (
          <div className="mt-3 p-2 rounded text-xs" style={{ backgroundColor: colorTheme.accent }}>
            <p className="italic">"{data.aboutMe}"</p>
          </div>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Section title="Religion & Community" color={colorTheme.primary}>
            <p>Religion: {data.religion}, {data.caste}</p>
            <p>Gotra: {data.gotra} | Aakna: {data.aakna}</p>
            <p>Manglik: {data.manglikStatus}</p>
            <p>Rashi: {data.zodiac} | Nakshatra: {data.nakshatra}</p>
            <p>Birth: {data.timeOfBirth}, {data.placeOfBirth}</p>
          </Section>
          <Section title="Education & Career" color={colorTheme.primary}>
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p className="font-semibold" style={{ color: colorTheme.secondary }}>{data.annualIncome}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </Section>
        </div>
        
        <Section title="Family Details" color={colorTheme.primary} className="mt-3">
          <div className="grid grid-cols-2 gap-2">
            <p>Father: {data.fatherPrefix} {data.fatherName} ({data.fatherOccupation})</p>
            <p>Mother: {data.motherPrefix} {data.motherName} ({data.motherOccupation})</p>
            {data.brothers.length > 0 && <p>Brothers: {data.brothers.map(b => `${b.name}${b.married ? ' (M)' : ''}`).join(', ')}</p>}
            {data.sisters.length > 0 && <p>Sisters: {data.sisters.map(s => `${s.name}${s.married ? ' (M)' : ''}`).join(', ')}</p>}
            <p>Family: {data.familyType} | {data.familyStatus}</p>
            <p>Mama: {data.maternalUncleName}</p>
          </div>
        </Section>

        <Section title="Address" color={colorTheme.primary} className="mt-3">
          <p>Present: {data.presentAddress}, {data.city}, {data.state}</p>
          <p>Permanent: {data.permanentAddress}</p>
          <p>House: {data.houseOwnership} | Car: {data.carOwnership}</p>
        </Section>

        {data.hobbies.length > 0 && (
          <div className="mt-3">
            <span className="font-semibold text-xs" style={{ color: colorTheme.primary }}>Hobbies: </span>
            <span className="text-xs">{data.hobbies.join(', ')}</span>
          </div>
        )}
        
        <div className="mt-3 text-center p-2 rounded text-white text-xs" style={{ backgroundColor: colorTheme.secondary }}>
          📞 {data.contactNumber} | ✉️ {data.email}
        </div>

        {data.kundliImage && (
          <div className="mt-3 flex justify-center">
            <div className="text-center">
              <p className="text-xs font-semibold mb-1" style={{ color: colorTheme.primary }}>Kundli</p>
              <img src={data.kundliImage} alt="Kundli" className="w-40 h-40 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 2: Modern Minimal
export const ModernMinimalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] p-8 ${style} bg-white`}>
    <div className="text-center mb-6">
      {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-14 h-14 mx-auto mb-2 object-contain opacity-80" />}
      <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: colorTheme.primary }} />
    </div>
    <div className="flex gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-light tracking-wide text-gray-800 mb-1">{data.fullName}</h1>
        <p className="font-medium mb-4" style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
        
        <div className="space-y-4 text-sm">
          <MinimalSection title="Personal" color={colorTheme.primary}>
            <MinimalGrid>
              <span>Age</span><span>{data.age} years</span>
              <span>Height</span><span>{data.height}</span>
              <span>DOB</span><span>{data.dateOfBirth}</span>
              <span>Complexion</span><span>{data.complexion}</span>
              <span>Diet</span><span>{data.diet}</span>
              <span>Status</span><span>{data.maritalStatus}</span>
            </MinimalGrid>
          </MinimalSection>
          
          <MinimalSection title="Religion" color={colorTheme.primary}>
            <MinimalGrid>
              <span>Religion</span><span>{data.religion}</span>
              <span>Caste</span><span>{data.caste}</span>
              <span>Gotra</span><span>{data.gotra}</span>
              <span>Manglik</span><span>{data.manglikStatus}</span>
              <span>Rashi</span><span>{data.zodiac}</span>
              <span>Birth Place</span><span>{data.placeOfBirth}</span>
            </MinimalGrid>
          </MinimalSection>
          
          <MinimalSection title="Education" color={colorTheme.primary}>
            <p>{data.highestEducation}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </MinimalSection>
          
          <MinimalSection title="Family" color={colorTheme.primary}>
            <p>{data.fatherPrefix} {data.fatherName} - {data.fatherOccupation}</p>
            <p>{data.motherPrefix} {data.motherName}</p>
            {data.brothers.length > 0 && <p>Brothers: {data.brothers.length}</p>}
            {data.sisters.length > 0 && <p>Sisters: {data.sisters.length}</p>}
          </MinimalSection>
        </div>
      </div>
      <div className="w-44">
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden rounded">
          {data.profilePhoto ? (
            <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400">Photo</span>
          )}
        </div>
        {data.kundliImage && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-1">Kundli</p>
            <img src={data.kundliImage} alt="Kundli" className="w-full h-36 object-contain border rounded" />
          </div>
        )}
      </div>
    </div>
    <div className="mt-6 pt-4 border-t text-center text-sm text-gray-500">
      {data.contactNumber} • {data.email} • {data.presentAddress}
    </div>
  </div>
);

// Template 3: Traditional Mandala
export const TraditionalMandalaTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-mandala opacity-30" />
    <div className="relative z-10 p-6">
      <div className="text-center">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto mb-1 object-contain" />}
        <h1 className="font-hindi text-xl" style={{ color: colorTheme.secondary }}>|| श्री गणेशाय नमः ||</h1>
        <h2 className="font-script text-4xl mt-1" style={{ color: colorTheme.primary }}>वैवाहिक परिचय</h2>
      </div>
      <div className="mt-4 bg-white/90 backdrop-blur rounded-lg p-5" style={{ border: `2px solid ${colorTheme.primary}` }}>
        <div className="flex gap-5">
          <div className="w-32 h-40 rounded overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-xl" style={{ color: colorTheme.secondary }}>{data.prefix} {data.fullName}</h2>
            <table className="w-full mt-2 text-xs">
              <tbody>
                <tr><td className="py-0.5 text-gray-600 w-24">जन्म तिथि</td><td>{data.dateOfBirth} ({data.age} वर्ष)</td></tr>
                <tr><td className="py-0.5 text-gray-600">समय / स्थान</td><td>{data.timeOfBirth}, {data.placeOfBirth}</td></tr>
                <tr><td className="py-0.5 text-gray-600">ऊंचाई / वजन</td><td>{data.height} / {data.weight}</td></tr>
                <tr><td className="py-0.5 text-gray-600">गोत्र / आकणा</td><td>{data.gotra} / {data.aakna}</td></tr>
                <tr><td className="py-0.5 text-gray-600">राशि / नक्षत्र</td><td>{data.zodiac}, {data.nakshatra}</td></tr>
                <tr><td className="py-0.5 text-gray-600">मांगलिक</td><td>{data.manglikStatus}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded" style={{ backgroundColor: colorTheme.accent }}>
            <h4 className="font-semibold mb-1" style={{ color: colorTheme.secondary }}>शिक्षा एवं व्यवसाय</h4>
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p className="font-semibold" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
            <p className="text-gray-600">{data.workDetail}</p>
          </div>
          <div className="p-3 rounded" style={{ backgroundColor: colorTheme.accent }}>
            <h4 className="font-semibold mb-1" style={{ color: colorTheme.secondary }}>पारिवारिक विवरण</h4>
            <p>पिता: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-gray-600">{data.fatherOccupation}</p>
            <p>माता: {data.motherPrefix} {data.motherName}</p>
            <p>भाई: {data.brothers.length} | बहन: {data.sisters.length}</p>
            <p>मामा: {data.maternalUncleName}</p>
          </div>
        </div>
        
        <div className="mt-3 p-2 rounded text-center text-xs" style={{ backgroundColor: colorTheme.primary + '20' }}>
          <p><strong>संपर्क:</strong> {data.contactNumber} | {data.email}</p>
          <p>{data.presentAddress}, {data.city}, {data.state}</p>
        </div>

        {data.kundliImage && (
          <div className="mt-3 flex justify-center">
            <div className="text-center">
              <p className="text-xs font-semibold mb-1" style={{ color: colorTheme.primary }}>कुंडली</p>
              <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 4: Elegant Floral
export const ElegantFloralTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative bg-white`}>
    <div className="absolute inset-0 pattern-floral opacity-20" />
    <div className="absolute top-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to bottom, ${colorTheme.primary}30, transparent)` }} />
    <div className="relative z-10 p-6">
      <div className="text-center mb-4">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-2 object-contain" />}
        <h1 className="font-elegant text-3xl italic" style={{ color: colorTheme.secondary }}>Marriage Biodata</h1>
      </div>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg" style={{ border: `1px solid ${colorTheme.primary}` }}>
        <div className="text-center mb-4">
          <div className="w-28 h-36 rounded-xl mx-auto shadow-lg overflow-hidden" style={{ border: `3px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <h2 className="font-display text-2xl mt-3" style={{ color: colorTheme.secondary }}>{data.fullName}</h2>
          <p style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <InfoCard title="Personal Details" color={colorTheme}>
            <InfoRow label="Date of Birth" value={data.dateOfBirth} />
            <InfoRow label="Age" value={`${data.age} years`} />
            <InfoRow label="Height" value={data.height} />
            <InfoRow label="Complexion" value={data.complexion} />
            <InfoRow label="Diet" value={data.diet} />
          </InfoCard>
          <InfoCard title="Religious Details" color={colorTheme}>
            <InfoRow label="Religion" value={data.religion} />
            <InfoRow label="Caste" value={data.caste} />
            <InfoRow label="Gotra" value={data.gotra} />
            <InfoRow label="Manglik" value={data.manglikStatus} />
            <InfoRow label="Rashi" value={data.zodiac} />
          </InfoCard>
          <InfoCard title="Education & Career" color={colorTheme}>
            <p>{data.highestEducation}</p>
            <p>{data.workDetail}</p>
          </InfoCard>
          <InfoCard title="Family" color={colorTheme}>
            <InfoRow label="Father" value={`${data.fatherName} (${data.fatherOccupation})`} />
            <InfoRow label="Mother" value={data.motherName} />
            <InfoRow label="Siblings" value={`${data.brothers.length} Brother, ${data.sisters.length} Sister`} />
          </InfoCard>
        </div>
        <div className="mt-4 text-center text-xs text-gray-600">
          📞 {data.contactNumber} | ✉️ {data.email} | 📍 {data.city}, {data.state}
        </div>
        {data.kundliImage && (
          <div className="mt-4 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-32 h-32 object-contain border rounded-lg" style={{ borderColor: colorTheme.primary }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 5: Royal Peacock
export const RoyalPeacockTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colorTheme.secondary}, ${colorTheme.primary})` }}>
    <div className="absolute inset-0 pattern-paisley opacity-15" />
    <div className="relative z-10 p-6">
      <div className="text-center mb-4">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-1 object-contain brightness-150" />}
        <h1 className="font-royal text-2xl tracking-wider" style={{ color: colorTheme.accent }}>MARRIAGE BIODATA</h1>
        <div className="flex justify-center gap-2 mt-1">
          <div className="w-12 h-0.5" style={{ backgroundColor: colorTheme.accent }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorTheme.accent }} />
          <div className="w-12 h-0.5" style={{ backgroundColor: colorTheme.accent }} />
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-5" style={{ border: `1px solid ${colorTheme.accent}40` }}>
        <div className="flex gap-5">
          <div className="w-36 h-44 rounded-lg overflow-hidden" style={{ border: `2px solid ${colorTheme.accent}`, backgroundColor: 'rgba(255,255,255,0.1)' }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl" style={{ color: colorTheme.accent }}>{data.fullName}</h2>
            <p className="opacity-80 mb-3">{data.occupation} | {data.annualIncome}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <DetailItem label="Birth" value={`${data.dateOfBirth}, ${data.placeOfBirth}`} accent={colorTheme.accent} />
              <DetailItem label="Height" value={data.height} accent={colorTheme.accent} />
              <DetailItem label="Religion" value={`${data.religion}, ${data.caste}`} accent={colorTheme.accent} />
              <DetailItem label="Gotra" value={data.gotra} accent={colorTheme.accent} />
              <DetailItem label="Manglik" value={data.manglikStatus} accent={colorTheme.accent} />
              <DetailItem label="Diet" value={data.diet} accent={colorTheme.accent} />
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-lg p-3">
            <h4 className="font-semibold mb-2 text-sm" style={{ color: colorTheme.accent }}>Education & Career</h4>
            <p className="text-xs opacity-90">{data.highestEducation}</p>
            <p className="text-xs opacity-90">{data.workDetail}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <h4 className="font-semibold mb-2 text-sm" style={{ color: colorTheme.accent }}>Family</h4>
            <p className="text-xs opacity-90">Father: {data.fatherName}</p>
            <p className="text-xs opacity-70">{data.fatherOccupation}</p>
            <p className="text-xs opacity-90">Mother: {data.motherName}</p>
            <p className="text-xs opacity-70">Siblings: {data.brothers.length}B, {data.sisters.length}S</p>
          </div>
        </div>
        <div className="mt-3 text-center py-2 rounded-lg text-sm" style={{ backgroundColor: colorTheme.accent + '30', color: colorTheme.accent }}>
          📞 {data.contactNumber} | 📍 {data.presentAddress}
        </div>
        {data.kundliImage && (
          <div className="mt-3 flex justify-center">
            <img src={data.kundliImage} alt="Kundli" className="w-32 h-32 object-contain border rounded" style={{ borderColor: colorTheme.accent }} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Helper components
const Section = ({ title, children, color, className = '' }: { title: string; children: React.ReactNode; color: string; className?: string }) => (
  <div className={className}>
    <h3 className="font-semibold text-xs pb-1 mb-1 border-b" style={{ color, borderColor: color }}>
      {title}
    </h3>
    <div className="text-xs space-y-0.5">{children}</div>
  </div>
);

const MinimalSection = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div>
    <h3 className="text-xs uppercase tracking-widest mb-1" style={{ color }}>{title}</h3>
    <div>{children}</div>
  </div>
);

const MinimalGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-y-0.5 text-gray-600">{children}</div>
);

const InfoCard = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="rounded-lg p-3" style={{ backgroundColor: color.accent }}>
    <h4 className="font-semibold mb-2" style={{ color: color.secondary }}>{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
);

const DetailItem = ({ label, value, accent }: { label: string; value: string; accent: string }) => (
  <div>
    <span className="text-xs opacity-70">{label}</span>
    <p className="text-xs">{value}</p>
  </div>
);
