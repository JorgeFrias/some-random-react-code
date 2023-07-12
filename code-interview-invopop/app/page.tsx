'use client';

import Image from "next/image";
import styles from "./page.module.css";

// Tmp import
import {
  ButtonRole,
  LargeButton,
} from "../src/components/buttons/LargeButtonComponent";

import {
  InlineButton
} from "../src/components/buttons/InlineButtonComponent";

export default function Home() {
  const tmpOnClick = () => {};

  return (
    <main>
      <div>
        <LargeButton role={ButtonRole.Primary} onClick={tmpOnClick}>
          Buy now
        </LargeButton>

        <InlineButton onClick={tmpOnClick}>
          Inline button
        </InlineButton>

        <InlineButton onClick={tmpOnClick} backgroundOnHover={true}>
          Inline button
        </InlineButton>

      </div>
    </main>
  );
}