import * as React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface ILayoutProps {
  content: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ content }) => {
  return (
    <div className="layout flex min-h-screen">
      <Sidebar />
      <main className="main flex-1">
        <Header />
        {content}
      </main>
    </div>
  );
};

export default Layout;
