import { useState } from 'react';
import { IOrderDetailTypes, IOrderTypes } from '../../@interface';
import { getAllOrders } from '../../api/order';
import { LOCALSTORAGE } from '../../constants/dataKey';
import { getJSONData, setJSONData } from '../../utils/localStorage';

interface IOrderListProp {}

interface IDetailProp<T> {
  data: Array<T>;
}

const DetailList = ({ data }: IDetailProp<IOrderDetailTypes>) => (
  <div>
    {data.map((item: IOrderDetailTypes) => (
      <div className="order-list-item" key={item.id}>
        <div className="flex gap-15 mt-10">
          <img className="w-144 h-144" src={item.imageUrl} alt={item.name} />
          <div className="flex-col gap-15">
            <span className="order-name">{item.name}</span>
            <span className="order-info">
              {item.price}원 / 수량: {item.quantity}개
            </span>
          </div>
        </div>
        <button className="primary-button-small flex-center self-start">장바구니</button>
      </div>
    ))}
  </div>
);
const OrderList = () => {
  const [data, setData] = useState(getJSONData(LOCALSTORAGE.ORDER));
  if (data.length === 0) {
    getAllOrders().then((res) => {
      setJSONData(LOCALSTORAGE.ORDER, res);
      setData(res);
    });
  }
  return (
    <main className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>
      {data.map((item: IOrderTypes) => (
        <div className="order-list" key={item.id}>
          <div className="order-list__header">
            <span>주문번호: {item.id}</span>
            <span>상세보기 &gt;</span>
            <DetailList data={item.orderDetails} />
          </div>
        </div>
      ))}
    </main>
  );
};

export default OrderList;
