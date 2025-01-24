import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import Button from '@/components/ui/Button';
import AmountButton from './AmountButton';
import AmountInput from './AmountInput';
import PaymentTypeSelector from './PaymentTypeSelector';
import ThankYouModal from './ThankYouModal';
import { useMonobankPayment } from './useMonobankPayment';
import { usePrivatBankPayment } from './usePrivatBankPayment';

export type PaymentType = 'once' | 'regular';
export type PaymentMethod = 'privatbank' | 'monobank';

interface DonationFormProps {
  bankType: PaymentMethod;
}

const DonationForm = ({ bankType }: DonationFormProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentType, setPaymentType] = useState<PaymentType>('once');
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check for payment success on component mount and URL changes
  useEffect(() => {
    const paymentStatus = searchParams.get('payment_status');
    if (paymentStatus === 'success') {
      setShowThankYouModal(true);
      // Clean up the URL
      navigate('.', { replace: true });
    }
  }, [searchParams, navigate]);

  const {
    initiatePayment: initiatePrivatPayment,
    isLoading: isPrivatLoading,
    error: privatError,
  } = usePrivatBankPayment({
    envelopLink: 'https://www.privat24.ua/send/2tmgj',
  });

  const {
    initiatePayment: initiateMonoPayment,
    isLoading: isMonoLoading,
    error: monoError,
  } = useMonobankPayment({
    bucketLink: 'https://send.monobank.ua/jar/89dnEPA4Kn',
  });

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
      if (bankType === 'privatbank') {
        initiatePrivatPayment();
      } else {
        initiateMonoPayment();
      }
    }
  };

  const isLoading = bankType === 'privatbank' ? isPrivatLoading : isMonoLoading;
  const error = bankType === 'privatbank' ? privatError : monoError;

  return (
    <section className='flex w-full flex-col items-center justify-center gap-5 bg-blue-100/50 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:gap-10 md:px-20'>
      <h2 className='text-center font-playfairDisplay text-2xl font-bold sm:text-3xl md:text-[40px]'>
        {bankType === 'privatbank' ? 'PrivatBank' : 'Monobank'}
      </h2>

      <form className='mx-auto flex w-full flex-col gap-5 space-y-[40px] p-5'>
        {error && <div className='text-center text-red-500'>{error}</div>}
        <PaymentTypeSelector selectedType={paymentType} onTypeChange={setPaymentType} />
        <div className='flex flex-wrap justify-around gap-2.5'>
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
          text={isLoading ? 'Обробка...' : 'Підтримати'}
          onClick={handleSubmit}
          className='mx-auto w-[272px]'
          disabled={isLoading || !selectedAmount}
        />
      </form>

      <ThankYouModal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        bankType={bankType}
      />
    </section>
  );
};

export default DonationForm;
