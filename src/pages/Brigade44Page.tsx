import ImageSection from '@/components/brigades/ImagesTabs';
import InvinciSection from '@/components/brigades/Invincibility';
import PowerSection from '@/components/brigades/PowerSection';
import DonationForm from '@/components/brigades/donation-form/DonationForm';

const Brigade44Page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <ImageSection />
      <PowerSection />
      <InvinciSection />
      <DonationForm />
    </div>
  );
};

export default Brigade44Page;
