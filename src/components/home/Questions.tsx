import { BiSolidRightArrow } from 'react-icons/bi';
import { questions } from '@/constants';
import PlusImg from '/icons/plus.svg';

const Questions = () => {
  const renderAnswer = (text: string) => {
    return text.split('\n').map((line, index) =>
      line ? (
        <p key={index} className='mb-2 last:mb-0'>
          {line}
        </p>
      ) : (
        <br key={index} />
      ),
    );
  };

  return (
    <section className='flex flex-col gap-[20px] px-[16px] py-[32px] sm:gap-[30px] md:px-[80px] md:py-[60px] lg:gap-[34px] lg:px-[161px]'>
      <h2 className='mb-8 text-center font-playfairDisplay text-2xl font-bold sm:mb-0 sm:text-3xl md:text-[40px]'>
        Часті запитання
      </h2>
      <div className='flex w-full flex-col items-center gap-[8px] sm:gap-[9px]' role='list'>
        {questions.map((item) => (
          <details key={item.id} className='group w-full'>
            <summary
              className='mx-auto mb-2 flex w-[80%] cursor-pointer items-center justify-between border-b-[1px] border-b-[gray] p-4 text-[14px] group-open:bg-[#E4EDFE] sm:text-[16px] md:text-[18px]'
              role='button'
              aria-expanded='false'
            >
              <span className='flex items-center gap-4 pr-4 text-[14px] font-[500] sm:text-[16px] md:text-[18px]'>
                <BiSolidRightArrow className='arrow-icon text-sm' />
                {item.question}
              </span>
              <span
                className='summary-icon transition-transform duration-300 group-open:rotate-45'
                aria-hidden='true'
              >
                <img src={PlusImg} alt='' className='h-[24px] w-[24px] min-w-[24px]' />
              </span>
            </summary>
            <div className='mx-auto w-[80%] p-4 text-[14px]'>{renderAnswer(item.answer)}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Questions;
