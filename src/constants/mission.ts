export interface MissionItem {
  id: number;
  icon: string;
  alt: string;
  text: string;
}

export const missionItems: MissionItem[] = [
  {
    id: 1,
    icon: '/icons/icons-hand.svg',
    alt: 'hand',
    text: 'Допомогти воїнам відчути підтримку свого народу.',
  },
  {
    id: 2,
    icon: '/icons/icons-car.svg',
    alt: 'car',
    text: 'Забезпечити техніку, гуманітарну допомогу та інші критично важливі ресурси.',
  },
  {
    id: 3,
    icon: '/icons/icons-herb.svg',
    alt: 'herb',
    text: 'Зробити внесок у майбутнє вільної та незалежної України.',
  },
];
