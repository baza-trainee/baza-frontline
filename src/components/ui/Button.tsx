import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='mt-8 flex w-full items-center justify-center gap-4 rounded-xl bg-black px-8 py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800'
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
