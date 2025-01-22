import { donateItems } from '@/constants/donate';
import LinkButton from '../ui/LinkButton';

const Donate = () => {
  return (
    <section className='lg:py-15 flex flex-col items-center justify-center gap-5 bg-[#f4f6fd] px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:gap-10 md:px-20'>
      <h2 className='text-center font-playfairDisplay text-2xl font-bold sm:text-3xl md:text-[40px]'>
        Обери сам, на що направити донат
      </h2>
      <div className='flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6 md:gap-8 lg:gap-10'>
        {donateItems.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.alt}
              className='object-cover px-4 pb-6 sm:px-0 sm:pb-5 md:h-[328px] md:pb-5 lg:h-[316px]'
            />
            <div className='mb-6 flex flex-col items-start gap-2.5 sm:mb-8 md:gap-4 lg:gap-5'>
              <h3 className='font-playfairDisplay text-xl font-bold sm:text-2xl md:text-[28px] lg:text-[32px]'>
                {item.title}
              </h3>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl'>{item.description}</p>
            </div>
            <LinkButton
              text={item.buttonText}
              href={item.href}
              className='sm:w-[288px] sm:py-4 md:w-[275px] md:text-lg lg:w-[300px]'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Donate;
