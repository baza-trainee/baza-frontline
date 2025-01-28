import React from 'react';

interface PowerSectionProps {
  title: string;
  title2: string;
  paragraphs: string[];
  paragraphs1: string[];
  importantParagraphs: string[];
}

const PowerSection: React.FC<PowerSectionProps> = ({
  title,
  title2,
  paragraphs,
  paragraphs1,
  importantParagraphs,
}) => {
  return (
    <section className='w-full bg-[#FCFCFC]'>
      <div className='m-auto max-w-[1280px] px-4 py-[60px]'>
        <h2 className='mb-5 text-center font-playfairDisplay text-2xl font-bold md:mb-7 md:text-[40px] lg:mb-9 xl:mb-10'>
          {title}
        </h2>
        <div className='mb-5 flex flex-wrap-reverse lg:mb-9 xl:mb-12 xl:flex-nowrap xl:gap-7'>
          <div className='2xl:flex-[0_0_55%]'>
            {paragraphs.map((paragraphs1, index) => (
              <p key={index} className='mb-3' dangerouslySetInnerHTML={{ __html: paragraphs1 }} />
            ))}
          </div>
          <div className='2xl:flex-[0_0_55%]'>
            {paragraphs1.map((paragraphs, index) => (
              <p key={index} className='mb-3' dangerouslySetInnerHTML={{ __html: paragraphs }} />
            ))}
          </div>
        </div>
        <div className='max-w-[750px]'>
          <h3 className='mb-2 font-inter text-base font-semibold md:mb-3'> {title2}</h3>
          {importantParagraphs.map((paragraphs, index) => (
            <p key={index} className='mb-3' dangerouslySetInnerHTML={{ __html: paragraphs }} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PowerSection;
