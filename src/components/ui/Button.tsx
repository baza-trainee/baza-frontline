import React from 'react';
import Heart from '../icons/Heart';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='mx-auto mt-8 flex w-[80vw] items-center justify-center gap-4 rounded-xl bg-black px-8 py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800'
      {...props}
    >
      {text}
      <Heart />
    </button>
  );
};

export default Button;
