import { ProfileData } from '@/types/profile';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageUpload } from './ImageUpload';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DetailsTabProps {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
}

export const DetailsTab = ({ data, onChange }: DetailsTabProps) => {
  const updateField = <K extends keyof ProfileData>(field: K, value: ProfileData[K]) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
      <div>
        <h3 className="text-lg font-semibold text-[hsl(var(--maroon))]">Profile Details</h3>
        <p className="text-sm text-muted-foreground">Fill in your information</p>
      </div>

      <Accordion type="multiple" defaultValue={['photos', 'basic']} className="space-y-2">
        {/* Photos Section */}
        <AccordionItem value="photos" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">📷 Photos</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <ImageUpload
                label="Profile Photo"
                value={data.profilePhoto}
                onChange={(v) => updateField('profilePhoto', v)}
              />
              <ImageUpload
                label="Kundli Image"
                value={data.kundliImage}
                onChange={(v) => updateField('kundliImage', v)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Basic Information */}
        <AccordionItem value="basic" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">👤 Basic Information</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Prefix</label>
                <Select value={data.prefix} onValueChange={(v) => updateField('prefix', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mr.">Mr.</SelectItem>
                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                    <SelectItem value="Ms.">Ms.</SelectItem>
                    <SelectItem value="Shri">Shri</SelectItem>
                    <SelectItem value="Smt.">Smt.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Full Name</label>
                <Input value={data.fullName} onChange={(e) => updateField('fullName', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Date of Birth</label>
                <Input value={data.dateOfBirth} onChange={(e) => updateField('dateOfBirth', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Age</label>
                <Input type="number" value={data.age} onChange={(e) => updateField('age', parseInt(e.target.value) || 0)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Gender</label>
                <Select value={data.gender} onValueChange={(v) => updateField('gender', v as ProfileData['gender'])}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Height</label>
                <Input value={data.height} onChange={(e) => updateField('height', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Weight</label>
                <Input value={data.weight} onChange={(e) => updateField('weight', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Complexion</label>
                <Input value={data.complexion} onChange={(e) => updateField('complexion', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">About Me</label>
              <Textarea value={data.aboutMe} onChange={(e) => updateField('aboutMe', e.target.value)} rows={3} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Religion & Community */}
        <AccordionItem value="religion" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">🕉️ Religion & Community</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Religion</label>
                <Input value={data.religion} onChange={(e) => updateField('religion', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Caste</label>
                <Input value={data.caste} onChange={(e) => updateField('caste', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Gotra</label>
                <Input value={data.gotra} onChange={(e) => updateField('gotra', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Aakna</label>
                <Input value={data.aakna} onChange={(e) => updateField('aakna', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Manglik Status</label>
                <Select value={data.manglikStatus} onValueChange={(v) => updateField('manglikStatus', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Manglik">Manglik</SelectItem>
                    <SelectItem value="Non-Manglik">Non-Manglik</SelectItem>
                    <SelectItem value="Anshik Manglik">Anshik Manglik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Zodiac</label>
                <Input value={data.zodiac} onChange={(e) => updateField('zodiac', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Time of Birth</label>
                <Input value={data.timeOfBirth} onChange={(e) => updateField('timeOfBirth', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Place of Birth</label>
                <Input value={data.placeOfBirth} onChange={(e) => updateField('placeOfBirth', e.target.value)} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education & Career */}
        <AccordionItem value="education" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">🎓 Education & Career</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <label className="text-xs text-muted-foreground">Highest Education</label>
              <Input value={data.highestEducation} onChange={(e) => updateField('highestEducation', e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Occupation</label>
              <Input value={data.occupation} onChange={(e) => updateField('occupation', e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Annual Income</label>
              <Input value={data.annualIncome} onChange={(e) => updateField('annualIncome', e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Work Details</label>
              <Textarea value={data.workDetail} onChange={(e) => updateField('workDetail', e.target.value)} rows={2} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Family */}
        <AccordionItem value="family" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">👨‍👩‍👧‍👦 Family</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Father's Name</label>
                <Input value={data.fatherName} onChange={(e) => updateField('fatherName', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Father's Occupation</label>
                <Input value={data.fatherOccupation} onChange={(e) => updateField('fatherOccupation', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Mother's Name</label>
                <Input value={data.motherName} onChange={(e) => updateField('motherName', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Mother's Occupation</label>
                <Input value={data.motherOccupation} onChange={(e) => updateField('motherOccupation', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Brothers (Total)</label>
                <Input type="number" value={data.brothersTotal} onChange={(e) => updateField('brothersTotal', parseInt(e.target.value) || 0)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Sisters (Total)</label>
                <Input type="number" value={data.sistersTotal} onChange={(e) => updateField('sistersTotal', parseInt(e.target.value) || 0)} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Contact */}
        <AccordionItem value="contact" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">📞 Contact & Address</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Contact Number</label>
                <Input value={data.contactNumber} onChange={(e) => updateField('contactNumber', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <Input value={data.email} onChange={(e) => updateField('email', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Present Address</label>
              <Input value={data.presentAddress} onChange={(e) => updateField('presentAddress', e.target.value)} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">City</label>
                <Input value={data.city} onChange={(e) => updateField('city', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">State</label>
                <Input value={data.state} onChange={(e) => updateField('state', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Country</label>
                <Input value={data.country} onChange={(e) => updateField('country', e.target.value)} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
