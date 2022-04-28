import React from "react";

const Modal = ({children, isOpen, onClose}) => {
    return (
        <div className={`fixed inset-0 z-20${isOpen ? "" : " hidden"}`}>
            <div onClick={onClose} className="relative flex items-center justify-center h-full overflow-hidden bg-black bg-opacity-50 shadow-xl cursor-pointer">
                <div onClick={e => e.stopPropagation()} className="cursor-auto max-h-[70%] overflow-y-auto rounded-md">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;