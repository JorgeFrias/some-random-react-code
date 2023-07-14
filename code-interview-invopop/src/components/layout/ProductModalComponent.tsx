"use client";

import React from "react";
import Image from "next/image";

import { Product } from "@/models/product";
import { MainContainer } from "./MainContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductModalComponent.module.scss";
import { HeadingComponent } from "../textElements/HeadingComponent";
import {
  SubheadingComponent,
  SubheadingRole,
} from "../textElements/SubHeadingComponent";
import { ButtonRole, LargeButton } from "../buttons/LargeButtonComponent";

interface Props {
  product: Product;
  onAddToCart: () => void;
  isModalPresented: boolean;
  onClose: () => void;
}

/**
 * Modal component for displaying product details.
 *
 * The modal controls its own visibility with the `isModalPresented` prop.
 */
const ProductModalComponent: React.FC<Props> = ({
  product,
  onAddToCart,
  isModalPresented,
  onClose,
}) => {
  const presentedClass = isModalPresented ? "" : "d-none";

  return (
    <div
      className={`position-absolute top-0 start-0 ${presentedClass}`}
    >
      <MainContainer
        primaryView={
          <div
            className={`h-100 ${styles.full_page_bg}`}
            style={{
              backgroundImage: `url("${product
                .getImageFullSizeURL()
                ?.toString()}")` as `url(${string})`,
            }}
          ></div>
        }
        primaryViewClassName="p-0 h-100"
        sideView={
          <div className="h-100 d-flex justify-content-center align-items-center">
            <div>
              <HeadingComponent tag={product.getFormattedPrice()}>
                {product.getName()}
              </HeadingComponent>
              <p className={styles.description}>{product.getDescription()}</p>

              <div className={styles.product_code}>
                <hr />
                <SubheadingComponent role={SubheadingRole.Secondary}>
                  <span className={styles.lowercase}>Product code </span>
                  {product.getCode()}
                </SubheadingComponent>
              </div>

              <div className={styles.action_button}>
                <LargeButton role={ButtonRole.Primary} onClick={onAddToCart}>
                  Add to cart
                </LargeButton>
              </div>
            </div>
          </div>
        }
        hasCloseButton={true}
        onClose={onClose}
      />
    </div>
  );
};

export { ProductModalComponent };
