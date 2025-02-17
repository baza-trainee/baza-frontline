import NavMenu from '@/components/common/NavMenu';
import Envelope from '@/components/icons/Envelope';
import Phone from '@/components/icons/Phone';
import { emails, phones } from '@/constants';
import { cn } from '@/lib/utils';
import ScrollToTopLink from '../ScrollToTopLink';
import FooterSection from './FooterSection';

export interface FooterContentProps {
  variant: 'mobile' | 'tablet' | 'xlTablet' | 'desktop';
}

const variants = {
  mobile: {
    wrapper:
      'flex w-full flex-col items-center justify-start space-y-8 bg-custom-footer-gradient p-6 md:hidden',
    logo: '/logo/logoSM.svg',
    logoSize: 'h-[50px] w-[50px]',
  },
  tablet: {
    wrapper:
      'hidden w-full flex-col items-center justify-start space-y-8 bg-custom-footer-gradient p-6 md:flex lg:hidden',
    logo: '/logo/logoMD.svg',
    logoSize: 'h-[80px] w-[80px]',
  },
  xlTablet: {
    wrapper:
      'hidden w-full flex-col items-center justify-start space-y-8 bg-custom-footer-gradient px-[40px] py-6 lg:flex xl:hidden',
    logo: '/logo/logoMD.svg',
    logoSize: 'h-[80px] w-[80px]',
  },
  desktop: {
    wrapper:
      'hidden w-full flex-col items-center justify-start space-y-8 bg-custom-footer-gradient px-[80px] py-6 xl:flex',
    logo: '/logo/logoXL.svg',
    logoSize: 'h-[150px] w-[150px]',
  },
};

const FooterTitle = () => {
  return <h2 className='font-playfairDisplay text-[20px] font-[700]'>Baza Frontline</h2>;
};

const FooterContent = ({ variant }: FooterContentProps) => {
  const { wrapper, logo, logoSize } = variants[variant];
  const isDesktopVariant = variant === 'desktop';
  const isTabletVariant = variant === 'tablet' || variant === 'xlTablet';

  const renderDocuments = (isTablet = false) => (
    <ul className={isTablet ? 'flex gap-6' : 'space-y-2'} aria-labelledby='Секція-Футера-Документи'>
      <li
        className={cn(
          'flex items-center gap-[12px] text-[16px]',
          isTablet && 'border-b border-b-gray-400 pb-2',
        )}
      >
        <ScrollToTopLink
          to={`/документи/${encodeURIComponent('Політика конфіденційності')}`}
          aria-label='Політика конфіденційності'
          className='hover:underline'
          target='_blank'
        >
          Політика конфіденційності
        </ScrollToTopLink>
      </li>
      <li
        className={cn(
          'flex items-center gap-[12px] text-[16px]',
          isTablet && 'border-b border-b-gray-400 pb-2',
        )}
      >
        <ScrollToTopLink
          to={`/документи/${encodeURIComponent('Правила користування сайтом')}`}
          aria-label='Правила користування сайтом'
          className='hover:underline'
          target='_blank'
        >
          Правила користування сайтом
        </ScrollToTopLink>
      </li>
    </ul>
  );

  const renderContacts = (className = '') => (
    <>
      <FooterSection title='Телефони' className={className}>
        <ul aria-labelledby='Секція-Футера-Телефони' className='h-full w-full space-y-2'>
          {phones.map((item, index) => (
            <li key={index} className='flex items-center gap-[12px] text-[16px]'>
              <Phone aria-hidden='true' />
              {item}
            </li>
          ))}
        </ul>
      </FooterSection>
      <FooterSection title='Email пошта' className={className}>
        <ul aria-labelledby='Секція-Футера-Email пошта' className='h-full w-full space-y-2'>
          {emails.map((item, index) => (
            <li key={index} className='flex items-center gap-[12px] text-[16px]'>
              <Envelope aria-hidden='true' />
              {item}
            </li>
          ))}
        </ul>
      </FooterSection>
    </>
  );

  if (isTabletVariant) {
    return (
      <footer className={wrapper}>
        <img src={logo} alt='Baza Frontline logo - back to home' className={logoSize} />
        <FooterTitle />
        <div className='flex w-full gap-4'>
          <FooterSection className='hidden'>
            <NavMenu className='h-full space-y-2' />
          </FooterSection>
          {renderContacts('hidden')}
          {variant === 'xlTablet' && <FooterSection>{renderDocuments(false)}</FooterSection>}
        </div>
        {variant === 'tablet' && renderDocuments(true)}
        <p className='text-center text-[12px] font-[400]'>
          Розробка Baza Trainee Ukraine 2025 &copy; <br /> Усі права захищені
        </p>
      </footer>
    );
  }

  if (isDesktopVariant) {
    return (
      <footer className={wrapper}>
        <div className='flex w-full justify-between'>
          <div className='flex flex-col gap-10'>
            <FooterSection className='hidden'>
              <NavMenu className='h-full space-y-2' />
            </FooterSection>
            <FooterSection>{renderDocuments(false)}</FooterSection>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center'>
            <img src={logo} alt='Baza Frontline logo - back to home' className={logoSize} />
            <FooterTitle />
          </div>
          <div className='flex flex-col gap-4'>{renderContacts()}</div>
        </div>
        <p className='text-center text-[12px] font-[400]'>
          Розробка Baza Trainee Ukraine 2025 &copy; <br /> Усі права захищені
        </p>
      </footer>
    );
  }

  return (
    <footer className={wrapper}>
      <img src={logo} alt='Baza Frontline logo - back to home' className={logoSize} />
      <FooterTitle />
      <FooterSection>
        <NavMenu className='space-y-2' />
      </FooterSection>
      {renderContacts()}
      <FooterSection>{renderDocuments(false)}</FooterSection>
      <p className='text-center text-[12px] font-[400]'>
        Розробка Baza Trainee Ukraine 2025 &copy; <br /> Усі права захищені
      </p>
    </footer>
  );
};

export default FooterContent;
