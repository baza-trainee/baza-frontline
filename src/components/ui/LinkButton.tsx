import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import ScrollToTopLink from '../common/ScrollToTopLink';
import Heart from '../icons/Heart';
import styles from './RippleEffect.module.css';

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ text, href, className }, ref) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--x', `${x}px`);
      target.style.setProperty('--y', `${y}px`);
    };

    return (
      <ScrollToTopLink
        to={href}
        ref={ref}
        rel='noopener noreferrer'
        onMouseMove={handleMouseMove}
        className={cn(
          styles.ripple,
          className ? className : 'mx-auto',
          'relative flex w-full max-w-[272px] items-center justify-center gap-4 whitespace-nowrap rounded-xl bg-black px-[16px] py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-[#303034]',
        )}
        style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
      >
        <span className='relative z-[1]'>{text}</span>
        <span className='relative z-[1]'>
          <Heart />
        </span>
      </ScrollToTopLink>
    );
  },
);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
