import Header from "@/components/Header/Header";
import React from "react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col gap-4 px-96 py-16">
      <Header />
      <h1 className="mt-4 text-4xl">🚧 This page is under construction</h1>
    </div>
  );
}
