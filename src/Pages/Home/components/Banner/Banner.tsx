import BannerBackground from '../../../../assets/homeBannerBackground.png';
import BannerImage from '../../../../assets/homeBannerImage.png';
import {
  BannerBackgroundContainer,
  BannerContainer,
  BannerContent,
  BannerBulletPoints,
  BannerBulletPointItem,
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
            <BannerBulletPointItem color="darkYellow">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </BannerBulletPointItem>
            <BannerBulletPointItem color="baseText">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </BannerBulletPointItem>
            <BannerBulletPointItem color="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </BannerBulletPointItem>
            <BannerBulletPointItem color="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </BannerBulletPointItem>
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
