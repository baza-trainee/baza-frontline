import questionsData from './questions.json';

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export const questions: Question[] = questionsData.questions;

export const address = ['вул. Петропавлівська, 15', 'м. Київ', '04086, Україна'];
export const phones = ['+38 063 628 66 30', '+38 095 662 10 73'];
export const emails = ['info@baza-trainee.tech.'];

export const needs = [
  {
    icon: '/needs/powerbank.svg',
    text: 'Пауер банки, зарядні пристрої',
  },
  {
    icon: '/needs/armor.svg',
    text: 'Озброєння та спорядження',
  },
  {
    icon: '/needs/car.svg',
    text: 'Транспорт і комплектуючі',
  },
  {
    icon: '/needs/drone.svg',
    text: 'Дрони і тепловізори',
  },
];

export const marquee = [
  {
    text: 'Наближаємо перемогу разом',
    icon: '/icons/heart.svg',
  },
  {
    text: 'Наближаємо перемогу разом',
    icon: '/icons/hands.svg',
  },
  {
    text: 'Наближаємо перемогу разом',
    icon: '/icons/heart.svg',
  },
  {
    text: 'Наближаємо перемогу разом',
    icon: '/icons/hands.svg',
  },
];
