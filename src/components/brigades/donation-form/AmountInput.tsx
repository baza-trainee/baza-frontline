import { cn } from '@/lib/utils';

interface AmountInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmountInput = ({ value, onChange }: AmountInputProps) => (
  <input
    type='number'
    value={value}
    onChange={onChange}
    placeholder='Інша сума'
    min={1}
    max={10000}
    step={1}
    className={cn(
      'flex h-[42px] min-w-[86px] flex-1 items-center justify-center lg:w-[166px]',
      'rounded-xl border border-blue-400 bg-blue-100 px-4 placeholder:text-sm placeholder:text-black',
      'text-base font-medium outline-none transition-all duration-200',
      'focus:border-blue-500 focus:bg-blue-50',
    )}
    autoFocus
  />
);

export default AmountInput;
