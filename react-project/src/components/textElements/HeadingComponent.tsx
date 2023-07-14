"use client";

import React from "react";
import styles from "./HeadingComponent.module.scss";

interface Props {
  children: React.ReactNode;
  tag?: React.ReactNode;
}

/**
 * Defines a standard heading with a divider line underneath.
 * 
 * @param children The text to display in the heading.
 * @param tag The tag to display next to the heading, if any.
 */
const HeadingComponent: React.FC<Props> = ({ children, tag }) => {
  return (
    <div>
      <div className={styles.inline_space_between}>
        <h1 className={styles.h1_heading}>{children}</h1>
        {tag ? <p className={styles.tag}>{tag}</p> : null}
      </div>
      <hr />
    </div>
  );
};

export { HeadingComponent };
