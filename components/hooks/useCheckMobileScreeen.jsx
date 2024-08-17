"use client";
import { useContext } from "react";
import { MyAppContext } from "../MyAppProvider";

function useCheckMobileScreen() {
  return useContext(MyAppContext);
}

export default useCheckMobileScreen;
