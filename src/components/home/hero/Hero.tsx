import Slider from 'react-slick';
import type { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import LinkButton from '@/components/ui/LinkButton';
import styles from './Hero.module.css';

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
    >
      <img src='/icons/arrow-next.svg' alt='Next' />
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
    >
      <img src='/icons/arrow-prev.svg' alt='Previous' />
    </button>
  );
};

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 30,
  };

  const images = Array(3).fill('/hero.webp');

  return (
    <section className='flex flex-col items-center justify-center gap-8 px-2 py-[20px] md:px-4 lg:px-[20px] xl:px-[40px]'>
      <h1 className='sr-only'>Baza Frontline - Підтримка українських військових</h1>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt='Наші Герої'
                className='h-[180px] w-full rounded-xl object-cover xs2:h-[250px] md:h-[418px] lg:h-[514px] xl:h-[492px]'
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6 md:w-fit'>
        <LinkButton text='Підтримати 100 ОМБР' href='/' className='md:max-w-[288px]' />
        <LinkButton text='Підтримати 44 ОМБР' href='/' className='md:max-w-[288px]' />
      </div>
    </section>
  );
};

export default Hero;
