import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";

interface IMenuHeadingProps {
  title: string;
}

const MenuHeading = ({ title }: IMenuHeadingProps) => (
  <Text
    type="title"
    size="small"
    appearance="gray"
    padding={`${basic.spacing.s16} ${basic.spacing.s16} ${basic.spacing.s8} ${basic.spacing.s16}`}
  >
    {title}
  </Text>
);

export { MenuHeading };
export type { IMenuHeadingProps };
