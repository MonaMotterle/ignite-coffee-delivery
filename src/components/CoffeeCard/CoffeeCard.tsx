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
import { useCart } from '../../hooks/useCart.tsx';
import { useEffect, useState } from 'react';

export interface CoffeeType {
  id: string;
  imageSrc: string;
  tags: Array<string>;
  title: string;
  description: string;
  price: number;
}

export const CoffeeCard = (itemProps: CoffeeType) => {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    addItem({ id: itemProps.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

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
          <CoffeeQty
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            quantity={quantity}
          />

          <CoffeeBuyButton disabled={isItemAdded} onClick={handleAddItem}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeBuyButton>
        </CoffeeQtyContainer>
      </CoffeeActionContainer>
    </CoffeeCardContainer>
  );
};
