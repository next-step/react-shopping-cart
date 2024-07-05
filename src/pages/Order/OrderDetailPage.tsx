import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import useOrderStore from '@/store/orderStore';
import OrderTitle from '@components/Order/@common/OrderTitle';
import OrderHeader from '@components/Order/@common/OrderHeader';
import Divider from '@components/common/Divider/Divider';
import Image from '@components/common/Image/Image';
import { Route } from '@/routes/orderList_.$orderId';
import { OrderDetail } from '@/types/order';
import { formatToKRW } from '@/utils/formatter';
import { calculateTotalAmount } from '@/utils/order';

export default function OrderDetailPage() {
  const { orderId } = Route.useParams() as { orderId: string };
  const id = Number(orderId);

  // TODO: 서버 데이터
  // const { orderDetails } = useGetOrderDetailQuery({ id });
  const getOrderById = useOrderStore.use.getOrderById();

  const orderDetails = getOrderById(id)?.orderDetails ?? [];

  const totalAmount = calculateTotalAmount(orderDetails);

  return (
    <section>
      <OrderTitle title='주문내역상세' />

      <div
        className={flex({ flexDirection: 'column', alignItems: 'flex-end' })}
      >
        <OrderHeader id={id} detailButton={false} />
        {orderDetails?.map(
          ({ id, name, price, imageUrl, quantity }: OrderDetail) => (
            <div
              key={id}
              className={flex({
                justifyContent: 'space-between',
                width: '100%',
                padding: '20px 40px',
                border: '1px solid #aaa',
              })}
            >
              <div className={flex({ gap: '15px', marginTop: '10px' })}>
                <Image
                  size='sm'
                  className={css({
                    flex: '1 0 120px !important',
                    borderRadius: '2px',
                  })}
                  variant='outline'
                  src={imageUrl}
                  alt={name}
                />

                <div
                  className={flex({
                    flexDirection: 'column',
                  })}
                >
                  <span
                    className={css({
                      fontSize: {
                        base: '14px',
                        sm: '18px',
                      },
                    })}
                  >
                    {name}
                  </span>
                  <span
                    className={css({
                      color: '#888',
                      fontSize: {
                        base: '14px',
                        sm: '18px',
                      },
                    })}
                  >
                    {`${formatToKRW(price * quantity)} / 수량: ${quantity}개`}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div
        className={flex({
          justifyContent: 'flex-end',
          margin: '50px 0',
        })}
      >
        <div className={css({ width: '480px' })}>
          <span
            className={css({
              fontSize: '24px',
            })}
          >
            결제금액 정보
          </span>

          <Divider color='gray' />

          <div
            className={flex({
              justifyContent: 'space-between',
            })}
          >
            <span className='highlight-text'>총 결제금액</span>
            <span className='highlight-text'>{formatToKRW(totalAmount)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
