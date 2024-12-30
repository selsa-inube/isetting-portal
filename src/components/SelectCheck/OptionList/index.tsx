import { StyledOptionList } from "./styles";
interface OptionListProps {
  children: React.ReactNode;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

const OptionList = (props: OptionListProps) => {
  const { children, onClick } = props;

  return <StyledOptionList $onClick={onClick}>{children}</StyledOptionList>;
};
export type { OptionListProps };
export { OptionList };
