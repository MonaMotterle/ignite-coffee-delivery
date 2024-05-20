import {
  OrderConfirmationButton,
  OrderItemsContainer,
  OrderItemsList,
  OrderTotal,
  OrderTotalDetails,
  OrderTotalList,
} from './OrderItems.styles.ts';
import { OrderItemCard } from '../OrderItemCard';

export const OrderItems = () => {
  return (
    <OrderItemsContainer>
      <OrderItemsList>
        <OrderItemCard />
      </OrderItemsList>

      <OrderTotalList>
        <OrderTotalDetails>
          Total de itens <span>R$ 29,70</span>
        </OrderTotalDetails>

        <OrderTotalDetails>
          Entrega <span>R$ 3,50</span>
        </OrderTotalDetails>

        <OrderTotal>
          Total <span>R$ 33,20</span>
        </OrderTotal>
      </OrderTotalList>

      <OrderConfirmationButton>
        <p>confirmar pedido</p>
      </OrderConfirmationButton>
    </OrderItemsContainer>
  );
};
