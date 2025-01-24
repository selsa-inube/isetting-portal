import { UseFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { IEntry } from "@design/templates/AssignmentForm/types";
import { UseAddStaffRoles } from "@hooks/positions/useAddStaffRoles";
import { addStaffRolesSteps } from "./config/addPosition.config";
import { AddStaffRolesUI } from "./interface";

const AddPosition = () => {
  const { rolesStaff } = UseFetchRolesStaff();
  const {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    setSelectedToggle,
    smallScreen,
    roles,
    disabled,
  } = UseAddStaffRoles(rolesStaff);

  return (
    <AddStaffRolesUI
      currentStep={currentStep}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues.generalInformation.values}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={addStaffRolesSteps}
      handlePreviousStep={handlePreviousStep}
      handleNextStep={handleNextStep}
      formValues={formValues}
      selectedToggle={selectedToggle as IEntry[]}
      setSelectedToggle={setSelectedToggle}
      smallScreen={smallScreen}
      roles={roles}
      disabled={disabled}
    />
  );
};

export { AddPosition };
