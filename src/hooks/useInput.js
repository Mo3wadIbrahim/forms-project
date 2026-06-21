import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [entredValue, setEntredValue] = useState(defaultValue);
  const [isEdit, setIsEdit] = useState(false);
  const valueIsValid = validationFn(entredValue);
  function handleValuesChange(value) {
    setEntredValue(value);
    setIsEdit(false);
  }

  function handleEdit() {
    setIsEdit(true);
  }

  return {
    entredValue,
    isEdit,
    hasError: valueIsValid,
    handleValuesChange,
    handleEdit,
  };
}
