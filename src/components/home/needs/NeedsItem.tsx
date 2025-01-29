interface NeedsItemProps {
  text: string;
  icon: string;
}

const NeedsItem = ({ text, icon }: NeedsItemProps) => {
  return (
    <div className='h-[195px] w-full rounded-md bg-gradient-to-b from-[rgb(248,253,2)] to-[rgb(79,134,242)] p-[2px] md:h-[195px] md:w-[332px] xl:h-[256px] xl:w-[262px]'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-2 rounded-md bg-white px-4 py-6 md:flex-row md:gap-6 lg:px-6 lg:py-8 xl:flex-col'>
        <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center md:h-[120px] md:w-[120px]'>
          <img
            src={icon}
            alt={text || 'Icon'}
            loading='lazy'
            className='h-full w-full object-contain'
          />
        </div>
        <p className='text-center text-sm font-medium md:text-base'>{text}</p>
      </div>
    </div>
  );
};

export default NeedsItem;
