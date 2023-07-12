"use client";

import React, { useState, useEffect } from "react";
import styles from "./QuantityModifierComponent.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { InlineButton, ButtonRole } from "../buttons/InlineButtonComponent";
import { on } from "events";

interface Props {
  quantity: number;
  onQuantityAdd: () => void;
  onQuantitySubtract: () => void;
  onQuantityChange: (newQuantity: number) => void;
}

// TODO: Use +/- icons instead of the characters.

/**
 * Defines a selector where the user can add or subtract a quantity.
 */
const QuantityModifier: React.FC<Props> = ({
  quantity,
  onQuantityAdd,
  onQuantitySubtract,
  onQuantityChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    onQuantityChange(newValue);
  };

  return (
    <div className="d-flex align-items-center">
      <InlineButton
        role={ButtonRole.Primary}
        onClick={onQuantitySubtract}
        backgroundOnHover={true}
      >
        -
      </InlineButton>

      <input type="number" value={quantity} onChange={handleInputChange} />

      <InlineButton
        role={ButtonRole.Primary}
        onClick={onQuantityAdd}
        backgroundOnHover={true}
      >
        +
      </InlineButton>
    </div>
  );
};

export { QuantityModifier };
