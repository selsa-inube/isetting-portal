import { IActionItemBlock } from "@design/cards/actionItemBlock";
import { ContentFramework } from "@design/layout/contentFramework";
import { IRoute } from "@design/layout/contentFramework/types";
import { ContentFrameworkGrid } from "@design/layout/optionGrid";

interface IPrivilegesOptionsUI {
  appName: string;
  appDescription: string;
  appOptions: IActionItemBlock[];
  appRoute: IRoute[];
}

const PrivilegesOptionsUI = ({
  appName,
  appDescription,
  appOptions,
  appRoute,
}: IPrivilegesOptionsUI) => (
  <ContentFramework
    appName={appName}
    appDescription={appDescription}
    appRoute={appRoute}
  >
    <ContentFrameworkGrid appOptions={appOptions} />
  </ContentFramework>
);

export { PrivilegesOptionsUI };
