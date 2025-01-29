import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router';

const ScrollToTopLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <Link {...props} ref={ref} onClick={handleClick}>
        {children}
      </Link>
    );
  },
);

ScrollToTopLink.displayName = 'ScrollToTopLink';

export default ScrollToTopLink;
