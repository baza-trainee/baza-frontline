import React, { useState } from 'react';

// Інтерфейс для пропсів
interface ImagesTabsProps {
  images: { src: string; alt: string }[];
}

const ImagesTabs: React.FC<ImagesTabsProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='container'>
      <div className='relative mt-8 h-[177px] w-full sm:h-[358px] xl:h-[523px]'>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className='h-full w-full rounded-lg object-cover object-top'
        />
      </div>
      <div className='mt-4 grid w-full grid-cols-4 gap-2 sm:gap-4'>
        {images.map(
          (image, index) =>
            index !== activeIndex && (
              <div key={index} className='cursor-pointer'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='h-[60px] w-[60px] overflow-hidden rounded-lg object-cover hover:opacity-100 xs2:h-[122px] xs2:w-[122px] sm:h-[152px] sm:w-[152px] lg:h-[218px] lg:w-[218px] xl:h-[262px] xl:w-[262px] 2xl:h-[302px] 2xl:w-[302px]'
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default ImagesTabs;
