"use client";

import React, { useState, useEffect } from "react";
import { MainContainer } from "@/components/layout/MainContainerComponent";

export default function Home() {
  return (
    <main>
      <MainContainer primaryView={<div>Primary View</div>} sideView={<div>Side View</div>} />
    </main>
  );
}
