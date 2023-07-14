"use client";

import React, { useState, useEffect } from "react";

// Tmp import
import {
  ButtonRole,
  LargeButton,
} from "../src/components/buttons/LargeButtonComponent";
import {
  InlineButton,
  ButtonRole as InlineButtonRole,
} from "../src/components/buttons/InlineButtonComponent";
import { CloseButton } from "../src/components/buttons/CloseButtonComponent";
import { HeadingComponent } from "@/components/textElements/HeadingComponent";
import {
  SubheadingComponent,
  SubheadingRole,
} from "@/components/textElements/SubHeadingComponent";
import {
  PriceDisplayComponent,
  PriceDisplayTraitVariation,
} from "@/components/textElements/PriceDisplayComponent";
import { Currency } from "@/models/currency";
import { Product } from "@/models/product";
import { ProductDetailsPreviewComponent } from "@/components/customElements/ProductDetailsPreviewComponent";
import { QuantityModifier } from "@/components/customElements/QuantityModifierComponent";
import { on } from "events";

export default function Home() {
  const tmpOnClick = () => {};
  const [quantity, setQuantity] = useState(0);

  const onQuantityAdd = () => {
    setQuantity(quantity + 1);
  };

  const onQuantitySubtract = () => {
     // Guard quantity is not negative
    if (quantity - 1 < 0) { return; }
    setQuantity(quantity - 1);
  };

  const onQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <main>
      <div style={{ backgroundColor: 'white'}}>
        <HeadingComponent>Heading</HeadingComponent>

        <LargeButton role={ButtonRole.Primary} onClick={tmpOnClick}>
          Buy now
        </LargeButton>

        <HeadingComponent tag={"20.00 EUR"}>Heading</HeadingComponent>

        <InlineButton role={InlineButtonRole.Primary} onClick={tmpOnClick}>
          Inline button
        </InlineButton>

        <InlineButton
          role={InlineButtonRole.Primary}
          onClick={tmpOnClick}
          backgroundOnHover={true}
        >
          Inline button
        </InlineButton>

        <InlineButton
          role={InlineButtonRole.Secondary}
          onClick={tmpOnClick}
          backgroundOnHover={true}
        >
          Inline button
        </InlineButton>

        <CloseButton onClick={tmpOnClick} backgroundOnHover={true} />

        <SubheadingComponent role={SubheadingRole.Primary}>
          Subheading Primary
        </SubheadingComponent>

        <SubheadingComponent role={SubheadingRole.Secondary}>
          Subheading Secondary
        </SubheadingComponent>

        <PriceDisplayComponent
          formattedPrice={"10 €"}
          variation={PriceDisplayTraitVariation.Large}
        />

        <PriceDisplayComponent
          formattedPrice={"19.99 €"}
          variation={PriceDisplayTraitVariation.Medium}
        />

        <div style={{ fontSize: "2rem" }}>
          <PriceDisplayComponent
            formattedPrice={"-19.99 €"}
            variation={PriceDisplayTraitVariation.Inherited}
          />
        </div>

        <ProductDetailsPreviewComponent
          product={
            new Product(
              "Some Shirt",
              "TEST_CODE",
              1000,
              Currency.EUR,
              "/img/shirt.png"
            )
          }
        />

        <QuantityModifier
          quantity={quantity}
          onQuantityAdd={onQuantityAdd}
          onQuantitySubtract={onQuantitySubtract}
          onQuantityChange={onQuantityChange}
        />
      </div>
    </main>
  );
}
