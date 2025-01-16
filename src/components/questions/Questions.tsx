import PlusImg from '../../assets/icons/plus.svg';

const Questions = () => {
  return (
    <div className='flex flex-col gap-[20px] px-[16px] py-[32px] mobile:gap-[34px] mobile:px-[161px] tablet:gap-[40px] tablet:px-[80px] tablet:py-[60px]'>
      <h1 className='text-center font-playfairDisplay text-[24px] font-bold mobile:text-[32px] tablet:text-start tablet:text-[40px]'>
        Часті запитання
      </h1>
      <div className='flex flex-col gap-[8px] tablet:gap-[9px]'>
        <details>
          <summary className='flex cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] text-[14px] tablet:text-[16px]'>
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
          <summary className='flex cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] text-[14px] tablet:text-[16px]'>
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
          <summary className='flex cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] text-[14px] tablet:text-[16px]'>
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
