"use client";

import React from "react";
import Image from "next/image";

import { Product } from "@/models/product";
import { MainContainer } from "./MainContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductModalComponent.module.scss";

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductModalComponent: React.FC<Props> = ({ product, onClose }) => {
  return (
    <div className="position-absolute top-0 start-0">
      <MainContainer
        primaryView={
          <div
            className={`h-100 ${styles.full_page_bg}`}
            style={{
              backgroundImage: `url("${product
                .getImageURL()
                ?.toString()}")` as `url(${string})`,
            }}
          ></div>
        }
        primaryViewClassName="p-0 h-100"
        sideView={<p>Side view</p>}
        hasCloseButton={true}
        onClose={onClose}
      />
    </div>
  );
};

export { ProductModalComponent };
