import {
  CoffeeActionContainer,
  CoffeeBuyButton,
  CoffeeCardContainer,
  CoffeeQty,
  CoffeeQtyOperator,
  CoffeeTag,
} from './CoffeeCard.styled.ts';
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react';

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

      <p>{itemProps.description}</p>

      <CoffeeActionContainer>
        <p>
          R$
          <h3>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(itemProps.price)}
          </h3>
        </p>

        <div>
          <CoffeeQty>
            <CoffeeQtyOperator>
              <Minus size={14} weight="bold" />
            </CoffeeQtyOperator>

            <p>1</p>

            <CoffeeQtyOperator>
              <Plus size={14} weight="bold" />
            </CoffeeQtyOperator>
          </CoffeeQty>

          <CoffeeBuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeBuyButton>
        </div>
      </CoffeeActionContainer>
    </CoffeeCardContainer>
  );
};
