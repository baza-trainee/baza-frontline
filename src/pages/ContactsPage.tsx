import SEO from '@/components/common/SEO';
import ContactsSection from '@/components/contacts/ContactsSection';
import Map from '@/components/contacts/MapSection';
import Envelope from '@/components/icons/Envelope';
import Phone from '@/components/icons/Phone';
import { address, phones, emails } from '@/constants';

const ContactsPage = () => {
  const addressString = address.join(', ');
  const currentDate = new Date().toISOString();

  return (
    <>
      <SEO
        title='Контакти'
        description={`Зв'яжіться з Baza Frontline. ${addressString}. Телефони: ${phones[0]}. Email: ${emails[0]}`}
        url='/contacts'
        type='website'
        keywords={[
          'контакти Baza Frontline',
          'адреса Baza Frontline',
          'телефон Baza Frontline',
          'email Baza Frontline',
          "зв'язатися з Baza Frontline",
          'місцезнаходження Baza Frontline',
          'контактна інформація',
          'Київ',
          'Україна',
        ]}
        language='uk'
        modifiedTime={currentDate}
        noindex={false}
        nofollow={false}
      />
      <div className='space-y-[60px] px-[1rem] py-[2rem]'>
        <ContactsSection title='Адреса' data={address} />
        <Map />
        <div className='space-y-[60px] md:flex md:space-y-0'>
          <ContactsSection title='Телефони' data={phones} icon={<Phone />} />
          <ContactsSection title='Email пошта' data={emails} icon={<Envelope />} />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
