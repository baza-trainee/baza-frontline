import { needs } from '@/constants';
import NeedsItem from './NeedsItem';

const Needs = () => {
  return (
    <section className='px-4 py-8 md:px-[40px] md:py-[40px] lg:px-[80px] lg:py-[60px]'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
          {needs.map((item, index) => (
            <div key={index} className='w-full md:flex md:justify-center'>
              <NeedsItem text={item.text} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Needs;
