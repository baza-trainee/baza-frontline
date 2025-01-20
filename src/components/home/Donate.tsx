import Heart from '../icons/Heart';

const Donate = () => {
  return (
    <section className='mobile:gap-[34px] mobile:px-[24px] mobile:py-[42px] tablet:gap-[40px] tablet:px-[80px] tablet:py-[60px] flex flex-col items-center justify-center gap-[20px] px-[16px] py-[34px]'>
      <h2 className='mobile:gap-[34px] mobile:text-[32px] tablet:text-[40px] text-center font-playfairDisplay text-[24px] font-bold'>
        Обери сам, на що направити донат
      </h2>
      <div className='mobile:flex-row mobile:gap-[24px] tablet:gap-[24px] flex flex-col items-center justify-center gap-[20px]'>
        <div>
          <img
            src='/donate/44-img.png'
            alt='44'
            className='tablet:px-0 tablet:pb-[20px] px-[16px] pb-[24px]'
          />
          <div className='tablet:mb-[32px] tablet:gap-[16px] mb-[24px] flex flex-col items-start gap-[10px]'>
            <h3 className='tablet:text-[24px] font-playfairDisplay text-[20px] font-bold'>
              44-та окрема артилерійська бригада (44 ОМБр)
            </h3>
            <p className='tablet:[16px] text-[14px]'>
              Допоможемо тим, хто стоїть за нас на передовій!
            </p>
          </div>

          <a
            href=''
            className='mobile:w-[288px] tablet:w-[275px] tablet:px-[24.5px] tablet:py-[15.5px] tablet:text-[18px] flex w-[100%] flex-row items-center justify-center gap-[12px] rounded-[10px] bg-black px-[43px] py-[11px] text-[16px] text-white transition hover:bg-gray-800'
          >
            Підтримати 100 ОМБр
            <Heart />
          </a>
        </div>
        <div>
          <img
            src='/donate/100-img.png'
            alt='44'
            className='tablet:px-0 tablet:pb-[20px] px-[16px] pb-[24px]'
          />
          <div className='tablet:mb-[32px] tablet:gap-[16px] mb-[24px] flex flex-col items-start gap-[10px]'>
            <h3 className='tablet:text-[24px] font-playfairDisplay text-[20px] font-bold'>
              100-та окрема механізована бригада (100 ОМБр)
            </h3>
            <p className='tablet:[16px] text-[14px]'>
              Допоможемо тим, хто стоїть за нас на передовій!
            </p>
          </div>

          <a
            href=''
            className='mobile:w-[288px] tablet:w-[275px] tablet:px-[24.5px] tablet:py-[15.5px] tablet:text-[18px] flex w-[100%] flex-row items-center justify-center gap-[12px] rounded-[10px] bg-black px-[43px] py-[11px] text-[16px] text-white transition hover:bg-gray-800'
          >
            Підтримати 100 ОМБр
            <Heart />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donate;
