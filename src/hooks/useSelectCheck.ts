import { useTheme } from "styled-components";
import { inube } from "@inubekit/foundations";

const useInputColor = (disabled: boolean | undefined) => {
  const theme = useTheme();
  if (disabled) {
    return theme?.palette?.neutral?.N20 || inube.palette.neutral.N20;
  }
  return theme?.palette?.neutral?.N900 || inube.palette.neutral.N900;
};

export { useInputColor };
