import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Heart from '../icons/Heart';
import styles from './RippleEffect.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, onClick, ...props }, ref) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--x', `${x}px`);
      target.style.setProperty('--y', `${y}px`);
    };

    return (
      <button
        ref={ref}
        {...props}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        className={cn(
          styles.ripple,
          className ? className : 'mx-auto',
          'relative flex w-full max-w-[272px] items-center justify-center gap-4 whitespace-nowrap rounded-xl bg-black px-[16px] py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800',
        )}
        style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
      >
        <span className='relative z-[1]'>{text}</span>
        <span className='relative z-[1]'>
          <Heart />
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
