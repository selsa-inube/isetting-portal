import { IAppMenuCard } from "@design/cards/AppMenuCard";
import { AppMenu } from "@design/layout/AppMenu";
import { IRoute } from "@design/layout/AppMenu/types";
import { AppMenuGrid } from "@design/layout/AppMenuGrid";

interface IRulesOptions {
  appName: string;
  appDescription: string;
  appOptions: IAppMenuCard[];
  appRoute: IRoute[];
}

const RulesOptionsUI = ({
  appName,
  appDescription,
  appOptions,
  appRoute,
}: IRulesOptions) => (
  <AppMenu
    appName={appName}
    appDescription={appDescription}
    appRoute={appRoute}
  >
    <AppMenuGrid appOptions={appOptions} />
  </AppMenu>
);

export { RulesOptionsUI };
