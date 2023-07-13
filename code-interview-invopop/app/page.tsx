"use client";

import React, { useState, useEffect } from "react";
import { MainContainer } from "@/components/layout/MainContainerComponent";
import { HeadingComponent } from "@/components/textElements/HeadingComponent";
import { CartRowComponent } from "@/components/customElements/CartRowComponent";
import { CartHeadingsComponent } from "@/components/customElements/CartHeadingsComponent";
import { CartSummaryComponent } from "@/components/layout/CartSummaryComponent";

import { Product } from "@/models/product";
import { products } from "../data/products";
import { discounts } from "../data/discounts";
import { Cart } from "@/models/cart";

const defaultCart = new Cart(products, discounts);

export default function Home() {
  const [cart, setCart] = useState(defaultCart);

  return (
    <main>
      <MainContainer
        primaryView={
          <div>
            <HeadingComponent>Shirt</HeadingComponent>
            <CartHeadingsComponent />
            <div>
              {cart.items.map((item) => (
                <CartRowComponent
                  key={item.product.getCode()}
                  product={item.product}
                  total={Product.formatPrice(
                    item.product.getPrice() * item.quantity,
                    cart.currency
                  )}
                  quantity={item.quantity}
                  onQuantityAdd={() => {}}
                  onQuantitySubtract={() => {}}
                  onQuantityChange={() => {}}
                />
              ))}
            </div>
          </div>
        }
        sideView={<CartSummaryComponent cart={cart} />}
        // hasCloseButton={true}
        // onClose={() => {}}
      />
    </main>
  );
}
