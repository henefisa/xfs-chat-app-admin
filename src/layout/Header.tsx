import * as React from 'react';
import Button from '@common/Button';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="header flex justify-between bg-white px-8 py-4">
      <div className="header-logo flex gap-2 items-center">
        <img
          className="header-logo__img w-10 h-10"
          src="/images/logo.svg"
          alt="Logo"
        />
        <h4 className="header-logo__title text-xl font-[500]">RVK ChatApp</h4>
      </div>
      <div className="actions flex gap-3">
        <Button className="signin-btn rounded-full">Signin</Button>
        <Button className="signup-btn rounded-full">Signup</Button>
      </div>
    </header>
  );
};

export default Header;
