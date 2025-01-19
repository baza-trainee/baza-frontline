import { cn } from '@/lib/utils';

const Motto = ({ className }: { className?: string }) => {
  return (
    <h3
      className={cn(
        'flex flex-col whitespace-pre-line text-center font-playfairDisplay text-[20px] font-[700] leading-tight',
        className,
      )}
    >
      Тил — наш фронт.{'\n'}Тримаємо його до перемоги!
    </h3>
  );
};

export default Motto;
