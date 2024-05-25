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
import { useCart } from '../../hooks/useCart.tsx';
import { useParams } from 'react-router-dom';

interface DetailsProps {
  key: string;
  icon: React.ReactNode;
  color: IconColors;
  topLine: React.ReactNode;
  bottomLine: React.ReactNode;
}

export const Success = () => {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  };

  if (!orderInfo?.id) {
    return null;
  }

  const details: DetailsProps[] = [
    {
      key: 'deliveryAddress',
      icon: <MapPin size={16} weight="fill" />,
      color: 'purple',
      topLine: (
        <p>
          Entrega em <span>{`${orderInfo.street}, ${orderInfo.number}`}</span>
        </p>
      ),
      bottomLine: (
        <p>
          {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
        </p>
      ),
    },
    {
      key: 'deliveryTime',
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
      key: 'deliveryPaymentMethod',
      icon: <CurrencyDollar size={16} />,
      color: 'darkYellow',
      topLine: <p>Pagamento na entrega</p>,
      bottomLine: (
        <p>
          <span>{paymentMethod[orderInfo.paymentMethod]}</span>
        </p>
      ),
    },
  ];

  if (!orderInfo?.id) {
    return null;
  }

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
