'use client';

import Image from "next/image";
import styles from "./page.module.css";

// Tmp import
import {
  ButtonRole,
  PrimaryButton,
} from "../src/components/buttons/LargeButtonComponent";

export default function Home() {
  const tmpOnClick = () => {};

  return (
    <main>
      <div>
        <PrimaryButton role={ButtonRole.Primary} onClick={tmpOnClick}>
          Buy now
        </PrimaryButton>
      </div>
    </main>
  );
}