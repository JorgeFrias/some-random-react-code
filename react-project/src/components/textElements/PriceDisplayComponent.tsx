"use client";

import React from "react";
import styles from "./PriceDisplayComponent.module.scss";
import { Currency } from "@/models/currency";
import { Product } from "@/models/product";

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
 * Returns the classes the element based on the role.
 */
const getClassForRole = (role: TraitVariation) => {
  let buttonClass = styles.button_inline;

  // Set the button class based on the role.
  switch (role) {
    case TraitVariation.Large:
      buttonClass = styles.price_display_large;
      break;
    case TraitVariation.Medium:
      buttonClass = styles.price_display_medium;
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
  formattedPrice: string;
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
const PriceDisplayComponent: React.FC<Props> = ({ formattedPrice, variation }) => {
  return (
    <p className={getClassForRole(variation)}>
      {formattedPrice}
    </p>
  );
};

export {
  PriceDisplayComponent,
  TraitVariation as PriceDisplayTraitVariation,
};
