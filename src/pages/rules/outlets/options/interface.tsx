import { IAppMenuCard } from "@design/cards/actionItemBlock";
import { AppMenu } from "@design/layout/contentFramework";
import { IRoute } from "@design/layout/contentFramework/types";
import { AppMenuGrid } from "@design/layout/optionGrid";

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
