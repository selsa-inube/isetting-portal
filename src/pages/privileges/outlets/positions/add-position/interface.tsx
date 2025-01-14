import { FormikProps } from "formik";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Assisted, IAssistedStep } from "@inubekit/assisted";
import { PageTitle } from "@components/PageTitle";
import { InitializerForm } from "@components/forms/InitializerForm";
import { Button } from "@inubekit/button";
import { basic } from "@design/tokens";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { createPositionConfig } from "./config/addPosition.config";
import { IFormAddPosition, IGeneralInformationEntry } from "./types";

interface IAddPositionUI {
  currentStep: number;
  generalInformationRef: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  initialGeneralInformationValues: IGeneralInformationEntry;
  isCurrentFormValid: boolean;
  steps: IAssistedStep[];
  onNextStep: () => void;
  onPreviousStep: () => void;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  formValues: IFormAddPosition;
}

function AddStaffRolesUI(props: IAddPositionUI) {
  const {
    currentStep,
    formValues,
    generalInformationRef,
    initialGeneralInformationValues,
    isCurrentFormValid,
    steps,
    onNextStep,
    handlePreviousStep,
    handleNextStep,
    onPreviousStep,
    setIsCurrentFormValid,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 990px)");
  const disabled = !isCurrentFormValid;
  const roles = formValues.rolesStaff.values.map((role) => {
    const applicationStaff = formValues.applicationStaff.values.find(
      (app) => app.id != role.id
    );
    return {
      ...role,
      applicationStaff: applicationStaff?.value,
    };
  });

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <PageTitle
            title={createPositionConfig[0].title}
            description={createPositionConfig[0].description}
            navigatePage="/privileges/positions"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={() => {
              console.log("");
            }}
            disableNext={!isCurrentFormValid}
            controls={{
              goBackText: "Anterior",
              goNextText: "Siguiente",
              submitText: "Finalizar",
            }}
            size={smallScreen ? "small" : "large"}
          />
          <Stack direction="column">
            {currentStep === 1 && (
              <GeneralInformationForm
                ref={generalInformationRef}
                initialValues={initialGeneralInformationValues}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
            {currentStep === 2 && (
              <InitializerForm
                dataOptionsForms={roles}
                handleSubmit={() => {}}
                dataOptionsValueSelect={[]}
              />
            )}
          </Stack>
          <Stack gap="16px" justifyContent="flex-end">
            <Button
              onClick={handlePreviousStep}
              type="button"
              disabled={currentStep === steps[0].id}
              spacing="compact"
              variant="none"
              appearance="gray"
            >
              Atrás
            </Button>

            <Button
              onClick={handleNextStep}
              spacing="compact"
              disabled={disabled}
            >
              {currentStep === steps.length ? "Enviar" : "Siguiente"}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { AddStaffRolesUI };
