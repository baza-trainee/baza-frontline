const FooterSection = ({
  title,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className='flex w-full flex-col items-start justify-start space-y-4 border-b border-b-gray-400 pb-2'>
        {title && (
          <h2 id={`секція-футера-${title}`} className='text-left font-inter text-[16px] font-bold'>
            {title}
          </h2>
        )}
        {children}
      </div>
    </>
  );
};

export default FooterSection;
