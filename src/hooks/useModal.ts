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
    dispatch(setIsModalOpen(true));
    initModal(type);
  };
  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };
  const handleConfirmButton = () => {
    alert(modalType);
    switch (modalType) {
      case "add": {
        alert("todo: addToCart"); // TODO: addToCart(product) product 인자로 받지 않는법 모색
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
