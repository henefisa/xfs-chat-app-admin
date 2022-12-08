import * as React from 'react';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="header flex justify-between bg-white px-8 py-4">
      <div className="logo flex gap-2 items-center">
        <img className="w-[40px] h-[40px]" src="/images/logo.svg" alt="Logo" />
        <h4 className="logo-title text-xl font-[500]">RVK ChatApp</h4>
      </div>
      <div className="actions flex gap-3">
        <button className="btn rounded-[999px]">Signin</button>
        <button className="btn rounded-[999px]">Signup</button>
      </div>
    </header>
  );
};

export default Header;
