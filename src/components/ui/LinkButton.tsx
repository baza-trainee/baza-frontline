import { Link } from 'react-router';
import Heart from '../icons/Heart';

interface LinkButtonProps {
  text: string;
  href: string;
}

const LinkButton = ({ text, href }: LinkButtonProps) => {
  return (
    <Link
      to={href}
      rel='noopener noreferrer'
      className='mx-auto mt-8 flex w-full items-center justify-center gap-4 whitespace-nowrap rounded-xl bg-black px-[16px] py-4 text-[18px] font-[500] text-white transition-colors duration-300 hover:bg-gray-800 md:w-[15rem]'
    >
      {text}
      <Heart />
    </Link>
  );
};

export default LinkButton;
