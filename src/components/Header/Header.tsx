import {
  CheckoutAction,
  CheckoutActionCounter,
  HeaderActions,
  HeaderContainer,
  LocationAction,
} from './Header.styles.ts';
import Logo from '../../assets/ignite-coffee-logo.svg';
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react';
import { useCart } from '../../hooks/useCart.tsx';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={Logo} alt="" />
      </Link>

      <HeaderActions>
        <LocationAction>
          <MapPin size={20} weight="fill" />
          <p>São Paulo, SP</p>
        </LocationAction>

        <Link to={`checkout`} aria-disabled={cart.length === 0}>
          <CheckoutAction>
            {cart.length > 0 ? (
              <CheckoutActionCounter>{cart.length}</CheckoutActionCounter>
            ) : null}

            <ShoppingCartSimple size={22} weight="fill" />
          </CheckoutAction>
        </Link>
      </HeaderActions>
    </HeaderContainer>
  );
};
