"use client";
import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

type ActiveContext = {
  activeSection: SectionName;
  setactiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClickTime: number;
  setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};

export const activeContext = createContext({} as ActiveContext);

function ActiveSectionContext({ children }: { children: React.ReactNode }) {
  const [activeSection, setactiveSection] = useState<SectionName>("Home");
  const [lastClickTime, setLastClickTime] = useState(0);

  return (
    <activeContext.Provider
      value={{
        setactiveSection,
        activeSection,
        lastClickTime,
        setLastClickTime,
      }}
    >
      {children}
    </activeContext.Provider>
  );
}

export default ActiveSectionContext;

export function useActiveContext() {
  return useContext(activeContext);
}
