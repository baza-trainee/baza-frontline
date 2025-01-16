import ContactsSection from '@/components/contacts/ContactsSection';
import Map from '@/components/contacts/MapSection';
import Envelope from '@/components/icons/Envelope';
import Phone from '@/components/icons/Phone';

const address = ['вул.Петропавлівська 15', 'м.Київ', '04086,Україна'];
const phones = ['+38 063 628 66 30', '+38 095 662 10 73'];
const emails = ['info@baza-skill.com.ua', 'cv@baza-skill.com.ua'];

const ContactsPage = () => {
  return (
    <div className='space-y-[60px] px-[1rem] py-[2rem]'>
      <ContactsSection title='Адреса' data={address} />
      <Map />
      <div className='space-y-[60px] md:flex md:space-y-0'>
        <ContactsSection title='Телефони' data={phones} icon={<Phone />} />
        <ContactsSection title='Email пошта' data={emails} icon={<Envelope />} />
      </div>
    </div>
  );
};

export default ContactsPage;
