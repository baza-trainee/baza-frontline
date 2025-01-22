export interface DonateItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const donateItems: DonateItem[] = [
  {
    id: 1,
    image: '/donate/100-img.png',
    alt: '100',
    title: '100-та окрема механізована бригада (100 ОМБр)',
    description: 'Допоможемо тим, хто стоїть за нас на передовій!',
    buttonText: 'Підтримати 100 ОМБр',
    href: '/',
  },
  {
    id: 2,
    image: '/donate/44-img.png',
    alt: '44',
    title: '44-та окрема артилерійська бригада (44 ОМБр)',
    description: 'Допоможемо тим, хто стоїть за нас на передовій!',
    buttonText: 'Підтримати 44 ОМБр',
    href: '/',
  },
];
