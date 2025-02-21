import { Td } from "@inubekit/inubekit";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { ActionMobile } from "../actionMobile";
import { IAction } from "../types";

const ShowAction = (
  actionContent: IAction[],
  entry: IEntrys,
  mediaQuery: boolean
) => {
  return mediaQuery ? (
    <>
      <Td type="custom" align="center">
        <ActionMobile actions={actionContent} entry={entry} />
      </Td>
    </>
  ) : (
    <>
      {actionContent.map((action) => (
        <Td type="custom" align="center" key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </Td>
      ))}
    </>
  );
};

export { ShowAction };
