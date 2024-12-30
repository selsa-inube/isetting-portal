import { Label } from "@inubekit/label";
import { Stack } from "@inubekit/stack";

import { StyledOptionItemChecked } from "./styles";

interface IOptionItemCheckedProps {
  id: string;
  label: string;
  checked?: boolean;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionItemChecked = (props: IOptionItemCheckedProps) => {
  const { id, label, checked = false, onchange } = props;

  return (
    <StyledOptionItemChecked>
      <Stack>
        <input
          readOnly
          type="checkbox"
          id={id}
          name={id}
          onChange={onchange}
          checked={checked}
        />
        <Label htmlFor={id}>{label}</Label>
      </Stack>
    </StyledOptionItemChecked>
  );
};

export type { IOptionItemCheckedProps };
export { OptionItemChecked };
