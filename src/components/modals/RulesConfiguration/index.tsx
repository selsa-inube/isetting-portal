import { MdClear } from "react-icons/md";
import { createPortal } from "react-dom";
import { Blanket } from "@inubekit/blanket";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { StyledContainer, StyledModal } from "./styles";

export interface RulesConfigurationProps {
    children: React.ReactNode;
    onCloseModal: () => void;
    portalId: string;
    title: string;
}

export const RulesConfiguration = (props: RulesConfigurationProps) => {
    const { children, portalId, onCloseModal, title } = props;
    const node = document.getElementById(portalId);
    console.log("portalId", portalId);
    console.log("node", node);
    if (!node) {
        throw new Error(
            "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
        );
    }
    return createPortal(
        <StyledContainer>
            <Blanket>
                <StyledModal>
                    <Stack direction="column" gap="20px">
                        <Stack direction="column" gap="16px">
                            <Stack direction="column" gap="8px">
                                <Stack
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        type="title"
                                        size="medium"
                                        appearance="dark"
                                    >
                                        {title}
                                    </Text>
                                    <MdClear
                                        size="24px"
                                        cursor="pointer"
                                        onClick={onCloseModal}
                                    />
                                </Stack>
                            </Stack>

                            {children}
                        </Stack>
                    </Stack>
                </StyledModal>
            </Blanket>
        </StyledContainer>,
        node
    );
};
