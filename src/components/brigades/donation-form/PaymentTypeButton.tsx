import { cn } from '@/lib/utils';

interface PaymentTypeButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const PaymentTypeButton = ({ selected, onClick, children }: PaymentTypeButtonProps) => (
  <button
    type='button'
    className={cn(
      'h-[38px] w-[193px] px-4',
      'text-base font-medium transition-all duration-200',
      selected ? 'border-b-2 border-purple-500' : 'border-b border-gray-400',
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
export default PaymentTypeButton;
