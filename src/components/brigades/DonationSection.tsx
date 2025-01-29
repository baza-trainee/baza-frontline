import Button from '../ui/Button';

const links = {
  monobank: 'https://next.privat24.ua/send/2tmgj',
  private: 'https://next.privat24.ua/send/2tmgj',
};

const DonationSection = ({ bank }: { bank: 'monobank' | 'private' }) => {
  const handleClick = () => {
    window.open(links[bank], '_blank');
  };
  return (
    <section className='flex w-full flex-col items-center justify-center gap-[40px] bg-[#E4EDFE] py-[60px]'>
      <div className='flex flex-col items-center justify-center gap-[40px] lg:flex-row'>
        <div className='flex w-2/3 flex-col items-center justify-center gap-4'>
          <img
            src={bank === 'monobank' ? '/donate/monobank-logo.svg' : '/donate/privat-logo.svg'}
            alt={bank === 'monobank' ? 'monobank-logo' : 'private-logo'}
            className='w-[202px]'
          />
          <p className='w-[80vw] sm:w-[548px] lg:w-[521px]'>
            Разом ми можемо більше! Ваші донати – це реальна допомога тим, хто стоїть на захисті
            нашої країни. Кожна гривня – це вклад у спільну перемогу!
          </p>
        </div>
        <div className='flex w-1/3 flex-col items-center justify-center'>
          <img
            src={bank === 'monobank' ? '/donate/monobank.svg' : '/donate/envelope.svg'}
            alt={bank === 'monobank' ? 'monobank' : 'private'}
            className='h-[180px] w-[180px]'
          />
        </div>
      </div>
      <Button text='Допомогти' onClick={handleClick} />
    </section>
  );
};

export default DonationSection;
