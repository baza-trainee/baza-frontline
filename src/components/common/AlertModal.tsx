interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const AlertModal = ({ isOpen, onClose, title, message }: AlertModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div className='fixed inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose} />

      {/* Modal */}
      <div className='relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl'>
        {/* Header */}
        <img src='/logo/logoSM.svg' alt='Baza Frontline лого' className='mb-4' />
        <div className='mb-4'>
          <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
        </div>

        {/* Content */}
        <div className='mb-6 whitespace-pre-wrap text-gray-700'>{message}</div>

        {/* Footer */}
        <div className='flex justify-end'>
          <button
            onClick={onClose}
            className='rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600'
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
