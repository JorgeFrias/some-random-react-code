'use client';

import React from "react";
import styles from "./LargeButtonComponent.module.scss";

/**
 *  Button role, defines the visual hierarchy of the button.
 */
enum ButtonRole {
  Primary,
}

interface Props {
  role: ButtonRole;
  children: React.ReactNode;
  onClick: () => void;
}

const getButtonStyle = (role: ButtonRole) => {
  switch (role) {
    case ButtonRole.Primary:
      return styles.button_primary;
    default:
      return styles.button_primary;
  }
};

const PrimaryButton: React.FC<Props> = ({ role, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        getButtonStyle(role)
      }
    >
      {children}
    </button>
  );
};

export { ButtonRole, PrimaryButton };
