import { HomeContainer } from './Home.styles.ts';
import { Header } from '../../components/Header.tsx';

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <h1>Hello World</h1>
    </HomeContainer>
  );
}
