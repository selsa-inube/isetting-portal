import { IActionItemBlock } from "@design/cards/actionItemBlock";
import { ContentFramework } from "@design/layout/contentFramework";
import { IRoute } from "@design/layout/contentFramework/types";
import { ContentFrameworkGrid } from "@design/layout/optionGrid";

interface IPositionsOptionsUI {
  appName: string;
  appDescription: string;
  appOptions: IActionItemBlock[];
  appRoute: IRoute[];
}

const PositionsOptionsUI = ({
  appName,
  appDescription,
  appOptions,
  appRoute,
}: IPositionsOptionsUI) => (
  <ContentFramework
    appName={appName}
    appDescription={appDescription}
    appRoute={appRoute}
  >
    <ContentFrameworkGrid appOptions={appOptions} />
  </ContentFramework>
);

export { PositionsOptionsUI };
