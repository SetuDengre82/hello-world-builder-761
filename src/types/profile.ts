export interface ProfileData {
  // Basic Information
  fullName: string;
  prefix: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  age: number;
  height: string;
  weight: string;
  complexion: string;
  maritalStatus: string;
  bloodGroup: string;
  disability: string;
  profileManagedBy: string;
  aboutMe: string;
  profilePhoto?: string;

  // Lifestyle & Interests
  diet: string;
  smoking: string;
  drinking: string;
  hobbies: string[];
  openToSettlingAbroad: boolean;

  // Religion & Community
  religion: string;
  caste: string;
  gotra: string;
  aakna: string;
  maternalAakna: string;
  manglikStatus: string;
  zodiac: string;
  nakshatra: string;
  timeOfBirth: string;
  placeOfBirth: string;
  kundliImage?: string;

  // Education & Career
  highestEducation: string;
  educationDetails: string;
  professionCategory: string;
  occupation: string;
  annualIncome: string;
  workDetail: string;

  // Location & Residence
  presentAddress: string;
  permanentAddress: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
  houseOwnership: string;
  carOwnership: string;

  // Family Background
  fatherPrefix: string;
  fatherName: string;
  fatherOccupation: string;
  motherPrefix: string;
  motherName: string;
  motherOccupation: string;
  brothersTotal: number;
  brothersMarried: number;
  sistersTotal: number;
  sistersMarried: number;
  maternalUncleName: string;

  // Contact Information
  contactViewMode: string;
  contactNumber: string;
  fatherContact: string;
  email: string;

  // Partner Preferences
  partnerMinAge: number;
  partnerMaxAge: number;
  partnerMinHeight: string;
  partnerMaxHeight: string;
  partnerEducation: string;
  partnerCommunity: string;
  partnerLocation: string;
  partnerProfession: string[];
  partnerDiet: string;
  partnerSmoking: string;
  partnerDrinking: string;
  partnerHobbies: string[];
  partnerManglik: string;
  additionalExpectations: string;
}

export const sampleProfileData: ProfileData = {
  fullName: "Setu Dengre",
  prefix: "Mr.",
  gender: "Male",
  dateOfBirth: "14-12-1997",
  age: 27,
  height: "5'11\"",
  weight: "70 kg",
  complexion: "Fair",
  maritalStatus: "Never Married",
  bloodGroup: "B+",
  disability: "No",
  profileManagedBy: "Self",
  aboutMe: "I am a dedicated software engineer with a passion for technology and innovation. I believe in maintaining a balance between professional growth and personal happiness.",
  profilePhoto: "",

  diet: "Vegetarian",
  smoking: "No",
  drinking: "No",
  hobbies: ["Reading", "Traveling", "Photography", "Music"],
  openToSettlingAbroad: true,

  religion: "Hindu",
  caste: "Gahoi",
  gotra: "Gol",
  aakna: "Dengre",
  maternalAakna: "Dadariya",
  manglikStatus: "Non-Manglik",
  zodiac: "Dhanu (Sagittarius)",
  nakshatra: "Moola",
  timeOfBirth: "04:25 AM",
  placeOfBirth: "Pawai (M.P.)",

  highestEducation: "B.E. CSE (RGPV University)",
  educationDetails: "Computer Science Engineering",
  professionCategory: "IT / Software",
  occupation: "Software Engineer",
  annualIncome: "25+ LPA",
  workDetail: "Consultant @ Deloitte USI, Bangalore | Previous: Tech Lead @ Nokia, Software Developer @ TEKSystems",

  presentAddress: "Bangalore, Karnataka",
  permanentAddress: "Katni, Madhya Pradesh",
  pinCode: "560045",
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  houseOwnership: "Own",
  carOwnership: "Yes",

  fatherPrefix: "Shri",
  fatherName: "Santosh Dengre",
  fatherOccupation: "Consultant Eng, Katni",
  motherPrefix: "Smt.",
  motherName: "Abhilasha Dengre",
  motherOccupation: "Home Maker",
  brothersTotal: 0,
  brothersMarried: 0,
  sistersTotal: 1,
  sistersMarried: 1,
  maternalUncleName: "Shri Jitendra Dadarya",

  contactViewMode: "Premium Only",
  contactNumber: "9755342599",
  fatherContact: "9109891904",
  email: "setudengre82@gmail.com",

  partnerMinAge: 23,
  partnerMaxAge: 28,
  partnerMinHeight: "5'0\"",
  partnerMaxHeight: "5'6\"",
  partnerEducation: "Graduate",
  partnerCommunity: "Gahoi",
  partnerLocation: "Any",
  partnerProfession: ["Any"],
  partnerDiet: "Vegetarian",
  partnerSmoking: "No",
  partnerDrinking: "No",
  partnerHobbies: [],
  partnerManglik: "Non-Manglik",
  additionalExpectations: "Looking for a caring, understanding and family-oriented life partner."
};
