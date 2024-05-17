import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-columns: auto 28rem;
`;

export const CheckoutHeader = styled.h5`
  color: ${(props) => props.theme.base.subtitle};
  margin-bottom: 0.94rem;
`;
