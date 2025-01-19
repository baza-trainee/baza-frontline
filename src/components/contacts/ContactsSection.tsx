import { memo } from 'react';

interface ContactsSectionProps {
  title: string;
  icon?: React.ReactNode;
  data: string[];
}

const ContactsSection = memo(({ title, icon, data }: ContactsSectionProps) => {
  return (
    <section className='mx-auto h-[195px] w-full max-w-[25rem] rounded-md bg-gradient-to-b from-[rgb(248,253,2)] to-[rgb(79,134,242)] p-[1px] md:h-[155px] md:w-1/2 lg:h-[178px]'>
      <div className='flex h-full w-full flex-col items-start justify-center space-y-6 rounded-md bg-white px-[32px] py-[24px]'>
        <h2 className='text-left font-playfairDisplay text-2xl font-bold'>{title}</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index} className='flex items-center gap-[12px] text-[16px]'>
              {icon && icon}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default ContactsSection;
