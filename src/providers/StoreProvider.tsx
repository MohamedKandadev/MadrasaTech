"use client"; // This is required for client-side components

import { Provider } from "react-redux";
import { store } from "../services";
import React from "react";

function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
