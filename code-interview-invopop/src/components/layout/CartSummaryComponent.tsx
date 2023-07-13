"use client";

import React, { useState, useEffect } from "react";
import styles from "./CartSummaryComponent.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product, ProductQuantity } from "@/models/product";
import { Cart } from "@/models/cart";

import {
  PriceDisplayComponent,
  PriceDisplayTraitVariation,
} from "../textElements/PriceDisplayComponent";
import { HeadingComponent } from "../textElements/HeadingComponent";
import {
  SubheadingComponent,
  SubheadingRole,
} from "../textElements/SubHeadingComponent";
import { LargeButton, ButtonRole } from "../buttons/LargeButtonComponent";

// MARK: CartSummaryRowComponent
// This component is used to display a row in the cart summary.
interface CartSummaryRowProps {
  leadingText: string;
  trailingView: React.ReactNode;
}

/**
 * Defines a row in the cart with a leading text and a trailing view on the same row.
 */
const CartSummaryRowComponent: React.FC<CartSummaryRowProps> = ({
  leadingText,
  trailingView,
}) => {
  // TODO: trailingView is always a PriceDisplayComponent, only changing the role, so we can make this more specific.
  return (
    <div>
      <div
        className={`d-flex justify-content-between ${styles.cartSummaryRows}`}
      >
        <div className="h-100 d-flex align-items-center">
          <p className={styles.leading_text}>{leadingText}</p>
        </div>
        <div
          className={`h-100 d-flex align-items-center justify-content-end ${styles.cartSummaryPrice}`}
        >
          {trailingView}
        </div>
      </div>
    </div>
  );
};

interface CartProps {
  cart: Cart;
}

/**
 * Defines a row in the cart.
 */
const CartSummaryComponent: React.FC<CartProps> = ({ cart }) => {
  // TODO: This is a bit too large, break it down into smaller components.
  return (
    <div className="d-flex flex-column h-100">
      <HeadingComponent>Order details</HeadingComponent>
      {/* Total items + Total Price */}

      <CartSummaryRowComponent
        leadingText="Total items"
        trailingView={
          <PriceDisplayComponent
            formattedPrice={Product.formatPrice(cart.total, cart.currency)}
            variation={PriceDisplayTraitVariation.Medium}
          />
        }
      />

      <hr />

      {/* Discounts */}
      <SubheadingComponent role={SubheadingRole.Primary}>
        Discounts
      </SubheadingComponent>
      <div>
        {cart.applicableDiscounts.map((discount) => {
          // Only list the discounts that apply to the cart.
          const applies = discount.discountApplies(cart.items);
          if (applies) {
            return (
              <CartSummaryRowComponent
                key={discount.name}
                leadingText={discount.name}
                trailingView={
                  <PriceDisplayComponent
                    formattedPrice={Product.formatPrice(
                      discount.computeDiscount(cart.items),
                      cart.currency
                    )}
                    variation={PriceDisplayTraitVariation.Medium}
                  />
                }
              />
            );
          }
          return null;
        })}
      </div>
      <hr />

      {/* Total */}
      <div className="w-100 h-100 d-flex align-items-end">
        <div className="w-100">
          <hr />
          <CartSummaryRowComponent
            key={"TOTAL"}
            leadingText={"Total"}
            trailingView={
              <PriceDisplayComponent
                formattedPrice={Product.formatPrice(
                  cart.totalWithDiscount,
                  cart.currency
                )}
                variation={PriceDisplayTraitVariation.Medium}
              />
            }
          />

          <LargeButton
            role={ButtonRole.Primary}
            onClick={() => {
              alert('As Samuel L.Jackson would say: "Pay motherfucker!"');
            }}
          >
            Checkout
          </LargeButton>
        </div>
      </div>
    </div>
  );
};

export { CartSummaryComponent };
