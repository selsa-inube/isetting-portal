import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { StyledOption } from "./styles";

interface IMenuOption {
  label: string;
  icon?: React.ReactNode;
  handleClick: () => void;
}

function MenuOption(props: IMenuOption) {
  const { label, icon, handleClick } = props;

  return (
    <StyledOption onClick={handleClick} type="button">
      <Stack gap={basic.spacing.s12} alignItems="center">
        {icon}
        <Text size="small">{label}</Text>
      </Stack>
    </StyledOption>
  );
}

export { MenuOption };
export type { IMenuOption };
