import { cn } from '@/lib/utils';
import Heart from '../icons/Heart';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: (e: React.FormEvent) => void;
}

const Button = ({ text, className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        className ? className : 'mx-auto',
        'flex w-full items-center justify-center gap-4 whitespace-nowrap rounded-xl bg-black px-[16px] py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800',
        className,
      )}
    >
      {text}
      <Heart />
    </button>
  );
};

export default Button;
