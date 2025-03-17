import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const local = JSON.parse(localStorage.getItem(key));
  const [name, setName] = useState(local || initialValue);
  localStorage.setItem(key, JSON.stringify(name));
  return [name, setName];
}

export default useLocalStorage;
