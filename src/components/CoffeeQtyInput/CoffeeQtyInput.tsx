import { Minus, Plus } from '@phosphor-icons/react';
import {
  CoffeeQtyContainer,
  CoffeeQtyOperator,
  CoffeeQtyTotal,
} from './CoffeeQtyInput.styles.ts';
import { useState } from 'react';

interface ICoffeeQty {
  initialQty?: number;
  slim?: boolean;
}

export const CoffeeQty = (props: ICoffeeQty) => {
  const [itemQty, setItemQty] = useState(props.initialQty || 1);

  const handleAddItem = () => {
    setItemQty((state) => state + 1);
  };
  const handleRemoveItem = () => {
    if (itemQty <= 1) return;

    setItemQty((state) => state - 1);
  };

  return (
    <CoffeeQtyContainer $isSmall={props.slim}>
      <CoffeeQtyOperator onClick={handleRemoveItem} disabled={itemQty <= 1}>
        <Minus size={14} weight="bold" />
      </CoffeeQtyOperator>

      <CoffeeQtyTotal>{itemQty}</CoffeeQtyTotal>

      <CoffeeQtyOperator onClick={handleAddItem}>
        <Plus size={14} weight="bold" />
      </CoffeeQtyOperator>
    </CoffeeQtyContainer>
  );
};
