import {
  CoffeeRemoveButton,
  OrderItemActions,
  OrderItemCardContainer,
  OrderItemDescription,
  OrderItemDetails,
  OrderItemTitle,
  OrderItemValue,
} from './OrderItemCard.styles.ts';
import CreamyCoffee from '../../../../assets/coffeeCardImages/CreamyCoffee.png';
import { CoffeeQty } from '../../../../components/CoffeeQtyInput';
import { Trash } from '@phosphor-icons/react';

export const OrderItemCard = () => {
  return (
    <OrderItemCardContainer>
      <OrderItemDetails>
        <img src={CreamyCoffee} alt="" />
        <OrderItemDescription>
          <OrderItemTitle>Expresso Tradicional</OrderItemTitle>

          <OrderItemActions>
            <CoffeeQty slim />

            <CoffeeRemoveButton>
              <Trash size={16} />

              <p>Remover</p>
            </CoffeeRemoveButton>
          </OrderItemActions>
        </OrderItemDescription>
      </OrderItemDetails>

      <OrderItemValue>R$ 9,90</OrderItemValue>
    </OrderItemCardContainer>
  );
};
