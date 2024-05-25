import { Minus, Plus } from '@phosphor-icons/react';
import {
  CoffeeQtyContainer,
  CoffeeQtyOperator,
  CoffeeQtyTotal,
} from './CoffeeQtyInput.styles.ts';

interface ICoffeeQty {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  slim?: boolean;
}

export const CoffeeQty = ({
  slim = false,
  quantity,
  incrementQuantity,
  decrementQuantity,
}: ICoffeeQty) => {
  return (
    <CoffeeQtyContainer $isSmall={slim}>
      <CoffeeQtyOperator onClick={decrementQuantity} disabled={quantity <= 1}>
        <Minus size={14} weight="bold" />
      </CoffeeQtyOperator>

      <CoffeeQtyTotal>{quantity}</CoffeeQtyTotal>

      <CoffeeQtyOperator onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </CoffeeQtyOperator>
    </CoffeeQtyContainer>
  );
};
