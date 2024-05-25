import { HomeContainer } from './Home.styles.ts';
import { coffees } from '../../../coffeeListItems.ts';
import { Banner } from './components/Banner';
import { CoffeeList } from './components/CoffeeList';

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <CoffeeList list={coffees} />
    </HomeContainer>
  );
}
