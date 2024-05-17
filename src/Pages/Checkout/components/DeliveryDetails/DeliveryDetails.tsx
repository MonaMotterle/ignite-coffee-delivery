import {
  CheckoutSectionHeader,
  CheckoutSectionSubtitle,
  CheckoutSectionTitle,
  DeliveryDetailsAddress,
  DeliveryDetailsAddressIcon,
  DeliveryDetailsContainer,
  DeliveryDetailsPayment,
  DeliveryDetailsPaymentIcon,
  PaymentButton,
  PaymentMethods,
} from './DeliveryDetails.styles.ts';

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';

export const DeliveryDetails = () => {
  return (
    <DeliveryDetailsContainer>
      <DeliveryDetailsAddress>
        <CheckoutSectionHeader>
          <DeliveryDetailsAddressIcon>
            <MapPinLine size={22} />
          </DeliveryDetailsAddressIcon>

          <div>
            <CheckoutSectionTitle>Endereço de Entrega</CheckoutSectionTitle>

            <CheckoutSectionSubtitle>
              Informe o endereço onde deseja receber seu pedido
            </CheckoutSectionSubtitle>
          </div>
        </CheckoutSectionHeader>

        <div />
      </DeliveryDetailsAddress>

      <DeliveryDetailsPayment>
        <CheckoutSectionHeader>
          <DeliveryDetailsPaymentIcon>
            <CurrencyDollar size={22} />
          </DeliveryDetailsPaymentIcon>

          <div>
            <CheckoutSectionTitle>Pagamento</CheckoutSectionTitle>

            <CheckoutSectionSubtitle>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </CheckoutSectionSubtitle>
          </div>
        </CheckoutSectionHeader>

        <PaymentMethods>
          <PaymentButton>
            <span>
              <CreditCard size={16} />
            </span>

            <p>Cartão de crédito</p>
          </PaymentButton>

          <PaymentButton>
            <span>
              <Bank size={16} />
            </span>

            <p>cartão de débito</p>
          </PaymentButton>

          <PaymentButton>
            <span>
              <Money size={16} />
            </span>

            <p>dinheiro</p>
          </PaymentButton>
        </PaymentMethods>
      </DeliveryDetailsPayment>
    </DeliveryDetailsContainer>
  );
};
