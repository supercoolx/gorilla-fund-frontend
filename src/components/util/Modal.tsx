import React from "react";

const Modal = ({children, isOpen}) => {
    return (
        <div className={`fixed inset-0 z-10 overflow-y-auto${isOpen ? "" : " hidden"}`}>
            <div className="fixed inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex items-center justify-center h-full mx-3 overflow-hidden transition-all shadow-xl">
                {children}
            </div>
        </div>
    )
}

export default Modal;