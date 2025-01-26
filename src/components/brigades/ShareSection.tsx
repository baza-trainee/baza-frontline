import { useState } from 'react';
import { TelegramShareButton, LinkedinShareButton } from 'react-share';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import AlertModal from '../common/AlertModal';

interface ShareButtonProps {
  icon: string;
  onClick?: () => void;
}

const ShareButton = ({ icon, onClick }: ShareButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex h-[56px] w-[288px] items-center justify-center gap-4 rounded-lg border-2 border-blue-500 px-[24px] py-2 font-[500] transition-colors hover:bg-blue-100'
    >
      <img src={icon} alt='Поділитися' className='h-[24px] w-[24px] object-contain' />
      Поділитися
    </button>
  );
};

const ShareSection = ({ title }: { title: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  useDisableScroll(isModalOpen);

  const handleInstagramShare = () => {
    // Check if it's a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, try to open Instagram app with a story share
      const instagramUrl = `instagram://story-camera`;
      window.location.href = instagramUrl;

      // Fallback to Instagram app if story camera doesn't work
      setTimeout(() => {
        window.location.href = 'instagram://';
      }, 500);

      // If Instagram app doesn't open, fallback to web
      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/';
      }, 1000);
    } else {
      // On desktop, show custom modal with instructions
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className='flex flex-col items-center justify-center gap-4 px-4 py-[34px] xl:flex-row'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target='_blank'>
            <ShareButton icon='/icons/social/facebook.svg' />
          </a>

          <div onClick={handleInstagramShare}>
            <ShareButton icon='/icons/social/instagram.svg' />
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <LinkedinShareButton url={shareUrl} title={title}>
            <ShareButton icon='/icons/social/linkedin.svg' />
          </LinkedinShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <ShareButton icon='/icons/social/telegram.svg' />
          </TelegramShareButton>
        </div>
      </section>

      <AlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Поділитися в Instagram'
        message={`Щоб поділитися в Instagram:\n1. Відкрийте Instagram\n2. Створіть нову історію\n3. Додайте посилання на сторінку:\n${shareUrl}`}
      />
    </>
  );
};

export default ShareSection;
