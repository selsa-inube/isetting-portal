import { Td, Th } from "@inubekit/table";
import { IAction, IActions } from "@pages/privileges/outlets/positions/types";

const ActionRenderer = () => {
  const ShowAction = (actionContent: IAction[], entry: IActions) => {
    return (
      <>
        {actionContent.map((action) => (
          <Td type="icon" key={`${entry.id}-${action.id}`}>
            {action.content(entry)}
          </Td>
        ))}
      </>
    );
  };

  const ShowActionTitle = (actionTitle: IAction[]) => {
    return actionTitle.map((action) => (
      <Th key={`action-${action.id}`}>{action.actionName}</Th>
    ));
  };

  return { ShowAction, ShowActionTitle };
};

export { ActionRenderer };
