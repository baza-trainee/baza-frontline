import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import Heart from '../icons/Heart';

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

const LinkButton = ({ text, href, className }: LinkButtonProps) => {
  return (
    <Link
      to={href}
      rel='noopener noreferrer'
      className={cn(
        className ? className : 'mx-auto',
        'flex w-full items-center justify-center gap-4 whitespace-nowrap rounded-xl bg-black px-[16px] py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800',
        className,
      )}
    >
      {text}
      <Heart />
    </Link>
  );
};

export default LinkButton;
