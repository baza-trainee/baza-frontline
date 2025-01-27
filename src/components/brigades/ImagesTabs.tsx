import React, { useState } from 'react';
import BrigadePageTitle from '../common/BrigadePageTitle';

const ImageGrid: React.FC = () => {
  const images = [
    { src: '/brigade-44/brigade-img_1.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-44/brigade-img_2.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-44/brigade-img_3.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-44/brigade-img_4.jpg', alt: 'brigade-44-img' },
    { src: '/brigade-44/brigade-img_5.jpg', alt: 'brigade-44-img' },
  ];

  // Встановлюємо початкове зображення як перше з масиву
  const [expandedImg, setExpandedImg] = useState<string>(images[0].src);
  const [imgText, setImgText] = useState<string>(images[0].alt);

  const handleImageClick = (imgSrc: string, imgAlt: string) => {
    setExpandedImg(imgSrc);
    setImgText(imgAlt);
  };

  return (
    <section className='flex flex-col items-center px-4 py-[34px] xs:px-4 md:px-10 md:py-10 xl:px-20 xl:py-[20px]'>
      <BrigadePageTitle title=' 44 Окрема Механізована Бригада' image='/logo/logo44.svg' />
      {/* Expanded Image Container */}
      <div className='relative mt-8 w-full'>
        {/* Expanded Image */}
        <img
          src={expandedImg}
          alt={imgText || 'Expanded Image'}
          className='h-[177px] w-full rounded-lg object-contain sm:h-[336px] xl:h-[523px]'
        />
      </div>
      <div className='mt-4 flex gap-4 px-2'>
        {images.map((image, index) => (
          <div key={index} className='cursor-pointer'>
            <img
              src={image.src}
              alt={image.alt}
              className='h-[60px] w-[60px] overflow-hidden rounded-lg object-cover hover:opacity-100 md:h-[152px] md:w-[152px] lg:h-[218px] lg:w-[218px] xl:h-[262px] xl:w-[262px] 2xl:h-[302px] 2xl:w-[302px]'
              onClick={() => handleImageClick(image.src, image.alt)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
