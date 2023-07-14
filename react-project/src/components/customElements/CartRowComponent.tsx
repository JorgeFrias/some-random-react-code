"use client";

import React from "react";
import styles from "./CartRowComponent.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "@/models/product";

import { ProductDetailsPreviewComponent } from "./ProductDetailsPreviewComponent";
import { QuantityModifier } from "./QuantityModifierComponent";
import {
  PriceDisplayComponent,
  PriceDisplayTraitVariation,
} from "../textElements/PriceDisplayComponent";

interface Props {
  product: Product;
  total: string;
  quantity: number;
  onQuantityAdd: () => void;
  onQuantitySubtract: () => void;
  onQuantityChange: (newQuantity: number) => void;
  onShowDetails: (product: Product) => void;
}

/**
 * Defines a row in the cart.
 */
const CartRowComponent: React.FC<Props> = ({
  product,
  total,
  quantity,
  onQuantityAdd,
  onQuantitySubtract,
  onQuantityChange,
  onShowDetails
}) => {
  return (
    <div className={styles.cart_row_component}>
      <div className="row">
        <div className="col-6">
          <div className="h-100 d-flex align-items-center">
            <ProductDetailsPreviewComponent 
            product={product}
            onShowDetails={onShowDetails}
             />
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <QuantityModifier
              quantity={quantity}
              onQuantityAdd={onQuantityAdd}
              onQuantitySubtract={onQuantitySubtract}
              onQuantityChange={onQuantityChange}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <PriceDisplayComponent
              formattedPrice={product.getFormattedPrice()}
              variation={PriceDisplayTraitVariation.Medium}
            />
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <PriceDisplayComponent
              formattedPrice={total}
              variation={PriceDisplayTraitVariation.Medium}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartRowComponent };
