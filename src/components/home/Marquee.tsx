import { marquee } from '@/constants';

const Marquee = () => {
  const content = (
    <>
      {marquee.map((item, index) => (
        <div key={index} className='flex flex-shrink-0 items-center gap-2 px-5'>
          <div className='flex h-6 w-6 items-center justify-center'>
            <img src={item.icon} alt={item.text} className='h-8 w-8 object-contain' />
          </div>
          <p className='text-[16px] font-bold'>{item.text}</p>
        </div>
      ))}
    </>
  );

  return (
    <div className='relative w-full overflow-hidden bg-[#F6F6F6] py-3'>
      <div className='hover:pause flex animate-marquee whitespace-nowrap'>
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
