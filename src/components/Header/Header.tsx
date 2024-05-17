import {
  CheckoutAction,
  CheckoutActionCounter,
  HeaderActions,
  HeaderContainer,
  LocationAction,
} from './Header.styles.ts';
import Logo from '../../assets/ignite-coffee-logo.svg';
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <HeaderActions>
        <LocationAction>
          <MapPin size={20} weight="fill" />
          <p>São Paulo, SP</p>
        </LocationAction>

        <CheckoutAction>
          <CheckoutActionCounter>3</CheckoutActionCounter>
          <ShoppingCartSimple size={22} weight="fill" />
        </CheckoutAction>
      </HeaderActions>
    </HeaderContainer>
  );
};
