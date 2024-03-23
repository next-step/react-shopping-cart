import {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
  ComponentProps,
} from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface ModalProps extends ComponentProps<"dialog"> {
  children: ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { children, className, ...props },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  return createPortal(
    <dialog
      {...props}
      className={twMerge("backdrop:bg-dimmed", className)}
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("portal") as HTMLElement
  );
});

export default Modal;
