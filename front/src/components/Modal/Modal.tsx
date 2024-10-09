import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-brownD-200 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-brownD-100  min-w-[40%]  rounded-lg p-6 z-10 relative">
        <button
          className="absolute top-2 right-4 bg-brownD-200 rounded"
          onClick={onClose}
        >
          <Image src="https://res.cloudinary.com/dkobjvdgn/image/upload/v1728502382/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24_cuib2f.svg" 
          width={30}
          height={30}
          alt="Close"/>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
