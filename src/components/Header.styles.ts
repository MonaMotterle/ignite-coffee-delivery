import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationAction = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  
  border-radius: 0.375rem;
  background: ${(props) => props.theme.brand.purple.light};
  color: ${(props) => props.theme.brand.purple.dark};
`;

export const CheckoutAction = styled.div`
  display: flex;
  position: relative;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  border-radius: 0.375rem;
  background: ${(props) => props.theme.brand.yellow.light};
  color: ${(props) => props.theme.brand.yellow.dark};
`;



export const CheckoutActionCounter = styled.p`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -0.52156rem;
  top: -0.5rem;

  border-radius: 62.5rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.brand.yellow.dark};

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 0.975rem */
  letter-spacing: -0.045rem;
`;