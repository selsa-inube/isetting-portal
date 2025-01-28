import { useTimeoutNavigation } from "@hooks/pages/useTimeoutNavigation";
import { LoadingUI } from "./interface";

const Loading = () => {
  useTimeoutNavigation();

  return <LoadingUI />;
};

export { Loading };
