import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Template 11: Teal Modern
export const TealModernTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute top-0 left-0 w-1/3 h-full" style={{ backgroundColor: colorTheme.primary }} />
    <div className="relative z-10 p-8 flex">
      <div className="w-1/3 pr-6 text-white">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mb-4 object-contain brightness-150" />}
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
        <h1 className="font-script text-4xl mb-6" style={{ color: colorTheme.primary }}>Marriage Biodata</h1>
        <TealSection title="Personal Details" color={colorTheme.primary}>
          <TealGrid>
            <span>Date of Birth</span><span>{data.dateOfBirth}</span>
            <span>Age</span><span>{data.age} years</span>
            <span>Height</span><span>{data.height}</span>
            <span>Weight</span><span>{data.weight}</span>
            <span>Complexion</span><span>{data.complexion}</span>
            <span>Blood Group</span><span>{data.bloodGroup}</span>
            <span>Diet</span><span>{data.diet}</span>
            <span>Status</span><span>{data.maritalStatus}</span>
          </TealGrid>
        </TealSection>
        <TealSection title="Religious Details" color={colorTheme.primary}>
          <TealGrid>
            <span>Religion</span><span>{data.religion}</span>
            <span>Caste</span><span>{data.caste}</span>
            <span>Gotra</span><span>{data.gotra}</span>
            <span>Aakna</span><span>{data.aakna}</span>
            <span>Manglik</span><span>{data.manglikStatus}</span>
            <span>Rashi</span><span>{data.zodiac}</span>
            <span>Nakshatra</span><span>{data.nakshatra}</span>
            <span>Birth Place</span><span>{data.placeOfBirth}</span>
          </TealGrid>
        </TealSection>
        <TealSection title="Education & Career" color={colorTheme.primary}>
          <p>{data.highestEducation}</p>
          <p className="text-gray-600">{data.educationDetails}</p>
          <p className="text-gray-600">{data.workDetail}</p>
          <p className="font-semibold mt-1" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
        </TealSection>
        <TealSection title="Family" color={colorTheme.primary}>
          <p>Father: {data.fatherPrefix} {data.fatherName} - {data.fatherOccupation}</p>
          <p>Mother: {data.motherPrefix} {data.motherName}</p>
          {data.brothers.length > 0 && <p>Brothers: {data.brothers.map(b => `${b.name}${b.married ? ' (Married)' : ''}`).join(', ')}</p>}
          {data.sisters.length > 0 && <p>Sisters: {data.sisters.map(s => `${s.name}${s.married ? ' (Married)' : ''}`).join(', ')}</p>}
          <p>Mama: {data.maternalUncleName}</p>
        </TealSection>
        {data.hobbies.length > 0 && (
          <div className="mt-2 text-sm">
            <span style={{ color: colorTheme.primary }} className="font-semibold">Hobbies: </span>
            {data.hobbies.join(', ')}
          </div>
        )}
      </div>
    </div>
  </div>
);

// Template 12: Coral Warm
export const CoralWarmTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ background: `linear-gradient(135deg, ${colorTheme.accent}, ${colorTheme.primary}20)` }}>
    <div className="absolute top-0 left-0 right-0 h-48 rounded-b-[50%]" style={{ backgroundColor: colorTheme.primary }} />
    <div className="relative z-10 pt-6 px-8 pb-8">
      <div className="text-center text-white">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-200" />}
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
        {data.aboutMe && (
          <p className="text-center text-gray-600 italic text-sm mt-2">"{data.aboutMe}"</p>
        )}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <CoralCard title="Personal Info" color={colorTheme}>
            <CoralRow label="DOB" value={`${data.dateOfBirth} (${data.age}y)`} />
            <CoralRow label="Height" value={data.height} />
            <CoralRow label="Weight" value={data.weight} />
            <CoralRow label="Complexion" value={data.complexion} />
            <CoralRow label="Diet" value={data.diet} />
          </CoralCard>
          <CoralCard title="Religious Info" color={colorTheme}>
            <CoralRow label="Religion" value={data.religion} />
            <CoralRow label="Caste" value={data.caste} />
            <CoralRow label="Gotra" value={data.gotra} />
            <CoralRow label="Manglik" value={data.manglikStatus} />
            <CoralRow label="Rashi" value={data.zodiac} />
          </CoralCard>
          <CoralCard title="Education & Career" color={colorTheme}>
            <p className="text-sm">{data.highestEducation}</p>
            <p className="text-sm text-gray-600">{data.workDetail}</p>
            <p className="font-semibold text-sm" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
          </CoralCard>
          <CoralCard title="Family" color={colorTheme}>
            <p className="text-sm">Father: {data.fatherPrefix} {data.fatherName}</p>
            <p className="text-sm text-gray-600">{data.fatherOccupation}</p>
            <p className="text-sm">Mother: {data.motherPrefix} {data.motherName}</p>
            <p className="text-sm">Siblings: {data.brothers.length}B, {data.sisters.length}S</p>
          </CoralCard>
        </div>
        <div className="mt-4 text-center p-3 rounded-xl" style={{ backgroundColor: `${colorTheme.primary}15` }}>
          <p style={{ color: colorTheme.primary }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
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

// Template 13: Navy Formal
export const NavyFormalTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} text-white relative`} style={{ backgroundColor: colorTheme.secondary }}>
    <div className="absolute inset-6" style={{ border: `1px solid ${colorTheme.accent}40` }} />
    <div className="relative z-10 p-10">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12" />
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 object-contain brightness-150" />}
        <div className="w-12 h-12" />
      </div>
      <h1 className="text-center font-royal text-2xl tracking-[0.3em] mb-8" style={{ color: colorTheme.accent }}>MARRIAGE BIODATA</h1>
      <div className="flex gap-8">
        <div className="w-44 h-56 bg-white/10 rounded overflow-hidden" style={{ border: `1px solid ${colorTheme.accent}60` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl" style={{ color: colorTheme.accent }}>{data.prefix} {data.fullName}</h2>
          <p className="opacity-80 mt-1">{data.occupation} | {data.annualIncome}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <NavyItem label="Date of Birth" value={`${data.dateOfBirth} (${data.age}y)`} accent={colorTheme.accent} />
            <NavyItem label="Height" value={data.height} accent={colorTheme.accent} />
            <NavyItem label="Weight" value={data.weight} accent={colorTheme.accent} />
            <NavyItem label="Complexion" value={data.complexion} accent={colorTheme.accent} />
            <NavyItem label="Religion" value={`${data.religion}, ${data.caste}`} accent={colorTheme.accent} />
            <NavyItem label="Gotra" value={`${data.gotra} / ${data.aakna}`} accent={colorTheme.accent} />
            <NavyItem label="Manglik" value={data.manglikStatus} accent={colorTheme.accent} />
            <NavyItem label="Zodiac" value={`${data.zodiac}, ${data.nakshatra}`} accent={colorTheme.accent} />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <NavyBox title="Education & Career" accent={colorTheme.accent}>
          <p>{data.highestEducation}</p>
          <p className="opacity-80 text-sm mt-1">{data.educationDetails}</p>
          <p className="opacity-80 text-sm">{data.workDetail}</p>
        </NavyBox>
        <NavyBox title="Family Background" accent={colorTheme.accent}>
          <p>Father: {data.fatherPrefix} {data.fatherName}</p>
          <p className="opacity-80 text-sm">{data.fatherOccupation}</p>
          <p className="mt-2">Mother: {data.motherPrefix} {data.motherName}</p>
          <p className="text-sm">Brothers: {data.brothers.length} | Sisters: {data.sisters.length}</p>
        </NavyBox>
      </div>
      <div className="mt-6 py-4 text-center" style={{ borderTop: `1px solid ${colorTheme.accent}40` }}>
        <p style={{ color: colorTheme.accent }}>📞 {data.contactNumber} | ✉️ {data.email}</p>
        <p className="opacity-80 text-sm">{data.presentAddress}, {data.city}, {data.state}</p>
      </div>
      {data.kundliImage && (
        <div className="mt-4 flex justify-center">
          <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain rounded border" style={{ borderColor: colorTheme.accent }} />
        </div>
      )}
    </div>
  </div>
);

// Template 14: Rust Vintage
export const RustVintageTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`} style={{ backgroundColor: colorTheme.accent }}>
    <div className="absolute inset-0 pattern-paisley opacity-30" />
    <div className="absolute inset-4" style={{ border: `4px double ${colorTheme.primary}` }} />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-display text-4xl mt-2" style={{ color: colorTheme.primary }}>Biodata</h1>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="w-20 h-px" style={{ backgroundColor: colorTheme.primary }} />
          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: colorTheme.primary }} />
          <div className="w-20 h-px" style={{ backgroundColor: colorTheme.primary }} />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-36 h-44 bg-white overflow-hidden" style={{ border: `2px solid ${colorTheme.primary}` }}>
          {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl" style={{ color: colorTheme.primary }}>{data.prefix} {data.fullName}</h2>
          <table className="w-full mt-4 text-sm">
            <tbody>
              <VintageRow label="Date of Birth" value={`${data.dateOfBirth} (${data.age} years)`} color={colorTheme.primary} />
              <VintageRow label="Time & Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} color={colorTheme.primary} />
              <VintageRow label="Height / Weight" value={`${data.height} / ${data.weight}`} color={colorTheme.primary} />
              <VintageRow label="Complexion" value={data.complexion} color={colorTheme.primary} />
              <VintageRow label="Religion/Caste" value={`${data.religion}, ${data.caste}`} color={colorTheme.primary} />
              <VintageRow label="Gotra / Aakna" value={`${data.gotra} / ${data.aakna}`} color={colorTheme.primary} />
              <VintageRow label="Manglik / Rashi" value={`${data.manglikStatus} / ${data.zodiac}`} color={colorTheme.primary} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <VintageBox title="शिक्षा (Education)" color={colorTheme}>
          <p>{data.highestEducation}</p>
          <p>{data.occupation}</p>
          <p className="font-semibold" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </VintageBox>
        <VintageBox title="परिवार (Family)" color={colorTheme}>
          <p>पिता: {data.fatherPrefix} {data.fatherName}</p>
          <p className="text-gray-600">{data.fatherOccupation}</p>
          <p>माता: {data.motherPrefix} {data.motherName}</p>
          <p>भाई: {data.brothers.length} | बहन: {data.sisters.length}</p>
          <p>मामा: {data.maternalUncleName}</p>
        </VintageBox>
      </div>
      <div className="mt-6 p-4" style={{ backgroundColor: `${colorTheme.primary}15`, border: `1px solid ${colorTheme.primary}40` }}>
        <p className="text-center"><strong>संपर्क:</strong> 📞 {data.contactNumber} | ✉️ {data.email}</p>
        <p className="text-center text-sm">{data.presentAddress}, {data.city}</p>
      </div>
      {data.kundliImage && (
        <div className="mt-4 flex justify-center">
          <div className="text-center">
            <p className="text-sm font-semibold mb-1" style={{ color: colorTheme.primary }}>कुंडली</p>
            <img src={data.kundliImage} alt="Kundli" className="w-36 h-36 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
          </div>
        </div>
      )}
    </div>
  </div>
);

// Template 15: Sage Minimalist
export const SageMinimalistTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute top-0 right-0 w-1/2 h-full" style={{ backgroundColor: `${colorTheme.primary}15` }} />
    <div className="relative z-10 p-10">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-light text-gray-800 tracking-tight">{data.fullName}</h1>
          <p className="mt-2" style={{ color: colorTheme.primary }}>{data.occupation} | {data.annualIncome}</p>
        </div>
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-14 h-14 object-contain opacity-60" />}
      </div>
      <div className="flex gap-10">
        <div className="flex-1 space-y-6">
          <SageSection title="Personal" color={colorTheme.primary}>
            <SageGrid>
              <span>Age</span><span>{data.age} years</span>
              <span>Height</span><span>{data.height}</span>
              <span>Weight</span><span>{data.weight}</span>
              <span>DOB</span><span>{data.dateOfBirth}</span>
              <span>Birth Time</span><span>{data.timeOfBirth}</span>
              <span>Place</span><span>{data.placeOfBirth}</span>
              <span>Complexion</span><span>{data.complexion}</span>
              <span>Diet</span><span>{data.diet}</span>
            </SageGrid>
          </SageSection>
          <SageSection title="Background" color={colorTheme.primary}>
            <SageGrid>
              <span>Religion</span><span>{data.religion}</span>
              <span>Caste</span><span>{data.caste}</span>
              <span>Gotra</span><span>{data.gotra}</span>
              <span>Aakna</span><span>{data.aakna}</span>
              <span>Manglik</span><span>{data.manglikStatus}</span>
              <span>Rashi</span><span>{data.zodiac}</span>
            </SageGrid>
          </SageSection>
          <SageSection title="Education" color={colorTheme.primary}>
            <p>{data.highestEducation}</p>
            <p className="text-gray-500">{data.educationDetails}</p>
            <p className="text-gray-500">{data.workDetail}</p>
            <p className="font-medium" style={{ color: colorTheme.primary }}>{data.annualIncome}</p>
          </SageSection>
        </div>
        <div className="w-40">
          <div className="w-full h-52 rounded-lg overflow-hidden" style={{ backgroundColor: `${colorTheme.primary}20` }}>
            {data.profilePhoto && <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />}
          </div>
          {data.kundliImage && (
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-1">Kundli</p>
              <img src={data.kundliImage} alt="Kundli" className="w-full h-32 object-contain border rounded" style={{ borderColor: colorTheme.primary }} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${colorTheme.primary}30` }}>
        <SageSection title="Family" color={colorTheme.primary}>
          <p>Father: {data.fatherPrefix} {data.fatherName} ({data.fatherOccupation})</p>
          <p>Mother: {data.motherPrefix} {data.motherName}</p>
          {data.brothers.length > 0 && <p>Brothers: {data.brothers.map(b => `${b.name}${b.married ? ' (M)' : ''}`).join(', ')}</p>}
          {data.sisters.length > 0 && <p>Sisters: {data.sisters.map(s => `${s.name}${s.married ? ' (M)' : ''}`).join(', ')}</p>}
          <p>Mama: {data.maternalUncleName}</p>
        </SageSection>
      </div>
      <div className="mt-6 flex justify-between text-sm text-gray-500">
        <span>📞 {data.contactNumber}</span>
        <span>✉️ {data.email}</span>
        <span>📍 {data.city}, {data.state}</span>
      </div>
    </div>
  </div>
);

// Helper components
const TealSection = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div className="mb-4">
    <h3 className="font-semibold pb-1 mb-2" style={{ color, borderBottom: `1px solid ${color}40` }}>{title}</h3>
    <div className="text-sm">{children}</div>
  </div>
);

const TealGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-1 text-sm">{children}</div>
);

const CoralCard = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="rounded-lg p-3" style={{ backgroundColor: `${color.primary}10` }}>
    <h4 className="font-semibold text-sm mb-2" style={{ color: color.primary }}>{title}</h4>
    {children}
  </div>
);

const CoralRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span>{value}</span>
  </div>
);

const NavyItem = ({ label, value, accent }: { label: string; value: string; accent: string }) => (
  <div>
    <span className="text-xs opacity-60">{label}</span>
    <p>{value}</p>
  </div>
);

const NavyBox = ({ title, children, accent }: { title: string; children: React.ReactNode; accent: string }) => (
  <div className="bg-white/5 rounded p-4">
    <h4 className="font-semibold mb-2" style={{ color: accent }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const VintageRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <tr>
    <td className="py-1 w-32" style={{ color }}>{label}</td>
    <td className="py-1">{value}</td>
  </tr>
);

const VintageBox = ({ title, children, color }: { title: string; children: React.ReactNode; color: ColorTheme }) => (
  <div className="bg-white p-4" style={{ border: `1px solid ${color.primary}40` }}>
    <h4 className="font-display mb-2" style={{ color: color.primary }}>{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const SageSection = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div>
    <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color }}>{title}</h3>
    <div className="text-sm">{children}</div>
  </div>
);

const SageGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-y-1">{children}</div>
);
