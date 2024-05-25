import {
  AddressForm,
  CheckoutContainer,
  CheckoutHeader,
  CheckoutSectionHeader,
  CheckoutSectionSubtitle,
  CheckoutSectionTitle,
  DeliveryDetailsAddress,
  DeliveryDetailsAddressIcon,
  DeliveryDetailsContainer,
  DeliveryDetailsPayment,
  DeliveryDetailsPaymentIcon,
  OrderConfirmationButton,
  OrderItemsContainer,
  OrderItemsList,
  OrderTotal,
  OrderTotalDetails,
  OrderTotalList,
  PaymentMethods,
  CoffeeRemoveButton,
  OrderItemActions,
  OrderItemCardContainer,
  OrderItemDescription,
  OrderItemDetails,
  OrderItemTitle,
  OrderItemValue, PaymentErrorMessage,
} from './Checkout.styles.ts';

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react';
import { TextInput } from '../../components/Form/TextInput';
import { Radio } from '../../components/Form/Radio';
import { useCart } from '../../hooks/useCart.tsx';
import { coffees } from '../../../coffeeListItems.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CoffeeQty } from '../../components/CoffeeQtyInput';
import { useEffect } from 'react';

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'credit' | 'debit' | 'cash';
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 13.5;

export const Checkout = () => {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      console.log(coffeeInfo);
      throw new Error('Invalid coffee.');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  });

  const selectedPaymentMethod = watch('paymentMethod');

  function handleItemIncrement(itemId: string | number) {
    incrementItemQuantity(itemId.toString());
  }

  function handleItemDecrement(itemId: string | number) {
    decrementItemQuantity(itemId.toString());
  }

  function handleItemRemove(itemId: string | number) {
    removeItem(itemId.toString());
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho');
    }

    checkout(data);
  };

  return (
    <CheckoutContainer>
      <div>
        <CheckoutHeader>Complete seu pedido</CheckoutHeader>

        <DeliveryDetailsContainer
          id="order"
          onSubmit={handleSubmit(handleOrderCheckout)}
        >
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

            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
            </AddressForm>

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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </CheckoutSectionSubtitle>
              </div>
            </CheckoutSectionHeader>

            <PaymentMethods>
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>

              {errors.paymentMethod ? (
                <PaymentErrorMessage role="alert">
                  {errors.paymentMethod.message}
                </PaymentErrorMessage>
              ) : null}
            </PaymentMethods>
          </DeliveryDetailsPayment>
        </DeliveryDetailsContainer>
      </div>

      <div>
        <CheckoutHeader>Cafés selecionados</CheckoutHeader>

        <OrderItemsContainer>
          <OrderItemsList>
            {coffeesInCart.map((coffee) => (
              <OrderItemCardContainer key={coffee.id}>
                <OrderItemDetails>
                  <img src={coffee.imageSrc} alt={coffee.title} />
                  <OrderItemDescription>
                    <OrderItemTitle>{coffee.title}</OrderItemTitle>

                    <OrderItemActions>
                      <CoffeeQty
                        slim
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      />

                      <CoffeeRemoveButton
                        onClick={() => handleItemRemove(coffee.id)}
                      >
                        <Trash size={16} />

                        <p>Remover</p>
                      </CoffeeRemoveButton>
                    </OrderItemActions>
                  </OrderItemDescription>
                </OrderItemDetails>

                <OrderItemValue>R$ {coffee.price?.toFixed(2)}</OrderItemValue>
              </OrderItemCardContainer>
            ))}
          </OrderItemsList>

          <OrderTotalList>
            <OrderTotalDetails>
              Total de itens{' '}
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </OrderTotalDetails>

            <OrderTotalDetails>
              Entrega{' '}
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </OrderTotalDetails>

            <OrderTotal>
              Total{' '}
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </OrderTotal>
          </OrderTotalList>

          <OrderConfirmationButton type="submit" form="order">
            <p>confirmar pedido</p>
          </OrderConfirmationButton>
        </OrderItemsContainer>
      </div>
    </CheckoutContainer>
  );
};
