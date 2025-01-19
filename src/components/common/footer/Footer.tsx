import FooterContent from './FooterContent';

const Footer = () => {
  return (
    <>
      <FooterContent variant='mobile' />
      <FooterContent variant='tablet' />
      <FooterContent variant='xlTablet' />
      <FooterContent variant='desktop' />
    </>
  );
};

export default Footer;
