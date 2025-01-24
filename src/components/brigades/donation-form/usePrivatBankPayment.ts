import { useState } from 'react';

interface UsePrivatBankPaymentProps {
  envelopLink: string;
}

interface PaymentState {
  isLoading: boolean;
  error: string | null;
  paymentUrl: string | null;
}

export const usePrivatBankPayment = ({ envelopLink }: UsePrivatBankPaymentProps) => {
  const [paymentState, setPaymentState] = useState<PaymentState>({
    isLoading: false,
    error: null,
    paymentUrl: null,
  });

  const initiatePayment = async () => {
    try {
      setPaymentState((prev) => ({ ...prev, isLoading: true, error: null }));

      // Open payment URL in a new window
      window.open(envelopLink, '_blank');

      setPaymentState((prev) => ({
        ...prev,
        isLoading: false,
        paymentUrl: envelopLink,
      }));
    } catch (error) {
      setPaymentState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to initiate payment',
      }));
    }
  };

  return {
    initiatePayment,
    ...paymentState,
  };
};
