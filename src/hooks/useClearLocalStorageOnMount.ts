import { useEffect } from "react";

function useClearLocalStorageOnMount() {
  useEffect(() => {
    localStorage.clear();
  }, []);
}

export { useClearLocalStorageOnMount };
