import CarIcon from '../../assets/icons/icons-car.svg';
import HandIcon from '../../assets/icons/icons-hand.svg';
import HerbIcon from '../../assets/icons/icons-herb.svg';

const Mission = () => {
  return (
    <div className='flex flex-col px-[34px] py-[16px] mobile:gap-[20px] mobile:gap-[34px] mobile:px-[120px] mobile:py-[42px] tablet:gap-[40px] tablet:px-[60px] tablet:py-[80px]'>
      <h1 className='mb-[20px] text-center font-playfairDisplay text-[24px] font-bold mobile:mb-0 mobile:text-[32px] tablet:text-[40px]'>
        Наша місія
      </h1>
      <div className='flex flex-col items-start justify-center gap-[16px] mobile:flex-row mobile:gap-[31px] tablet:gap-[24px]'>
        <div className='flex flex-row gap-[16px] mobile:flex-col'>
          <img src={HandIcon} alt='hand' className='h-[32px] mobile:h-[64px] tablet:h-[80px]' />
          <p className='text-[14px]'>Допомогти воїнам відчути підтримку свого народу.</p>
        </div>
        <div className='flex flex-row gap-[16px] mobile:flex-col'>
          <img src={CarIcon} alt='car' className='h-[32px] mobile:h-[64px] tablet:h-[80px]' />
          <p className='text-[14px]'>
            Забезпечити техніку, гуманітарну допомогу та інші критично важливі ресурси.
          </p>
        </div>
        <div className='flex flex-row gap-[16px] mobile:flex-col'>
          <img src={HerbIcon} alt='herb' className='h-[32px] mobile:h-[64px] tablet:h-[80px]' />
          <p className='text-[14px]'>Зробити внесок у майбутнє вільної та незалежної України.</p>
        </div>
      </div>
      <p className='mt-[12px] mobile:mt-0 tablet:w-[55%]'>
        Разом ми можемо більше! Ваші донати – це реальна допомога тим, хто стоїть на захисті нашої
        країни. Кожна гривня – це вклад у спільну перемогу!
      </p>
    </div>
  );
};

export default Mission;
