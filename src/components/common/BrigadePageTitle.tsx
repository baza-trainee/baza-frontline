const BrigadePageTitle = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start'>
      <img src={image} alt={title} className='h-[70px] w-[60px] object-contain' />
      <h1 className='w-full text-center font-playfairDisplay text-2xl font-bold sm:text-3xl md:text-4xl lg:text-left'>
        {title}
      </h1>
    </div>
  );
};

export default BrigadePageTitle;
