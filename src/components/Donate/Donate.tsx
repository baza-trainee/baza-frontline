import Heart from '../../assets/icons/heart.svg';
import Img44 from '../../assets/main/44-img.png';
import Img100 from '../../assets/main/100-img.png';

const Donate = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[20px] px-[16px] py-[34px] mobile:gap-[34px] mobile:px-[24px] mobile:py-[42px] tablet:gap-[40px] tablet:px-[80px] tablet:py-[60px]'>
      <h1 className='text-center font-playfairDisplay text-[24px] font-bold mobile:gap-[34px] mobile:text-[32px] tablet:text-[40px]'>
        Обери сам, на що направити донат
      </h1>
      <div className='flex flex-col items-center justify-center gap-[20px] mobile:flex-row mobile:gap-[24px] tablet:gap-[24px]'>
        <div>
          <img src={Img44} alt='44' className='px-[16px] pb-[24px] tablet:px-0 tablet:pb-[20px]' />
          <div className='mb-[24px] flex flex-col items-start gap-[10px] tablet:mb-[32px] tablet:gap-[16px]'>
            <h1 className='font-playfairDisplay text-[20px] font-bold tablet:text-[24px]'>
              44-та окрема механізована бригада (44 ОМБр)
            </h1>
            <p className='tablet:[16px] text-[14px]'>
              Допоможемо тим, хто стоїть за нас на передовій!
            </p>
          </div>

          <a
            href=''
            className='flex w-[100%] flex-row items-center justify-center gap-[12px] rounded-[10px] bg-black px-[43px] py-[11px] text-[16px] text-white transition hover:bg-gray-800 mobile:w-[288px] tablet:w-[275px] tablet:px-[24.5px] tablet:py-[15.5px] tablet:text-[18px]'
          >
            Підтримати 44 ОМБр
            <img src={Heart} alt='heart' />
          </a>
        </div>
        <div>
          <img src={Img100} alt='44' className='px-[16px] pb-[24px] tablet:px-0 tablet:pb-[20px]' />
          <div className='mb-[24px] flex flex-col items-start gap-[10px] tablet:mb-[32px] tablet:gap-[16px]'>
            <h1 className='font-playfairDisplay text-[20px] font-bold tablet:text-[24px]'>
              100-та окрема механізована бригада (100 ОМБр)
            </h1>
            <p className='tablet:[16px] text-[14px]'>
              Допоможемо тим, хто стоїть за нас на передовій!
            </p>
          </div>

          <a
            href=''
            className='flex w-[100%] flex-row items-center justify-center gap-[12px] rounded-[10px] bg-black px-[43px] py-[11px] text-[16px] text-white transition hover:bg-gray-800 mobile:w-[288px] tablet:w-[275px] tablet:px-[24.5px] tablet:py-[15.5px] tablet:text-[18px]'
          >
            Підтримати 100 ОМБр
            <img src={Heart} alt='heart' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
