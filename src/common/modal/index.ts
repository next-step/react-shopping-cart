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