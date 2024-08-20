import { Toggle } from "@inubekit/toggle";
import { EMessageType } from "@ptypes/messages.types";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { RenderMessage } from "@components/feedback/RenderMessage";

import { basic } from "@design/tokens";

import { activatePositionModal } from "./config/activatePosition.config";
import { IMessageState } from "../../types/forms.types";


interface IActivatePositionUI {
  active: boolean;
  showActivatePosition: boolean;
  id: string;
  message: IMessageState;
  showComplete: boolean;
  activateModalConfig: typeof activatePositionModal;
  handleToggleModal: () => void;
  handleActivatePosition: () => void;
  handleCloseSectionMessage: () => void;
}

export function ActivatePositionUI(props: IActivatePositionUI) {
  const {
    active,
    showActivatePosition: showActivatePositionModal,
    id,
    message,
    showComplete,
    activateModalConfig,
    handleToggleModal,
    handleActivatePosition,
    handleCloseSectionMessage,
  } = props;

  let messageType = EMessageType.DEACTIVATION;
  if (!active) {
    messageType = EMessageType.ACTIVATION;
  }

  const {
    title = "",
    description,
    textAction,
    appearance,
  } = activateModalConfig[messageType];

  return (
    <>
      <Toggle
        checked={active}
        onChange={handleToggleModal}
        id={id}
        margin={`${basic.spacing.s0}`}
        label={showComplete ? "Activar" : ""}
        padding={`${basic.spacing.s0} ${basic.spacing.s0} ${basic.spacing.s0} ${showComplete ? `{${basic.spacing.s24}}` : `{${basic.spacing.s16}}`}`}
      />

      {showActivatePositionModal && (
        <DecisionModal
          portalId="portal"  
          title={title}
          description={description(id)}
          actionText={textAction}
          appearance={appearance}
          closeModal={handleToggleModal}
          handleClick={handleActivatePosition}
        />
      )}
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleCloseSectionMessage}
        />
      )}
    </>
  );
}
