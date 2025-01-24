import ShareSection from '@/components/brigades/ShareSection';
import DonationForm from '@/components/brigades/donation-form/DonationForm';

const Brigade100Page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <DonationForm bankType='privatbank' />
      <ShareSection title='Підтримай 100-ту окрему бригаду' hashtag='#100Brigade' />
    </div>
  );
};

export default Brigade100Page;
