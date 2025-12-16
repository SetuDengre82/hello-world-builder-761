import { ProfileData, ColorTheme } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';
import { TemplateProps } from './TemplatesSet1';

const defaultTheme: ColorTheme = { id: 'gold-maroon', name: 'Gold & Maroon', primary: '#D4AF37', secondary: '#800020', accent: '#FFF8E7' };

// Template 11: Teal Modern
export const TealModernTemplate = ({ data, style, showGaneshJi = true, colorTheme = defaultTheme }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--teal))]" />
    <div className="relative z-10 p-8 flex">
      <div className="w-1/3 pr-6 text-white">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mb-4 object-contain brightness-150" />}
        <div className="w-32 h-40 bg-white/20 rounded-lg mb-4 overflow-hidden">
          {data.profilePhoto ? <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : null}
        </div>
        <h2 className="font-display text-xl">{data.fullName}</h2>
        <p className="text-teal-100 text-sm mt-1">{data.occupation}</p>
        <div className="mt-4 space-y-2 text-sm">
          <p>📍 {data.city}</p>
          <p>📞 {data.contactNumber}</p>
          <p>✉️ {data.email}</p>
        </div>
      </div>
      <div className="flex-1 pl-6">
        <h1 className="font-script text-4xl text-[hsl(var(--teal))] mb-6">Marriage Biodata</h1>
        <TealSection title="Personal Details">
          <TealGrid>
            <span>Date of Birth</span><span>{data.dateOfBirth}</span>
            <span>Age</span><span>{data.age} years</span>
            <span>Height</span><span>{data.height}</span>
            <span>Complexion</span><span>{data.complexion}</span>
          </TealGrid>
        </TealSection>
        <TealSection title="Religious Details">
          <TealGrid>
            <span>Religion</span><span>{data.religion}</span>
            <span>Caste</span><span>{data.caste}</span>
            <span>Gotra</span><span>{data.gotra}</span>
            <span>Manglik</span><span>{data.manglikStatus}</span>
          </TealGrid>
        </TealSection>
        <TealSection title="Education & Career">
          <p>{data.highestEducation}</p>
          <p className="text-gray-600">{data.workDetail}</p>
          <p className="text-[hsl(var(--teal))] font-semibold mt-1">{data.annualIncome}</p>
        </TealSection>
        <TealSection title="Family">
          <p>Father: {data.fatherName} - {data.fatherOccupation}</p>
          <p>Mother: {data.motherName}</p>
        </TealSection>
      </div>
    </div>
  </div>
);

// Template 12: Coral Warm
export const CoralWarmTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-br from-[hsl(var(--coral))]/10 to-[hsl(var(--coral))]/20 relative`}>
    <div className="absolute top-0 left-0 right-0 h-48 bg-[hsl(var(--coral))] rounded-b-[50%]" />
    <div className="relative z-10 pt-6 px-8 pb-8">
      <div className="text-center text-white">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-200" />}
        <h1 className="font-elegant text-3xl mt-2 italic">Marriage Biodata</h1>
      </div>
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 -mt-4">
        <div className="flex items-center gap-6 -mt-16">
          <div className="w-32 h-40 bg-gray-100 rounded-xl border-4 border-white shadow-lg mx-auto overflow-hidden">
            {data.profilePhoto ? <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : null}
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="font-display text-2xl text-gray-800">{data.fullName}</h2>
          <p className="text-[hsl(var(--coral))]">{data.occupation}</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <CoralCard title="Personal Info">
            <CoralRow label="DOB" value={data.dateOfBirth} />
            <CoralRow label="Age" value={`${data.age} years`} />
            <CoralRow label="Height" value={data.height} />
          </CoralCard>
          <CoralCard title="Religious Info">
            <CoralRow label="Religion" value={data.religion} />
            <CoralRow label="Caste" value={data.caste} />
            <CoralRow label="Gotra" value={data.gotra} />
          </CoralCard>
          <CoralCard title="Education">
            <p className="text-sm">{data.highestEducation}</p>
            <p className="text-[hsl(var(--coral))] font-semibold text-sm">{data.annualIncome}</p>
          </CoralCard>
          <CoralCard title="Family">
            <p className="text-sm">F: {data.fatherName}</p>
            <p className="text-sm">M: {data.motherName}</p>
          </CoralCard>
        </div>
        <div className="mt-4 text-center p-3 bg-[hsl(var(--coral))]/10 rounded-xl">
          <p className="text-[hsl(var(--coral))]">{data.contactNumber} | {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 13: Navy Formal
export const NavyFormalTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-[hsl(var(--navy))] text-white relative`}>
    <div className="absolute inset-6 border border-[hsl(var(--gold))]/30" />
    <div className="relative z-10 p-10">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12" />
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 object-contain brightness-150" />}
        <div className="w-12 h-12" />
      </div>
      <h1 className="text-center font-royal text-2xl text-[hsl(var(--gold))] tracking-[0.3em] mb-8">MARRIAGE BIODATA</h1>
      <div className="flex gap-8">
        <div className="w-44 h-56 bg-white/10 rounded border border-[hsl(var(--gold))]/50 overflow-hidden">
          {data.profilePhoto ? <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : null}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl text-[hsl(var(--gold))]">{data.fullName}</h2>
          <p className="text-blue-200 mt-1">{data.occupation} | {data.annualIncome}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <NavyItem label="Date of Birth" value={data.dateOfBirth} />
            <NavyItem label="Height" value={data.height} />
            <NavyItem label="Religion" value={`${data.religion}, ${data.caste}`} />
            <NavyItem label="Gotra" value={data.gotra} />
            <NavyItem label="Manglik" value={data.manglikStatus} />
            <NavyItem label="Zodiac" value={data.zodiac} />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6">
        <NavyBox title="Education & Career">
          <p>{data.highestEducation}</p>
          <p className="text-blue-200 text-sm mt-1">{data.workDetail}</p>
        </NavyBox>
        <NavyBox title="Family Background">
          <p>Father: {data.fatherName}</p>
          <p className="text-blue-200 text-sm">{data.fatherOccupation}</p>
          <p className="mt-2">Mother: {data.motherName}</p>
        </NavyBox>
      </div>
      <div className="mt-6 py-4 border-t border-[hsl(var(--gold))]/30 text-center">
        <p className="text-[hsl(var(--gold))]">{data.contactNumber}</p>
        <p className="text-blue-200 text-sm">{data.presentAddress}</p>
      </div>
    </div>
  </div>
);

// Template 14: Rust Vintage
export const RustVintageTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-[hsl(40,30%,92%)] relative`}>
    <div className="absolute inset-0 pattern-paisley opacity-30" />
    <div className="absolute inset-4 border-4 border-double border-[hsl(var(--rust))]" />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />}
        <h1 className="font-display text-4xl text-[hsl(var(--rust))] mt-2">Biodata</h1>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="w-20 h-px bg-[hsl(var(--rust))]" />
          <div className="w-3 h-3 rotate-45 bg-[hsl(var(--rust))]" />
          <div className="w-20 h-px bg-[hsl(var(--rust))]" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-36 h-44 bg-white border-2 border-[hsl(var(--rust))] overflow-hidden">
          {data.profilePhoto ? <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : null}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl text-[hsl(var(--rust))]">{data.fullName}</h2>
          <table className="w-full mt-4 text-sm">
            <tbody>
              <VintageRow label="Date of Birth" value={data.dateOfBirth} />
              <VintageRow label="Time & Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} />
              <VintageRow label="Height" value={data.height} />
              <VintageRow label="Religion/Caste" value={`${data.religion}, ${data.caste}`} />
              <VintageRow label="Gotra" value={data.gotra} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <VintageBox title="शिक्षा (Education)">
          <p>{data.highestEducation}</p>
          <p>{data.occupation}</p>
          <p className="text-[hsl(var(--rust))] font-semibold">{data.annualIncome}</p>
        </VintageBox>
        <VintageBox title="परिवार (Family)">
          <p>पिता: {data.fatherName}</p>
          <p className="text-gray-600">{data.fatherOccupation}</p>
          <p>माता: {data.motherName}</p>
        </VintageBox>
      </div>
      <div className="mt-6 p-4 bg-[hsl(var(--rust))]/10 border border-[hsl(var(--rust))]/30">
        <p className="text-center"><strong>संपर्क:</strong> {data.contactNumber} | {data.presentAddress}</p>
      </div>
    </div>
  </div>
);

// Template 15: Sage Minimalist
export const SageMinimalistTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(var(--sage))]/10" />
    <div className="relative z-10 p-10">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-light text-gray-800 tracking-tight">{data.fullName}</h1>
          <p className="text-[hsl(var(--sage))] mt-2">{data.occupation}</p>
        </div>
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-14 h-14 object-contain opacity-60" />}
      </div>
      <div className="flex gap-10">
        <div className="flex-1 space-y-6">
          <SageSection title="Personal">
            <SageGrid>
              <span>Age</span><span>{data.age} years</span>
              <span>Height</span><span>{data.height}</span>
              <span>DOB</span><span>{data.dateOfBirth}</span>
              <span>Place</span><span>{data.placeOfBirth}</span>
            </SageGrid>
          </SageSection>
          <SageSection title="Background">
            <SageGrid>
              <span>Religion</span><span>{data.religion}</span>
              <span>Caste</span><span>{data.caste}</span>
              <span>Gotra</span><span>{data.gotra}</span>
              <span>Manglik</span><span>{data.manglikStatus}</span>
            </SageGrid>
          </SageSection>
          <SageSection title="Education">
            <p>{data.highestEducation}</p>
            <p className="text-gray-500">{data.workDetail}</p>
            <p className="text-[hsl(var(--sage))] font-medium">{data.annualIncome}</p>
          </SageSection>
        </div>
        <div className="w-40">
          <div className="w-full h-52 bg-[hsl(var(--sage))]/20 rounded-lg overflow-hidden">
            {data.profilePhoto ? <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" /> : null}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-[hsl(var(--sage))]/30">
        <SageSection title="Family">
          <p>Father: {data.fatherName} ({data.fatherOccupation})</p>
          <p>Mother: {data.motherName}</p>
        </SageSection>
      </div>
      <div className="mt-6 flex justify-between text-sm text-gray-500">
        <span>{data.contactNumber}</span>
        <span>{data.email}</span>
        <span>{data.presentAddress}</span>
      </div>
    </div>
  </div>
);

// Helper components
const TealSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="font-semibold text-[hsl(var(--teal))] border-b border-[hsl(var(--teal))]/30 pb-1 mb-2">{title}</h3>
    <div className="text-sm">{children}</div>
  </div>
);

const TealGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-1 text-sm">{children}</div>
);

const CoralCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-[hsl(var(--coral))]/5 rounded-lg p-3">
    <h4 className="font-semibold text-[hsl(var(--coral))] text-sm mb-2">{title}</h4>
    {children}
  </div>
);

const CoralRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span>{value}</span>
  </div>
);

const NavyItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-blue-300 text-xs">{label}</span>
    <p>{value}</p>
  </div>
);

const NavyBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/5 rounded p-4">
    <h4 className="text-[hsl(var(--gold))] font-semibold mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const VintageRow = ({ label, value }: { label: string; value: string }) => (
  <tr>
    <td className="py-1 text-[hsl(var(--rust))] w-32">{label}</td>
    <td className="py-1">{value}</td>
  </tr>
);

const VintageBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white p-4 border border-[hsl(var(--rust))]/30">
    <h4 className="font-display text-[hsl(var(--rust))] mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const SageSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] mb-2">{title}</h3>
    <div className="text-sm">{children}</div>
  </div>
);

const SageGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-y-1">{children}</div>
);
