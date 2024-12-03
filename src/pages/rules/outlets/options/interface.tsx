import { AppMenu } from "@components/layout/AppMenu";
import { IRoute } from "@components/layout/AppMenu/types";
import { AppMenuGrid } from "@components/layout/AppMenuGrid";
import { AppMenuCardProps } from "@components/cards/AppMenuCard";
import { useEffect } from "react";
import { getBusinessUnitsPortalStaff } from "src/api/isaasQuery";

interface RulesOptionsUIProps {
  appName: string;
  appDescription: string;
  appOptions: AppMenuCardProps[];
  appRoute: IRoute[];
}

function RulesOptionsUI(props: RulesOptionsUIProps) {
  const { appName, appDescription, appOptions, appRoute } = props;
  useEffect(() => {
    (async () => {
      const result = await getBusinessUnitsPortalStaff("abc123", "");
      console.log(result);
    })();
  }, []);
  return (
    <AppMenu
      appName={appName}
      appDescription={appDescription}
      appRoute={appRoute}
    >
      <AppMenuGrid appOptions={appOptions} />
    </AppMenu>
  );
}

export { RulesOptionsUI };
