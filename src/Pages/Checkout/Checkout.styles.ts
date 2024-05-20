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
