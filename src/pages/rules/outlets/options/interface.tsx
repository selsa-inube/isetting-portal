import { AppMenu } from "@components/layout/AppMenu";
import { IRoute } from "@components/layout/AppMenu/types";
import { AppMenuGrid } from "@components/layout/AppMenuGrid";
import { AppMenuCardProps } from "@components/cards/AppMenuCard";

interface IRulesOptions {
  appName: string;
  appDescription: string;
  appOptions: AppMenuCardProps[];
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
