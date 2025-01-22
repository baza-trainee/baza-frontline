import { cn } from '@/lib/utils';

interface AmountButtonProps {
  amount: number | string;
  selected: boolean;
  onClick: () => void;
}

const AmountButton = ({ amount, selected, onClick }: AmountButtonProps) => (
  <button
    type='button'
    className={cn(
      'flex h-[42px] min-w-[86px] flex-1 items-center justify-center whitespace-nowrap lg:w-[166px]',
      'rounded-xl border border-blue-400 bg-blue-100 px-4',
      'text-base font-medium text-gray-900 transition-all duration-200',
      selected ? 'border-transparent bg-white shadow-sm' : 'hover:border-blue-300 hover:bg-blue-50',
    )}
    onClick={onClick}
  >
    {typeof amount === 'number' ? (
      <span className='flex items-baseline gap-1'>
        {amount}
        <span className='text-sm'>₴</span>
      </span>
    ) : (
      amount
    )}
  </button>
);

export default AmountButton;
