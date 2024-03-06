import styled from 'styled-components';

export const BannerContainer = styled.div`
  flex-shrink: 0;
  position: relative;
`;

export const BannerBackgroundContainer = styled.div`
  z-index: -1;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`;

export const BannerContent = styled.div`
  padding: 5.87rem 0 4.55rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.base.subtitle};
    font-size: 1.25rem;
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
    flex-shrink: 0;
  }
`;
export const BannerBulletPoints = styled.div`
  margin-top: 4.12rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 1.25rem;
  grid-column-gap: 2.5rem;
`;

type BulletPointColor = 'yellow' | 'darkYellow' | 'purple' | 'baseText';

export const BannerBulletPointItem = styled.p<{ color?: BulletPointColor }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  color: ${(props) => props.theme.base.text};

  span {
    color: ${(props) => props.theme.background};
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;

    border-radius: 62.5rem;
    background: ${(props) => {
      switch (props.color) {
        case 'purple':
          return props.theme.brand.purple.default;
        case 'baseText':
          return props.theme.base.text;
        case 'yellow':
          return props.theme.brand.yellow.default;
        case 'darkYellow':
        default:
          return props.theme.brand.yellow.dark;
      }
    }}
`;
