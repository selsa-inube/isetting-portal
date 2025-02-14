import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { Blanket } from "@inubekit/blanket";
import { Icon, IIconAppearance } from "@inubekit/icon";
import { Textarea } from "@inubekit/textarea";
import { Divider } from "@inubekit/divider";
import { StyledContainerButton, StyledModal, StyledTextarea } from "./styles";
import { FormikValues } from "formik";

interface IDecisionModalUI {
  actionText: string;
  appearance: IIconAppearance;
  comparisonData: boolean;
  description: string;
  formik: FormikValues;
  icon: React.JSX.Element;
  isLoading: boolean;
  justificationOfDecision: boolean;
  portalId: string;
  title: string;
  withIcon: boolean;
  onClick: () => void;
  onCloseModal: () => void;
  isMobile: boolean;
  isMobileTextarea: boolean;
  getFieldState: (
    formik: FormikValues,
    fieldName: string
  ) => "invalid" | "pending" | undefined;
  showCancelButton?: boolean;
}

const DecisionModalUI = (props: IDecisionModalUI) => {
  const {
    actionText,
    appearance,
    comparisonData,
    description,
    formik,
    isLoading,
    icon,
    justificationOfDecision,
    portalId,
    title,
    withIcon,
    onClick,
    onCloseModal,
    isMobile,
    isMobileTextarea,
    getFieldState,
    showCancelButton = true,
  } = props;

  const node = document.getElementById(portalId);
  if (!node) {
    throw new Error("The portal node is not defined.");
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap="s200">
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="headline" size="small" appearance="dark">
              {title}
            </Text>
            <StyledContainerButton>
              <Button
                spacing="compact"
                appearance="dark"
                variant="none"
                onClick={onCloseModal}
                iconAfter={<Icon appearance="dark" icon={<MdClear />} />}
              >
                Cerrar
              </Button>
            </StyledContainerButton>
          </Stack>
          <Divider />
        </Stack>

        {withIcon && (
          <Stack width="100%" alignItems="center" justifyContent="center">
            <Icon icon={icon} appearance={appearance} size="60px" />
          </Stack>
        )}

        <Text appearance="gray" type="body" size="medium">
          {description}
        </Text>

        {justificationOfDecision && (
          <StyledTextarea $smallScreen={isMobileTextarea}>
            <Textarea
              label=""
              name="justification"
              id="justification"
              placeholder="Indique la razón por la que desea realizar esta acción"
              value={formik.values.justification}
              message={formik.errors.justification}
              fullwidth
              maxLength={130}
              status={getFieldState(formik, "justification")}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </StyledTextarea>
        )}

        <Stack gap="s250" justifyContent="flex-end">
          {showCancelButton && (
            <Button
              spacing="wide"
              appearance="gray"
              variant="filled"
              onClick={onCloseModal}
            >
              Cancelar
            </Button>
          )}
          <Button
            spacing="wide"
            appearance={appearance}
            variant="filled"
            loading={isLoading}
            onClick={onClick}
            disabled={comparisonData || !formik.isValid}
          >
            {actionText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { DecisionModalUI };
export type { IDecisionModalUI };
