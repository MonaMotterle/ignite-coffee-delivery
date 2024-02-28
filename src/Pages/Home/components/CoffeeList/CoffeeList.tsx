import { CoffeeListContainer, CoffeeListWrapper } from './CoffeeList.styles.ts';
import {
  CoffeeCard,
  type CoffeeType,
} from '../../../../components/CoffeeCard/CoffeeCard.tsx';

export const CoffeeList = ({ list }: { list: CoffeeType[] }) => {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListWrapper>
        {list.map((item) => (
          <CoffeeCard key={item.id} {...item} />
        ))}
      </CoffeeListWrapper>
    </CoffeeListContainer>
  );
};
