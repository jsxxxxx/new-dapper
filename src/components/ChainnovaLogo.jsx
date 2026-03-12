import React from 'react';

export const ChainnovaLogo = ({ className = "w-6 h-6 text-primary-foreground" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M9 3H15V6H18V9H21V15H18V18H15V21H9V18H6V15H3V9H6V6H9V3ZM15 6V9H18V15H15V18H9V15H12V9H9V6H15Z" 
      />
    </svg>
  );
};
