import React from 'react';
import Heart from '../icons/Heart';

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

const LinkButton = ({ text, href, ...props }: LinkButtonProps) => {
  return (
    <a
      href={href}
      rel='noopener noreferrer'
      className='mx-auto mt-8 flex w-[80vw] items-center justify-center gap-4 rounded-xl bg-black px-8 py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800'
      {...props}
    >
      {text}
      <Heart />
    </a>
  );
};

export default LinkButton;
