import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [value, setValue] = useLocalStorage("isDark", initialValue)
    console.log("startingValue", value)
  const handleChanges = (value) => {
    console.log("changeValue", value)
    setValue(value)
    console.log("finalValue", value)
  }
  return [value, handleChanges]
}

export default useDarkMode;