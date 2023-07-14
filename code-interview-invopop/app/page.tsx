"use client";

import React, { useState, useEffect } from "react";
import { MainContainer } from "@/components/layout/MainContainerComponent";
import { HeadingComponent } from "@/components/textElements/HeadingComponent";
import { CartRowComponent } from "@/components/customElements/CartRowComponent";
import { CartHeadingsComponent } from "@/components/customElements/CartHeadingsComponent";
import { CartSummaryComponent } from "@/components/layout/CartSummaryComponent";

import cartSummaryStyles from "@/components/layout/CartSummaryComponent.module.scss";

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

// TODO: Move this view to a separate component, the page should only declare the use of this new component.
export default function Home() {
  const [cart, setCart] = useState(defaultCart);
  const [isModalPresented, setIsModalPresented] = useState(false);

  const handleQuantityAdd = (product: Product) => {
    const updatedCart = new Cart(
      [...cart.items],
      [...cart.applicableDiscounts]
    ); // Copy existing cart
    updatedCart.addItem(product); // Add item to cart
    setCart(updatedCart); // Update cart
  };

  const handleQuantitySubtract = (product: Product) => {
    const updatedCart = new Cart(
      [...cart.items],
      [...cart.applicableDiscounts]
    ); // Copy existing cart
    updatedCart.removeItem(product); // Remove item from cart
    setCart(updatedCart); // Update cart
  };

  const handleQuantityChange = (product: Product, quantity: number) => {
    const updatedCart = new Cart(
      [...cart.items],
      [...cart.applicableDiscounts]
    ); // Copy existing cart
    updatedCart.updateItemQuantity(product, quantity); // Update item in cart
    setCart(updatedCart); // Update cart
  };

  return (
    <main>
      {/* Main View - Cart*/}
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
                  onShowDetails={(product) => setIsModalPresented(true)}
                />
              ))}
            </div>
          </div>
        }
        sideView={<CartSummaryComponent cart={cart} />}
        sideViewClassName={cartSummaryStyles.cart_summary_background}
      />

      {/* Modal View - Product Detail */}
      {isModalPresented && (
        <MainContainer
          primaryView={<p>Helloooooo</p>}
          sideView={<p>Side view</p>}
          sideViewClassName={cartSummaryStyles.cart_summary_background}
          hasCloseButton={true}
          onClose={() => setIsModalPresented(false)}
        />
      )}
    </main>
  );
}
