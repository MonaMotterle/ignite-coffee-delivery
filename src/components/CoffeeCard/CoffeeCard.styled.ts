import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;

  flex-shrink: 0;

  background: ${(props) => props.theme.base.card};

  img {
    margin: -2.5rem auto 0.75rem;
  }

  h4 {
    color: ${(props) => props.theme.base.subtitle};
    margin: 1rem auto 0.5rem;
  }
`;

export const CoffeeCardSmallText = styled.p`
  color: ${(props) => props.theme.base.label};
  text-align: center;

  font-size: 0.875rem;
  line-height: 130%;
`;

export const CoffeeTag = styled.div`
  display: flex;
  gap: 0.25rem;

  p {
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    text-transform: uppercase;

    border-radius: 100px;
    background: ${(props) => props.theme.brand.yellow.light};

    font-size: 0.625rem;
    color: ${(props) => props.theme.brand.yellow.dark};
  }
`;

export const CoffeeActionContainer = styled.div`
  margin-top: 2.06rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  p {
    display: flex;
    align-items: baseline;
    color: ${(props) => props.theme.base.text};
    text-align: right;
  }

  div {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const CoffeeQty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.base.button};

  input {
    color: ${(props) => props.theme.base.title};
    text-align: center;
  }
`;

export const CoffeeQtyOperator = styled.button`
  background: none;
  color: ${(props) => props.theme.brand.purple.default};

  cursor: pointer;
`;

export const CoffeeQtyTotal = styled.p`
  cursor: default;
`;

export const CoffeeBuyButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  color: ${(props) => props.theme.base.card};
  background: ${(props) => props.theme.brand.purple.dark};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.brand.purple.default};
  }
`;
