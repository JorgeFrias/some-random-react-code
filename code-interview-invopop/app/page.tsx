"use client";

import Image from "next/image";
import styles from "./page.module.css";

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
import { SubheadingComponent, SubheadingRole } from "@/components/textElements/SubHeadingComponent";

export default function Home() {
  const tmpOnClick = () => {};

  return (
    <main>
      <div>
        <HeadingComponent>Heading</HeadingComponent>

        <LargeButton role={ButtonRole.Primary} onClick={tmpOnClick}>
          Buy now
        </LargeButton>

        <HeadingComponent
          tag={"20.00 EUR"}
        >Heading</HeadingComponent>


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
      </div>
    </main>
  );
}
