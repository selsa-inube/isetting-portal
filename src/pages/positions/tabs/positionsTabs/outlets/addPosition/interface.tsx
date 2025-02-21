import { Stack, Breadcrumbs, Assisted, Button } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { InitializerForm } from "@design/forms/InitializerForm";
import { basic } from "@design/tokens";
import { DecisionModal } from "@design/modals/decisionModal";
import { requestProcessMessage } from "@config/positionsTabs/requestProcessMessage";
import { requestStatusMessage } from "@config/positionsTabs/generics/requestStatusMessage";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { VerificationForm } from "@design/forms/verificationForm";
import { createPositionConfig } from "@config/positions/addPositions/assisted";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { FinishModal } from "@config/positions/verificationForm";
import { IAddPositionUI } from "./types";
import { GeneralInformationForm } from "../../forms/generalInformationForm";

const AddStaffRolesUI = ({
  currentStep,
  generalInformationRef,
  initialGeneralInformationValues,
  steps,
  setSelectedToggle,
  onNextStep,
  handlePreviousStep,
  handleNextStep,
  onToggleModal,
  onPreviousStep,
  setIsCurrentFormValid,
  setCurrentStep,
  smallScreen,
  roles,
  onFinishForm,
  showModal,
  savePositions,
  requestSteps,
  showRequestProcessModal,
  loading,
  onCloseRequestStatus,
  disabled,
  formValues,
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
            navigatePage="/positions/positions"
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
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
                dataOptionsValueSelect={formValues.applicationStaff.values}
                setSelectedToggle={setSelectedToggle}
              />
            )}

            {currentStep === 3 && (
              <VerificationForm
                updatedData={{
                  generalInformation: {
                    isValid: true,
                    values: initialGeneralInformationValues,
                  },
                  rolesStaff: {
                    isValid: true,
                    values: formValues.rolesStaff.values,
                  },
                }}
                requestSteps={[]}
                showModal={false}
                showRequestProcessModal={false}
                handleStepChange={(stepId) => setCurrentStep(stepId)}
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
              onClick={() =>
                currentStep === steps.length
                  ? onToggleModal()
                  : handleNextStep()
              }
              spacing="compact"
              disabled={disabled}
            >
              {currentStep === steps.length ? "Enviar" : "Siguiente"}
            </Button>
          </Stack>
        </Stack>
        {showModal && (
          <DecisionModal
            portalId="portal"
            title={FinishModal.title}
            description={FinishModal.description}
            actionText={FinishModal.actionText}
            onCloseModal={onToggleModal}
            onClick={onFinishForm}
          />
        )}
        {showRequestProcessModal && (
          <RequestProcessModal
            portalId="portal"
            saveData={savePositions}
            descriptionRequestProcess={requestProcessMessage}
            descriptionRequestStatus={requestStatusMessage}
            loading={loading}
            requestProcessSteps={requestSteps}
            appearance={ComponentAppearance.SUCCESS}
            onCloseRequestStatus={onCloseRequestStatus}
          />
        )}
      </Stack>
    </Stack>
  );
};

export { AddStaffRolesUI };
