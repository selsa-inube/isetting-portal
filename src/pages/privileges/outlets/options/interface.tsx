import { IAppMenuCard } from "@design/cards/actionItemBlock";
import { AppMenu } from "@design/layout/contentFramework";
import { IRoute } from "@design/layout/contentFramework/types";
import { AppMenuGrid } from "@design/layout/optionGrid";

interface IPrivilegesOptionsUI {
  appName: string;
  appDescription: string;
  appOptions: IAppMenuCard[];
  appRoute: IRoute[];
}

const PrivilegesOptionsUI = ({
  appName,
  appDescription,
  appOptions,
  appRoute,
}: IPrivilegesOptionsUI) => (
  <AppMenu
    appName={appName}
    appDescription={appDescription}
    appRoute={appRoute}
  >
    <AppMenuGrid appOptions={appOptions} />
  </AppMenu>
);

export { PrivilegesOptionsUI };
