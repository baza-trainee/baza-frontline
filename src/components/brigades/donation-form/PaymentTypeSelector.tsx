import { PaymentType } from './DonationForm';
import PaymentTypeButton from './PaymentTypeButton';

interface PaymentTypeSelectorProps {
  selectedType: PaymentType;
  onTypeChange: (type: PaymentType) => void;
}

const PaymentTypeSelector = ({ selectedType, onTypeChange }: PaymentTypeSelectorProps) => (
  <div className='flex flex-col-reverse items-end justify-center gap-4 md:flex-row'>
    <div className='flex w-full justify-center gap-2 md:w-1/2 md:justify-start'>
      <PaymentTypeButton selected={selectedType === 'once'} onClick={() => onTypeChange('once')}>
        Одноразово
      </PaymentTypeButton>
      <PaymentTypeButton
        selected={selectedType === 'regular'}
        onClick={() => onTypeChange('regular')}
      >
        Щомісячно
      </PaymentTypeButton>
    </div>
    <div className='w-full rounded-lg text-left text-sm text-gray-600 md:w-1/2'>
      Разом ми можемо більше! Ваші донати – це реальна допомога тим, хто стоїть на захисті нашої
      країни. Кожна гривня – це вклад у спільну перемогу!
    </div>
  </div>
);

export default PaymentTypeSelector;
