"use client";

import React, { useState, useEffect } from "react";
import { MainContainer } from "@/components/layout/MainContainerComponent";
import { HeadingComponent } from "@/components/textElements/HeadingComponent";

export default function Home() {
  return (
    <main>
      <MainContainer
        primaryView={
          <div>
            <HeadingComponent>Shirt</HeadingComponent>
            
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
