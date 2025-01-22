import { useState } from 'react';
import Button from '../ui/Button';
import AmountButton from './donation-form/AmountButton';
import AmountInput from './donation-form/AmountInput';
import PaymentTypeSelector from './donation-form/PaymentTypeSelector';

type PaymentType = 'once' | 'regular';

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentType, setPaymentType] = useState<PaymentType>('once');

  const predefinedAmounts = [50, 100, 200, 500, 1000, 'Інша сума'];

  const handleAmountSelect = (amount: number | string) => {
    if (amount === 'Інша сума') {
      setShowCustomInput(true);
      setSelectedAmount(null);
    } else {
      setShowCustomInput(false);
      setSelectedAmount(amount as number);
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(value ? Number(value) : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAmount) {
      console.log(`Processing ${paymentType} payment for ${selectedAmount} UAH`);
    }
  };

  return (
    <section className='flex w-full flex-col items-center justify-center gap-5 bg-blue-100/50 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:gap-10 md:px-20 md:py-10'>
      <h2 className='text-center font-playfairDisplay text-xl font-bold sm:text-2xl md:text-3xl lg:text-[40px]'>
        Monobank
      </h2>
      <form className='mx-auto flex w-full flex-col gap-5 p-4 sm:w-[90vw] md:w-[80vw] lg:max-w-5xl'>
        <PaymentTypeSelector selectedType={paymentType} onTypeChange={setPaymentType} />
        <div className='[min-width:460px]:flex [min-width:460px]:flex-nowrap [min-width:460px]:justify-center grid grid-cols-3 gap-2.5'>
          {predefinedAmounts.map((amount) =>
            amount === 'Інша сума' && showCustomInput ? (
              <AmountInput key={amount} value={customAmount} onChange={handleCustomAmountChange} />
            ) : (
              <AmountButton
                key={amount}
                amount={amount}
                selected={selectedAmount === amount}
                onClick={() => handleAmountSelect(amount)}
              />
            ),
          )}
        </div>
        <Button
          text='Підтримати'
          onClick={handleSubmit}
          className='mx-auto w-full max-w-[272px] sm:w-[272px]'
        />
      </form>
    </section>
  );
};

export default DonationForm;
