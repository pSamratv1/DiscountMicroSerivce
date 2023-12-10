/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export const useBoxVisible = (initialIsVisible: boolean) => {
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(initialIsVisible);
  const domRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: any) => {
    if (domRef.current && !domRef.current.contains(e.target)) {
      setIsBoxVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { domRef, isBoxVisible, setIsBoxVisible };
};
