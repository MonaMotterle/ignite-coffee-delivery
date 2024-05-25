import American from './src/assets/coffeeCardImages/American.png';
import Arabic from './src/assets/coffeeCardImages/Arabic.png';
import Capuccino from './src/assets/coffeeCardImages/Capuccino.png';
import CoffeeWithMilk from './src/assets/coffeeCardImages/CoffeeWithMilk.png';
import CreamyCoffee from './src/assets/coffeeCardImages/CreamyCoffee.png';
import Cuban from './src/assets/coffeeCardImages/Cuban.png';
import Expresso from './src/assets/coffeeCardImages/Expresso.png';
import Hawaiian from './src/assets/coffeeCardImages/Hawaiian.png';
import HotChocolate from './src/assets/coffeeCardImages/HotChocolate.png';
import IcedCoffee from './src/assets/coffeeCardImages/IcedCoffee.png';
import Irish from './src/assets/coffeeCardImages/Irish.png';
import Latte from './src/assets/coffeeCardImages/Latte.png';
import Macchiato from './src/assets/coffeeCardImages/Macchiato.png';
import Mochaccino from './src/assets/coffeeCardImages/Mochaccino.png';
import { CoffeeType } from './src/components/CoffeeCard/CoffeeCard.tsx';
export const coffees: CoffeeType[] = [
  {
    id: '0',
    imageSrc: Expresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '1',
    imageSrc: American,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '2',
    imageSrc: CreamyCoffee,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '3',
    imageSrc: IcedCoffee,
    tags: ['Tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '4',
    imageSrc: CoffeeWithMilk,
    tags: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '5',
    imageSrc: Latte,
    tags: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '6',
    imageSrc: Capuccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '7',
    imageSrc: Macchiato,
    tags: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '8',
    imageSrc: Mochaccino,
    tags: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '9',
    imageSrc: HotChocolate,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '10',
    imageSrc: Cuban,
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '11',
    imageSrc: Hawaiian,
    tags: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '12',
    imageSrc: Arabic,
    tags: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '13',
    imageSrc: Irish,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
];
