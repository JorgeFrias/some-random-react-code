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

const defaultCart = new Cart(
  products.map((product) => {
    return {
      product: product,
      quantity: 0,
    };
  }),
  discounts
);

export default function Home() {
  const [cart, setCart] = useState(defaultCart);

  const handleQuantityAdd = (product: Product) => {
    const updatedCart = new Cart(
      [ ...cart.items ],
      [ ...cart.applicableDiscounts ]
    );                            // Copy existing cart
    updatedCart.addItem(product); // Add item to cart
    setCart(updatedCart);         // Update cart
  };

  const handleQuantitySubtract = (product: Product) => {
    const updatedCart = new Cart(
      [ ...cart.items ],
        [ ...cart.applicableDiscounts ]
    );                               // Copy existing cart
    updatedCart.removeItem(product); // Remove item from cart
    setCart(updatedCart);            // Update cart
  };

  const handleQuantityChange = (product: Product, quantity: number) => {
    const updatedCart = new Cart(
      [ ...cart.items ],
      [ ...cart.applicableDiscounts ]
    );                               // Copy existing cart
    updatedCart.updateItemQuantity(product, quantity); // Update item in cart
    setCart(updatedCart);            // Update cart
  };

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
                  onQuantityAdd={() => handleQuantityAdd(item.product)}
                  onQuantitySubtract={() =>
                    handleQuantitySubtract(item.product)
                  }
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(item.product, quantity)
                  }
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
