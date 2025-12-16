import { ProfileData } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';

interface TemplateProps {
  data: ProfileData;
  style: string;
}

// Template 6: Saffron Traditional
export const SaffronTraditionalTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-b from-[hsl(var(--saffron))]/20 to-white relative`}>
    <div className="absolute top-0 left-0 right-0 h-24 bg-[hsl(var(--saffron))]" />
    <div className="relative z-10 pt-4 px-8 pb-8">
      <div className="text-center text-white mb-4">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-1 object-contain brightness-200" />
        <h1 className="font-hindi text-xl">॥ श्री गणेशाय नमः ॥</h1>
      </div>
      <div className="bg-white rounded-xl shadow-2xl p-6 -mt-2">
        <h2 className="text-center font-script text-4xl text-[hsl(var(--saffron))] mb-4">Marriage Biodata</h2>
        <div className="flex gap-6">
          <div className="w-36 h-44 bg-orange-50 rounded-lg border-2 border-[hsl(var(--saffron))]" />
          <div className="flex-1">
            <h3 className="font-display text-2xl text-gray-800">{data.fullName}</h3>
            <div className="mt-3 text-sm space-y-1">
              <Row label="Date of Birth" value={data.dateOfBirth} />
              <Row label="Time & Place" value={`${data.timeOfBirth}, ${data.placeOfBirth}`} />
              <Row label="Height" value={data.height} />
              <Row label="Religion/Caste" value={`${data.religion}, ${data.caste}`} />
              <Row label="Gotra" value={data.gotra} />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <SaffronSection title="Education">
            <p>{data.highestEducation}</p>
            <p className="text-gray-600">{data.educationDetails}</p>
          </SaffronSection>
          <SaffronSection title="Profession">
            <p>{data.occupation}</p>
            <p className="text-[hsl(var(--saffron))] font-semibold">{data.annualIncome}</p>
          </SaffronSection>
          <SaffronSection title="Family">
            <p>Father: {data.fatherName}</p>
            <p className="text-gray-600">{data.fatherOccupation}</p>
            <p className="mt-1">Mother: {data.motherName}</p>
          </SaffronSection>
          <SaffronSection title="Contact">
            <p>{data.contactNumber}</p>
            <p className="text-gray-600">{data.presentAddress}</p>
          </SaffronSection>
        </div>
      </div>
    </div>
  </div>
);

// Template 7: Maroon Classic
export const MaroonClassicTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-white relative`}>
    <div className="absolute inset-0 border-[12px] border-[hsl(var(--maroon))]" />
    <div className="absolute inset-3 border-2 border-[hsl(var(--gold))]" />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain" />
        <h1 className="font-display text-4xl text-[hsl(var(--maroon))] mt-2">Marriage Profile</h1>
        <div className="w-32 h-1 bg-[hsl(var(--gold))] mx-auto mt-2" />
      </div>
      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          <MaroonBox title="Personal Information">
            <Grid2>
              <LabelValue label="Full Name" value={data.fullName} />
              <LabelValue label="DOB" value={data.dateOfBirth} />
              <LabelValue label="Height" value={data.height} />
              <LabelValue label="Complexion" value={data.complexion} />
              <LabelValue label="Religion" value={data.religion} />
              <LabelValue label="Caste" value={data.caste} />
            </Grid2>
          </MaroonBox>
          <MaroonBox title="Horoscope Details">
            <Grid2>
              <LabelValue label="Birth Time" value={data.timeOfBirth} />
              <LabelValue label="Birth Place" value={data.placeOfBirth} />
              <LabelValue label="Gotra" value={data.gotra} />
              <LabelValue label="Manglik" value={data.manglikStatus} />
              <LabelValue label="Rashi" value={data.zodiac} />
              <LabelValue label="Nakshatra" value={data.nakshatra} />
            </Grid2>
          </MaroonBox>
        </div>
        <div className="w-40">
          <div className="w-full h-52 bg-gray-100 border-4 border-[hsl(var(--maroon))]" />
        </div>
      </div>
      <MaroonBox title="Education & Career" className="mt-4">
        <Grid2>
          <LabelValue label="Education" value={data.highestEducation} />
          <LabelValue label="Occupation" value={data.occupation} />
          <LabelValue label="Company" value={data.workDetail} />
          <LabelValue label="Income" value={data.annualIncome} />
        </Grid2>
      </MaroonBox>
      <MaroonBox title="Family Details" className="mt-4">
        <Grid2>
          <LabelValue label="Father" value={`${data.fatherPrefix} ${data.fatherName} (${data.fatherOccupation})`} />
          <LabelValue label="Mother" value={`${data.motherPrefix} ${data.motherName}`} />
        </Grid2>
      </MaroonBox>
      <div className="mt-4 text-center p-3 bg-[hsl(var(--maroon))] text-white rounded">
        <p>Contact: {data.contactNumber} | {data.presentAddress}</p>
      </div>
    </div>
  </div>
);

// Template 8: Golden Gradient
export const GoldenGradientTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(43,74%,20%)] via-[hsl(43,74%,30%)] to-[hsl(43,74%,20%)]" />
    <div className="absolute inset-0 pattern-paisley opacity-10" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />
        <h1 className="font-script text-5xl text-[hsl(var(--gold-light))] mt-2">Biodata</h1>
      </div>
      <div className="bg-gradient-to-br from-[hsl(var(--gold))]/20 to-transparent backdrop-blur rounded-2xl border border-[hsl(var(--gold))]/50 p-6">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-36 h-44 rounded-xl bg-[hsl(var(--gold))]/20 border-2 border-[hsl(var(--gold))]" />
          <div className="text-white">
            <h2 className="font-display text-3xl text-[hsl(var(--gold-light))]">{data.fullName}</h2>
            <p className="text-[hsl(var(--gold))] mt-1">{data.occupation}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <GoldItem label="Age" value={`${data.age} years`} />
              <GoldItem label="Height" value={data.height} />
              <GoldItem label="DOB" value={data.dateOfBirth} />
              <GoldItem label="Birth Place" value={data.placeOfBirth} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-white">
          <GoldBox title="Religion & Gotra">
            <p>{data.religion} - {data.caste}</p>
            <p>Gotra: {data.gotra}</p>
            <p>Manglik: {data.manglikStatus}</p>
          </GoldBox>
          <GoldBox title="Education">
            <p>{data.highestEducation}</p>
            <p className="text-[hsl(var(--gold))]">{data.annualIncome}</p>
          </GoldBox>
          <GoldBox title="Family">
            <p>Father: {data.fatherName}</p>
            <p>Mother: {data.motherName}</p>
          </GoldBox>
          <GoldBox title="Contact">
            <p>{data.contactNumber}</p>
            <p className="text-sm opacity-80">{data.presentAddress}</p>
          </GoldBox>
        </div>
      </div>
    </div>
  </div>
);

// Template 9: Emerald Green
export const EmeraldGreenTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-br from-[hsl(var(--emerald))] to-[hsl(145,50%,25%)] text-white relative`}>
    <div className="absolute inset-0 pattern-mandala opacity-10" />
    <div className="relative z-10 p-8">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-0.5 bg-[hsl(var(--gold))]" />
        <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 object-contain brightness-150" />
        <div className="w-12 h-0.5 bg-[hsl(var(--gold))]" />
      </div>
      <h1 className="text-center font-royal text-3xl text-[hsl(var(--gold))] tracking-wider mb-6">VIVAH BIODATA</h1>
      <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
        <div className="text-center mb-6">
          <div className="w-32 h-40 bg-white/20 rounded-xl mx-auto border-2 border-[hsl(var(--gold))]" />
          <h2 className="font-display text-2xl text-[hsl(var(--gold))] mt-4">{data.fullName}</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <EmeraldCard title="Personal">
            <p>DOB: {data.dateOfBirth}</p>
            <p>Age: {data.age} years</p>
            <p>Height: {data.height}</p>
            <p>Complexion: {data.complexion}</p>
          </EmeraldCard>
          <EmeraldCard title="Religious">
            <p>Religion: {data.religion}</p>
            <p>Caste: {data.caste}</p>
            <p>Gotra: {data.gotra}</p>
            <p>Manglik: {data.manglikStatus}</p>
          </EmeraldCard>
          <EmeraldCard title="Career">
            <p>{data.highestEducation}</p>
            <p>{data.occupation}</p>
            <p className="text-[hsl(var(--gold))]">{data.annualIncome}</p>
          </EmeraldCard>
        </div>
        <div className="mt-4 bg-white/5 rounded-lg p-4">
          <h4 className="text-[hsl(var(--gold))] font-semibold mb-2">Family Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>Father: {data.fatherName} - {data.fatherOccupation}</p>
            <p>Mother: {data.motherName}</p>
          </div>
        </div>
        <div className="mt-4 text-center py-3 bg-[hsl(var(--gold))]/20 rounded-lg">
          <p className="text-[hsl(var(--gold))]">📞 {data.contactNumber} | 📍 {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 10: Purple Royal
export const PurpleRoyalTemplate = ({ data, style }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-br from-[hsl(var(--purple))] via-[hsl(280,50%,35%)] to-[hsl(var(--purple))] text-white relative`}>
    <div className="absolute inset-4 border-2 border-[hsl(var(--gold))]/40 rounded-xl" />
    <div className="relative z-10 p-10">
      <div className="text-center mb-6">
        <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto object-contain brightness-150" />
        <h1 className="font-elegant text-4xl text-[hsl(var(--gold))] italic mt-2">Marriage Profile</h1>
      </div>
      <div className="flex gap-6">
        <div className="w-40 h-52 bg-white/20 rounded-2xl border-2 border-[hsl(var(--gold))]" />
        <div className="flex-1">
          <h2 className="font-display text-3xl text-[hsl(var(--gold))]">{data.fullName}</h2>
          <p className="text-purple-200 mb-4">{data.occupation} | {data.annualIncome}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <InfoItem label="Date of Birth" value={data.dateOfBirth} />
            <InfoItem label="Age" value={`${data.age} years`} />
            <InfoItem label="Height" value={data.height} />
            <InfoItem label="Complexion" value={data.complexion} />
            <InfoItem label="Religion" value={`${data.religion}, ${data.caste}`} />
            <InfoItem label="Gotra" value={data.gotra} />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <PurpleBox title="Education & Career">
          <p>{data.highestEducation}</p>
          <p className="text-purple-200">{data.workDetail}</p>
        </PurpleBox>
        <PurpleBox title="Family Background">
          <p>Father: {data.fatherName}</p>
          <p className="text-purple-200">{data.fatherOccupation}</p>
          <p className="mt-1">Mother: {data.motherName}</p>
        </PurpleBox>
      </div>
      <div className="mt-4 text-center py-4 bg-white/10 rounded-xl">
        <p className="text-[hsl(var(--gold))]">{data.contactNumber} • {data.email}</p>
        <p className="text-purple-200 text-sm mt-1">{data.presentAddress}</p>
      </div>
    </div>
  </div>
);

// Helper components
const Row = ({ label, value }: { label: string; value: string }) => (
  <p><span className="text-gray-500">{label}:</span> {value}</p>
);

const SaffronSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-orange-50 rounded-lg p-4">
    <h4 className="font-semibold text-[hsl(var(--saffron))] mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);

const MaroonBox = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-[hsl(var(--maroon))]/5 border border-[hsl(var(--maroon))]/20 rounded-lg p-4 ${className}`}>
    <h4 className="font-semibold text-[hsl(var(--maroon))] mb-3">{title}</h4>
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

const GoldItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-[hsl(var(--gold))] text-xs">{label}</span>
    <p>{value}</p>
  </div>
);

const GoldBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/5 rounded-lg p-4">
    <h4 className="text-[hsl(var(--gold))] font-semibold mb-2">{title}</h4>
    <div className="text-sm opacity-90">{children}</div>
  </div>
);

const EmeraldCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/5 rounded-lg p-3">
    <h4 className="text-[hsl(var(--gold))] text-sm font-semibold mb-2">{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-purple-300 text-xs">{label}</span>
    <p>{value}</p>
  </div>
);

const PurpleBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/10 rounded-xl p-4">
    <h4 className="text-[hsl(var(--gold))] font-semibold mb-2">{title}</h4>
    <div className="text-sm">{children}</div>
  </div>
);
