import Slider from 'react-slick';
import type { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import LinkButton from '@/components/ui/LinkButton';
import styles from './Hero.module.css';

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      className={`${styles.arrow} ${styles.nextArrow}`}
      onClick={onClick}
      type='button'
      aria-label='Next slide'
    >
      <img src='/arrow-next.svg' alt='Next' />
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      className={`${styles.arrow} ${styles.prevArrow}`}
      onClick={onClick}
      type='button'
      aria-label='Previous slide'
    >
      <img src='/arrow-prev.svg' alt='Previous' />
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
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = Array(3).fill('/hero.png');

  return (
    <section className='flex flex-col items-center justify-center gap-8 px-2 py-[20px] md:px-4 lg:px-[20px] xl:px-[40px]'>
      <div className={`w-full ${styles.sliderContainer}`}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt='Наші Герої'
                className='h-[180px] w-full rounded-xl object-cover xs2:h-[250px] md:h-[418px] lg:h-[514px] xl:h-[492px]'
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
