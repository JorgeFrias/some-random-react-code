"use client";

import React from "react";
import styles from "./PriceDisplayComponent.module.scss";

/**
 *  Defines the visual hierarchy of the element.
 *  Inherited means that the element will inherit the visual hierarchy from the parent.
 */
enum TraitVariation {
  Large,
  Medium,
  Inherited,
}

/**
 * Defines the available currencies.
 */
enum Currency {
  EUR = "€",
  USD = "$",
  GBP = "£",
}

/**
 * Returns the classes the element based on the role.
 */
const getClassForRole = (role: TraitVariation) => {
  let buttonClass = styles.button_inline;

  // Set the button class based on the role.
  switch (role) {
    case TraitVariation.Large:
      buttonClass = styles.price_display_primary;
      break;
    case TraitVariation.Medium:
      buttonClass = styles.price_display_secondary;
      break;
    case TraitVariation.Inherited:
      buttonClass = styles.price_display_inherited;
      break;
    default:
      buttonClass = styles.price_display_inherited;
      break;
  }
  return buttonClass;
};

interface Props {
  price: number;
  currency: Currency;
  variation: TraitVariation;
}

/**
 * Defines a standard element that renders price, with different visual hierarchy options.
 * @param price The price to display, in cents (e.g. 1000 = 10.00EUR)
 * @param currency The currency to display
 * @param role The visual hierarchy of the element
 * 
 * If the price is a whole number, the .00 will be removed, as per the design.
 */
const PriceDisplayComponent: React.FC<Props> = ({ price, currency, variation }) => {
  let formattedPrice: string;
  // Convert price to decimal and format to 2 decimal places.
  // + Check if the formatted price is a whole number and remove the .00 if it is
  if (Number.isInteger(price / 100)) {
    formattedPrice = (price / 100).toFixed(0);
  } else {
    formattedPrice = (price / 100).toFixed(2);
  }

  return (
    <p className={getClassForRole(variation)}>
      {currency === Currency.EUR ? (
        <>
          {formattedPrice} {currency}
        </>
      ) : (
        <>
          {currency}
          {formattedPrice}
        </>
      )}
    </p>
  );
};

export {
  PriceDisplayComponent,
  TraitVariation as PriceDisplayTraitVariation,
  Currency,
};
