import BannerBackground from '../../../../assets/homeBannerBackground.png';
import BannerImage from '../../../../assets/homeBannerImage.png';
import {
  BannerBackgroundContainer,
  BannerContainer,
  BannerContent,
  BannerBulletPoints,
} from './Banner.styles.ts';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BannerBulletPoints>
            <p>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </BannerBulletPoints>
        </div>

        <img src={BannerImage} alt="" />
      </BannerContent>

      <BannerBackgroundContainer>
        <img src={BannerBackground} alt="" />
      </BannerBackgroundContainer>
    </BannerContainer>
  );
};
