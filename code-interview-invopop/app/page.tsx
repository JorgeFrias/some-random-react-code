'use client';

import Image from "next/image";
import styles from "./page.module.css";

// Tmp import
import {
  ButtonRole,
  LargeButton,
} from "../src/components/buttons/LargeButtonComponent";

export default function Home() {
  const tmpOnClick = () => {};

  return (
    <main>
      <div>
        <LargeButton role={ButtonRole.Primary} onClick={tmpOnClick}>
          Buy now
        </LargeButton>
      </div>
    </main>
  );
}