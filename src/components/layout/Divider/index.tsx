import { StyledDivider } from "./styles";

interface DividerProps {
  dashed?: boolean;
}

const Divider = (props: DividerProps) => {
  const { dashed } = props;

  return <StyledDivider $dashed={dashed} />;
};

export { Divider };
export type { DividerProps };
