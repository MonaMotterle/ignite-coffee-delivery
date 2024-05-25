import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  > div:first-child {
    flex: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CheckoutHeader = styled.h5`
  color: ${(props) => props.theme.base.subtitle};
  margin-bottom: 0.94rem;
`;

export const DeliveryDetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

const BaseSectionContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  border-radius: 0.375rem;
  background: ${(props) => props.theme.base.card};
`;
export const DeliveryDetailsAddress = styled(BaseSectionContainer)``;
export const DeliveryDetailsAddressIcon = styled.span`
  color: ${(props) => props.theme.brand.yellow.dark};
`;
export const DeliveryDetailsPayment = styled(BaseSectionContainer)``;
export const DeliveryDetailsPaymentIcon = styled.span`
  color: ${(props) => props.theme.brand.purple.default};
`;
export const CheckoutSectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const CheckoutSectionTitle = styled.p`
  color: ${(props) => props.theme.base.subtitle};

  /* Text/Regular M */
  font-size: 1rem;
`;
export const CheckoutSectionSubtitle = styled.p`
  color: ${(props) => props.theme.base.text};
  /* Text/Regular S */
  font-size: 0.875rem;
`;
export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`;

export const OrderItemsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 0.375rem 2.75rem;
  background: ${(props) => props.theme.base.card};

  @media (min-width: 768px) {
    width: 28rem;
  }
`;
export const OrderItemsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;
export const OrderTotalList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    color: ${(props) => props.theme.base.text};
  }
`;
export const OrderTotalDetails = styled.p`
  /* Text/Regular S */
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%; /* 1.1375rem */
`;
export const OrderTotal = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`;
export const OrderConfirmationButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme.brand.yellow.default};

  transition: 0.25s;

  p {
    color: ${(props) => props.theme.white};

    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme.brand.yellow.dark};
  }
`;

export const OrderItemCardContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem 1.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  border-bottom: 1px solid ${(props) => props.theme.base.button};
`;
export const OrderItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
export const OrderItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const OrderItemValue = styled.div`
  color: ${(props) => props.theme.base.text};
  font-weight: 700;
  line-height: 130%; /* 1.3rem */
`;
export const OrderItemTitle = styled.p`
  color: ${(props) => props.theme.base.subtitle};
`;
export const OrderItemActions = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const CoffeeRemoveButton = styled.button`
  cursor: pointer;
  display: flex;
  height: 2rem;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${(props) => props.theme.base.button};
  color: ${(props) => props.theme.brand.purple.default};

  p {
    color: ${(props) => props.theme.base.text};

    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme.base.hover};
  }
`;

export const PaymentErrorMessage = styled.p`
  font-size: 0.75rem;
  line-height: 130%;
  color: red;
`;
