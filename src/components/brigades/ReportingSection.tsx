import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import type { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { cn } from '@/lib/utils';
import styles from './ReportingSection.module.css';

const NextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      type='button'
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={`${styles.arrow} ${styles.nextArrow}`}
      aria-label='Next slide'
      tabIndex={0}
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      type='button'
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={`${styles.arrow} ${styles.prevArrow}`}
      aria-label='Previous slide'
      tabIndex={0}
    >
      <FaChevronLeft />
    </button>
  );
};

interface ReportingSectionProps {
  images: { src: string; alt: string }[];
}

const ReportingSection = ({ images }: ReportingSectionProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    spaceBetween: 30,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 30,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='w-full py-[40px]'>
      <h2
        id='reporting-title'
        className='mb-6 text-center font-playfairDisplay text-2xl font-bold md:mb-7 md:text-[40px] lg:mb-9 xl:mb-[6rem]'
      >
        Звітність
      </h2>
      <div className='flex justify-center gap-6'>
        <div
          className={styles.sliderContainer}
          aria-labelledby='reporting-title'
          aria-live='polite'
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={cn(
                  'h-[136px] w-[136px] rounded-md object-cover xs2:h-[200px] xs2:w-[200px] md:h-[300px] md:w-[300px] xl:h-[357px] xl:w-[357px]',
                )}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReportingSection;
