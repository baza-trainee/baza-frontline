import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router';

const ScrollToTopLink: FC<PropsWithChildren<LinkProps>> = ({ children, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
