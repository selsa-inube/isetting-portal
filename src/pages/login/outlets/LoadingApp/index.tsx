import { LoadingAppUI } from "./interface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoadingApp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingAppUI />;
};

export { LoadingApp };
