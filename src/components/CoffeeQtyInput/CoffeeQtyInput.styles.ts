import styled, { css } from 'styled-components';

export const CoffeeQtyContainer = styled.div<{ $isSmall?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.base.button};

  input {
    color: ${(props) => props.theme.base.title};
    text-align: center;
  }

  ${({ $isSmall }) =>
    $isSmall &&
    css`
      height: 2rem;
    `}
`;

export const CoffeeQtyOperator = styled.button`
  display: flex;
  background: none;
  color: ${(props) => props.theme.brand.purple.default};
  &:not(:disabled) {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.brand.purple.dark};
    }
  }
`;

export const CoffeeQtyTotal = styled.p`
  cursor: default;
`;
