import ShareSection from '@/components/brigades/ShareSection';
import PowerSection from '@/components/brigades/PowerSection';
import DonationForm from '@/components/brigades/donation-form/DonationForm';

const Brigade44Page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <DonationForm bankType='monobank' />
      <ShareSection title='Підтримай 44-ту окрему бригаду' hashtag='#44Brigade' />
      <PowerSection />
    </div>
  );
};

export default Brigade44Page;
