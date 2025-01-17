import { useTimeoutNavigation } from "@hooks/useTimeoutNavigation";
import { LoadingUI } from "./interface";

const Loading = () => {
  useTimeoutNavigation();

  return <LoadingUI />;
};

export { Loading };
