"use client";

import React from "react";
import styles from "./CartHeadingsComponent.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  SubheadingComponent,
  SubheadingRole,
} from "../textElements/SubHeadingComponent";

/**
 * Defines the headings for each of the columns in the cart.
 */
const CartHeadingsComponent: React.FC = ({}) => {
  return (
    <div className={styles.cart_heading}>
      <div className="row">
        <div className="col-6">
          <div className="h-100 d-flex align-items-center">
            <SubheadingComponent role={SubheadingRole.Secondary}>
              Product Details
            </SubheadingComponent>
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <SubheadingComponent role={SubheadingRole.Secondary}>
              Quantity
            </SubheadingComponent>
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <SubheadingComponent role={SubheadingRole.Secondary}>
              Price
            </SubheadingComponent>
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <SubheadingComponent role={SubheadingRole.Secondary}>
              Total
            </SubheadingComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartHeadingsComponent };
