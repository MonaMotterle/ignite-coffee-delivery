import {
  CoffeeActionContainer,
  CoffeeBuyButton,
  CoffeeCardContainer,
  CoffeeCardSmallText,
  CoffeeCardValue,
  CoffeeQtyContainer,
  CoffeeTag,
} from './CoffeeCard.styled.ts';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { CoffeeQty } from '../CoffeeQtyInput';

export interface CoffeeType {
  id: number | string;
  imageSrc: string;
  tags: Array<string>;
  title: string;
  description: string;
  price: number;
}

export const CoffeeCard = (itemProps: CoffeeType) => {
  return (
    <CoffeeCardContainer>
      <img src={itemProps.imageSrc} alt={itemProps.title} />

      <CoffeeTag>
        {itemProps.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </CoffeeTag>

      <h4>{itemProps.title}</h4>

      <CoffeeCardSmallText>{itemProps.description}</CoffeeCardSmallText>

      <CoffeeActionContainer>
        <CoffeeCardValue>
          <CoffeeCardSmallText>R$&nbsp;</CoffeeCardSmallText>
          <h3>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(itemProps.price)}
          </h3>
        </CoffeeCardValue>

        <CoffeeQtyContainer>
          <CoffeeQty />

          <CoffeeBuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeBuyButton>
        </CoffeeQtyContainer>
      </CoffeeActionContainer>
    </CoffeeCardContainer>
  );
};
