import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
  margin: 2rem auto 9.8rem;

  h2 {
    color: ${(props) => props.theme.base.subtitle};
  }
`;

export const CoffeeListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  margin-top: 3.38rem;
`;
