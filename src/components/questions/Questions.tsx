import PlusImg from '../../assets/icons/plus.svg';

const Questions = () => {
  return (
    <div className='mobile:gap-[34px] mobile:px-[161px] tablet:gap-[40px] tablet:px-[80px] tablet:py-[60px] flex flex-col gap-[20px] px-[16px] py-[32px]'>
      <h1 className='mobile:text-[32px] tablet:text-start tablet:text-[40px] text-center font-playfairDisplay text-[24px] font-bold'>
        Часті запитання
      </h1>
      <div className='tablet:gap-[9px] flex flex-col gap-[8px]'>
        <details>
          <summary className='tablet:text-[16px] flex cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] text-[14px]'>
            <span>Як я можу допомогти?</span>
            <span>
              <img src={PlusImg} alt='plus' />
            </span>
          </summary>
          <p className='mt-4 text-[14px]'>
            Ви можете допомогти, роблячи донати, підтримуючи волонтерські ініціативи або поширюючи
            інформацію про нашу діяльність.
          </p>
        </details>

        <details>
          <summary className='tablet:text-[16px] flex cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] text-[14px]'>
            <span>Чи є мінімальна сума допомоги?</span>
            <span>
              <img src={PlusImg} alt='plus' />
            </span>
          </summary>
          <p className='mt-4 text-[14px]'>
            Ви можете допомогти, роблячи донати, підтримуючи волонтерські ініціативи або поширюючи
            інформацію про нашу діяльність.
          </p>
        </details>
        <details>
          <summary className='tablet:text-[16px] flex cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] text-[14px]'>
            <span>Якщо виникли проблеми з переказом куди я можу звернутись?</span>
            <span>
              <img src={PlusImg} alt='plus' />
            </span>
          </summary>
          <p className='mt-4 text-[14px]'>
            Ви можете допомогти, роблячи донати, підтримуючи волонтерські ініціативи або поширюючи
            інформацію про нашу діяльність.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Questions;
