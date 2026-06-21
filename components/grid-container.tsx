import React from 'react';

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  theme: 'yellow' | 'green' | 'purple' | 'blue' | 'red';
}

const themeClasses = {
  yellow: {
    iconBorder: 'border-amber-500/40 bg-amber-500/5',
    arrowBorder: 'border-amber-500/20 text-stone-400 group-hover:bg-amber-500 group-hover:text-black group-hover:border-transparent',
  },
  green: {
    iconBorder: 'border-emerald-500/40 bg-emerald-500/5',
    arrowBorder: 'border-emerald-500/20 text-stone-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-transparent',
  },
  purple: {
    iconBorder: 'border-purple-500/40 bg-purple-500/5',
    arrowBorder: 'border-purple-500/20 text-stone-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-transparent',
  },
  blue: {
    iconBorder: 'border-blue-500/40 bg-blue-500/5',
    arrowBorder: 'border-blue-500/20 text-stone-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-transparent',
  },
  red: {
    iconBorder: 'border-red-500/40 bg-red-500/5',
    arrowBorder: 'border-red-500/20 text-stone-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-transparent',
  },
};

export function LinkCard({ title, description, href, icon, theme }: CardProps) {
  const styles = themeClasses[theme] || themeClasses.yellow;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-[#161517] border border-[#272628] hover:border-[#424044] rounded-xl p-6 transition-all duration-200 no-underline"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm ${styles.iconBorder}`}>
            {icon}
          </div>
          <span className="text-white font-medium text-base m-0 p-0 block">{title}</span>
        </div>
        <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm transition-all duration-200 ${styles.arrowBorder}`}>
          ↗
        </div>
      </div>
      <p className="text-stone-400 text-sm leading-relaxed m-0">{description}</p>
    </a>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6 max-w-5xl w-full">
      {children}
    </div>
  );
}
