import * as React from 'react';
import { Link } from 'react-router-dom';

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = () => {
  return (
    <div className="sidebar w-[250px] h-full flex flex-col ">
      <Link to="/">Dasboard</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
