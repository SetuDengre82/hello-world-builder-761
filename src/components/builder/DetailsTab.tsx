import { ProfileData, Sibling, CustomFamilyMember, relationshipOptions } from '@/types/profile';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageUpload } from './ImageUpload';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';
import { Plus, X } from 'lucide-react';

interface DetailsTabProps {
  data: ProfileData;
  onChange: (data: ProfileData) => void;
}

export const DetailsTab = ({ data, onChange }: DetailsTabProps) => {
  const updateField = <K extends keyof ProfileData>(field: K, value: ProfileData[K]) => {
    onChange({ ...data, [field]: value });
  };

  const addHobby = () => {
    updateField('hobbies', [...data.hobbies, '']);
  };

  const updateHobby = (index: number, value: string) => {
    const newHobbies = [...data.hobbies];
    newHobbies[index] = value;
    updateField('hobbies', newHobbies);
  };

  const removeHobby = (index: number) => {
    updateField('hobbies', data.hobbies.filter((_, i) => i !== index));
  };

  const addSibling = (type: 'brothers' | 'sisters') => {
    const newSibling: Sibling = {
      id: Date.now().toString(),
      name: '',
      occupation: '',
      married: false,
    };
    updateField(type, [...data[type], newSibling]);
  };

  const updateSibling = (type: 'brothers' | 'sisters', id: string, field: keyof Sibling, value: string | boolean) => {
    const siblings = data[type].map(s => s.id === id ? { ...s, [field]: value } : s);
    updateField(type, siblings);
  };

  const removeSibling = (type: 'brothers' | 'sisters', id: string) => {
    updateField(type, data[type].filter(s => s.id !== id));
  };

  // Custom family member functions
  const addCustomFamilyMember = () => {
    const newMember: CustomFamilyMember = {
      id: Date.now().toString(),
      relationship: '',
      name: '',
      occupation: '',
    };
    updateField('customFamilyMembers', [...(data.customFamilyMembers || []), newMember]);
  };

  const updateCustomFamilyMember = (id: string, field: keyof CustomFamilyMember, value: string) => {
    const members = (data.customFamilyMembers || []).map(m => 
      m.id === id ? { ...m, [field]: value } : m
    );
    updateField('customFamilyMembers', members);
  };

  const removeCustomFamilyMember = (id: string) => {
    updateField('customFamilyMembers', (data.customFamilyMembers || []).filter(m => m.id !== id));
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
                    <SelectItem value="Ku.">Ku.</SelectItem>
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
                <Input value={data.dateOfBirth} onChange={(e) => updateField('dateOfBirth', e.target.value)} placeholder="DD-MM-YYYY" />
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
                <Input value={data.height} onChange={(e) => updateField('height', e.target.value)} placeholder="5'11&quot;" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Weight</label>
                <Input value={data.weight} onChange={(e) => updateField('weight', e.target.value)} placeholder="70 kg" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Complexion</label>
                <Select value={data.complexion} onValueChange={(v) => updateField('complexion', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fair">Fair</SelectItem>
                    <SelectItem value="Wheatish">Wheatish</SelectItem>
                    <SelectItem value="Dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Marital Status</label>
                <Select value={data.maritalStatus} onValueChange={(v) => updateField('maritalStatus', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Never Married">Never Married</SelectItem>
                    <SelectItem value="Divorced">Divorced</SelectItem>
                    <SelectItem value="Widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Blood Group</label>
                <Select value={data.bloodGroup} onValueChange={(v) => updateField('bloodGroup', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
                      <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">About Me</label>
              <Textarea value={data.aboutMe} onChange={(e) => updateField('aboutMe', e.target.value)} rows={3} />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Lifestyle */}
        <AccordionItem value="lifestyle" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">🌿 Lifestyle & Interests</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Diet</label>
                <Select value={data.diet} onValueChange={(v) => updateField('diet', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="Non-Vegetarian">Non-Vegetarian</SelectItem>
                    <SelectItem value="Eggetarian">Eggetarian</SelectItem>
                    <SelectItem value="Vegan">Vegan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Smoking</label>
                <Select value={data.smoking} onValueChange={(v) => updateField('smoking', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="Occasionally">Occasionally</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Drinking</label>
                <Select value={data.drinking} onValueChange={(v) => updateField('drinking', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="Occasionally">Occasionally</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-muted-foreground">Hobbies & Interests</label>
                <Button variant="outline" size="sm" onClick={addHobby} className="h-6 text-xs">
                  <Plus className="w-3 h-3 mr-1" /> Add
                </Button>
              </div>
              <div className="space-y-2">
                {data.hobbies.map((hobby, idx) => (
                  <div key={idx} className="flex gap-2">
                    <Input value={hobby} onChange={(e) => updateHobby(idx, e.target.value)} placeholder="e.g., Reading" />
                    <Button variant="ghost" size="icon" onClick={() => removeHobby(idx)} className="shrink-0 h-9 w-9 text-destructive">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={data.openToSettlingAbroad} onCheckedChange={(v) => updateField('openToSettlingAbroad', v)} />
              <label className="text-sm">Open to settling abroad</label>
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
                <label className="text-xs text-muted-foreground">Aakna (आकणा)</label>
                <Input value={data.aakna} onChange={(e) => updateField('aakna', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Maternal Aakna</label>
                <Input value={data.maternalAakna} onChange={(e) => updateField('maternalAakna', e.target.value)} />
              </div>
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
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Zodiac / Rashi</label>
                <Input value={data.zodiac} onChange={(e) => updateField('zodiac', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Nakshatra</label>
                <Input value={data.nakshatra} onChange={(e) => updateField('nakshatra', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Time of Birth</label>
                <Input value={data.timeOfBirth} onChange={(e) => updateField('timeOfBirth', e.target.value)} placeholder="04:25 AM" />
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Highest Education</label>
                <Input value={data.highestEducation} onChange={(e) => updateField('highestEducation', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Education Details</label>
                <Input value={data.educationDetails} onChange={(e) => updateField('educationDetails', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Profession Category</label>
                <Select value={data.professionCategory} onValueChange={(v) => updateField('professionCategory', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IT / Software">IT / Software</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Government">Government</SelectItem>
                    <SelectItem value="Medical">Medical</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Banking / Finance">Banking / Finance</SelectItem>
                    <SelectItem value="Teaching">Teaching</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Occupation</label>
                <Input value={data.occupation} onChange={(e) => updateField('occupation', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Annual Income</label>
              <Select value={data.annualIncome} onValueChange={(v) => updateField('annualIncome', v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Below 5 LPA">Below 5 LPA</SelectItem>
                  <SelectItem value="5-10 LPA">5-10 LPA</SelectItem>
                  <SelectItem value="10-15 LPA">10-15 LPA</SelectItem>
                  <SelectItem value="15-25 LPA">15-25 LPA</SelectItem>
                  <SelectItem value="25+ LPA">25+ LPA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Work Details</label>
              <Textarea value={data.workDetail} onChange={(e) => updateField('workDetail', e.target.value)} rows={2} placeholder="Company name, role, location" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Family */}
        <AccordionItem value="family" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">👨‍👩‍👧‍👦 Family</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
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
                <label className="text-xs text-muted-foreground">Family Type</label>
                <Select value={data.familyType} onValueChange={(v) => updateField('familyType', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Joint">Joint</SelectItem>
                    <SelectItem value="Nuclear">Nuclear</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Family Status</label>
                <Select value={data.familyStatus} onValueChange={(v) => updateField('familyStatus', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Middle Class">Middle Class</SelectItem>
                    <SelectItem value="Upper Middle Class">Upper Middle Class</SelectItem>
                    <SelectItem value="Rich">Rich</SelectItem>
                    <SelectItem value="Affluent">Affluent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Maternal Uncle Name (Mama)</label>
              <Input value={data.maternalUncleName} onChange={(e) => updateField('maternalUncleName', e.target.value)} />
            </div>

            {/* Brothers */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Brothers ({data.brothers.length})</label>
                <Button variant="outline" size="sm" onClick={() => addSibling('brothers')} className="h-7 text-xs">
                  <Plus className="w-3 h-3 mr-1" /> Add Brother
                </Button>
              </div>
              {data.brothers.map((brother) => (
                <div key={brother.id} className="p-3 bg-muted/50 rounded-lg mb-2 space-y-2">
                  <div className="flex gap-2">
                    <Input placeholder="Name" value={brother.name} onChange={(e) => updateSibling('brothers', brother.id, 'name', e.target.value)} />
                    <Button variant="ghost" size="icon" onClick={() => removeSibling('brothers', brother.id)} className="shrink-0 text-destructive">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Occupation" value={brother.occupation} onChange={(e) => updateSibling('brothers', brother.id, 'occupation', e.target.value)} />
                    <div className="flex items-center gap-2">
                      <Switch checked={brother.married} onCheckedChange={(v) => updateSibling('brothers', brother.id, 'married', v)} />
                      <span className="text-xs">Married</span>
                    </div>
                  </div>
                  {brother.married && (
                    <Input placeholder="Spouse Name" value={brother.spouseName || ''} onChange={(e) => updateSibling('brothers', brother.id, 'spouseName', e.target.value)} />
                  )}
                </div>
              ))}
            </div>

            {/* Sisters */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Sisters ({data.sisters.length})</label>
                <Button variant="outline" size="sm" onClick={() => addSibling('sisters')} className="h-7 text-xs">
                  <Plus className="w-3 h-3 mr-1" /> Add Sister
                </Button>
              </div>
              {data.sisters.map((sister) => (
                <div key={sister.id} className="p-3 bg-muted/50 rounded-lg mb-2 space-y-2">
                  <div className="flex gap-2">
                    <Input placeholder="Name" value={sister.name} onChange={(e) => updateSibling('sisters', sister.id, 'name', e.target.value)} />
                    <Button variant="ghost" size="icon" onClick={() => removeSibling('sisters', sister.id)} className="shrink-0 text-destructive">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Occupation" value={sister.occupation} onChange={(e) => updateSibling('sisters', sister.id, 'occupation', e.target.value)} />
                    <div className="flex items-center gap-2">
                      <Switch checked={sister.married} onCheckedChange={(v) => updateSibling('sisters', sister.id, 'married', v)} />
                      <span className="text-xs">Married</span>
                    </div>
                  </div>
                  {sister.married && (
                    <Input placeholder="Spouse Name" value={sister.spouseName || ''} onChange={(e) => updateSibling('sisters', sister.id, 'spouseName', e.target.value)} />
                  )}
                </div>
              ))}
            </div>

            {/* Custom Family Members */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Other Family Members ({(data.customFamilyMembers || []).length})</label>
                <Button variant="outline" size="sm" onClick={addCustomFamilyMember} className="h-7 text-xs">
                  <Plus className="w-3 h-3 mr-1" /> Add Relative
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Add relatives like Fufa, Mosa, Tau, Chacha, Bua, etc.</p>
              {(data.customFamilyMembers || []).map((member) => (
                <div key={member.id} className="p-3 bg-muted/50 rounded-lg mb-2 space-y-2">
                  <div className="flex gap-2">
                    <Select value={member.relationship} onValueChange={(v) => updateCustomFamilyMember(member.id, 'relationship', v)}>
                      <SelectTrigger className="flex-1"><SelectValue placeholder="Select Relationship" /></SelectTrigger>
                      <SelectContent>
                        {relationshipOptions.map(rel => (
                          <SelectItem key={rel} value={rel}>{rel}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="ghost" size="icon" onClick={() => removeCustomFamilyMember(member.id)} className="shrink-0 text-destructive">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Name" value={member.name} onChange={(e) => updateCustomFamilyMember(member.id, 'name', e.target.value)} />
                    <Input placeholder="Occupation" value={member.occupation} onChange={(e) => updateCustomFamilyMember(member.id, 'occupation', e.target.value)} />
                  </div>
                </div>
              ))}
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
                <label className="text-xs text-muted-foreground">Father's Contact</label>
                <Input value={data.fatherContact} onChange={(e) => updateField('fatherContact', e.target.value)} />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <Input value={data.email} onChange={(e) => updateField('email', e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Present Address</label>
              <Input value={data.presentAddress} onChange={(e) => updateField('presentAddress', e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Permanent Address</label>
              <Input value={data.permanentAddress} onChange={(e) => updateField('permanentAddress', e.target.value)} />
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">House Ownership</label>
                <Select value={data.houseOwnership} onValueChange={(v) => updateField('houseOwnership', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Own">Own</SelectItem>
                    <SelectItem value="Rented">Rented</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Car Ownership</label>
                <Select value={data.carOwnership} onValueChange={(v) => updateField('carOwnership', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Partner Preferences */}
        <AccordionItem value="partner" className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium">💑 Partner Preferences</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Min Age</label>
                <Input type="number" value={data.partnerMinAge} onChange={(e) => updateField('partnerMinAge', parseInt(e.target.value) || 0)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Max Age</label>
                <Input type="number" value={data.partnerMaxAge} onChange={(e) => updateField('partnerMaxAge', parseInt(e.target.value) || 0)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Min Height</label>
                <Input value={data.partnerMinHeight} onChange={(e) => updateField('partnerMinHeight', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Max Height</label>
                <Input value={data.partnerMaxHeight} onChange={(e) => updateField('partnerMaxHeight', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Education</label>
                <Input value={data.partnerEducation} onChange={(e) => updateField('partnerEducation', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Community</label>
                <Input value={data.partnerCommunity} onChange={(e) => updateField('partnerCommunity', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Location Preference</label>
                <Input value={data.partnerLocation} onChange={(e) => updateField('partnerLocation', e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Manglik Preference</label>
                <Select value={data.partnerManglik} onValueChange={(v) => updateField('partnerManglik', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Any">Any</SelectItem>
                    <SelectItem value="Manglik">Manglik</SelectItem>
                    <SelectItem value="Non-Manglik">Non-Manglik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Additional Expectations</label>
              <Textarea value={data.additionalExpectations} onChange={(e) => updateField('additionalExpectations', e.target.value)} rows={2} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
