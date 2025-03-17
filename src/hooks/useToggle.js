import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const toggleOpen = () => setIsOpen((prevState) => !prevState);

  return [isOpen, toggleOpen];
}

export default useToggle;
