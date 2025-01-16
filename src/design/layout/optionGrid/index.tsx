import { Grid } from "@inubekit/grid";
import { useMediaQuery } from "@inubekit/hooks";
import { isMobile580 } from "@config/environment";
import { basic } from "@design/tokens";
import {
  ActionItemBlock,
  IActionItemBlock,
} from "@design/cards/actionItemBlock";

interface IContentFrameworkGrid {
  appOptions: IActionItemBlock[];
}

const ContentFrameworkGrid = (props: IContentFrameworkGrid) => {
  const { appOptions } = props;

  const screenMovil = useMediaQuery(isMobile580);

  return (
    <Grid
      templateColumns={
        screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
      }
      autoRows="auto"
      gap={basic.spacing.s24}
    >
      {appOptions.map((item) => (
        <ActionItemBlock
          id={item.id}
          key={item.id}
          icon={item.icon}
          label={item.label}
          description={item.description}
          url={item.url}
          domain={item.domain}
        />
      ))}
    </Grid>
  );
};

export { ContentFrameworkGrid };
export type { IContentFrameworkGrid };
