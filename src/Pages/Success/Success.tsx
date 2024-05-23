import React from 'react';
import finishedOrderSrc from '../../assets/finishedOrder.png';
import {
  FinishedOrderContainer,
  FinishedOrderDetailBordered,
  FinishedOrderDetailsContainer,
  FinishedOrderDetailsIcon,
  FinishedOrderDetailsItem,
  FinishedOrderSubtitle,
  FinishedOrderTitle,
  type IconColors,
} from './Success.styles.ts';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

interface DetailsProps {
  key: number;
  icon: React.ReactNode;
  color: IconColors;
  topLine: React.ReactNode;
  bottomLine: React.ReactNode;
}

export const Success = () => {
  const details: DetailsProps[] = [
    {
      key: 1,
      icon: <MapPin size={16} weight="fill" />,
      color: 'purple',
      topLine: (
        <p>
          Entrega em <span>Rua João Daniel Martinelli, 102</span>
        </p>
      ),
      bottomLine: <p>Farrapos - Porto Alegre, RS</p>,
    },
    {
      key: 2,
      icon: <Timer size={16} weight="fill" />,
      color: 'yellow',
      topLine: <p>Previsão de entrega,</p>,
      bottomLine: (
        <p>
          <span>20 min - 30 min</span>
        </p>
      ),
    },
    {
      key: 3,
      icon: <CurrencyDollar size={16} />,
      color: 'darkYellow',
      topLine: <p>Pagamento na entrega</p>,
      bottomLine: (
        <p>
          <span>Cartão de Crédito</span>
        </p>
      ),
    },
  ];

  return (
    <FinishedOrderContainer>
      <div>
        <div>
          <FinishedOrderTitle>Uhu! Pedido confirmado</FinishedOrderTitle>

          <FinishedOrderSubtitle>
            Agora é só aguardar que logo o café chegará até você
          </FinishedOrderSubtitle>
        </div>

        <FinishedOrderDetailBordered>
          <FinishedOrderDetailsContainer>
            {details.map((item) => (
              <FinishedOrderDetailsItem key={item.key}>
                <FinishedOrderDetailsIcon $color={item.color}>
                  {item.icon}
                </FinishedOrderDetailsIcon>

                <div>
                  {item.topLine}
                  {item.bottomLine}
                </div>
              </FinishedOrderDetailsItem>
            ))}
          </FinishedOrderDetailsContainer>
        </FinishedOrderDetailBordered>
      </div>

      <div>
        <img src={finishedOrderSrc} alt="" />
      </div>
    </FinishedOrderContainer>
  );
};
