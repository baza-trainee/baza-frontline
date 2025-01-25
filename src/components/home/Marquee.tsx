import Marquee from 'react-fast-marquee';
import { marquee } from '@/constants';

const MarqueeSection = () => {
  const content = (
    <div className='flex'>
      {marquee.map((item, index) => (
        <div key={index} className='flex flex-shrink-0 items-center gap-2 bg-[#E4EDFE] px-5'>
          <div className='flex h-6 w-6 items-center justify-center'>
            <img src={item.icon} alt={item.text} className='h-8 w-8 object-contain' />
          </div>
          <p className='text-[16px] font-bold'>{item.text}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className='relative w-full overflow-hidden bg-[#E4EDFE] py-3'>
      <Marquee speed={50}>
        {content}
        {content}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
