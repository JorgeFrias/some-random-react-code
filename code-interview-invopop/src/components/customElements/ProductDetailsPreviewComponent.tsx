"use client";

// - Libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";
// - Stylesheets
import styles from "./ProductDetailsPreviewComponent.module.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Product } from "@/models/product";
// - Components import
import {
  SubheadingComponent,
  SubheadingRole,
} from "../textElements/SubHeadingComponent";
import {
  InlineButton,
  ButtonRole as InlineButtonRole,
} from "../buttons/InlineButtonComponent";


interface Props {
  product: Product;
}

/**
 * Previews a product with a small picture, name and the product code.
 * @param product The product to preview.
 *
 * Both the image and the product name are clickable and will open the product page in a new tab. The product code is not clickable, as the user might find infuriating if they try to copy the reference.
 */
const ProductDetailsPreviewComponent: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.product_preview}>
      <div className="d-flex align-items-center">
        <div className="">
          <Link href={product.productURL()}>
            <Image
              src={product.getImageURL().toString()}
              width={72}
              height={72}
              alt={`Picture of the product: ${product.getName()}`}
            />
          </Link>
        </div>
        <div className={`d-inline ${styles.text_block}`}>
          <InlineButton
            role={InlineButtonRole.Primary}
            onClick={() => {
              window.open(product.productURL(), "_blank");
            }}
          >
            {product.getName()}
          </InlineButton>

          <SubheadingComponent role={SubheadingRole.Secondary}>
            <span className={styles.lowercase}>product code </span>
            {product.getCode()}
          </SubheadingComponent>
        </div>
      </div>
    </div>
  );
};

export { ProductDetailsPreviewComponent };
