import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [value, setValue] = useLocalStorage(false)
  return [value, useLocalStorage]
}

export default useDarkMode;