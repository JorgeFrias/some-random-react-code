"use client";

import React from "react";
import styles from "./InlineButtonComponent.module.scss";

// TODO: TextButton is a better name, because the element is not inline, but it has the same visual hierarchy as the text around it.

/**
 *  Button role, defines the visual hierarchy of the button.
 */
enum ButtonRole {
  Primary,
  Secondary,
}

interface Props {
  role: ButtonRole;
  backgroundOnHover?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

/**
 * Returns the class name for the button, based on the role and if it has a background on hover.
 */
const getButtonClass = (role: ButtonRole, backgroundOnHover?: boolean) => {
  let buttonClass = styles.button_inline;

  // Set the button class based on the role.
  switch (role) {
    case ButtonRole.Primary:
      buttonClass = styles.button_inline;
      break;
    case ButtonRole.Secondary:
      buttonClass = styles.button_inline_secondary;
      break;
    default:
      break;
  }

  // If the button has a background on hover, add the class.
  if (backgroundOnHover) {
    buttonClass += ` ${styles.button_inline_hover_region}`;
  }

  return buttonClass;
};

/**
 * Defines a button with the same visual hierarchy as the text around it.
 *
 * Can have a background on hover, to increase the perceived clickable area. When using touch devices, probably is not needed as users are used to this pattern.
 */
const InlineButton: React.FC<Props> = ({
  role,
  backgroundOnHover,
  children,
  onClick,
}) => {
  const buttonClass = getButtonClass(role, backgroundOnHover);

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

InlineButton.defaultProps = {
  backgroundOnHover: false, // By default, the button will not have a background on hover.
};

export { InlineButton, ButtonRole };
