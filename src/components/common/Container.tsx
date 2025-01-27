import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'container mx-auto px-4 py-[34px] xs:px-4 md:px-10 md:py-10 xl:px-20 xl:py-[60px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
