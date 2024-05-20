import { CheckoutContainer, CheckoutHeader } from './Checkout.styles.ts';
import { DeliveryDetails } from './components/DeliveryDetails';
import { OrderItems } from './components/OrderItems';

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <div>
        <CheckoutHeader>Complete seu pedido</CheckoutHeader>

        <DeliveryDetails />
      </div>

      <div>
        <CheckoutHeader>Cafés selecionados</CheckoutHeader>

        <OrderItems />
      </div>
    </CheckoutContainer>
  );
};
