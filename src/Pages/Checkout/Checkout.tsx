import { CheckoutContainer, CheckoutHeader } from './Checkout.styles.ts';
import { DeliveryDetails } from './components/DeliveryDetails';
import { OrderItemsContainer } from './components/OrderItems/OrderItems.styles.ts';

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <div>
        <CheckoutHeader>Complete seu pedido</CheckoutHeader>

        <DeliveryDetails />
      </div>

      <div>
        <CheckoutHeader>Cafés selecionados</CheckoutHeader>

        <OrderItemsContainer />
      </div>
    </CheckoutContainer>
  );
};
