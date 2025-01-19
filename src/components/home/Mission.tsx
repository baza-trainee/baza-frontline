import CarIcon from '../../assets/icons/icons-car.svg';
import HandIcon from '../../assets/icons/icons-hand.svg';
import HerbIcon from '../../assets/icons/icons-herb.svg';

const Mission = () => {
  return (
    <section className='mobile:gap-[20px] mobile:gap-[34px] mobile:px-[120px] mobile:py-[42px] tablet:gap-[40px] tablet:px-[60px] tablet:py-[80px] flex flex-col px-[34px] py-[16px]'>
      <h1 className='mobile:mb-0 mobile:text-[32px] tablet:text-[40px] mb-[20px] text-center font-playfairDisplay text-[24px] font-bold'>
        Наша місія
      </h1>
      <div className='mobile:flex-row mobile:gap-[31px] tablet:gap-[24px] flex flex-col items-start justify-center gap-[16px]'>
        <div className='mobile:flex-col flex flex-row gap-[16px]'>
          <img src={HandIcon} alt='hand' className='mobile:h-[64px] tablet:h-[80px] h-[32px]' />
          <p className='text-[14px]'>Допомогти воїнам відчути підтримку свого народу.</p>
        </div>
        <div className='mobile:flex-col flex flex-row gap-[16px]'>
          <img src={CarIcon} alt='car' className='mobile:h-[64px] tablet:h-[80px] h-[32px]' />
          <p className='text-[14px]'>
            Забезпечити техніку, гуманітарну допомогу та інші критично важливі ресурси.
          </p>
        </div>
        <div className='mobile:flex-col flex flex-row gap-[16px]'>
          <img src={HerbIcon} alt='herb' className='mobile:h-[64px] tablet:h-[80px] h-[32px]' />
          <p className='text-[14px]'>Зробити внесок у майбутнє вільної та незалежної України.</p>
        </div>
      </div>
      <p className='mobile:mt-0 tablet:w-[55%] mt-[12px]'>
        Разом ми можемо більше! Ваші донати – це реальна допомога тим, хто стоїть на захисті нашої
        країни. Кожна гривня – це вклад у спільну перемогу!
      </p>
    </section>
  );
};

export default Mission;
