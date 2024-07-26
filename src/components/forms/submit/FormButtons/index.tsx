import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { inube } from "@inubekit/foundations";
import { ThemeProvider } from "styled-components";
import { basic } from "@design/tokens";

interface FormButtonsProps {
  handleReset: () => void;
  handleSubmit: () => void;
  cancelButtonText?: string;
  children?: React.ReactNode;
  with_disabledButtons?: boolean;
  with_disableReset?: boolean;
  loading?: boolean;
  submitButtonText?: string;
}

function FormButtons(props: FormButtonsProps) {
  const {
    handleSubmit,
    handleReset,
    cancelButtonText = "Cancelar",
    children,
    with_disabledButtons,
    with_disableReset,
    loading,
    submitButtonText = "Guardar",
  } = props;

  let disableCancel: boolean | undefined;

  if (with_disableReset === undefined || with_disableReset === null) {
    if (with_disabledButtons !== undefined && with_disabledButtons !== null) {
      disableCancel = with_disabledButtons;
    }
  } else {
    disableCancel = with_disableReset;
  }

  return (
    <Stack direction="column" gap={basic.spacing.s24}>
      <Stack direction="column">{children}</Stack>
      <Stack justifyContent="flex-end" gap={basic.spacing.s8}>
        <ThemeProvider theme={inube}>
          <Button
            appearance="gray"
            disabled={disableCancel}
            onClick={handleReset}
            type="reset"
          >
            {cancelButtonText}
          </Button>
          <Button
            appearance="primary"
            onClick={handleSubmit}
            loading={loading}
            disabled={with_disabledButtons}
            type="button"
          >
            {submitButtonText}
          </Button>
        </ThemeProvider>
      </Stack>
    </Stack>
  );
}

export { FormButtons };
export type { FormButtonsProps };
