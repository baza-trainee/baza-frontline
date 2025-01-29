import { missionItems } from '@/constants/mission';

const Mission = () => {
  return (
    <section className='flex flex-col bg-[#fcfcfc] px-8 py-4 sm:gap-5 sm:px-[120px] sm:py-[42px] md:gap-10 md:px-[60px] md:py-20 lg:px-[120px]'>
      <h2 className='mb-5 text-center font-playfairDisplay text-2xl font-bold sm:mb-0 sm:text-3xl md:text-[40px] lg:text-[40px]'>
        Наша місія
      </h2>
      <p className='mx-auto mb-3 hidden w-[694px] text-center text-sm font-[500] md:block md:text-lg'>
        Разом ми можемо більше! Ваші донати – це реальна допомога тим, хто стоїть на захисті нашої
        країни. Кожна гривня – це вклад у спільну перемогу!
      </p>
      <div className='flex flex-col items-start justify-center gap-4 sm:gap-8 md:flex-row md:gap-6 lg:gap-8'>
        {missionItems.map((item) => (
          <div key={item.id} className='flex flex-row gap-4 md:flex-col md:gap-6 lg:gap-8'>
            <img src={item.icon} alt={item.alt} className='h-8 sm:h-16 md:h-20 lg:h-24' />
            <p className='md:text-md text-sm sm:text-base md:text-center'>{item.text}</p>
          </div>
        ))}
      </div>
      <p className='mt-3 text-sm font-[500] sm:mt-0 sm:text-base md:hidden md:w-[55%]'>
        Разом ми можемо більше! Ваші донати – це реальна допомога тим, хто стоїть на захисті нашої
        країни. Кожна гривня – це вклад у спільну перемогу!
      </p>
    </section>
  );
};

export default Mission;
