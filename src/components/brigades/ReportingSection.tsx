import { cn } from '@/lib/utils';

const images = [
  '/reporting/reporting1.png',
  '/reporting/reporting2.png',
  '/reporting/reporting2.png',
];

const ReportingSection = () => {
  return (
    <section className='w-full'>
      <h2 className='mb-5 text-center font-playfairDisplay text-2xl font-bold md:mb-7 md:text-[40px] lg:mb-9 xl:mb-10'>
        Звітність
      </h2>
      <div className='flex justify-center gap-6'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={cn(
              'h-[136px] w-[136px] rounded-md object-cover xs2:h-[200px] xs2:w-[200px] md:h-[300px] md:w-[300px] xl:h-[357px] xl:w-[357px]',
              index === 2 && 'hidden lg:block',
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default ReportingSection;
