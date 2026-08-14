'use client';

import { type ReactNode } from 'react';

interface LinkItem {
  label: string;
  href: string;
  description?: string;
}

interface LinkGroupProps {
  title: string;
  index: string;
  links: LinkItem[];
  className?: string;
  children?: ReactNode;
}

export function LinkGroup({ title, index, links, className = '', children }: LinkGroupProps) {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{ animationDelay: `${parseInt(index) * 120 + 200}ms` }}
    >
      {/* Group header */}
      <div className="flex items-center gap-4 mb-6">
        <span
          className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-[#e63946]"
          style={{ fontFamily: "'Space Grotesk', monospace" }}
        >
          {index}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#e63946]/40 to-transparent" />
        <h2
          className="text-sm font-light tracking-[0.2em] uppercase text-[#f5f0e8]/70"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h2>
      </div>

      {/* Links container */}
      {children || (
        <div className="grid gap-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-4 py-3 card-glow bg-[#111a11]/60 hover:bg-[#111a11] transition-all duration-300"
              style={{ animationDelay: `${(parseInt(index) * 120 + 200) + (i * 60)}ms` }}
            >
              {/* Geometric indicator */}
              <div className="w-1.5 h-1.5 bg-[#e63946]/40 group-hover:bg-[#e63946] transition-colors duration-300 rotate-45 flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <span className="link-underline text-sm text-[#f5f0e8]/90 group-hover:text-[#f5f0e8] transition-colors duration-300 tracking-wide">
                  {link.label}
                </span>
                {link.description && (
                  <p className="text-xs text-[#6b7b8d] mt-0.5 truncate">
                    {link.description}
                  </p>
                )}
              </div>

              {/* Arrow indicator */}
              <svg
                className="w-3 h-3 text-[#6b7b8d] group-hover:text-[#e63946] transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 6h8M7 3l3 3-3 3" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
