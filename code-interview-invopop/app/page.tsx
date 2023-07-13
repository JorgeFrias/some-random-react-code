"use client";

import React, { useState, useEffect } from "react";
import { MainContainer } from "@/components/layout/MainContainerComponent";
import { HeadingComponent } from "@/components/textElements/HeadingComponent";
import {CartRowComponent} from "@/components/customElements/CartRowComponent";

import { products } from "../data/products";

export default function Home() {
  return (
    <main>
      <MainContainer
        primaryView={
          <div>
            <HeadingComponent>Shirt</HeadingComponent>
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
          <div>
            <HeadingComponent>Shirt</HeadingComponent>
          </div>
        }
        // hasCloseButton={true}
        // onClose={() => {}}
      />
    </main>
  );
}
