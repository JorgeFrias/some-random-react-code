"use client";

import React, { useState, useEffect, ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainContainerComponent.module.scss";

import { CloseButton } from "../buttons/CloseButtonComponent";

interface Props {
  primaryView: React.ReactNode;
  primaryViewClassName?: string;
  sideView: React.ReactNode;
  sideViewClassName?: string;
  hasCloseButton?: boolean;
  onClose?: () => void;
}

/**
 * Defines a view that contains other views in two different columns.
 */
const MainContainer: React.FC<Props> = ({
  primaryView,
  primaryViewClassName,
  sideView,
  sideViewClassName,
  hasCloseButton,
  onClose,
}) => {
  const handleClose = onClose || (() => {}); // Unwrap the optional function
  return (
    <div
      className={`${styles.main_container} d-flex align-items-center justify-content-center`}
    >
      <div className={styles.content}>
      <div className={`position-relative ${styles.close_button_wrapper}`}>
          {hasCloseButton && (
            <div className={`position-absolute ${styles.close_button}`}>
              <CloseButton onClick={handleClose} backgroundOnHover={true} />
            </div>
          )}
        </div>
        <div className="row m-0 h-100">
          <div className={`col-8 ${styles.primary_view} ${primaryViewClassName}`}>{primaryView}</div>
          <div className={`col-4 ${styles.side_view} ${sideViewClassName}`}>{sideView}</div>
        </div>
      </div>
    </div>
  );
};

export { MainContainer };
