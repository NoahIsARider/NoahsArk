import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXUS // Link Portal',
  description: 'A retro-futuristic link portal — your gateway to the digital cosmos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-[#f5f0e8] min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
