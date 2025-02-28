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
      <div className='m-auto max-w-[1280px] p-5 py-[60px]'>
        <h2 className='mb-5 text-center font-playfairDisplay text-2xl font-bold md:mb-7 md:text-[40px] lg:mb-9 xl:mb-10'>
          {title}
        </h2>

        <div className='mb-5 flex flex-wrap justify-between lg:mb-9 xl:mb-12 xl:flex-nowrap xl:gap-10'>
          <div className='2xl:flex-[0_0_45%]'>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className='mb-3'
                dangerouslySetInnerHTML={{ __html: paragraph }}
                aria-hidden='true'
              />
            ))}
          </div>
          <div className='2xl:flex-[0_0_45%]'>
            {paragraphs1.map((paragraph, index) => (
              <p
                key={index}
                className='mb-3'
                dangerouslySetInnerHTML={{ __html: paragraph }}
                aria-hidden='true'
              />
            ))}
          </div>
        </div>

        <div className='max-w-[750px]'>
          <h3 className='mb-2 font-inter text-base font-semibold md:mb-3'>{title2}</h3>
          {importantParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className='mb-3'
              dangerouslySetInnerHTML={{ __html: paragraph }}
              aria-hidden='true'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
