import { useState } from "react";

export function useInput(defaultValue) {
  const [entredValue, setEntredValue] = useState(defaultValue);
  const [isEdit, setIsEdit] = useState(false);

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
    handleValuesChange,
    handleEdit,
  };
}
