"use client";

import React, { useState, useEffect, ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainContainerComponent.module.scss";

interface Props {
  primaryView: React.ReactNode;
  sideView: React.ReactNode;
}

/**
 * Defines a view that contains other views in two different columns.
 */
const MainContainer: React.FC<Props> = ({ primaryView, sideView }) => {
  return (
    <div className={`${styles.main_container} d-flex align-items-center justify-content-center`}>
      <div className={styles.content}>
        <div className="row m-0">
          <div className={`col-8 ${styles.primary_view}`}>{primaryView}</div>
          <div className={`col-4 ${styles.side_view}`}>{sideView}</div>
        </div>
      </div>
    </div>
  );
};

export { MainContainer };
