import styled from 'styled-components';

export const OrderItemsContainer = styled.div`
  display: flex;
  width: 28rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 0.375rem 2.75rem;
  background: ${(props) => props.theme.base.card};
`;
