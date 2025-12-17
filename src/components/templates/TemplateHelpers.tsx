import { ProfileData, ColorTheme, Sibling, CustomFamilyMember, ImageSize } from '@/types/profile';
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

// Size mapping for images
export const getImageSizeClass = (size: ImageSize = 'medium', type: 'photo' | 'kundli'): string => {
  const sizes = {
    photo: {
      small: 'w-20 h-24',
      medium: 'w-28 h-32',
      large: 'w-36 h-44'
    },
    kundli: {
      small: 'w-24 h-24',
      medium: 'w-32 h-32',
      large: 'w-44 h-44'
    }
  };
  return sizes[type][size];
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

// Diagonal Watermark Component
export const Watermark = ({ isPremium = false }: { isPremium?: boolean }) => {
  if (isPremium) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none print:block z-10">
      <div 
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          width: '150%',
        }}
      >
        <div className="flex flex-col items-center gap-16">
          {[...Array(5)].map((_, i) => (
            <p 
              key={i}
              className="text-2xl font-bold tracking-widest whitespace-nowrap"
              style={{ 
                color: 'rgba(128, 0, 0, 0.08)',
                textShadow: '0 0 1px rgba(128, 0, 0, 0.05)'
              }}
            >
              GahoiShaadi.com
            </p>
          ))}
        </div>
      </div>
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
  size?: ImageSize;
}) => {
  if (!kundliImage) return null;

  const sizeClass = getImageSizeClass(size, 'kundli');

  return (
    <div className="flex justify-center mt-3">
      <div className="text-center">
        <p className="text-xs font-semibold mb-1" style={{ color: colorTheme.primary }}>Kundli</p>
        <img 
          src={kundliImage} 
          alt="Kundli" 
          className={`${sizeClass} object-contain border rounded`}
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
  className = '',
  size = 'medium'
}: {
  photo?: string;
  colorTheme: ColorTheme;
  className?: string;
  size?: ImageSize;
}) => {
  const sizeClass = getImageSizeClass(size, 'photo');
  
  return (
    <div 
      className={`flex items-center justify-center overflow-hidden rounded ${sizeClass} ${className}`}
      style={{ border: `2px solid ${colorTheme.primary}`, backgroundColor: colorTheme.accent }}
    >
      {photo ? (
        <img src={photo} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-400 text-sm">Photo</span>
      )}
    </div>
  );
};
