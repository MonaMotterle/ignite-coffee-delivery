import { HomeContainer } from './Home.styles.ts';
import { coffeeListItems } from './coffeeListItems.ts';
import { Banner } from './components/Banner';
import { CoffeeList } from './components/CoffeeList';

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <CoffeeList list={coffeeListItems} />
    </HomeContainer>
  );
}
