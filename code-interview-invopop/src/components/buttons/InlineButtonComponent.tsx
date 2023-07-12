"use client";

import React from "react";
import styles from "./InlineButtonComponent.module.scss";

interface Props {
  backgroundOnHover?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

/**
 * Defines a button with the same visual hierarchy as the text around it.
 * 
 * Can have a background on hover, to increase the perceived clickable area. When using touch devices, probably is not needed as users are used to this pattern.
 */
const InlineButton: React.FC<Props> = ({ backgroundOnHover, children, onClick }) => {
  const buttonClass = backgroundOnHover
    ? `${styles.button_inline} ${styles.button_inline_hover_region}`
    : styles.button_inline;

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

InlineButton.defaultProps = {
  backgroundOnHover: false, // By default, the button will not have a background on hover.
};

export { InlineButton };
