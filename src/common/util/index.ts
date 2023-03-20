import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

type ModalProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

export const handleModal = ({ title, message, onConfirm }: ModalProps) => {
  confirmAlert({
    title,
    message,
    buttons: [
      {
        label: "확인",
        onClick: () => onConfirm(),
      },
      {
        label: "취소",
        onClick: () => { },
      },
    ],
  });
}
export const printWon = (price: number): string => {
  return price.toLocaleString('en-US') + " 원";
}

export const printQuantity = (quantity: number): string => {
  return `수량: ${quantity} 개`;
}