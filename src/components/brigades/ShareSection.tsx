import { useState } from 'react';
import { TelegramShareButton, LinkedinShareButton } from 'react-share';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import AlertModal from '../common/AlertModal';

interface ShareButtonProps {
  icon: string;
  onClick?: () => void;
  label: string;
}

const ShareButton = ({ icon, onClick, label }: ShareButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex h-[56px] w-[288px] items-center justify-center gap-4 rounded-lg border-2 border-blue-500 px-[24px] py-2 font-[500] transition-colors hover:bg-blue-100'
      aria-label={label}
    >
      <img src={icon} alt='' className='h-[24px] w-[24px] object-contain' />
      {label}
    </button>
  );
};

const ShareSection = ({ title }: { title: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  useDisableScroll(isModalOpen);

  const handleInstagramShare = () => {
    setIsModalOpen(true);
    window.open('https://www.instagram.com/', '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <section className='flex flex-col items-center justify-center gap-4 px-4 py-[34px] xl:flex-row'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <ShareButton icon='/icons/social/facebook.svg' label='Share on Facebook' />
          </a>

          <ShareButton
            icon='/icons/social/instagram.svg'
            label='Share on Instagram'
            onClick={handleInstagramShare}
          />
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <LinkedinShareButton url={shareUrl} title={title}>
            <ShareButton icon='/icons/social/linkedin.svg' label='Share on LinkedIn' />
          </LinkedinShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <ShareButton icon='/icons/social/telegram.svg' label='Share on Telegram' />
          </TelegramShareButton>
        </div>
      </section>

      <AlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Share on Instagram'
        message={`To share on Instagram:\n1. Open Instagram\n2. Create a new Story\n3. Add a link to the page:\n${shareUrl}`}
      />
    </>
  );
};

export default ShareSection;
