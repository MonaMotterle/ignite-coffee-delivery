import {
  CoffeeActionContainer,
  CoffeeBuyButton,
  CoffeeCardContainer,
  CoffeeCardSmallText,
  CoffeeCardValue,
  CoffeeQty,
  CoffeeQtyContainer,
  CoffeeQtyOperator,
  CoffeeQtyTotal,
  CoffeeTag,
} from './CoffeeCard.styled.ts';
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react';
import { useState } from 'react';

export interface CoffeeType {
  id: number | string;
  imageSrc: string;
  tags: Array<string>;
  title: string;
  description: string;
  price: number;
}

export const CoffeeCard = (itemProps: CoffeeType) => {
  const [itemQty, setItemQty] = useState(1);

  const handleAddItem = () => {
    setItemQty((state) => state + 1);
  };
  const handleRemoveItem = () => {
    if (itemQty <= 1) return;

    setItemQty((state) => state - 1);
  };

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
          <CoffeeQty>
            <CoffeeQtyOperator
              onClick={handleRemoveItem}
              disabled={itemQty <= 1}
            >
              <Minus size={14} weight="bold" />
            </CoffeeQtyOperator>

            <CoffeeQtyTotal>{itemQty}</CoffeeQtyTotal>

            <CoffeeQtyOperator onClick={handleAddItem}>
              <Plus size={14} weight="bold" />
            </CoffeeQtyOperator>
          </CoffeeQty>

          <CoffeeBuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeBuyButton>
        </CoffeeQtyContainer>
      </CoffeeActionContainer>
    </CoffeeCardContainer>
  );
};
