import styled from 'styled-components';

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
  border: 1px solid ${(props) => props.theme.brand.yellow.default};
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
    border: 1px solid ${(props) => props.theme.brand.yellow.dark};
    background: ${(props) => props.theme.brand.yellow.light};

    p {
      color: ${(props) => props.theme.brand.yellow.dark};
    }
  }
`;
