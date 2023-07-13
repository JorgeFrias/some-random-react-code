"use client";

import React, { useState, useEffect } from "react";
import { MainContainer } from "@/components/layout/MainContainerComponent";
import { HeadingComponent } from "@/components/textElements/HeadingComponent";
import {CartRowComponent} from "@/components/customElements/CartRowComponent";
import { CartHeadingsComponent } from "@/components/customElements/CartHeadingsComponent";
import { CartSummaryComponent } from "@/components/layout/CartSummaryComponent";

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
            <CartRowComponent 
            product={products[0]}
            total={"20 €"}
            quantity={1}
            onQuantityAdd={() => {}}
            onQuantitySubtract={() => {}}
            onQuantityChange={() => {}}
            />
          </div>
        }
        sideView={
          <CartSummaryComponent cart={cart} />
        }
        // hasCloseButton={true}
        // onClose={() => {}}
      />
    </main>
  );
}
