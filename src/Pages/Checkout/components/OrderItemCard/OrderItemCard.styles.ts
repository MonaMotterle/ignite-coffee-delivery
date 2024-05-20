import styled from 'styled-components';

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

    /* Components/Button S */
    font-size: 0.75rem;
    line-height: 160%; /* 1.2rem */
    text-transform: uppercase;
  }
`;
