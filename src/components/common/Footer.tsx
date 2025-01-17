import { emails, phones } from '@/constants';
import Envelope from '../icons/Envelope';
import Phone from '../icons/Phone';
import NavMenu from './NavMenu';

const FooterSection = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return (
    <>
      <div className='flex w-full flex-col items-start justify-start space-y-4 rounded-md'>
        {title && (
          <h2 id={`секція-футера-${title}`} className='text-left font-inter text-xl font-bold'>
            {title}
          </h2>
        )}
        {children}
      </div>
      <hr className='w-full border-[0.5px] border-gray-400/50' />
    </>
  );
};

const Footer = () => {
  return (
    <footer className='flex w-full flex-col items-center justify-start space-y-8 bg-custom-footer-gradient p-6'>
      <img
        src='/header/logo-mobile.png'
        alt='Baza Frontline logo - back to home'
        className='h-[50px] w-[50px]'
      />
      <h2 className='text-[20px] font-[700]'>Baza Frontline</h2>
      <NavMenu
        onClose={() => {
          console.log('hi');
        }}
      />
      <hr className='w-full border-[0.5px] border-gray-400/50' />
      <FooterSection title='Телефони'>
        <ul aria-labelledby='Секція-Футера-Телефони' className='space-y-2'>
          {phones.map((item, index) => (
            <li key={index} className='flex items-center gap-[12px] text-[16px]'>
              <Phone aria-hidden='true' />
              {item}
            </li>
          ))}
        </ul>
      </FooterSection>
      <FooterSection title='Email пошта'>
        <ul aria-labelledby='Секція-Футера-Email пошта' className='space-y-2'>
          {emails.map((item, index) => (
            <li key={index} className='flex items-center gap-[12px] text-[16px]'>
              <Envelope aria-hidden='true' />
              {item}
            </li>
          ))}
        </ul>
      </FooterSection>
      <FooterSection>
        <ul className='space-y-2' aria-labelledby='Секція-Футера-Документи'>
          <li className='flex items-center gap-[12px] text-[16px]'>
            <a
              href='/documents/Політика конфіденційності.pdf'
              aria-label='Політика конфіденційності'
              className='hover:underline'
            >
              Політика конфіденційності
            </a>
          </li>
          <li className='flex items-center gap-[12px] text-[16px]'>
            <a
              href='/documents/Правила користування сайтом.pdf'
              aria-label='Правила користування сайтом'
              className='hover:underline'
            >
              Правила користування сайтом
            </a>
          </li>
        </ul>
      </FooterSection>
      <p className='text-center text-[12px] font-[400]'>
        Розробка Baza Trainee Ukraine 2025 © Усі права захищені
      </p>
    </footer>
  );
};

export default Footer;
