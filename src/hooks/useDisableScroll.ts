import { useEffect } from 'react';

export function useDisableScroll(shouldLock: boolean) {
  useEffect(() => {
    const unlockScroll = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };

    if (!shouldLock) {
      unlockScroll();
      return;
    }

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Prevent scroll
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.height = '100vh';
    document.body.style.touchAction = 'none';
    document.documentElement.style.overflow = 'hidden';

    return unlockScroll;
  }, [shouldLock]);
}
