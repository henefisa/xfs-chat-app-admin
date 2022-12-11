import * as React from 'react';
import clsx from 'clsx';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ className, children, ...rest }) => {
  const classes =
    'bg-primary text-[#fff] px-6 py-1 rounded-md hover:bg-[#6159cb] transition-all duration-300';

  return (
    <button className={clsx('btn', classes, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
