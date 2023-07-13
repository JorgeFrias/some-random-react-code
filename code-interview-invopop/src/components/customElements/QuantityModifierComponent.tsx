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
// TODO: Set a max length for the input, which is the max quantity of the product on a given order? If is > 3 digits the input box should grow.
// TODO: Long press on +/- should increase/decrease the quantity continuously.

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
        <div className={styles.quantity_icon}>-</div>
      </InlineButton>

      <div className={styles.quantity_input}>
        <input type="number" value={quantity} onChange={handleInputChange} />
      </div>

      <InlineButton
        role={ButtonRole.Primary}
        onClick={onQuantityAdd}
        backgroundOnHover={true}
      >
        <div className={styles.quantity_icon}>+</div>
      </InlineButton>
    </div>
  );
};

export { QuantityModifier };
