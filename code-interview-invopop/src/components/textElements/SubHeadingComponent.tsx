"use client";

import React from "react";
import styles from "./SubHeadingComponent.module.scss";

/**
 *  Subheading role, defines the visual hierarchy of the element
 */
enum SubheadingRole {
  Primary,
  Secondary,
}

/**
 * Returns the classes the element based on the role.
 */
const getClassForRole = (role: SubheadingRole) => {
  let buttonClass = styles.button_inline;

  // Set the button class based on the role.
  switch (role) {
    case SubheadingRole.Primary:
      buttonClass = styles.subheading_primary;
      break;
    case SubheadingRole.Secondary:
      buttonClass = styles.subheading_secondary;
      break;
    default:
      buttonClass = styles.subheading_primary;
      break;
  }
  return buttonClass;
};

interface Props {
  role: SubheadingRole;
  children: React.ReactNode;
}

// TODO: Discuss if makes more sense to use different elements for each role, instead of using the same element and changing the size.

/**
 * Defines a standard subheading, with different visual hierarchy options.
 *
 * Uses H2 as the heading element, but changes the size of the element based on the role.
 */
const SubheadingComponent: React.FC<Props> = ({ role, children }) => {
  return <h2 className={getClassForRole(role)}>{children}</h2>;
};

export { SubheadingComponent, SubheadingRole };
