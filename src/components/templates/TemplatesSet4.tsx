import { ProfileData } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';

interface TemplateProps {
  data: ProfileData;
  style: string;
}

// Template 16: Blush Elegant
export const BlushElegantTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-[hsl(var(--blush))] relative`}>
    <div className="absolute inset-0 pattern-floral" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain" />
        <h1 className="font-script text-5xl text-[hsl(var(--burgundy))] mt-2">Marriage Biodata</h1>
      </div>
      <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl">
        <div className="flex gap-8">
          <div className="w-40 h-52 bg-[hsl(var(--rose))]/20 rounded-2xl border-2 border-[hsl(var(--rose))]" />
          <div className="flex-1">
            <h2 className="font-elegant text-3xl text-[hsl(var(--burgundy))] italic">{data.fullName}</h2>
            <p className="text-[hsl(var(--rose))] mt-1">{data.occupation}</p>
            <div className="mt-4 space-y-2 text-sm">
              <BlushRow label="Birth" value={`${data.dateOfBirth} at ${data.timeOfBirth}`} />
              <BlushRow label="Height" value={data.height} />
              <BlushRow label="Religion" value={`${data.religion} - ${data.caste}`} />
              <BlushRow label="Gotra" value={data.gotra} />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <BlushBox title="Education & Career">
            <p>{data.highestEducation}</p>
            <p className="text-[hsl(var(--burgundy))]">{data.annualIncome}</p>
          </BlushBox>
          <BlushBox title="Family Details">
            <p>Father: {data.fatherName}</p>
            <p>Mother: {data.motherName}</p>
          </BlushBox>
        </div>
        <div className="mt-6 text-center p-4 bg-[hsl(var(--rose))]/20 rounded-xl">
          <p className="text-[hsl(var(--burgundy))]">✆ {data.contactNumber} | ✉ {data.email}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 17: Champagne Luxury
export const ChampagneLuxuryTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-[hsl(var(--champagne))] relative`}>
    <div className="absolute inset-0 pattern-mandala opacity-20" />
    <div className="absolute inset-3 border-2 border-[hsl(var(--gold))]" />
    <div className="absolute inset-4 border border-[hsl(var(--gold))]/50" />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />
        <h1 className="font-royal text-3xl text-[hsl(var(--gold))] tracking-wider mt-2">VIVAH BIODATA</h1>
      </div>
      <div className="flex gap-6">
        <div className="w-40 h-52 bg-white border-4 border-[hsl(var(--gold))] shadow-lg" />
        <div className="flex-1">
          <h2 className="font-display text-3xl text-gray-800">{data.fullName}</h2>
          <p className="text-[hsl(var(--gold))]">{data.occupation} | {data.annualIncome}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <ChampagneItem label="Date of Birth" value={data.dateOfBirth} />
            <ChampagneItem label="Height" value={data.height} />
            <ChampagneItem label="Place of Birth" value={data.placeOfBirth} />
            <ChampagneItem label="Time" value={data.timeOfBirth} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <ChampagneBox title="Religion & Horoscope">
          <ChampagneDetail label="Religion" value={`${data.religion}, ${data.caste}`} />
          <ChampagneDetail label="Gotra" value={data.gotra} />
          <ChampagneDetail label="Rashi" value={data.zodiac} />
          <ChampagneDetail label="Manglik" value={data.manglikStatus} />
        </ChampagneBox>
        <ChampagneBox title="Education">
          <p>{data.highestEducation}</p>
          <p className="text-gray-600 text-sm">{data.workDetail}</p>
        </ChampagneBox>
      </div>
      <ChampagneBox title="Family Background" className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Father: {data.fatherName}</p>
            <p className="text-sm text-gray-600">{data.fatherOccupation}</p>
          </div>
          <div>
            <p className="font-semibold">Mother: {data.motherName}</p>
          </div>
        </div>
      </ChampagneBox>
      <div className="mt-4 p-4 bg-[hsl(var(--gold))]/20 text-center">
        <p><strong>Contact:</strong> {data.contactNumber} | {data.presentAddress}</p>
      </div>
    </div>
  </div>
);

// Template 18: Olive Traditional
export const OliveTraditionalTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-b from-[hsl(var(--olive))]/10 to-[hsl(var(--olive))]/20 relative`}>
    <div className="absolute inset-0 pattern-paisley opacity-20" />
    <div className="absolute inset-4 border-4 border-[hsl(var(--olive))]" />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />
        <h1 className="font-hindi text-xl text-[hsl(var(--olive))] mt-2">॥ श्री गणेशाय नमः ॥</h1>
        <h2 className="font-display text-3xl text-gray-800 mt-1">Marriage Profile</h2>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex gap-6">
          <div className="w-36 h-44 bg-[hsl(var(--olive))]/10 border-2 border-[hsl(var(--olive))]" />
          <div className="flex-1">
            <h3 className="font-display text-2xl text-[hsl(var(--olive))]">{data.fullName}</h3>
            <table className="w-full mt-3 text-sm">
              <tbody>
                <OliveRow label="Date of Birth" value={data.dateOfBirth} />
                <OliveRow label="Birth Time/Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} />
                <OliveRow label="Height" value={data.height} />
                <OliveRow label="Religion/Caste" value={`${data.religion}, ${data.caste}`} />
                <OliveRow label="Gotra" value={data.gotra} />
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <OliveBox title="Education & Profession">
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p className="text-[hsl(var(--olive))] font-semibold">{data.annualIncome}</p>
          </OliveBox>
          <OliveBox title="Family">
            <p>Father: {data.fatherName}</p>
            <p className="text-gray-600 text-sm">{data.fatherOccupation}</p>
            <p className="mt-1">Mother: {data.motherName}</p>
          </OliveBox>
        </div>
        <div className="mt-4 p-3 bg-[hsl(var(--olive))]/10 rounded text-center">
          <p><strong>Contact:</strong> {data.contactNumber} | {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 19: Diamond Premium
export const DiamondPremiumTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-18 h-18 mx-auto object-contain brightness-150" />
        <h1 className="font-royal text-3xl bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent tracking-wider mt-2">
          PREMIUM BIODATA
        </h1>
      </div>
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex gap-6">
          <div className="w-40 h-52 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20" />
          <div className="flex-1">
            <h2 className="font-display text-3xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              {data.fullName}
            </h2>
            <p className="text-gray-400 mt-1">{data.occupation} | {data.annualIncome}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <DiamondItem label="Date of Birth" value={data.dateOfBirth} />
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
            <p>Father: {data.fatherName}</p>
            <p className="text-gray-400">{data.fatherOccupation}</p>
            <p className="mt-1">Mother: {data.motherName}</p>
          </DiamondBox>
        </div>
        <div className="mt-4 p-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl text-center">
          <p className="text-gray-300">{data.contactNumber} | {data.email}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 20: Rainbow Festive
export const RainbowFestiveTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-50 to-cyan-100" />
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 opacity-80" />
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 via-yellow-400 to-red-400 opacity-80" />
    <div className="relative z-10 pt-6 px-8 pb-8">
      <div className="text-center text-white mb-4">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain brightness-150" />
        <h1 className="font-script text-4xl drop-shadow-lg mt-1">Marriage Biodata</h1>
      </div>
      <div className="bg-white/95 rounded-2xl shadow-2xl p-6 mt-4 mb-4">
        <div className="text-center mb-4">
          <div className="w-28 h-36 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mx-auto border-2 border-purple-300" />
          <h2 className="font-display text-2xl text-gray-800 mt-3">{data.fullName}</h2>
          <p className="text-purple-500">{data.occupation}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <RainbowCard color="pink" title="Personal">
            <p>DOB: {data.dateOfBirth}</p>
            <p>Height: {data.height}</p>
            <p>Age: {data.age} years</p>
          </RainbowCard>
          <RainbowCard color="blue" title="Religious">
            <p>Religion: {data.religion}</p>
            <p>Caste: {data.caste}</p>
            <p>Gotra: {data.gotra}</p>
          </RainbowCard>
          <RainbowCard color="green" title="Career">
            <p>{data.highestEducation}</p>
            <p className="font-semibold">{data.annualIncome}</p>
          </RainbowCard>
          <RainbowCard color="orange" title="Family">
            <p>F: {data.fatherName}</p>
            <p>M: {data.motherName}</p>
          </RainbowCard>
        </div>
        <div className="mt-4 text-center p-3 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-xl">
          <p className="text-gray-700">{data.contactNumber} | {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 21: Classic White
export const ClassicWhiteTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute inset-6 border border-gray-300" />
    <div className="absolute inset-8 border border-gray-200" />
    <div className="relative z-10 p-12">
      <div className="text-center mb-8">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto object-contain opacity-80" />
        <h1 className="font-display text-3xl text-gray-800 mt-3">Marriage Biodata</h1>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-2" />
      </div>
      <div className="flex gap-8">
        <div className="w-40 h-52 bg-gray-100 border border-gray-300" />
        <div className="flex-1">
          <h2 className="font-display text-2xl text-gray-800 border-b border-gray-200 pb-2">{data.fullName}</h2>
          <div className="mt-4 space-y-2 text-sm">
            <WhiteRow label="Date of Birth" value={data.dateOfBirth} />
            <WhiteRow label="Age / Height" value={`${data.age} years / ${data.height}`} />
            <WhiteRow label="Religion / Caste" value={`${data.religion}, ${data.caste}`} />
            <WhiteRow label="Gotra" value={data.gotra} />
            <WhiteRow label="Manglik" value={data.manglikStatus} />
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <WhiteSection title="Education & Career">
          <p>{data.highestEducation}</p>
          <p>{data.occupation} - {data.annualIncome}</p>
          <p className="text-gray-600">{data.workDetail}</p>
        </WhiteSection>
        <WhiteSection title="Family Background">
          <p>Father: {data.fatherPrefix} {data.fatherName} ({data.fatherOccupation})</p>
          <p>Mother: {data.motherPrefix} {data.motherName}</p>
        </WhiteSection>
        <div className="pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>{data.contactNumber} | {data.email} | {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Helper components
const BlushRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-2">
    <span className="text-[hsl(var(--rose))]">{label}:</span>
    <span>{value}</span>
  </div>
);

const BlushBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-[hsl(var(--rose))]/10 rounded-xl p-4">
    <h4 className="font-semibold text-[hsl(var(--burgundy))] mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const ChampagneItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-[hsl(var(--gold))] text-xs">{label}</span>
    <p>{value}</p>
  </div>
);

const ChampagneBox = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-white p-4 border border-[hsl(var(--gold))]/30 ${className}`}>
    <h4 className="font-semibold text-[hsl(var(--gold))] mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const ChampagneDetail = ({ label, value }: { label: string; value: string }) => (
  <p><span className="text-gray-500">{label}:</span> {value}</p>
);

const OliveRow = ({ label, value }: { label: string; value: string }) => (
  <tr>
    <td className="py-1 text-[hsl(var(--olive))] w-36">{label}</td>
    <td className="py-1">{value}</td>
  </tr>
);

const OliveBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-[hsl(var(--olive))]/5 p-4 rounded">
    <h4 className="font-semibold text-[hsl(var(--olive))] mb-2">{title}</h4>
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

const RainbowCard = ({ color, title, children }: { color: string; title: string; children: React.ReactNode }) => {
  const colors: Record<string, string> = {
    pink: 'bg-pink-50 border-pink-200',
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
  };
  return (
    <div className={`${colors[color]} rounded-lg p-3 border`}>
      <h4 className="font-semibold text-gray-700 text-sm mb-1">{title}</h4>
      <div className="text-xs">{children}</div>
    </div>
  );
};

const WhiteRow = ({ label, value }: { label: string; value: string }) => (
  <p><span className="text-gray-500">{label}:</span> {value}</p>
);

const WhiteSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-2">{title}</h3>
    <div className="text-sm">{children}</div>
  </div>
);
