import { useEffect } from 'react';
import Button from '@/components/ui/Button';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  bankType: 'privatbank' | 'monobank';
}

const ThankYouModal = ({ isOpen, onClose, bankType }: ThankYouModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' onClick={onClose} />

      {/* Modal */}
      <div className='relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-xl'>
        <h3 className='text-center font-playfairDisplay text-2xl font-bold text-gray-900'>
          Дякуємо за вашу підтримку!
        </h3>

        <div className='mt-4'>
          <p className='text-center text-gray-500'>
            Ваш платіж через {bankType === 'privatbank' ? 'PrivatBank' : 'Monobank'} успішно
            оброблено. Ваша допомога надзвичайно важлива для нас.
          </p>
        </div>

        <div className='mt-6 flex justify-center'>
          <Button text='Закрити' onClick={onClose} className='w-32' />
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
