import { useState } from 'react';

const Invincibility = () => {
  return (
    <>
      <section className='w-full bg-[#F4F6FD] px-4 py-[60px]'>
        <div className='container'>
          <h2 className='mb-5 text-center font-playfairDisplay text-[24px] font-bold leading-[150%] xs2:text-[32px] md:mb-7 lg:mb-9 lg:hidden xl:mb-10 xl:text-[40px]'>
            Символ незламності - гільза за донат
          </h2>
          <div className='flex flex-wrap items-center justify-center gap-7 md:flex-nowrap'>
            <div>
              <img className='h-full rounded-[17px]' src={'/public/brigade-44/Gilsa.webp'} />
            </div>
            <div className='flex max-w-[640px] flex-col'>
              <h2 className='mb-5 hidden text-center font-playfairDisplay text-[32px] font-bold leading-[150%] md:mb-7 lg:mb-9 lg:block xl:mb-10 xl:text-[40px]'>
                Символ незламності -<br /> гільза за донат
              </h2>
              <p className='mb-4 text-base'>
                Ця гільза з поля бою з ручним розписом - символ спустошених війною душ. Неймовірно
                відважна мама загортає їх в яскраві та теплі фабри.{' '}
              </p>
              <p className='text-base'>
                Відправивши донат від 500 грн, залиш свої дані в коментарі при переказі, і ти
                матимеш можливість отримати в подарунок цей унікальний символ незламності.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Invincibility;
