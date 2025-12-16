import { ProfileData, ColorTheme, Sibling, CustomFamilyMember } from '@/types/profile';
import React from 'react';

// Shared utility functions for template rendering
export const formatSiblingWithOccupation = (sibling: Sibling): string => {
  let str = sibling.name;
  if (sibling.occupation) str += ` (${sibling.occupation})`;
  if (sibling.married) str += ' - Married';
  if (sibling.spouseName) str += ` to ${sibling.spouseName}`;
  return str;
};

export const formatSiblingSimple = (sibling: Sibling): string => {
  let str = sibling.name;
  if (sibling.married) str += ' (M)';
  return str;
};

export const formatCustomFamilyMember = (member: CustomFamilyMember): string => {
  const rel = member.relationship.split(' ')[0]; // Get just the English part
  return `${rel}: ${member.name}${member.occupation ? ` (${member.occupation})` : ''}`;
};

// Shared section components
export const SectionTitle = ({ title, color }: { title: string; color: string }) => (
  <h4 className="font-semibold text-sm mb-2" style={{ color }}>{title}</h4>
);

// Partner Preferences Display Component
export const PartnerPreferencesSection = ({ 
  data, 
  colorTheme, 
  variant = 'default' 
}: { 
  data: ProfileData; 
  colorTheme: ColorTheme;
  variant?: 'default' | 'minimal' | 'dark';
}) => {
  const hasPreferences = data.partnerMinAge || data.partnerEducation || data.additionalExpectations;
  if (!hasPreferences) return null;

  const bgColor = variant === 'dark' ? 'rgba(255,255,255,0.1)' : `${colorTheme.primary}15`;
  const textColor = variant === 'dark' ? colorTheme.accent : colorTheme.secondary;

  return (
    <div className="p-3 rounded-lg" style={{ backgroundColor: bgColor }}>
      <h4 className="font-semibold text-sm mb-2" style={{ color: colorTheme.primary }}>
        💑 Partner Preferences
      </h4>
      <div className="grid grid-cols-2 gap-1 text-xs" style={{ color: variant === 'dark' ? 'white' : 'inherit' }}>
        {(data.partnerMinAge || data.partnerMaxAge) && (
          <p><span className="opacity-70">Age:</span> {data.partnerMinAge}-{data.partnerMaxAge} years</p>
        )}
        {(data.partnerMinHeight || data.partnerMaxHeight) && (
          <p><span className="opacity-70">Height:</span> {data.partnerMinHeight} - {data.partnerMaxHeight}</p>
        )}
        {data.partnerEducation && (
          <p><span className="opacity-70">Education:</span> {data.partnerEducation}</p>
        )}
        {data.partnerCommunity && (
          <p><span className="opacity-70">Community:</span> {data.partnerCommunity}</p>
        )}
        {data.partnerLocation && (
          <p><span className="opacity-70">Location:</span> {data.partnerLocation}</p>
        )}
        {data.partnerManglik && (
          <p><span className="opacity-70">Manglik:</span> {data.partnerManglik}</p>
        )}
      </div>
      {data.additionalExpectations && (
        <p className="text-xs mt-2 italic" style={{ color: textColor }}>
          "{data.additionalExpectations}"
        </p>
      )}
    </div>
  );
};

// Family Details Display Component
export const FamilyDetailsSection = ({
  data,
  colorTheme,
  showOccupation = true,
  variant = 'default'
}: {
  data: ProfileData;
  colorTheme: ColorTheme;
  showOccupation?: boolean;
  variant?: 'default' | 'minimal' | 'dark';
}) => {
  const textColor = variant === 'dark' ? 'white' : 'inherit';
  const customMembers = data.customFamilyMembers || [];

  return (
    <div className="text-xs space-y-1" style={{ color: textColor }}>
      <p>
        <span className="font-medium">Father:</span> {data.fatherPrefix} {data.fatherName}
        {showOccupation && data.fatherOccupation && ` (${data.fatherOccupation})`}
      </p>
      <p>
        <span className="font-medium">Mother:</span> {data.motherPrefix} {data.motherName}
        {showOccupation && data.motherOccupation && ` (${data.motherOccupation})`}
      </p>
      {data.brothers.length > 0 && (
        <p>
          <span className="font-medium">Brother{data.brothers.length > 1 ? 's' : ''}:</span>{' '}
          {data.brothers.map(b => showOccupation ? formatSiblingWithOccupation(b) : formatSiblingSimple(b)).join(', ')}
        </p>
      )}
      {data.sisters.length > 0 && (
        <p>
          <span className="font-medium">Sister{data.sisters.length > 1 ? 's' : ''}:</span>{' '}
          {data.sisters.map(s => showOccupation ? formatSiblingWithOccupation(s) : formatSiblingSimple(s)).join(', ')}
        </p>
      )}
      {customMembers.length > 0 && customMembers.map((member, idx) => (
        <p key={idx}>
          <span className="font-medium">{member.relationship.split(' ')[0]}:</span>{' '}
          {member.name}{member.occupation && ` (${member.occupation})`}
        </p>
      ))}
      {data.maternalUncleName && (
        <p><span className="font-medium">Mama:</span> {data.maternalUncleName}</p>
      )}
      <p><span className="font-medium">Family:</span> {data.familyType} | {data.familyStatus}</p>
    </div>
  );
};

// Watermark Component
export const Watermark = ({ isPremium = false }: { isPremium?: boolean }) => {
  if (isPremium) return null;
  
  return (
    <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none print:block">
      <p className="text-xs opacity-50 font-medium tracking-wider">
        Created with GahoiShaadi.com
      </p>
    </div>
  );
};

// Kundli Display Component
export const KundliDisplay = ({
  kundliImage,
  colorTheme,
  size = 'medium'
}: {
  kundliImage?: string;
  colorTheme: ColorTheme;
  size?: 'small' | 'medium' | 'large';
}) => {
  if (!kundliImage) return null;

  const sizeClasses = {
    small: 'w-28 h-28',
    medium: 'w-36 h-36',
    large: 'w-44 h-44'
  };

  return (
    <div className="flex justify-center mt-3">
      <div className="text-center">
        <p className="text-xs font-semibold mb-1" style={{ color: colorTheme.primary }}>Kundli</p>
        <img 
          src={kundliImage} 
          alt="Kundli" 
          className={`${sizeClasses[size]} object-contain border rounded`}
          style={{ borderColor: colorTheme.primary }} 
        />
      </div>
    </div>
  );
};

// Profile Photo Component
export const ProfilePhoto = ({
  photo,
  colorTheme,
  className = ''
}: {
  photo?: string;
  colorTheme: ColorTheme;
  className?: string;
}) => (
  <div 
    className={`flex items-center justify-center overflow-hidden ${className}`}
    style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}
  >
    {photo ? (
      <img src={photo} alt="Profile" className="w-full h-full object-cover" />
    ) : (
      <span className="text-gray-400 text-sm">Photo</span>
    )}
  </div>
);
