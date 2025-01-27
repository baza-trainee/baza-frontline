import { memo } from 'react';

interface ContactsSectionProps {
  title: string;
  icon?: React.ReactNode;
  data: string[];
}

const ContactsSection = memo(({ title, icon, data }: ContactsSectionProps) => {
  return (
    <section className='mx-auto h-[195px] w-full max-w-[25rem] rounded-md bg-gradient-to-b from-[rgb(248,253,2)] to-[rgb(79,134,242)] p-[2px] md:h-[155px] md:w-[258px] md:min-w-[258px] lg:h-[178px] lg:w-[300px] lg:min-w-[300px] xl:h-[195px] xl:w-[288px] xl:min-w-[288px] 2xl:w-[302px] 2xl:min-w-[302px]'>
      <div className='bg-whitepx-[16px] flex h-full w-full flex-col items-start justify-center space-y-6 rounded-md bg-white px-[12px] py-[20px] lg:px-[32px] lg:py-[24px]'>
        <h2 className='text-left font-playfairDisplay text-2xl font-bold'>{title}</h2>
        <ul className='w-full'>
          {data.map((item, index) => (
            <li key={index} className='flex items-center gap-[12px] break-all text-[16px]'>
              {icon && <span className='flex-shrink-0'>{icon}</span>}
              <span className='break-words'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default ContactsSection;
