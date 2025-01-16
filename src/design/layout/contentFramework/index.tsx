import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { basic } from "@design/tokens";
import { PageTitle } from "@design/label/PageTitle";
import { StyledAppMenu } from "./styles";
import { IRoute } from "./types";

interface IAppMenu {
  appName: string;
  appDescription: string;
  appRoute: IRoute[];
  children: React.ReactNode;
}

const AppMenu = (props: IAppMenu) => {
  const { appName, appDescription, appRoute, children } = props;

  return (
    <StyledAppMenu>
      <Breadcrumbs crumbs={appRoute} />
      <Stack
        margin={`${basic.spacing.s24} ${basic.spacing.s0} ${basic.spacing.s48} ${basic.spacing.s0}`}
      >
        <PageTitle
          title={appName}
          description={appDescription}
          navigatePage="/"
        />
      </Stack>
      {children}
    </StyledAppMenu>
  );
};

export { AppMenu };
export type { IAppMenu };
