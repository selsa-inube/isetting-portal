import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Assisted } from "@inubekit/assisted";
import { PageTitle } from "@design/label/PageTitle";
import { InitializerForm } from "@design/forms/InitializerForm";
import { Button } from "@inubekit/button";
import { basic } from "@design/tokens";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { createPositionConfig } from "./config/addPosition.config";
import { IAddPositionUI } from "./types";

const AddStaffRolesUI = ({
  currentStep,
  generalInformationRef,
  initialGeneralInformationValues,
  steps,
  setSelectedToggle,
  onNextStep,
  handlePreviousStep,
  handleNextStep,
  onPreviousStep,
  setIsCurrentFormValid,
  smallScreen,
  roles,
  disabled,
}: IAddPositionUI) => {
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
            disableNext={disabled}
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
                dataOptionsValueSelect={[]}
                setSelectedToggle={setSelectedToggle}
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
};

export { AddStaffRolesUI };
