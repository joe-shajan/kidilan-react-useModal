import React, { useState, useEffect, ReactNode } from "react";

type Modal = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: Modal) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser && isOpen) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(1px)",
            zIndex: 4,
          }}
          onClick={onClose}
        />
        <div
          style={{
            zIndex: 5,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export { Modal };
