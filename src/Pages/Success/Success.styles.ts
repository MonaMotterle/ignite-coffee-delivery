import styled from 'styled-components';

export const FinishedOrderContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;
export const FinishedOrderTitle = styled.h2`
  color: ${(props) => props.theme.brand.yellow.dark};
`;
export const FinishedOrderSubtitle = styled.p`
  color: ${(props) => props.theme.base.subtitle};

  font-size: 1.25rem;
  line-height: 130%;
`;
export const FinishedOrderDetailBordered = styled.div`
  border: 1px solid transparent;
  border-radius: 6px 36px;
  width: 100%;

  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.brand.yellow.default}, ${theme.brand.purple.default})`};
`;
export const FinishedOrderDetailsContainer = styled.div`
  display: flex;
  position: relative;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  background-color: white;
  border-radius: 6px 36px;
`;
export const FinishedOrderDetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.base.text};
  }

  span {
    font-weight: 700;
  }
`;

export type IconColors = 'yellow' | 'darkYellow' | 'purple';

export const FinishedOrderDetailsIcon = styled.div<{ $color: IconColors }>`
  color: ${(props) => props.theme.white};

  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1000px;
  background: ${(props) => {
    switch (props.$color) {
      case 'purple':
        return props.theme.brand.purple.default;
      case 'yellow':
        return props.theme.brand.yellow.default;
      case 'darkYellow':
      default:
        return props.theme.brand.yellow.dark;
    }
  }};
`;
