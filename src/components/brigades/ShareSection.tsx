import { useState } from 'react';
import { TelegramShareButton, LinkedinShareButton } from 'react-share';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import AlertModal from '../common/AlertModal';

interface ShareButtonProps {
  icon: string;
  onClick?: () => void;
  as?: 'button' | 'div';
}

const ShareButton = ({ icon, onClick, as = 'button' }: ShareButtonProps) => {
  const className =
    'flex h-[56px] w-[288px] items-center justify-center gap-4 rounded-lg border-2 border-blue-500 px-[24px] py-2 font-[500] transition-colors hover:bg-blue-100';

  if (as === 'div') {
    return (
      <div className={className} onClick={onClick}>
        <img src={icon} alt='Поділитися' className='h-[24px] w-[24px] object-contain' />
        Поділитися
      </div>
    );
  }

  return (
    <button onClick={onClick} className={className}>
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
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const instagramUrl = `instagram://story-camera`;
      window.location.href = instagramUrl;

      setTimeout(() => {
        window.location.href = 'instagram://';
      }, 500);

      setTimeout(() => {
        window.location.href = 'https://www.instagram.com/';
      }, 1000);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className='flex flex-col items-center justify-center gap-4 px-4 py-[34px] xl:flex-row'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target='_blank'>
            <ShareButton icon='/icons/social/facebook.svg' as='div' />
          </a>

          <div onClick={handleInstagramShare}>
            <ShareButton icon='/icons/social/instagram.svg' as='div' />
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <LinkedinShareButton url={shareUrl} title={title}>
            <ShareButton icon='/icons/social/linkedin.svg' as='div' />
          </LinkedinShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <ShareButton icon='/icons/social/telegram.svg' as='div' />
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

// https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fvuejsnation.com
// https://www.facebook.com/share_channel/?type=reshare&link=https%3A%2F%2Fvuejsnation.com&app_id=966242223397117&source_surface=external_reshare&display&hashtag#
