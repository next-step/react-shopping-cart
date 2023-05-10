import { useNavigate } from "react-router-dom";
import { addToCart, deleteAll } from "../store/cartSlice";
import { setModalMessage, setModalType } from "../store/modalSlice";
import { setIsModalOpen } from "../store/modalSlice";
import { useAppDispatch, useAppSelector } from "./storeHooks";

const useModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const modalSlice = useAppSelector((state) => state.modal);
  const isModalOpen = modalSlice.isOpen;
  const modalType = modalSlice.type;
  const modalMessage = modalSlice.message;

  const initModal = (type: string) => {
    dispatch(setModalType(type));
    dispatch(setModalMessage(type));
  };
  const openModal = (type: string) => {
    initModal(type);
    dispatch(setIsModalOpen(true));
  };
  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };
  const handleConfirmButton = () => {
    switch (modalType) {
      case "add": {
        dispatch(addToCart());
        navigate("/cart");
        break;
      }
      case "delete": {
        alert("todo: delete item ");
        break;
      }
      case "deleteAll": {
        dispatch(deleteAll());
        break;
      }
      case "order": {
        //TODO: order 버튼 기능 추가
        alert("결제 페이지 이동");
        break;
      }
      default:
        break;
    }
    closeModal();
  };

  return {
    isModalOpen,
    modalType,
    modalMessage,
    initModal,
    openModal,
    closeModal,
    handleConfirmButton,
  };
};

export default useModal;
