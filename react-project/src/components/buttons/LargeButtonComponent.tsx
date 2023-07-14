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

/**
 * Defines a large button with a solid background, can have multiple roles defined by the ButtonRole enum.
 */
const LargeButton: React.FC<Props> = ({ role, children, onClick }) => {
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

export { ButtonRole, LargeButton };
