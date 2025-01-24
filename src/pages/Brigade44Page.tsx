import ShareSection from '@/components/brigades/ShareSection';
import DonationForm from '@/components/brigades/donation-form/DonationForm';

const Brigade44Page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <DonationForm bankType='monobank' />
      <ShareSection title='Підтримай 44-ту окрему бригаду' hashtag='#44Brigade' />
    </div>
  );
};

export default Brigade44Page;
