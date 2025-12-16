import { ProfileData } from '@/types/profile';
import ganeshJi from '@/assets/ganesh-ji.png';

export interface TemplateProps {
  data: ProfileData;
  style: string;
  showGaneshJi?: boolean;
}

// Template 1: Classic Royal
export const ClassicRoyalTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] p-8 ${style} relative overflow-hidden`}>
    <div className="absolute inset-0 pattern-mandala opacity-30" />
    <div className="relative z-10">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto mb-2 object-contain" />}
        <h1 className="font-script text-4xl text-[hsl(var(--gold))]">Marriage Profile</h1>
      </div>
      <div className="border-4 border-[hsl(var(--gold))] p-6 bg-white/90">
        <div className="flex gap-6">
          <div className="w-40 h-52 bg-gray-200 border-2 border-[hsl(var(--gold))] flex items-center justify-center overflow-hidden">
            {data.profilePhoto ? (
              <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Photo</span>
            )}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl text-[hsl(var(--maroon))] mb-2">{data.fullName}</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p><span className="font-semibold">DOB:</span> {data.dateOfBirth}</p>
              <p><span className="font-semibold">Age:</span> {data.age} years</p>
              <p><span className="font-semibold">Height:</span> {data.height}</p>
              <p><span className="font-semibold">Complexion:</span> {data.complexion}</p>
              <p><span className="font-semibold">Gotra:</span> {data.gotra}</p>
              <p><span className="font-semibold">Manglik:</span> {data.manglikStatus}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <Section title="Education & Career" gold>
            <p><span className="font-semibold">Education:</span> {data.highestEducation}</p>
            <p><span className="font-semibold">Occupation:</span> {data.occupation}</p>
            <p><span className="font-semibold">Income:</span> {data.annualIncome}</p>
          </Section>
          <Section title="Family Details" gold>
            <p><span className="font-semibold">Father:</span> {data.fatherPrefix} {data.fatherName} - {data.fatherOccupation}</p>
            <p><span className="font-semibold">Mother:</span> {data.motherPrefix} {data.motherName} - {data.motherOccupation}</p>
          </Section>
          <Section title="Contact" gold>
            <p><span className="font-semibold">Mobile:</span> {data.contactNumber}</p>
            <p><span className="font-semibold">Address:</span> {data.presentAddress}</p>
          </Section>
        </div>
      </div>
    </div>
  </div>
);

// Template 2: Modern Minimal
export const ModernMinimalTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] p-10 ${style} bg-white`}>
    <div className="text-center mb-8">
      {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-16 h-16 mx-auto mb-3 object-contain opacity-80" />}
      <div className="w-20 h-0.5 bg-[hsl(var(--gold))] mx-auto" />
    </div>
    <div className="flex gap-10">
      <div className="flex-1">
        <h1 className="text-4xl font-light tracking-wide text-gray-800 mb-1">{data.fullName}</h1>
        <p className="text-[hsl(var(--gold))] font-medium mb-6">{data.occupation}</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Personal</h3>
            <div className="grid grid-cols-2 gap-y-1 text-sm">
              <span className="text-gray-500">Age</span><span>{data.age} years</span>
              <span className="text-gray-500">Height</span><span>{data.height}</span>
              <span className="text-gray-500">Religion</span><span>{data.religion}</span>
              <span className="text-gray-500">Caste</span><span>{data.caste}</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Education</h3>
            <p className="text-sm">{data.highestEducation}</p>
            <p className="text-sm text-gray-600">{data.workDetail}</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Family</h3>
            <p className="text-sm">{data.fatherPrefix} {data.fatherName}</p>
            <p className="text-sm text-gray-600">{data.fatherOccupation}</p>
          </div>
        </div>
      </div>
      <div className="w-48 h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        {data.profilePhoto ? (
          <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Photo</span>
        )}
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
      {data.contactNumber} • {data.email}
    </div>
  </div>
);

// Template 3: Traditional Mandala
export const TraditionalMandalaTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative`}>
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--cream))] to-[hsl(var(--champagne))]" />
    <div className="absolute inset-0 pattern-mandala" />
    <div className="relative z-10 p-8">
      <div className="text-center">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-24 h-24 mx-auto mb-2 object-contain" />}
        <h1 className="font-hindi text-2xl text-[hsl(var(--maroon))]">|| श्री गणेशाय नमः ||</h1>
        <h2 className="font-script text-5xl text-[hsl(var(--gold))] mt-2">वैवाहिक परिचय</h2>
      </div>
      <div className="mt-6 bg-white/80 backdrop-blur border-2 border-[hsl(var(--gold))] rounded-lg p-6">
        <div className="flex gap-6">
          <div className="w-36 h-48 bg-gray-200 rounded border border-[hsl(var(--gold))] overflow-hidden">
            {data.profilePhoto ? (
              <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : null}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl text-[hsl(var(--maroon))]">{data.fullName}</h2>
            <table className="w-full mt-3 text-sm">
              <tbody>
                <tr><td className="py-1 text-gray-600 w-28">जन्म तिथि</td><td>{data.dateOfBirth}</td></tr>
                <tr><td className="py-1 text-gray-600">समय / स्थान</td><td>{data.timeOfBirth}, {data.placeOfBirth}</td></tr>
                <tr><td className="py-1 text-gray-600">ऊंचाई</td><td>{data.height}</td></tr>
                <tr><td className="py-1 text-gray-600">गोत्र</td><td>{data.gotra}</td></tr>
                <tr><td className="py-1 text-gray-600">राशि / नक्षत्र</td><td>{data.zodiac}, {data.nakshatra}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-[hsl(var(--cream))] p-4 rounded">
            <h4 className="font-semibold text-[hsl(var(--maroon))] mb-2">शिक्षा एवं व्यवसाय</h4>
            <p>{data.highestEducation}</p>
            <p>{data.occupation} - {data.annualIncome}</p>
          </div>
          <div className="bg-[hsl(var(--cream))] p-4 rounded">
            <h4 className="font-semibold text-[hsl(var(--maroon))] mb-2">पारिवारिक विवरण</h4>
            <p>पिता: {data.fatherName}</p>
            <p>माता: {data.motherName}</p>
          </div>
        </div>
        <div className="mt-4 text-center p-3 bg-[hsl(var(--gold))]/10 rounded">
          <p className="text-sm"><strong>संपर्क:</strong> {data.contactNumber} | {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 4: Elegant Floral
export const ElegantFloralTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} relative bg-white`}>
    <div className="absolute inset-0 pattern-floral" />
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(var(--rose))]/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--rose))]/30 to-transparent" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto mb-3 object-contain" />}
        <h1 className="font-elegant text-4xl text-[hsl(var(--burgundy))] italic">Marriage Biodata</h1>
      </div>
      <div className="bg-white/90 backdrop-blur-sm border border-[hsl(var(--rose))] rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <div className="w-32 h-40 bg-[hsl(var(--blush))] rounded-xl mx-auto border-4 border-white shadow-lg overflow-hidden">
            {data.profilePhoto ? (
              <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : null}
          </div>
          <h2 className="font-display text-3xl text-[hsl(var(--burgundy))] mt-4">{data.fullName}</h2>
          <p className="text-[hsl(var(--rose))]">{data.occupation}</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <InfoCard title="Personal Details" color="rose">
            <InfoRow label="Date of Birth" value={data.dateOfBirth} />
            <InfoRow label="Age" value={`${data.age} years`} />
            <InfoRow label="Height" value={data.height} />
            <InfoRow label="Complexion" value={data.complexion} />
          </InfoCard>
          <InfoCard title="Religious Details" color="rose">
            <InfoRow label="Religion" value={data.religion} />
            <InfoRow label="Caste" value={data.caste} />
            <InfoRow label="Gotra" value={data.gotra} />
            <InfoRow label="Manglik" value={data.manglikStatus} />
          </InfoCard>
          <InfoCard title="Education & Career" color="rose">
            <InfoRow label="Education" value={data.highestEducation} />
            <InfoRow label="Profession" value={data.occupation} />
            <InfoRow label="Income" value={data.annualIncome} />
          </InfoCard>
          <InfoCard title="Family" color="rose">
            <InfoRow label="Father" value={`${data.fatherName}`} />
            <InfoRow label="Mother" value={`${data.motherName}`} />
            <InfoRow label="Residence" value={data.city} />
          </InfoCard>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>📞 {data.contactNumber} | ✉️ {data.email}</p>
        </div>
      </div>
    </div>
  </div>
);

// Template 5: Royal Peacock
export const RoyalPeacockTemplate = ({ data, style, showGaneshJi = true }: TemplateProps) => (
  <div className={`w-[210mm] min-h-[297mm] ${style} bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--peacock))] text-white relative overflow-hidden`}>
    <div className="absolute inset-0 pattern-paisley opacity-20" />
    <div className="relative z-10 p-8">
      <div className="text-center mb-6">
        {showGaneshJi && <img src={ganeshJi} alt="Ganesh Ji" className="w-20 h-20 mx-auto mb-2 object-contain brightness-150" />}
        <h1 className="font-royal text-3xl text-[hsl(var(--gold))] tracking-wider">MARRIAGE BIODATA</h1>
        <div className="flex justify-center gap-2 mt-2">
          <div className="w-16 h-0.5 bg-[hsl(var(--gold))]" />
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" />
          <div className="w-16 h-0.5 bg-[hsl(var(--gold))]" />
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-[hsl(var(--gold))]/30">
        <div className="flex gap-6">
          <div className="w-40 h-52 rounded-lg bg-white/20 border-2 border-[hsl(var(--gold))] overflow-hidden">
            {data.profilePhoto ? (
              <img src={data.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : null}
          </div>
          <div className="flex-1">
            <h2 className="font-display text-3xl text-[hsl(var(--gold))]">{data.fullName}</h2>
            <p className="text-[hsl(var(--gold-light))] mb-4">{data.occupation}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <DetailItem label="Birth" value={`${data.dateOfBirth}, ${data.placeOfBirth}`} />
              <DetailItem label="Height" value={data.height} />
              <DetailItem label="Religion" value={`${data.religion}, ${data.caste}`} />
              <DetailItem label="Gotra" value={data.gotra} />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-[hsl(var(--gold))] font-semibold mb-2">Education & Career</h4>
            <p className="text-sm opacity-90">{data.highestEducation}</p>
            <p className="text-sm opacity-90">{data.workDetail}</p>
            <p className="text-[hsl(var(--gold))] text-sm mt-1">{data.annualIncome}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-[hsl(var(--gold))] font-semibold mb-2">Family</h4>
            <p className="text-sm opacity-90">Father: {data.fatherName}</p>
            <p className="text-sm opacity-70">{data.fatherOccupation}</p>
            <p className="text-sm opacity-90 mt-1">Mother: {data.motherName}</p>
          </div>
        </div>
        <div className="mt-4 text-center py-3 bg-[hsl(var(--gold))]/20 rounded-lg">
          <p className="text-[hsl(var(--gold))]">{data.contactNumber} | {data.presentAddress}</p>
        </div>
      </div>
    </div>
  </div>
);

// Helper components
const Section = ({ title, children, gold }: { title: string; children: React.ReactNode; gold?: boolean }) => (
  <div>
    <h3 className={`font-semibold ${gold ? 'text-[hsl(var(--gold))]' : 'text-[hsl(var(--maroon))]'} border-b border-current pb-1 mb-2`}>
      {title}
    </h3>
    <div className="text-sm space-y-1">{children}</div>
  </div>
);

const InfoCard = ({ title, children, color }: { title: string; children: React.ReactNode; color: string }) => (
  <div className={`bg-[hsl(var(--${color}))]/10 rounded-xl p-4`}>
    <h4 className={`font-semibold text-[hsl(var(--burgundy))] mb-3`}>{title}</h4>
    <div className="space-y-2">{children}</div>
  </div>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-[hsl(var(--gold-light))] text-xs">{label}</span>
    <p className="text-sm">{value}</p>
  </div>
);
