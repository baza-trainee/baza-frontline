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

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick(index);
    }
  };

  return (
    <div className='container'>
      {/* Main Image */}
      <div className='relative mt-8 h-[177px] w-full sm:h-[358px] xl:h-[523px]' aria-live='polite'>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className='h-full w-full rounded-lg object-cover object-top'
          aria-label={`Main image: ${images[activeIndex].alt}`}
        />
      </div>

      {/* Thumbnail Grid */}
      <div className='mt-4 grid w-full grid-cols-4 gap-2 sm:gap-4' role='list'>
        {images.map(
          (image, index) =>
            index !== activeIndex && (
              <div
                key={index}
                role='listitem'
                tabIndex={0}
                className='cursor-pointer focus:outline-none'
                onClick={() => handleImageClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='h-[60px] w-[60px] overflow-hidden rounded-lg object-cover hover:opacity-100 xs2:h-[122px] xs2:w-[122px] sm:h-[152px] sm:w-[152px] lg:h-[218px] lg:w-[218px] xl:h-[262px] xl:w-[262px] 2xl:h-[302px] 2xl:w-[302px]'
                  role='button'
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default ImagesTabs;
