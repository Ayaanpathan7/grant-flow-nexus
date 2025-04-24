
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {!isMobile && <aside className="w-64 hidden md:block shrink-0">
          <Sidebar />
        </aside>}
        <main className="flex-1 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
