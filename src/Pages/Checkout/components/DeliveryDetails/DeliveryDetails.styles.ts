import styled from 'styled-components';

export const DeliveryDetailsContainer = styled.div`
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
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
`;
export const PaymentButton = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.7rem;
  flex: 1 0 auto;
  cursor: pointer;

  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.base.button};
  background: ${(props) => props.theme.base.button};

  transition: 0.25s;

  span {
    color: ${(props) => props.theme.brand.purple.default};
  }

  p {
    color: ${(props) => props.theme.base.text};

    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%; /* 1.2rem */
    text-transform: uppercase;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.brand.purple.default};
    background: ${(props) => props.theme.brand.purple.light};
  }
`;
