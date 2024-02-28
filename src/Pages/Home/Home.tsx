import { HomeContainer } from './Home.styles.ts';
import { Banner } from './components/Banner';

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <h1>CoffeeList</h1>
    </HomeContainer>
  );
}
