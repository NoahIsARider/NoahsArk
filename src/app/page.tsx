'use client';

import { useEffect, useState } from 'react';
import { HeroBackground } from '@/components/hero-background';
import { LinkGroup } from '@/components/link-group';

const linkGroups = [
  {
    title: 'Profile',
    index: '001',
    links: [
      { label: 'GitHub', href: 'https://github.com/NoahIsARider', description: 'Source code & repositories' },
      { label: 'Homepage', href: 'https://noahisarider.github.io/', description: 'Personal homepage' },
      { label: 'npm', href: 'https://www.npmjs.com/~noahisarider', description: 'npm profile & packages' },
      { label: 'Codeberg', href: 'https://codeberg.org/NoahIsARider', description: 'Dev & art profile' },
    ],
  },
  {
    title: 'Blogs',
    index: '002',
    links: [
      { label: 'Triton', href: 'https://clawbot-triton.vercel.app/', description: 'Deep-sea engineering logs' },
      { label: 'Palaemon', href: 'https://palaemon-harbor.vercel.app/', description: 'Harbor of new frontiers' },
    ],
  },
  {
    title: 'Projects',
    index: '003',
    links: [
      { label: 'BookClub-2000', href: 'https://book-club-2000.vercel.app/', description: 'Win2000-style reading log' },
      { label: 'Museum of Failures', href: 'https://museum-of-failures.vercel.app/', description: 'Failures worth keeping' },
      { label: 'Sailor Draft', href: 'https://sailor-draft.vercel.app/', description: 'In-progress works' },
      { label: 'GeekRSS', href: 'https://geek-rss.vercel.app/', description: 'RSS feed service' },
      { label: 'ArkRSS', href: 'https://ark-rss.vercel.app/', description: 'Ark RSS hub' },
    ],
  },
  {
    title: 'Packages',
    index: '004',
    links: [
      { label: 'yieldpoint', href: 'https://www.npmjs.com/package/yieldpoint', description: 'HMC power handover engine (npm)' },
      { label: 'arena', href: 'https://www.npmjs.com/package/@noahisarider/arena', description: 'Multi-agent eval engine (npm)' },
      { label: 'mankiwecolab', href: 'https://pypi.org/project/mankiwecolab/', description: 'Mankiw economics lab (PyPI)' },
      { label: 'aicrusaders', href: 'https://pypi.org/project/aicrusaders/', description: 'HMC framework (PyPI)' },
      { label: 'TiltmeterGo', href: 'https://pkg.go.dev/github.com/LandslideLab/TiltmeterGo', description: 'Agent skill trust (Go)' },
      { label: 'SphinxGo', href: 'https://pkg.go.dev/github.com/LandslideLab/SphinxGo', description: 'HITL control plane (Go)' },
    ],
  },
  {
    title: 'Organizations',
    index: '005',
    links: [
      { label: 'LandslideLab', href: 'https://github.com/LandslideLab', description: 'The organization' },
      { label: 'LANDSLIDE', href: 'https://landslidelab.github.io/', description: 'Org homepage' },
    ],
  },
  {
    title: 'Reading',
    index: '006',
    links: [
      { label: 'Letterboxd', href: 'https://letterboxd.com/NoahIsARider/', description: 'Film diary' },
      { label: 'Douban', href: 'https://www.douban.com/people/227017213/', description: 'Books, films & music' },
    ],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]" />
    );
  }

  return (
    <div className="relative min-h-screen">
      <HeroBackground />

      {/* Main content */}
      <main className="relative z-10 min-h-screen">
        {/* Header section */}
        <header className="pt-16 pb-8 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Top bar with coordinates */}
            <div
              className="animate-fade-in-diagonal flex items-center justify-between mb-16"
              style={{ animationDelay: '0ms' }}
            >
              <span className="text-[0.6rem] font-mono tracking-[0.4em] text-[#6b7b8d] uppercase">
                Sector 7G // Node Active
              </span>
              <span className="text-[0.6rem] font-mono tracking-[0.4em] text-[#6b7b8d]">
                {new Date().getFullYear()}
              </span>
            </div>

            {/* Main title */}
            <div
              className="animate-fade-in-up mb-4"
              style={{ animationDelay: '80ms' }}
            >
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#f5f0e8] leading-[0.9]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                NEXUS
              </h1>
            </div>

            <div
              className="animate-fade-in-up flex items-center gap-6 mb-6"
              style={{ animationDelay: '160ms' }}
            >
              <div className="h-px flex-1 max-w-32 bg-[#e63946]/60" />
              <p
                className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#6b7b8d] font-light"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Link Portal
              </p>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '240ms' }}
            >
              <p className="text-sm text-[#6b7b8d]/80 max-w-md leading-relaxed font-light">
                Your gateway to the digital cosmos. All essential resources, 
                organized and one click away.
              </p>
            </div>
          </div>
        </header>

        {/* Link groups grid - asymmetric layout */}
        <section className="px-6 md:px-12 lg:px-20 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Asymmetric grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10">
              {/* First row - offset left */}
              <div className="md:col-span-5 md:col-start-1">
                <LinkGroup
                  title={linkGroups[0].title}
                  index={linkGroups[0].index}
                  links={linkGroups[0].links}
                />
              </div>
              <div className="md:col-span-4 md:col-start-8 md:mt-16">
                <LinkGroup
                  title={linkGroups[1].title}
                  index={linkGroups[1].index}
                  links={linkGroups[1].links}
                />
              </div>

              {/* Second row - offset right */}
              <div className="md:col-span-4 md:col-start-2 md:mt-8">
                <LinkGroup
                  title={linkGroups[2].title}
                  index={linkGroups[2].index}
                  links={linkGroups[2].links}
                />
              </div>
              <div className="md:col-span-5 md:col-start-7 md:mt-4">
                <LinkGroup
                  title={linkGroups[3].title}
                  index={linkGroups[3].index}
                  links={linkGroups[3].links}
                />
              </div>

              {/* Third row */}
              <div className="md:col-span-5 md:col-start-1">
                <LinkGroup
                  title={linkGroups[4].title}
                  index={linkGroups[4].index}
                  links={linkGroups[4].links}
                />
              </div>
              <div className="md:col-span-4 md:col-start-8 md:mt-12">
                <LinkGroup
                  title={linkGroups[5].title}
                  index={linkGroups[5].index}
                  links={linkGroups[5].links}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f5f0e8]/10 to-transparent mb-8" />
            <div className="flex items-center justify-between">
              <span className="text-[0.55rem] font-mono tracking-[0.3em] text-[#6b7b8d]/50 uppercase">
                End of Transmission
              </span>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#e63946] animate-pulse" />
                <span className="text-[0.55rem] font-mono tracking-[0.3em] text-[#6b7b8d]/50 uppercase">
                  Signal Active
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
