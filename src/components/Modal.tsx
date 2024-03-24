import {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
  ComponentProps,
} from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { useScrollLock } from "@/hooks";

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

  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
        lock();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
        unlock();
      }
    },
  }));

  return createPortal(
    <dialog
      {...props}
      className={twMerge("backdrop:bg-dimmed rounded", className)}
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("portal") as HTMLElement
  );
});

export default Modal;
